/**
 * Brand graphics for the Payload admin (login screen + nav), matching the site:
 * navy #0B3C5D wordmark with a cyan #55c5e7 accent dot, and a compact icon mark.
 */
export function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span
        style={{
          fontWeight: 800,
          fontSize: 26,
          color: "#0B3C5D",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        TheAgileNest
      </span>
      <span style={{ color: "#55c5e7", fontWeight: 800, fontSize: 26, lineHeight: 1 }}>.</span>
    </div>
  );
}

export function Icon() {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: 8,
        background: "#0B3C5D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ color: "#55c5e7", fontWeight: 800, fontSize: 16, lineHeight: 1 }}>N</span>
    </div>
  );
}
