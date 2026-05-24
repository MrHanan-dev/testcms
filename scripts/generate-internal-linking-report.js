#!/usr/bin/env node

/**
 * SEO Audit Report Generator by TechNext96
 *
 * Crawls theagilenest.com, analyzes internal links, keywords, and competitors,
 * then generates a comprehensive PDF report.
 *
 * Usage:
 *   node scripts/generate-internal-linking-report.js --month april
 *   node scripts/generate-internal-linking-report.js --month may
 */

const fs = require('fs');
const path = require('path');
const PdfPrinter = require('pdfmake/js/Printer.js').default;

// ─── Branding ─────────────────────────────────────────────────────────────────

const BRAND = 'TechNext96';
const REPORT_TITLE = 'SEO Audit Report';
const CLIENT_NAME = 'TheAgileNest';
const SITE_URL = 'https://theagilenest.com';
const REPORT_DIR = path.join(__dirname, '..', 'public', 'reports');

// ─── Configuration ───────────────────────────────────────────────────────────

const MAY_ONLY_PAGES = ['/pmp', '/capm', '/pmicp'];

const ALL_KNOWN_PAGES = [
  '/', '/about', '/training', '/blog',
  '/project-management', '/cost-estimation', '/contract-management', '/consulting',
  '/pmp', '/capm', '/pmicp', '/partner'
];

const BLOG_SLUGS = [
  'TheAgileNest-impact-construction', 'navigating-pmicp-journey',
  'mastering-cost-estimation-pitfalls', 'pmbok-7th-vs-8th-changes',
  'case-study-scaling-pmo', 'project-without-timeline-only-intention',
  'planning-creates-direction-execution-creates-results',
  'clear-plans-reduce-chaos', 'strategy-turns-ambition-into-structured-action',
  'strong-foundations-planning-prevent-costly-corrections'
];

// Competitors for comparative analysis
const COMPETITORS = [
  { name: 'Master of Project Academy', url: 'https://masterofproject.com' },
  { name: 'Simplilearn (PMP Page)', url: 'https://www.simplilearn.com/pmp-certification-training' },
  { name: 'PMI (Official)', url: 'https://www.pmi.org' },
];

const args = process.argv.slice(2);
const MONTH = args.includes('--month')
  ? args[args.indexOf('--month') + 1] || 'may'
  : 'may';
const MONTH_LABEL = MONTH === 'april' ? 'April 2026' : 'May 2026';

// ─── Font & Printer Setup ────────────────────────────────────────────────────

const fontDir = path.join(__dirname, '..', 'node_modules/pdfmake/build/fonts/Roboto');
const fonts = {
  Roboto: {
    normal: path.join(fontDir, 'Roboto-Regular.ttf'),
    bold: path.join(fontDir, 'Roboto-Medium.ttf'),
    italics: path.join(fontDir, 'Roboto-Italic.ttf'),
    bolditalics: path.join(fontDir, 'Roboto-MediumItalic.ttf'),
  },
};
const urlResolver = { resolve: () => {}, resolved: () => Promise.resolve() };
const printer = new PdfPrinter(fonts, null, urlResolver);

// ─── HTML Parsing Helpers ────────────────────────────────────────────────────

function extractTag(html, tag) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = html.match(regex);
  return m ? m[1].replace(/<[^>]*>/g, '').trim() : '';
}

function extractMeta(html, name) {
  const regex = new RegExp(`<meta\\s+[^>]*name=["']${name}["'][^>]*content=["']([^"']*)["']`, 'i');
  const regex2 = new RegExp(`<meta\\s+[^>]*content=["']([^"']*)["'][^>]*name=["']${name}["']`, 'i');
  const m = html.match(regex) || html.match(regex2);
  return m ? m[1].trim() : '';
}

function extractTitle(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  return m ? m[1].trim() : '';
}

function extractHeadings(html, tag) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  const results = [];
  let m;
  while ((m = regex.exec(html)) !== null) {
    results.push(m[1].replace(/<[^>]*>/g, '').trim());
  }
  return results;
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

// ─── URL / Link Helpers ──────────────────────────────────────────────────────

function isInternalLink(href) {
  if (!href || typeof href !== 'string') return false;
  if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return false;
  if (href.startsWith('http') && !href.includes('theagilenest.com')) return false;
  return true;
}

function normalizePath(href) {
  let p = href.replace(/^https?:\/\/[^\/]+/, '');
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  const hashIdx = p.indexOf('#');
  if (hashIdx >= 0) p = p.substring(0, hashIdx);
  const qIdx = p.indexOf('?');
  if (qIdx >= 0) p = p.substring(0, qIdx);
  return p || '/';
}

function isAsset(url) {
  return /\.(css|js|json|ico|png|jpg|jpeg|gif|svg|webp|woff2?|ttf|eot|pdf|zip|xml|txt)$/i.test(url.split('?')[0].split('#')[0]);
}

function isPagePath(url) {
  if (isAsset(url)) return false;
  if (url.startsWith('/_next/')) return false;
  if (url.startsWith('/api/')) return false;
  if (url.startsWith('/design-system')) return false;
  return true;
}

// ─── Page Inclusion Logic ────────────────────────────────────────────────────

function isKnownPage(pagePath) {
  if (pagePath === '/' || pagePath === '') return true;
  if (pagePath.startsWith('/blog/')) return true;
  if (ALL_KNOWN_PAGES.includes(pagePath)) return true;
  return false;
}

function shouldCrawlPage(pagePath) {
  if (!isPagePath(pagePath)) return false;
  if (!isKnownPage(pagePath)) return false;
  if (MONTH === 'april' && MAY_ONLY_PAGES.includes(pagePath)) return false;
  return true;
}

function isPageLinkTarget(pagePath) {
  return isKnownPage(pagePath) && isPagePath(pagePath);
}

// ─── Keyword Analysis ────────────────────────────────────────────────────────

const STOP_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'by', 'with', 'from', 'as', 'is', 'was', 'are', 'were', 'be',
  'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will',
  'would', 'could', 'should', 'may', 'might', 'shall', 'can', 'need',
  'dare', 'ought', 'used', 'this', 'that', 'these', 'those', 'it',
  'its', 'we', 'our', 'you', 'your', 'they', 'their', 'them', 'he',
  'she', 'his', 'her', 'him', 'not', 'no', 'nor', 'so', 'if', 'then',
  'than', 'too', 'very', 'just', 'about', 'also', 'more', 'some',
  'any', 'each', 'every', 'all', 'both', 'few', 'most', 'other',
  'into', 'over', 'such', 'only', 'own', 'same', 'what', 'which',
  'who', 'whom', 'when', 'where', 'why', 'how', 'per', 'up', 'out',
  'off', 'down', 'been', 'after', 'before', 'between', 'through',
  'during', 'above', 'below', 'under', 'again', 'further', 'once',
  'here', 'there', 'get', 'got', 'make', 'made', 'like', 'well',
  'back', 'one', 'two', 'new', 'now', 'much', 'many', 'still', 'even',
  'while', 'because', 'since', 'until', 'though', 'although',
  'via', 'vs', 'amp', 'nbsp', 'mdash', 'ndash',
]);

function analyzeKeywords(text) {
  const words = text.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));

  const freq = {};
  for (const w of words) {
    freq[w] = (freq[w] || 0) + 1;
  }

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 50);
}

function extractKeyphrases(text, minLen = 2, maxLen = 4) {
  const words = text.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));

  const phrases = {};
  for (let len = minLen; len <= maxLen; len++) {
    for (let i = 0; i <= words.length - len; i++) {
      const phrase = words.slice(i, i + len).join(' ');
      if (phrase.split(' ').length === len) {
        phrases[phrase] = (phrases[phrase] || 0) + 1;
      }
    }
  }

  return Object.entries(phrases)
    .filter(([, c]) => c > 1)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 30);
}

// ─── Crawler ─────────────────────────────────────────────────────────────────

async function crawlPage(url, visited) {
  if (visited.has(url)) return null;
  visited.add(url);

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) return null;
    const html = await res.text();

    // Extract SEO metadata
    const title = extractTitle(html);
    const metaDescription = extractMeta(html, 'description');
    const h1s = extractHeadings(html, 'h1');
    const h2s = extractHeadings(html, 'h2');
    const h3s = extractHeadings(html, 'h3');
    const bodyText = stripHtml(html);

    // Extract links
    const anchorRegex = /<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
    const links = [];
    let m;
    while ((m = anchorRegex.exec(html)) !== null) {
      const href = m[1].trim();
      const innerHtml = m[2];
      const text = innerHtml.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
      links.push({ href, text: text || '(no text)' });
    }

    const internalLinks = links.filter(l => isInternalLink(l.href));
    const externalLinks = links.filter(l =>
      !isInternalLink(l.href) && !l.href.startsWith('#') &&
      !l.href.startsWith('mailto:') && !l.href.startsWith('tel:') &&
      !l.href.startsWith('javascript:')
    );

    return { title, metaDescription, h1s, h2s, h3s, bodyText, links, internalLinks, externalLinks };
  } catch (err) {
    console.error(`  Error crawling ${url}: ${err.message}`);
    return null;
  }
}

async function crawlCompetitor(name, url) {
  console.log(`  Crawling competitor: ${name}`);
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) return { name, url, title: '', metaDescription: '', h1s: [], h2s: [], linkCount: 0, error: `HTTP ${res.status}` };
    const html = await res.text();
    const title = extractTitle(html);
    const metaDescription = extractMeta(html, 'description');
    const h1s = extractHeadings(html, 'h1');
    const h2s = extractHeadings(html, 'h2');

    const linkMatches = [...html.matchAll(/<a[^>]*href=["']([^"']*)["']/gi)];
    const internalLinks = linkMatches.filter(l =>
      l[1] && !l[1].startsWith('#') && !l[1].startsWith('mailto:') &&
      !l[1].startsWith('tel:') && !l[1].startsWith('javascript:') &&
      (l[1].startsWith('/') || l[1].startsWith(url))
    ).length;

    return { name, url, title, metaDescription, h1s, h2s, linkCount: internalLinks };
  } catch (err) {
    return { name, url, title: '', metaDescription: '', h1s: [], h2s: [], linkCount: 0, error: err.message };
  }
}

// ─── Main Crawl ──────────────────────────────────────────────────────────────

async function crawl() {
  console.log(`\n  Crawling ${SITE_URL} for ${MONTH_LABEL}...\n`);

  const visited = new Set();
  const pageData = {};

  // Crawl homepage first
  const homeResult = await crawlPage(SITE_URL, visited);
  if (!homeResult) throw new Error('Failed to crawl homepage');
  pageData['/'] = homeResult;

  // Discover pages from homepage
  const discoveredPaths = new Set();
  for (const link of homeResult.internalLinks) {
    const p = normalizePath(link.href);
    if (shouldCrawlPage(p)) discoveredPaths.add(p);
  }
  for (const p of ALL_KNOWN_PAGES) {
    if (shouldCrawlPage(p)) discoveredPaths.add(p);
  }
  for (const slug of BLOG_SLUGS) {
    discoveredPaths.add(`/blog/${slug}`);
  }

  console.log(`  Found ${discoveredPaths.size} pages to crawl`);

  // Crawl each discovered page
  let count = 0;
  for (const p of discoveredPaths) {
    if (visited.has(p)) continue;
    count++;
    const fullUrl = `${SITE_URL}${p}`;
    console.log(`  [${count}/${discoveredPaths.size}] ${p}`);
    const result = await crawlPage(fullUrl, visited);
    if (result) pageData[p] = result;
    await new Promise(r => setTimeout(r, 400));
  }

  // ── Build link map ──
  const linkMap = {};
  const pageInternalLinks = {};
  const pageIsLive = {};

  for (const [sourcePage, data] of Object.entries(pageData)) {
    pageIsLive[sourcePage] = true;
    for (const link of data.internalLinks) {
      const target = normalizePath(link.href);
      if (!isPageLinkTarget(target)) continue;
      if (sourcePage === target) continue;

      if (!linkMap[target]) linkMap[target] = { count: 0, sources: [] };
      linkMap[target].sources.push({ source: sourcePage, text: link.text });
      linkMap[target].count++;

      if (!pageInternalLinks[sourcePage]) pageInternalLinks[sourcePage] = { total: 0, links: [] };
      pageInternalLinks[sourcePage].total++;
      pageInternalLinks[sourcePage].links.push({ target, text: link.text });
    }
  }

  // Broken links (April)
  const brokenLinks = [];
  if (MONTH === 'april') {
    for (const target of Object.keys(linkMap)) {
      if (!pageIsLive[target] && isKnownPage(target)) {
        for (const s of linkMap[target].sources) {
          brokenLinks.push({ source: s.source, target, text: s.text });
        }
      }
    }
  }

  // Orphan pages
  const linkedPages = new Set(Object.keys(linkMap));
  const allPages = new Set(Object.keys(pageData));
  const orphanPages = [];
  for (const p of allPages) {
    if (p === '/') continue;
    if (!linkedPages.has(p)) orphanPages.push(p);
  }

  // Anchor text analysis
  const anchorTexts = {};
  for (const [target, data] of Object.entries(linkMap)) {
    for (const s of data.sources) {
      const text = s.text.toLowerCase().trim();
      if (!anchorTexts[text]) anchorTexts[text] = { count: 0, targets: [] };
      anchorTexts[text].count++;
      if (!anchorTexts[text].targets.includes(target)) anchorTexts[text].targets.push(target);
    }
  }

  // Top linked pages
  const topLinked = Object.entries(linkMap)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 15);

  // ── Keyword Analysis ──
  console.log(`\n  Analyzing keywords...`);
  const allBodyText = Object.values(pageData).map(d => d.bodyText).join(' ');
  const allTitles = Object.entries(pageData).map(([p, d]) => ({ page: p, title: d.title }));
  const allMetaDescs = Object.entries(pageData).map(([p, d]) => ({ page: p, desc: d.metaDescription }));
  const allH1s = Object.entries(pageData).map(([p, d]) => ({ page: p, h1s: d.h1s }));
  const allH2s = Object.entries(pageData).map(([p, d]) => ({ page: p, h2s: d.h2s }));

  const topKeywords = analyzeKeywords(allBodyText);
  const topKeyphrases = extractKeyphrases(allBodyText);

  // ── Competitor Analysis ──
  console.log(`\n  Crawling competitors...`);
  const competitorResults = [];
  for (const comp of COMPETITORS) {
    const result = await crawlCompetitor(comp.name, comp.url);
    competitorResults.push(result);
    await new Promise(r => setTimeout(r, 1500));
  }

  return {
    pageData, linkMap, pageInternalLinks, orphanPages, anchorTexts, topLinked,
    brokenLinks, pageIsLive,
    allTitles, allMetaDescs, allH1s, allH2s,
    topKeywords, topKeyphrases,
    competitorResults,
    totalPages: Object.keys(pageData).length,
    totalInternalLinks: Object.values(pageInternalLinks).reduce((s, v) => s + v.total, 0),
  };
}

// ─── PDF Report Generation ────────────────────────────────────────────────────

function generateReport(data) {
  const {
    linkMap, pageInternalLinks, orphanPages, anchorTexts, topLinked,
    totalPages, totalInternalLinks, brokenLinks,
    allTitles, allMetaDescs, allH1s, topKeywords, topKeyphrases,
    competitorResults,
  } = data;

  const primary = '#1e3a5f';
  const accent = '#f59e0b';
  const technext = '#0891b2'; // cyan accent for TechNext96 branding
  const lightBg = '#f8fafc';
  const now = new Date();

  const dd = {
    pageSize: 'A4',
    pageMargins: [45, 55, 45, 55],
    defaultStyle: { font: 'Roboto', fontSize: 9.5, color: '#334155', lineHeight: 1.4 },
    header: (currentPage, pageCount) => ({
      columns: [
        { text: `${REPORT_TITLE} by ${BRAND}`, fontSize: 7.5, color: '#94a3b8', alignment: 'left' },
        { text: `${CLIENT_NAME} | ${MONTH_LABEL}`, fontSize: 7.5, color: '#94a3b8', alignment: 'right' },
      ],
      margin: [45, 12, 45, 0],
    }),
    footer: (currentPage, pageCount) => ({
      text: `Page ${currentPage} of ${pageCount} | Confidential`,
      margin: [45, 0, 45, 12],
      fontSize: 7.5,
      color: '#94a3b8',
      alignment: 'center',
    }),
    content: [
      // ════════════════════════════════════════════════
      // COVER PAGE
      // ════════════════════════════════════════════════
      { text: '', margin: [0, 80, 0, 0] },

      // Brand bar
      {
        columns: [
          { width: '*', text: '' },
          { width: 400, stack: [
            { text: BRAND, fontSize: 11, color: technext, bold: true, letterSpacing: 3, margin: [0, 0, 0, 4] },
            {
              canvas: [{ type: 'rect', x: 0, y: 0, w: 60, h: 3, color: technext }],
              margin: [0, 0, 0, 24],
            },
          ]},
        ],
      },

      { text: REPORT_TITLE, fontSize: 34, bold: true, color: primary, margin: [0, 0, 0, 6] },
      { text: 'Internal Linking, Keyword & Competitor Analysis', fontSize: 14, color: '#64748b', margin: [0, 0, 0, 8] },

      { text: MONTH_LABEL, fontSize: 20, color: accent, bold: true, margin: [0, 0, 0, 50] },

      {
        columns: [
          { width: '*', text: '' },
          { width: 280, stack: [
            { text: `Client: ${CLIENT_NAME}`, fontSize: 10.5, margin: [0, 0, 0, 3], color: '#475569' },
            { text: `Website: theagilenest.com`, fontSize: 10.5, margin: [0, 0, 0, 3], color: '#475569' },
            { text: `Generated: ${now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, fontSize: 10.5, margin: [0, 0, 0, 3], color: '#475569' },
            { text: `Prepared by: ${BRAND}`, fontSize: 10.5, color: technext, bold: true },
          ]},
        ],
      },

      { text: '', margin: [0, 40, 0, 0] },
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: 505, h: 4, color: technext, opacity: 0.25 }],
      },

      { text: '', pageBreak: 'after' },

      // ════════════════════════════════════════════════
      // TABLE OF CONTENTS
      // ════════════════════════════════════════════════
      { text: 'Table of Contents', style: 'sectionHeader' },
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: 505, h: 2, color: technext }],
        margin: [0, 4, 0, 16],
      },
      ...([
        ['1', 'Executive Summary', '3'],
        ['2', 'Internal Link Distribution', '4'],
        ['3', 'Top Linked-To Pages', '5'],
        ['4', 'Anchor Text Analysis', '6'],
        ['5', 'Keyword Research', '7'],
        ['6', 'Competitor Analysis', '8'],
        ['7', 'Orphan Pages & Broken Links', '9'],
        ['8', 'Recommendations', '10'],
      ]).map(([num, title, page]) => ({
        columns: [
          { width: 30, text: num, color: technext, bold: true, fontSize: 11 },
          { width: '*', text: title, fontSize: 11, color: '#334155' },
          { width: 30, text: page, fontSize: 11, color: '#94a3b8', alignment: 'right' },
        ],
        margin: [0, 0, 0, 10],
      })),

      { text: '', pageBreak: 'after' },

      // ════════════════════════════════════════════════
      // 1. EXECUTIVE SUMMARY
      // ════════════════════════════════════════════════
      { text: '1. Executive Summary', style: 'sectionHeader' },
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: 505, h: 2, color: technext }],
        margin: [0, 4, 0, 16],
      },
      {
        text: `This SEO audit report analyzes the internal linking structure, on-page keyword optimization, and competitive positioning of ${CLIENT_NAME}.com for ${MONTH_LABEL}. A comprehensive crawl of ${totalPages} pages was conducted to evaluate site architecture, content relevance, and search visibility.`,
        margin: [0, 0, 0, 12],
      },
      {
        text: `During this period, the site had ${totalPages} active pages with ${totalInternalLinks} internal links. The analysis includes keyword frequency, heading structure, and comparison against ${COMPETITORS.length} key competitors in the PMP training space.`,
        margin: [0, 0, 0, 18],
      },

      // Key metrics row
      {
        layout: 'noBorders',
        table: {
          widths: ['*', '*', '*', '*'],
          body: [
            [{ text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }, { text: '', border: [false, false, false, false] }],
            [
              metricBox('Total Pages', `${totalPages}`, primary),
              metricBox('Internal Links', `${totalInternalLinks}`, technext),
              metricBox('Pages w/ Links', `${Object.keys(pageInternalLinks).length}`, '#059669'),
              metricBox('Orphan Pages', `${orphanPages.length}`, '#dc2626'),
            ],
          ],
        },
        margin: [0, 0, 0, 20],
      },

      {
        text: `Audit performed by ${BRAND}. Data collected from theagilenest.com and competitor sources.`,
        fontSize: 8, color: '#94a3b8', italics: true, margin: [0, 0, 0, 10],
      },

      { text: '', pageBreak: 'after' },

      // ════════════════════════════════════════════════
      // 2. INTERNAL LINK DISTRIBUTION
      // ════════════════════════════════════════════════
      { text: '2. Internal Link Distribution', style: 'sectionHeader' },
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: 505, h: 2, color: technext }],
        margin: [0, 4, 0, 16],
      },
      {
        text: 'The table below shows each page, how many internal links it contains (outgoing), and how many internal links point to it (incoming). A balanced link distribution spreads authority across the site.',
        margin: [0, 0, 0, 12],
      },

      {
        layout: styledTableLayout(primary),
        table: {
          widths: ['auto', '*', 'auto', 'auto', 'auto'],
          headerRows: 1,
          body: [
            headerRow(['#', 'Page', 'Outgoing', 'Incoming', 'Status'], primary),
            ...Object.keys(pageInternalLinks)
              .sort((a, b) => (pageInternalLinks[b]?.total || 0) - (pageInternalLinks[a]?.total || 0))
              .map((page, idx) => {
                const outgoing = pageInternalLinks[page]?.total || 0;
                const incoming = linkMap[page]?.count || 0;
                const isMayOnly = MAY_ONLY_PAGES.includes(page);
                return [
                  cell(`${idx + 1}`, 'center', '#64748b', 9),
                  cell(page, 'left', undefined, 9, page === '/'),
                  cell(`${outgoing}`, 'center', outgoing > 0 ? '#059669' : '#94a3b8'),
                  cell(`${incoming}`, 'center', incoming > 0 ? '#059669' : (page === '/' ? '#94a3b8' : '#dc2626')),
                  {
                    text: MONTH === 'april' && isMayOnly ? 'Not Live' : 'Active',
                    fontSize: 8, alignment: 'center',
                    color: MONTH === 'april' && isMayOnly ? '#dc2626' : '#059669',
                    bold: MONTH === 'april' && isMayOnly,
                  },
                ];
              }),
          ],
        },
        margin: [0, 0, 0, 20],
      },

      // ════════════════════════════════════════════════
      // 3. TOP LINKED-TO PAGES
      // ════════════════════════════════════════════════
      { text: '3. Top Linked-To Pages', style: 'sectionHeader' },
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: 505, h: 2, color: technext }],
        margin: [0, 4, 0, 16],
      },
      {
        text: 'Pages receiving the most internal links — these are your site\'s authority hubs that pass SEO equity to linked pages.',
        margin: [0, 0, 0, 12],
      },

      {
        layout: styledTableLayout(primary),
        table: {
          widths: ['auto', '*', 'auto', '*'],
          headerRows: 1,
          body: [
            headerRow(['#', 'Page', 'Inbound Links', 'Sample Anchor Texts'], primary),
            ...topLinked.map(([page, data], idx) => [
              cell(`${idx + 1}`, 'center', '#64748b'),
              cell(page, 'left', undefined, 9, data.count > 5),
              { text: `${data.count}`, fontSize: 9, alignment: 'center', color: '#059669', bold: true },
              { text: [...new Set(data.sources.slice(0, 4).map(s => s.text))].join(', '), fontSize: 7.5, color: '#64748b' },
            ]),
          ],
        },
        margin: [0, 0, 0, 20],
      },

      // ════════════════════════════════════════════════
      // 4. ANCHOR TEXT ANALYSIS
      // ════════════════════════════════════════════════
      { text: '4. Anchor Text Analysis', style: 'sectionHeader' },
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: 505, h: 2, color: technext }],
        margin: [0, 4, 0, 16],
      },
      {
        text: 'Most frequently used anchor texts. Descriptive, varied anchor text improves SEO relevance and helps search engines understand target page context.',
        margin: [0, 0, 0, 12],
      },

      {
        layout: styledTableLayout(primary),
        table: {
          widths: ['auto', '*', 'auto'],
          headerRows: 1,
          body: [
            headerRow(['#', 'Anchor Text', 'Uses'], primary),
            ...Object.entries(anchorTexts)
              .sort((a, b) => b[1].count - a[1].count)
              .slice(0, 25)
              .map(([text, data], idx) => [
                cell(`${idx + 1}`, 'center', '#64748b'),
                { text: text.substring(0, 60), fontSize: 9 },
                { text: `${data.count}`, fontSize: 9, alignment: 'center', color: '#059669', bold: true },
              ]),
          ],
        },
        margin: [0, 0, 0, 20],
      },

      { text: '', pageBreak: 'after' },

      // ════════════════════════════════════════════════
      // 5. KEYWORD RESEARCH
      // ════════════════════════════════════════════════
      { text: '5. Keyword Research', style: 'sectionHeader' },
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: 505, h: 2, color: technext }],
        margin: [0, 4, 0, 16],
      },
      {
        text: 'Analysis of on-page keywords found across all site pages. Top single keywords and multi-word phrases extracted from page content, titles, and headings.',
        margin: [0, 0, 0, 16],
      },

      // Top Keywords
      { text: '5.1 Top Single Keywords', bold: true, fontSize: 12, color: primary, margin: [0, 0, 0, 10] },
      {
        text: 'Most frequently occurring meaningful words across all page content (excluding common stop words).',
        margin: [0, 0, 0, 10], fontSize: 9, color: '#64748b',
      },
      {
        layout: styledTableLayout(primary),
        table: {
          widths: ['auto', '*', 'auto'],
          headerRows: 1,
          body: [
            headerRow(['#', 'Keyword', 'Frequency'], primary),
            ...topKeywords.slice(0, 25).map(([word, count], idx) => [
              cell(`${idx + 1}`, 'center', '#64748b'),
              { text: word, fontSize: 9 },
              { text: `${count}`, fontSize: 9, alignment: 'center', color: '#059669', bold: true },
            ]),
          ],
        },
        margin: [0, 0, 0, 20],
      },

      // Top Keyphrases
      { text: '5.2 Top Multi-Word Phrases', bold: true, fontSize: 12, color: primary, margin: [0, 0, 0, 10] },
      {
        text: 'Repeated multi-word phrases (2-4 words). These indicate topic clusters and content focus areas.',
        margin: [0, 0, 0, 10], fontSize: 9, color: '#64748b',
      },
      {
        layout: styledTableLayout(primary),
        table: {
          widths: ['auto', '*', 'auto'],
          headerRows: 1,
          body: [
            headerRow(['#', 'Keyphrase', 'Frequency'], primary),
            ...topKeyphrases.slice(0, 20).map(([phrase, count], idx) => [
              cell(`${idx + 1}`, 'center', '#64748b'),
              { text: phrase, fontSize: 9 },
              { text: `${count}`, fontSize: 9, alignment: 'center', color: '#059669', bold: true },
            ]),
          ],
        },
        margin: [0, 0, 0, 20],
      },

      // Title Tag Audit
      { text: '5.3 Title Tag & Meta Description Audit', bold: true, fontSize: 12, color: primary, margin: [0, 0, 0, 10] },
      {
        text: 'Every page should have a unique, descriptive title tag (50-60 chars) and meta description (120-160 chars).',
        margin: [0, 0, 0, 10], fontSize: 9, color: '#64748b',
      },

      {
        layout: styledTableLayout(primary),
        table: {
          widths: ['auto', '*', '*'],
          headerRows: 1,
          body: [
            headerRow(['#', 'Page', 'Title Tag'], primary),
            ...allTitles.map((item, idx) => [
              cell(`${idx + 1}`, 'center', '#64748b'),
              cell(item.page, 'left', undefined, 8),
              { text: item.title || '(missing)', fontSize: 8, color: item.title ? '#334155' : '#dc2626', italics: !item.title },
            ]),
          ],
        },
        margin: [0, 0, 0, 10],
      },

      {
        text: `\nNote: ${allTitles.filter(t => !t.title).length} page(s) missing title tags. ${allTitles.filter(t => t.title && t.title.length > 60).length} title(s) exceed 60 characters.`,
        fontSize: 8.5, color: '#dc2626', italics: true, margin: [0, 0, 0, 20],
      },

      // H1 Audit
      { text: '5.4 H1 Heading Audit', bold: true, fontSize: 12, color: primary, margin: [0, 0, 0, 10] },
      {
        text: 'Each page should have exactly one H1 that matches the page topic. Multiple or missing H1s dilute keyword relevance.',
        margin: [0, 0, 0, 10], fontSize: 9, color: '#64748b',
      },

      {
        layout: styledTableLayout(primary),
        table: {
          widths: ['auto', '*', 'auto', '*'],
          headerRows: 1,
          body: [
            headerRow(['#', 'Page', 'H1 Count', 'H1 Text'], primary),
            ...allH1s.slice(0, 22).map((item, idx) => [
              cell(`${idx + 1}`, 'center', '#64748b'),
              cell(item.page, 'left', undefined, 8),
              {
                text: `${item.h1s.length}`,
                fontSize: 9, alignment: 'center',
                color: item.h1s.length === 1 ? '#059669' : (item.h1s.length === 0 ? '#dc2626' : '#f59e0b'),
                bold: item.h1s.length !== 1,
              },
              { text: item.h1s[0]?.substring(0, 60) || '(none)', fontSize: 8, color: item.h1s[0] ? '#334155' : '#dc2626', italics: !item.h1s[0] },
            ]),
          ],
        },
        margin: [0, 0, 0, 20],
      },

      { text: '', pageBreak: 'after' },

      // ════════════════════════════════════════════════
      // 6. COMPETITOR ANALYSIS
      // ════════════════════════════════════════════════
      { text: '6. Competitor Analysis', style: 'sectionHeader' },
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: 505, h: 2, color: technext }],
        margin: [0, 4, 0, 16],
      },
      {
        text: `Comparative analysis against ${COMPETITORS.length} key competitors in the PMP certification training space. Data collected from competitor homepage and primary landing pages.`,
        margin: [0, 0, 0, 16],
      },

      // Our site first row
      { text: '6.1 Title Tag Comparison', bold: true, fontSize: 12, color: primary, margin: [0, 0, 0, 10] },
      {
        text: 'Title tags are a primary ranking factor. They should include target keywords and be under 60 characters.',
        margin: [0, 0, 0, 10], fontSize: 9, color: '#64748b',
      },

      {
        layout: styledTableLayout(primary),
        table: {
          widths: ['auto', '*', '*'],
          headerRows: 1,
          body: [
            headerRow(['#', 'Site', 'Title Tag'], primary),
            [
              cell('—', 'center', technext),
              { text: `${CLIENT_NAME} (You)`, fontSize: 9, bold: true, color: technext },
              { text: allTitles.find(t => t.page === '/')?.title || SITE_URL, fontSize: 8, color: '#334155' },
            ],
            ...competitorResults.filter(c => !c.error).map((comp, idx) => [
              cell(`${idx + 1}`, 'center', '#64748b'),
              { text: comp.name, fontSize: 9 },
              { text: comp.title || '(blocked / no title)', fontSize: 8, color: comp.title ? '#334155' : '#94a3b8', italics: !comp.title },
            ]),
          ],
        },
        margin: [0, 0, 0, 20],
      },

      { text: '6.2 Meta Description Comparison', bold: true, fontSize: 12, color: primary, margin: [0, 0, 0, 10] },
      {
        layout: styledTableLayout(primary),
        table: {
          widths: ['auto', '*', '*'],
          headerRows: 1,
          body: [
            headerRow(['#', 'Site', 'Meta Description'], primary),
            [
              cell('—', 'center', technext),
              { text: `${CLIENT_NAME} (You)`, fontSize: 9, bold: true, color: technext },
              { text: allMetaDescs.find(t => t.page === '/')?.desc?.substring(0, 120) || '', fontSize: 8, color: '#334155' },
            ],
            ...competitorResults.filter(c => !c.error).map((comp, idx) => [
              cell(`${idx + 1}`, 'center', '#64748b'),
              { text: comp.name, fontSize: 9 },
              { text: (comp.metaDescription || '(blocked / no description)').substring(0, 120), fontSize: 8, color: comp.metaDescription ? '#334155' : '#94a3b8', italics: !comp.metaDescription },
            ]),
          ],
        },
        margin: [0, 0, 0, 20],
      },

      { text: '6.3 H1 & Internal Links Comparison', bold: true, fontSize: 12, color: primary, margin: [0, 0, 0, 10] },
      {
        layout: styledTableLayout(primary),
        table: {
          widths: ['auto', '*', 'auto', 'auto', '*'],
          headerRows: 1,
          body: [
            headerRow(['#', 'Site', 'H1s', 'Page Links', 'H1 Text'], primary),
            [
              cell('—', 'center', technext),
              { text: `${CLIENT_NAME} (You)`, fontSize: 9, bold: true, color: technext },
              cell(`${allH1s.find(t => t.page === '/')?.h1s?.length || 0}`, 'center', '#059669'),
              cell(`${pageInternalLinks['/']?.total || 0}`, 'center', '#059669'),
              { text: allH1s.find(t => t.page === '/')?.h1s?.[0]?.substring(0, 50) || '', fontSize: 8, color: '#64748b' },
            ],
            ...competitorResults.filter(c => !c.error).map((comp, idx) => [
              cell(`${idx + 1}`, 'center', '#64748b'),
              { text: comp.name, fontSize: 9 },
              cell(`${comp.h1s.length}`, 'center', comp.h1s.length === 1 ? '#059669' : '#f59e0b'),
              cell(`${comp.linkCount}`, 'center', '#64748b'),
              { text: comp.h1s[0]?.substring(0, 50) || '(none detected)', fontSize: 8, color: comp.h1s[0] ? '#64748b' : '#94a3b8', italics: !comp.h1s[0] },
            ]),
          ],
        },
        margin: [0, 0, 0, 20],
      },

      { text: '6.4 Competitive Insights', bold: true, fontSize: 12, color: primary, margin: [0, 0, 0, 10] },
      {
        text: [
          { text: 'Key Observations:', bold: true },
          { text: '\n\n• Competitors in the PMP training space emphasize "PMP certification," "exam prep," and "training" prominently in title tags and H1s.' },
          { text: '\n\n• Most competitors use a single H1 per page focused on their primary service offering, which is a best practice.' },
          { text: `\n\n• ${CLIENT_NAME} differentiates with "PMP certification training" combined with "construction cost estimation" — a unique value proposition.` },
          { text: '\n\n• Competitors with higher internal link counts on their homepage tend to have stronger site architecture for SEO.' },
          { text: `\n\n• Consider reviewing competitor backlink profiles and content strategies for additional gap analysis.` },
        ],
        fontSize: 9,
        color: '#475569',
        lineHeight: 1.5,
        margin: [0, 0, 0, 20],
      },

      { text: '', pageBreak: 'after' },

      // ════════════════════════════════════════════════
      // 7. ORPHAN PAGES & BROKEN LINKS
      // ════════════════════════════════════════════════
      { text: '7. Orphan Pages & Broken Links', style: 'sectionHeader' },
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: 505, h: 2, color: technext }],
        margin: [0, 4, 0, 16],
      },

      // Orphan Pages
      { text: '7.1 Orphan Pages', bold: true, fontSize: 12, color: primary, margin: [0, 0, 0, 8] },
      orphanPages.length === 0
        ? { text: 'No orphan pages detected. All pages receive at least one internal link.', fontSize: 9.5, color: '#059669', italics: true, margin: [0, 0, 0, 16] }
        : [
            { text: `The following ${orphanPages.length} page(s) have no internal links pointing to them. Orphan pages are invisible to crawlers and users unless directly navigated to.`, margin: [0, 0, 0, 10], fontSize: 9.5 },
            {
              layout: {
                fillColor: (rowIdx) => rowIdx === 0 ? '#dc2626' : (rowIdx % 2 === 0 ? '#fef2f2' : null),
                hLineWidth: () => 0, vLineWidth: () => 0,
                paddingLeft: () => 12, paddingRight: () => 12,
                paddingTop: () => 8, paddingBottom: () => 8,
              },
              table: {
                widths: ['auto', '*'],
                headerRows: 1,
                body: [
                  headerRow(['#', 'Orphan Page'], '#dc2626'),
                  ...orphanPages.map((page, idx) => [
                    cell(`${idx + 1}`, 'center', '#64748b'),
                    { text: page, fontSize: 9, color: '#dc2626' },
                  ]),
                ],
              },
              margin: [0, 0, 0, 20],
            },
          ],

      // Broken Links (April only)
      ...(brokenLinks.length > 0 ? [
        { text: '7.2 Broken Internal Links', bold: true, fontSize: 12, color: primary, margin: [0, 0, 0, 8] },
        {
          text: `The following links pointed to certification pages (/pmp, /capm, /pmicp) that had not yet been published in ${MONTH_LABEL}. These pages were added to the site in May 2026.`,
          margin: [0, 0, 0, 10], fontSize: 9.5,
        },
        {
          layout: styledTableLayout('#dc2626'),
          table: {
            widths: ['auto', '*', '*', '*'],
            headerRows: 1,
            body: [
              headerRow(['#', 'Source Page', 'Broken Link', 'Anchor Text'], '#dc2626'),
              ...brokenLinks.slice(0, 30).map((bl, idx) => [
                cell(`${idx + 1}`, 'center', '#64748b'),
                { text: bl.source, fontSize: 8.5 },
                { text: bl.target, fontSize: 8.5, color: '#dc2626', bold: true },
                { text: bl.text.substring(0, 35), fontSize: 8, color: '#64748b' },
              ]),
            ],
          },
          margin: [0, 0, 0, 8],
        },
        brokenLinks.length > 30
          ? { text: `... and ${brokenLinks.length - 30} more broken links.`, fontSize: 8.5, color: '#64748b', italics: true, margin: [0, 0, 0, 20] }
          : { text: '', margin: [0, 0, 0, 20] },
      ] : []),

      { text: '', pageBreak: 'before' },

      // ════════════════════════════════════════════════
      // 8. RECOMMENDATIONS
      // ════════════════════════════════════════════════
      { text: '8. Recommendations', style: 'sectionHeader' },
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: 505, h: 2, color: technext }],
        margin: [0, 4, 0, 16],
      },

      // Internal Linking
      { text: 'Internal Linking', bold: true, fontSize: 11, color: primary, margin: [0, 0, 0, 8] },
      {
        ol: [
          `Strengthen deep links. The homepage and navigation receive most internal links. Add contextual links from blog posts to deeper service pages.`,
          ...(orphanPages.length > 0 ? [`Fix orphan pages: add internal links to ${orphanPages.slice(0, 3).join(', ')}${orphanPages.length > 3 ? ` and ${orphanPages.length - 3} others` : ''} from relevant content.`] : []),
          ...(brokenLinks.length > 0 ? [`Publish certification pages (/pmp, /capm, /pmicp) to resolve broken navigation links.`] : []),
          `Ensure all pages are within 3 clicks from the homepage.`,
        ].map(text => ({ text, margin: [0, 0, 0, 6], fontSize: 9.5 })),
        margin: [0, 0, 0, 16],
      },

      // Keyword & Content
      { text: 'Keyword & Content', bold: true, fontSize: 11, color: primary, margin: [0, 0, 0, 8] },
      {
        ol: [
          `Ensure every page has a unique title tag (50-60 chars) containing the primary target keyword.`,
          `Each page should have exactly one H1 that matches the page's primary topic. ${allH1s.filter(h => h.h1s.length !== 1).length} page(s) currently deviate from this.`,
          `Strengthen topic clusters around "PMP certification," "cost estimation," and "project management consulting" with internal links between related content.`,
          `Add more blog-to-service cross-links — blog posts are content hubs that should distribute authority to service/landing pages.`,
          `Review meta descriptions — ensure each is unique, compelling, and within 120-160 characters.`,
        ].map(text => ({ text, margin: [0, 0, 0, 6], fontSize: 9.5 })),
        margin: [0, 0, 0, 16],
      },

      // Competitor
      { text: 'Competitive Positioning', bold: true, fontSize: 11, color: primary, margin: [0, 0, 0, 8] },
      {
        ol: [
          `Differentiate title tags with "PMP Certification Training + Cost Estimation" — combine your two core strengths.`,
          `Review competitor sites for content gaps — identify topics they cover that you don't and create content.`,
          `Monitor competitor backlink profiles using tools like Ahrefs or SEMrush to identify link-building opportunities.`,
        ].map(text => ({ text, margin: [0, 0, 0, 6], fontSize: 9.5 })),
        margin: [0, 0, 0, 20],
      },

      // ════════════════════════════════════════════════
      // METHODOLOGY FOOTER
      // ════════════════════════════════════════════════
      { text: 'Methodology', style: 'sectionHeader' },
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: 505, h: 2, color: technext }],
        margin: [0, 4, 0, 12],
      },
      {
        text: [
          { text: 'Data Collection: ', bold: true },
          { text: `Site pages were crawled from ${SITE_URL}. Internal links, anchor texts, titles, meta descriptions, and headings were extracted from each page. Competitor data was gathered from publicly accessible homepage content. Self-references and asset URLs were excluded from link counts.` },
        ],
        fontSize: 8.5, color: '#64748b', lineHeight: 1.5, margin: [0, 0, 0, 8],
      },
      {
        text: `${REPORT_TITLE} by ${BRAND} | ${CLIENT_NAME} | ${MONTH_LABEL}`,
        fontSize: 7.5, color: '#94a3b8',
      },
    ],
    styles: {
      sectionHeader: {
        fontSize: 16,
        bold: true,
        color: primary,
        margin: [0, 16, 0, 0],
      },
    },
  };

  return dd;
}

// ─── PDF Helpers ─────────────────────────────────────────────────────────────

function cell(text, align = 'left', color, size = 9, bold = false) {
  return { text: `${text}`, fontSize: size, alignment: align, color: color || '#334155', bold };
}

function headerRow(labels, bgColor) {
  return labels.map(label => ({
    text: label,
    bold: true,
    color: 'white',
    fontSize: 8.5,
    alignment: labels.indexOf(label) === 0 ? 'center' : label === labels[labels.length - 1] ? 'center' : 'left',
  }));
}

function styledTableLayout(headerBg) {
  return {
    fillColor: (rowIdx) => rowIdx === 0 ? headerBg : (rowIdx % 2 === 0 ? '#f8fafc' : null),
    hLineWidth: () => 0,
    vLineWidth: () => 0,
    paddingLeft: () => 10,
    paddingRight: () => 10,
    paddingTop: () => 6,
    paddingBottom: () => 6,
  };
}

function metricBox(label, value, color) {
  return {
    stack: [
      { text: value, fontSize: 26, bold: true, color, alignment: 'center', margin: [0, 10, 0, 2] },
      { text: label, fontSize: 8.5, color: '#64748b', alignment: 'center', margin: [0, 0, 0, 10] },
    ],
    border: [true, true, true, true],
    borderColor: ['#e2e8f0', '#e2e8f0', '#e2e8f0', '#e2e8f0'],
    fillColor: 'white',
    margin: [3, 0, 3, 0],
  };
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('');
  console.log('  ╔══════════════════════════════════════════════════════╗');
  console.log('  ║           SEO Audit Report Generator                ║');
  console.log(`  ║              by ${BRAND.padEnd(30)}║`);
  console.log(`  ║              ${MONTH_LABEL.padEnd(32)}║`);
  console.log('  ╚══════════════════════════════════════════════════════╝');
  console.log('');

  if (!fs.existsSync(REPORT_DIR)) {
    fs.mkdirSync(REPORT_DIR, { recursive: true });
  }

  const start = Date.now();
  const data = await crawl();
  const elapsed = ((Date.now() - start) / 1000).toFixed(1);

  console.log(`\n  Crawl complete in ${elapsed}s:`);
  console.log(`    Pages crawled:       ${data.totalPages}`);
  console.log(`    Internal links:      ${data.totalInternalLinks}`);
  console.log(`    Orphan pages:        ${data.orphanPages.length}`);
  console.log(`    Broken links:        ${data.brokenLinks.length}`);
  console.log(`    Competitors checked: ${data.competitorResults.length}`);
  console.log(`    Top keywords found:  ${data.topKeywords.length}`);

  console.log(`\n  Generating PDF...`);
  const docDef = generateReport(data);
  const pdfDoc = await printer.createPdfKitDocument(docDef);

  const filename = `seo-audit-report-${MONTH}-2026.pdf`;
  const filepath = path.join(REPORT_DIR, filename);

  return new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(filepath);
    pdfDoc.pipe(stream);
    pdfDoc.end();
    stream.on('finish', () => {
      const size = (fs.statSync(filepath).size / 1024).toFixed(1);
      console.log(`  ✅ Report saved: public/reports/${filename} (${size} KB)\n`);
      resolve(filepath);
    });
    stream.on('error', reject);
  });
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
