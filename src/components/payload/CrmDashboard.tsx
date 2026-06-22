import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Branded CRM summary shown at the top of the admin dashboard: live lead counts
 * by pipeline stage with a quick link to the inbox. Server component; fails
 * gracefully to zeros if the DB is briefly unavailable.
 */
const STAGES: { key: string; label: string; color: string }[] = [
  { key: "new", label: "New", color: "#55c5e7" },
  { key: "contacted", label: "Contacted", color: "#f59e0b" },
  { key: "qualified", label: "Qualified", color: "#6366f1" },
  { key: "won", label: "Won", color: "#16a34a" },
];

export async function CrmDashboard() {
  let total = 0;
  const counts: Record<string, number> = { new: 0, contacted: 0, qualified: 0, won: 0 };

  try {
    const payload = await getPayload({ config });
    const all = await payload.count({ collection: "leads" });
    total = all.totalDocs;
    await Promise.all(
      STAGES.map(async (s) => {
        const r = await payload.count({ collection: "leads", where: { status: { equals: s.key } } });
        counts[s.key] = r.totalDocs;
      })
    );
  } catch {
    /* keep zeros */
  }

  return (
    <div
      style={{
        border: "1px solid var(--theme-elevation-100)",
        borderRadius: 12,
        padding: 24,
        marginBottom: 24,
        background: "var(--theme-elevation-0)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#0B3C5D" }}>CRM — Leads</div>
          <div style={{ fontSize: 13, color: "var(--theme-elevation-500)" }}>
            {total} total enquir{total === 1 ? "y" : "ies"} from the website
          </div>
        </div>
        <Link
          href="/admin/collections/leads"
          style={{
            background: "#0B3C5D",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 13,
            textDecoration: "none",
          }}
        >
          View all leads →
        </Link>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12 }}>
        {STAGES.map((s) => (
          <Link
            key={s.key}
            href={`/admin/collections/leads?where[status][equals]=${s.key}`}
            style={{
              border: "1px solid var(--theme-elevation-100)",
              borderRadius: 10,
              padding: "14px 16px",
              textDecoration: "none",
              display: "block",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: 99, background: s.color }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--theme-elevation-600)" }}>{s.label}</span>
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#0B3C5D", marginTop: 6 }}>{counts[s.key]}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
