/**
 * Default fallback content for site-wide settings (header nav, footer, company bio).
 * Used when CMS fields are empty so the live site stays unchanged.
 */
export const SITE_SETTINGS_CONTENT = {
  contactButton: "Contact Us",

  navCategories: [
    {
      title: "Consultancy",
      href: "/consulting",
      items: [
        { name: "Project Management", desc: "Expert delivery & recovery services.", href: "/project-management" },
        { name: "Cost Estimation & Quality Surveying", desc: "Fast accurate estimating for projects.", href: "/cost-estimation" },
      ],
    },
    {
      title: "Training",
      href: "/training",
      items: [
        { name: "PMP® Certification", desc: "Expert-led preparation for the PMP exam.", href: "/pmp" },
        { name: "CAPM® Foundation", desc: "Core principles for aspiring PMs.", href: "/capm" },
        { name: "PMI-CP® Construction", desc: "Specialized construction professional.", href: "/pmicp" },
        { name: "Corporate Workshops", desc: "Custom training for teams.", href: "/training" },
      ],
    },
    {
      title: "Blogs",
      href: "/blog",
      items: [
        { name: "Latest Blogs", desc: "Insights and trends in PM.", href: "/blog" },
      ],
    },
    {
      title: "About",
      href: "/about",
      items: [
        { name: "Our Story", desc: "17 years of passion and purpose.", href: "/about" },
        { name: "Our Evolution", desc: "Professional journey and milestones.", href: "/about#evolution" },
        { name: "Become a Partner", desc: "Join our premium training network.", href: "/partner" },
      ],
    },
  ],

  contactEyebrow: "Support & Enquiries",
  contactHeading: "How can we help?",
  contactIntro:
    "Reach out for custom corporate training, consulting enquiries, or certification guidance.",

  clientsHeading: "Our Clients belong to",

  clientLogos: [
    { src: "/our_client/1.jpeg", alt: "Client 1" },
    { src: "/our_client/2.jpeg", alt: "Client 2" },
    { src: "/our_client/3.jpeg", alt: "Client 3" },
    { src: "/our_client/4.jpeg", alt: "Client 4" },
    { src: "/our_client/5.jpeg", alt: "Client 5" },
    { src: "/our_client/6.jpeg", alt: "Client 6" },
    { src: "/our_client/7.jpeg", alt: "Client 7" },
    { src: "/our_client/8.jpeg", alt: "Client 8" },
    { src: "/our_client/9.jpeg", alt: "Client 9" },
    { src: "/our_client/10.jpeg", alt: "Client 10" },
    { src: "/our_client/11.jpeg", alt: "Client 11" },
    { src: "/our_client/12.jpeg", alt: "Client 12" },
  ],

  companyBioHeadingLead: "The Agile Nest: Your Strategic Partner in ",
  companyBioHeadingAccent: "Project Management Excellence",
  companyBioParagraphs: [
    "At The Agile Nest, we ensure organisations achieve project success by combining disciplined management, practical leadership, and hands-on expertise that directly address the challenges of balancing time, cost, quality, risk, and stakeholder demands.",
    "We help clients achieve measurable results on their most complex projects by providing clear strategic direction, robust governance, and agile delivery models that ensure value, mitigate risk, and drive outcomes beyond budgets and deadlines.",
    "Our team brings hands-on experience across construction, infrastructure, commercial developments, energy, technology, and transformation programs. We combine international best practices with local insights, helping clients navigate complexity while maintaining momentum and control.",
    "We offer project management services, including planning, scheduling, PMO setup, governance, stakeholder management, progress reporting, controls, recovery planning, and delivery assurance. Whether you need support for a capital project, business transformation, or underperforming initiative, we serve as a trusted extension of your team.",
    "At The Agile Nest, we don't just advise we help organisations build capability, improve performance, and achieve lasting results. By partnering with us, you gain a reliable partner committed to project success.",
  ],
  companyBioFeatures: [
    { title: "Proven Reliability", desc: "Trusted by industry leaders to deliver results in complex, multi-year projects." },
    { title: "Strategic Focus", desc: "Aligning every project activity with broader organizational and commercial goals." },
    { title: "Expert Faculty", desc: "Learn from certified practitioners with extensive field experience." },
    { title: "Collaborative Growth", desc: "We build long-term relationships that foster continuous professional development." },
  ],

  footerBrandPara1:
    "At TheAgileNest, we're passionate about projects. We provide the full range of project services and training to increase your team's skills and capabilities.",
  footerTagline: "FAST ACCURATE ESTIMATING FOR CONSTRUCTION PROJECT",
  footerBrandPara2:
    "Creating calm across your projects, no matter the complexity, and helping you achieve your business outcomes.",

  footerOurServicesHeading: "Our services",
  footerTrainingHeading: "Training",
  footerResourcesHeading: "Resources",
  footerContactHeading: "Contact",

  footerOurServices: [
    { label: "Project Management", href: "/project-management" },
    { label: "Cost Estimation & Quality Surveying", href: "/cost-estimation" },
    { label: "Advisory & PMO", href: "/consulting" },
    { label: "Training Services", href: "/training" },
  ],
  footerTraining: [
    { label: "PMP® Certification", href: "/pmp" },
    { label: "CAPM® Certification", href: "/capm" },
    { label: "PMI-CP® Certification", href: "/pmicp" },
    { label: "Custom Training", href: "/training" },
    { label: "Training Resources", href: "/training" },
  ],
  footerResources: [
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Become a Partner", href: "/partner" },
  ],

  offices: [
    { label: "Pakistan", address: "Flat no 203, Classical Apartments, Near Dr Akbar Niazi Teaching Hospital, Bharakahu, Islamabad" },
    { label: "New Zealand", address: "15 Idlewild Ave, Mangere" },
    { label: "Australia", address: "93 Park Orchard Drive, Pakenham" },
  ],

  footerPhones: ["+64 9 620 7678", "+64 27 353 7774"],
  footerEmail: "contact@TheAgileNest.com",

  copyrightText: "TheAgileNest. All rights reserved.",
  privacyLabel: "Privacy Policy",
  privacyHref: "/privacy",
  termsLabel: "Terms of Service",
  termsHref: "/terms",
};

export type NavItem = { name: string; desc: string; href: string };
export type NavCategory = { title: string; href: string; items: NavItem[] };
export type FooterLink = { label: string; href: string };
export type Office = { label: string; address: string };
