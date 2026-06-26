import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * WordPress-style admin dashboard with widgets, stats, and quick actions.
 */

const STAGES: { key: string; label: string; color: string; icon: string }[] = [
  { key: "new", label: "New", color: "#55c5e7", icon: "📥" },
  { key: "contacted", label: "Contacted", color: "#f59e0b", icon: "📞" },
  { key: "qualified", label: "Qualified", color: "#6366f1", icon: "✅" },
  { key: "won", label: "Won", color: "#16a34a", icon: "🎉" },
  { key: "lost", label: "Lost", color: "#9ca3af", icon: "❌" },
];

const QUICK_ACTIONS = [
  { label: "New Blog Post", href: "/admin/collections/posts/create", icon: "✍️", desc: "Write an article", color: "#6366f1" },
  { label: "Upload Media", href: "/admin/collections/media/create", icon: "🖼️", desc: "Add images/files", color: "#16a34a" },
  { label: "Appearance", href: "/admin/globals/appearance", icon: "🎨", desc: "Colors, fonts, logo", color: "#ec4899" },
  { label: "View Leads", href: "/admin/collections/leads", icon: "📬", desc: "Customer enquiries", color: "#ef4444" },
  { label: "Testimonials", href: "/admin/collections/testimonials", icon: "⭐", desc: "Client reviews", color: "#f59e0b" },
  { label: "Team Members", href: "/admin/collections/team-members", icon: "👥", desc: "Staff directory", color: "#8b5cf6" },
];

type PostDoc = {
  id: string;
  title?: string;
  slug?: string;
  status?: string;
  updatedAt?: string;
  author?: string;
};

type ActivityDoc = {
  id: string;
  action?: string;
  collection?: string;
  documentTitle?: string;
  createdAt?: string;
  user?: { name?: string; email?: string } | null;
};

export async function CrmDashboard() {
  let total = 0;
  let postsCount = 0;
  let mediaCount = 0;
  let draftCount = 0;
  let publishedCount = 0;
  let recentPosts: PostDoc[] = [];
  let recentActivity: ActivityDoc[] = [];
  let dbConnected = false;
  const counts: Record<string, number> = { new: 0, contacted: 0, qualified: 0, won: 0, lost: 0 };

  try {
    const payload = await getPayload({ config });
    dbConnected = true;

    // Fetch all stats in parallel for better performance
    const [stageCounts, allLeads, allPosts, allMedia, drafts, published, recent, activity] = await Promise.all([
      Promise.all(
        STAGES.map((s) =>
          payload.count({ collection: "leads", where: { status: { equals: s.key } } }),
        ),
      ),
      payload.count({ collection: "leads" }),
      payload.count({ collection: "posts" }),
      payload.count({ collection: "media" }),
      payload.count({ collection: "posts", where: { status: { equals: "draft" } } }),
      payload.count({ collection: "posts", where: { status: { equals: "published" } } }),
      payload.find({ collection: "posts", limit: 5, sort: "-updatedAt", depth: 0 }),
      payload.find({ collection: "activity-log", limit: 8, sort: "-createdAt", depth: 1 }),
    ]);

    STAGES.forEach((s, i) => {
      counts[s.key] = stageCounts[i].totalDocs;
    });
    total = allLeads.totalDocs;
    postsCount = allPosts.totalDocs;
    mediaCount = allMedia.totalDocs;
    draftCount = drafts.totalDocs;
    publishedCount = published.totalDocs;
    recentPosts = recent.docs as PostDoc[];
    recentActivity = activity.docs as ActivityDoc[];
  } catch {
    dbConnected = false;
  }

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-NZ", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  const getActionIcon = (action?: string) => {
    switch (action) {
      case "create": return "✨";
      case "update": return "✏️";
      case "delete": return "🗑️";
      case "publish": return "📤";
      case "unpublish": return "📥";
      case "login": return "🔑";
      case "logout": return "🚪";
      default: return "📝";
    }
  };

  const getActionLabel = (action?: string) => {
    switch (action) {
      case "create": return "Created";
      case "update": return "Updated";
      case "delete": return "Deleted";
      case "publish": return "Published";
      case "unpublish": return "Unpublished";
      case "login": return "Logged in";
      case "logout": return "Logged out";
      default: return action || "Changed";
    }
  };

  const isVercel = process.env.VERCEL === "1" || !!process.env.VERCEL_ENV;
  const hasBlobStorage = !!process.env.BLOB_READ_WRITE_TOKEN;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Critical Warning: Blob Storage Missing on Vercel */}
      {isVercel && !hasBlobStorage && (
        <div
          style={{
            background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
            borderRadius: 16,
            padding: "20px 24px",
            border: "2px solid #ef4444",
            display: "flex",
            alignItems: "flex-start",
            gap: 16,
          }}
        >
          <span style={{ fontSize: 32 }}>🚨</span>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "#dc2626", margin: 0, marginBottom: 8 }}>
              Image Uploads Disabled — Vercel Blob Storage Required
            </h3>
            <p style={{ fontSize: 14, color: "#991b1b", margin: 0, marginBottom: 12, lineHeight: 1.5 }}>
              Image uploads will fail until Vercel Blob storage is configured. To fix this:
            </p>
            <ol style={{ fontSize: 13, color: "#7f1d1d", margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
              <li>Go to <strong>Vercel Dashboard → your project → Storage tab</strong></li>
              <li>Click <strong>"Create Database"</strong> → select <strong>"Blob"</strong></li>
              <li>Follow the prompts to create and link a Blob store</li>
              <li>This auto-sets the <code style={{ background: "#fef2f2", padding: "2px 6px", borderRadius: 4 }}>BLOB_READ_WRITE_TOKEN</code> environment variable</li>
              <li><strong>Redeploy</strong> the project for changes to take effect</li>
            </ol>
          </div>
        </div>
      )}

      {/* Welcome Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0B3C5D 0%, #1a5a7a 100%)",
          borderRadius: 16,
          padding: "32px 28px",
          color: "#fff",
          position: "relative",
        }}
      >
        <Link
          href="/admin/logout"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 13,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          🚪 Log Out
        </Link>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0, marginBottom: 8 }}>
          Welcome to TheAgileNest CMS 👋
        </h1>
        <p style={{ fontSize: 15, opacity: 0.9, margin: 0, maxWidth: 600 }}>
          Manage your website content easily. Use the sidebar to navigate, or use the quick actions below.
        </p>
      </div>

      {/* At a Glance - WordPress Style */}
      <div
        style={{
          background: "var(--theme-elevation-0)",
          border: "1px solid var(--theme-elevation-100)",
          borderRadius: 16,
          padding: 24,
        }}
      >
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0B3C5D", margin: 0, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
          📊 At a Glance
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
          <Link href="/admin/collections/posts" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 24 }}>📝</span>
              <div>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#0B3C5D" }}>{postsCount}</div>
                <div style={{ fontSize: 12, color: "var(--theme-elevation-500)" }}>Blog Posts</div>
              </div>
            </div>
          </Link>
          <Link href="/admin/collections/posts?where[status][equals]=published" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 24 }}>✅</span>
              <div>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#16a34a" }}>{publishedCount}</div>
                <div style={{ fontSize: 12, color: "var(--theme-elevation-500)" }}>Published</div>
              </div>
            </div>
          </Link>
          <Link href="/admin/collections/posts?where[status][equals]=draft" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 24 }}>📋</span>
              <div>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#f59e0b" }}>{draftCount}</div>
                <div style={{ fontSize: 12, color: "var(--theme-elevation-500)" }}>Drafts</div>
              </div>
            </div>
          </Link>
          <Link href="/admin/collections/media" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 24 }}>🖼️</span>
              <div>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#8b5cf6" }}>{mediaCount}</div>
                <div style={{ fontSize: 12, color: "var(--theme-elevation-500)" }}>Media Files</div>
              </div>
            </div>
          </Link>
          <Link href="/admin/collections/leads" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 24 }}>📬</span>
              <div>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#ef4444" }}>{total}</div>
                <div style={{ fontSize: 12, color: "var(--theme-elevation-500)" }}>Enquiries</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Two Column Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 24 }}>
        {/* Quick Actions */}
        <div
          style={{
            background: "var(--theme-elevation-0)",
            border: "1px solid var(--theme-elevation-100)",
            borderRadius: 16,
            padding: 24,
          }}
        >
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0B3C5D", margin: 0, marginBottom: 16 }}>
            ⚡ Quick Actions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {QUICK_ACTIONS.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 12,
                  border: "1px solid var(--theme-elevation-100)",
                  textDecoration: "none",
                  background: "var(--theme-elevation-50)",
                }}
              >
                <span style={{ fontSize: 22 }}>{action.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: action.color }}>{action.label}</div>
                  <div style={{ fontSize: 11, color: "var(--theme-elevation-500)" }}>{action.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div
          style={{
            background: "var(--theme-elevation-0)",
            border: "1px solid var(--theme-elevation-100)",
            borderRadius: 16,
            padding: 24,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0B3C5D", margin: 0 }}>
              📝 Recent Posts
            </h2>
            <Link href="/admin/collections/posts/create" style={{ fontSize: 12, color: "#6366f1", textDecoration: "none", fontWeight: 600 }}>
              + New Post
            </Link>
          </div>
          {recentPosts.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/admin/collections/posts/${post.id}`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: "1px solid var(--theme-elevation-100)",
                    textDecoration: "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 12 }}>
                      {post.status === "published" ? "✅" : post.status === "draft" ? "📋" : "📄"}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#0B3C5D" }}>
                      {post.title || "Untitled"}
                    </span>
                  </div>
                  <span style={{ fontSize: 11, color: "var(--theme-elevation-500)" }}>
                    {formatDate(post.updatedAt)}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: 20, color: "var(--theme-elevation-500)" }}>
              No posts yet. <Link href="/admin/collections/posts/create" style={{ color: "#6366f1" }}>Create your first post</Link>
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div
        style={{
          background: "var(--theme-elevation-0)",
          border: "1px solid var(--theme-elevation-100)",
          borderRadius: 16,
          padding: 24,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0B3C5D", margin: 0 }}>
            📋 Recent Activity
          </h2>
          <Link href="/admin/collections/activity-log" style={{ fontSize: 12, color: "#6366f1", textDecoration: "none", fontWeight: 600 }}>
            View All →
          </Link>
        </div>
        {recentActivity.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
            {recentActivity.map((log) => (
              <div
                key={log.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid var(--theme-elevation-100)",
                  background: "var(--theme-elevation-50)",
                }}
              >
                <span style={{ fontSize: 18 }}>{getActionIcon(log.action)}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#0B3C5D", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {getActionLabel(log.action)} {log.documentTitle || log.collection}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--theme-elevation-500)" }}>
                    {log.user?.name || log.user?.email || "System"} · {formatDate(log.createdAt)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: 20, color: "var(--theme-elevation-500)", fontSize: 13 }}>
            No activity recorded yet. Changes will appear here automatically.
          </div>
        )}
      </div>

      {/* CRM Pipeline */}
      <div
        style={{
          border: "1px solid var(--theme-elevation-100)",
          borderRadius: 16,
          padding: 24,
          background: "var(--theme-elevation-0)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0B3C5D", margin: 0 }}>📊 Lead Pipeline</h2>
            <p style={{ fontSize: 13, color: "var(--theme-elevation-500)", margin: 0, marginTop: 4 }}>
              Track enquiries from contact forms
            </p>
          </div>
          <Link
            href="/admin/collections/leads"
            style={{
              background: "#0B3C5D",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            View all leads →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
          {STAGES.map((s) => (
            <Link
              key={s.key}
              href={`/admin/collections/leads?where[status][equals]=${s.key}`}
              style={{
                border: "2px solid var(--theme-elevation-100)",
                borderRadius: 12,
                padding: "18px 16px",
                textDecoration: "none",
                display: "block",
                background: `linear-gradient(135deg, ${s.color}08 0%, ${s.color}15 100%)`,
                borderColor: `${s.color}30`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: s.color }}>{s.label}</span>
              </div>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#0B3C5D" }}>{counts[s.key]}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Two Column: Site Health + Tips */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 24 }}>
        {/* Site Health */}
        <div
          style={{
            background: "var(--theme-elevation-0)",
            border: "1px solid var(--theme-elevation-100)",
            borderRadius: 16,
            padding: 24,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0B3C5D", margin: 0 }}>
              🏥 Site Health
            </h2>
            <Link href="/api/health" style={{ fontSize: 12, color: "#6366f1", textDecoration: "none", fontWeight: 600 }}>
              Full Report →
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {dbConnected ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#f0fdf4", borderRadius: 8, border: "1px solid #bbf7d0" }}>
                <span style={{ fontSize: 16 }}>✅</span>
                <span style={{ fontSize: 13, color: "#166534" }}>Database connected</span>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#fef2f2", borderRadius: 8, border: "1px solid #fecaca" }}>
                <span style={{ fontSize: 16 }}>❌</span>
                <span style={{ fontSize: 13, color: "#dc2626" }}>Database connection failed</span>
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: dbConnected ? "#f0fdf4" : "#fef2f2", borderRadius: 8, border: dbConnected ? "1px solid #bbf7d0" : "1px solid #fecaca" }}>
              <span style={{ fontSize: 16 }}>{dbConnected ? "✅" : "⚠️"}</span>
              <span style={{ fontSize: 13, color: dbConnected ? "#166534" : "#dc2626" }}>{postsCount} posts, {mediaCount} media files</span>
            </div>
            {hasBlobStorage ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#f0fdf4", borderRadius: 8, border: "1px solid #bbf7d0" }}>
                <span style={{ fontSize: 16 }}>✅</span>
                <span style={{ fontSize: 13, color: "#166534" }}>Media storage configured</span>
              </div>
            ) : isVercel ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#fef2f2", borderRadius: 8, border: "1px solid #fecaca" }}>
                <span style={{ fontSize: 16 }}>❌</span>
                <span style={{ fontSize: 13, color: "#dc2626" }}>Blob storage missing — uploads will fail</span>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#fffbeb", borderRadius: 8, border: "1px solid #fde68a" }}>
                <span style={{ fontSize: 16 }}>⚠️</span>
                <span style={{ fontSize: 13, color: "#92400e" }}>Local storage (set up Blob for Vercel)</span>
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#f0fdf4", borderRadius: 8, border: "1px solid #bbf7d0" }}>
              <span style={{ fontSize: 16 }}>✅</span>
              <span style={{ fontSize: 13, color: "#166534" }}>Auto-save enabled (30s)</span>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div
          style={{
            background: "#f0f9ff",
            border: "1px solid #bae6fd",
            borderRadius: 16,
            padding: 24,
          }}
        >
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0B3C5D", margin: 0, marginBottom: 16 }}>
            💡 Quick Tips
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 20 }}>💾</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#0B3C5D" }}>Auto-Save</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>Posts auto-save every 30 seconds as drafts</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 20 }}>📅</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#0B3C5D" }}>Schedule Posts</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>Set a future publish date to auto-publish</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 20 }}>🏷️</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#0B3C5D" }}>Use Tags</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>Add tags to organize your blog content</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 20 }}>🔍</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#0B3C5D" }}>SEO Ready</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>Add meta titles & descriptions for SEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Management Links */}
      <div
        style={{
          background: "var(--theme-elevation-0)",
          border: "1px solid var(--theme-elevation-100)",
          borderRadius: 16,
          padding: 24,
        }}
      >
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0B3C5D", margin: 0, marginBottom: 16 }}>
          📚 Content Management
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 10 }}>
          <Link href="/admin/collections/forms" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)", border: "1px solid var(--theme-elevation-100)", textDecoration: "none", fontSize: 13, color: "#0B3C5D", display: "flex", alignItems: "center", gap: 8 }}>📝 Forms</Link>
          <Link href="/admin/collections/testimonials" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)", border: "1px solid var(--theme-elevation-100)", textDecoration: "none", fontSize: 13, color: "#0B3C5D", display: "flex", alignItems: "center", gap: 8 }}>⭐ Testimonials</Link>
          <Link href="/admin/collections/team-members" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)", border: "1px solid var(--theme-elevation-100)", textDecoration: "none", fontSize: 13, color: "#0B3C5D", display: "flex", alignItems: "center", gap: 8 }}>👥 Team</Link>
          <Link href="/admin/collections/galleries" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)", border: "1px solid var(--theme-elevation-100)", textDecoration: "none", fontSize: 13, color: "#0B3C5D", display: "flex", alignItems: "center", gap: 8 }}>🖼️ Galleries</Link>
          <Link href="/admin/collections/faqs" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)", border: "1px solid var(--theme-elevation-100)", textDecoration: "none", fontSize: 13, color: "#0B3C5D", display: "flex", alignItems: "center", gap: 8 }}>❓ FAQs</Link>
          <Link href="/admin/collections/popups" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)", border: "1px solid var(--theme-elevation-100)", textDecoration: "none", fontSize: 13, color: "#0B3C5D", display: "flex", alignItems: "center", gap: 8 }}>🔲 Popups</Link>
          <Link href="/admin/collections/sliders" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)", border: "1px solid var(--theme-elevation-100)", textDecoration: "none", fontSize: 13, color: "#0B3C5D", display: "flex", alignItems: "center", gap: 8 }}>🎠 Sliders</Link>
          <Link href="/admin/collections/pricing-plans" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)", border: "1px solid var(--theme-elevation-100)", textDecoration: "none", fontSize: 13, color: "#0B3C5D", display: "flex", alignItems: "center", gap: 8 }}>💰 Pricing</Link>
          <Link href="/admin/collections/menus" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)", border: "1px solid var(--theme-elevation-100)", textDecoration: "none", fontSize: 13, color: "#0B3C5D", display: "flex", alignItems: "center", gap: 8 }}>🔗 Menus</Link>
          <Link href="/admin/collections/comments" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)", border: "1px solid var(--theme-elevation-100)", textDecoration: "none", fontSize: 13, color: "#0B3C5D", display: "flex", alignItems: "center", gap: 8 }}>💬 Comments</Link>
          <Link href="/admin/collections/redirects" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)", border: "1px solid var(--theme-elevation-100)", textDecoration: "none", fontSize: 13, color: "#0B3C5D", display: "flex", alignItems: "center", gap: 8 }}>🔀 Redirects</Link>
          <Link href="/admin/collections/tags" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)", border: "1px solid var(--theme-elevation-100)", textDecoration: "none", fontSize: 13, color: "#0B3C5D", display: "flex", alignItems: "center", gap: 8 }}>🏷️ Tags</Link>
        </div>
      </div>

      {/* WordPress-style Footer Links */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "center",
          padding: "20px 0",
          borderTop: "1px solid var(--theme-elevation-100)",
          marginTop: 8,
        }}
      >
        <Link href="/admin/globals/appearance" style={{ fontSize: 13, color: "#64748b", textDecoration: "none" }}>🎨 Appearance</Link>
        <Link href="/admin/globals/customCode" style={{ fontSize: 13, color: "#64748b", textDecoration: "none" }}>💻 Custom Code</Link>
        <Link href="/admin/globals/readingSettings" style={{ fontSize: 13, color: "#64748b", textDecoration: "none" }}>📖 Reading</Link>
        <Link href="/admin/globals/siteSettings" style={{ fontSize: 13, color: "#64748b", textDecoration: "none" }}>⚙️ Settings</Link>
        <Link href="/admin/collections/activity-log" style={{ fontSize: 13, color: "#64748b", textDecoration: "none" }}>📋 Activity</Link>
        <Link href="/api/backup" style={{ fontSize: 13, color: "#64748b", textDecoration: "none" }}>💾 Backup</Link>
        <Link href="/api/health" style={{ fontSize: 13, color: "#64748b", textDecoration: "none" }}>🏥 Health</Link>
      </div>
    </div>
  );
}
