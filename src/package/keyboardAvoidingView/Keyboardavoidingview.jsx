import { useState } from "react";

const components = [
  {
    name: "KeyboardAvoidingView",
    color: "#2D6BE4",
    tag: "base",
    desc: "Core container. Adjusts layout when keyboard appears.",
    props: [
      { name: "variant", type: "'light' | 'dark' | 'primary' | 'surface' | 'transparent'", default: "'surface'" },
      { name: "padded", type: "boolean | 'small' | 'medium' | 'large'", default: "'medium'" },
      { name: "behavior", type: "'padding' | 'position' | 'height'", default: "iOS: 'padding', Android: 'height'" },
      { name: "keyOffset", type: "number", default: "0" },
      { name: "backgroundColor", type: "string", default: "—" },
      { name: "flex", type: "number", default: "1" },
      { name: "justifyContent", type: "FlexJustify", default: "'flex-start'" },
      { name: "alignItems", type: "FlexAlign", default: "'stretch'" },
      { name: "accessibilityLabel", type: "string", default: "'Container'" },
    ],
    example: `<KeyboardAvoidingView
  variant="surface"
  padded="medium"
  keyOffset={0}
>
  {children}
</KeyboardAvoidingView>`,
  },
  {
    name: "KeyboardAvoidingForm",
    color: "#7C3AED",
    tag: "form",
    desc: "Form-optimized. Last child = submit button pinned to bottom; all others = fields.",
    props: [
      { name: "variant", type: "'light' | 'dark' | 'primary' | 'surface' | 'transparent'", default: "'surface'" },
      { name: "padded", type: "boolean | 'small' | 'medium' | 'large'", default: "'large'" },
      { name: "spacing", type: "number", default: "16" },
      { name: "onSubmit", type: "() => void", default: "—", note: "Forwarded to last child via onPress" },
      { name: "keyOffset", type: "number", default: "iOS: 40, Android: 0" },
      { name: "justifyContent", type: "FlexJustify", default: "'space-between'" },
    ],
    example: `<KeyboardAvoidingForm onSubmit={handleSubmit}>
  <TextInput placeholder="Email" />
  <TextInput placeholder="Password" />
  <Button title="Submit" /> {/* ← pinned to bottom */}
</KeyboardAvoidingForm>`,
    notes: ["≥2 children: last child becomes the submit button", "1 child: treated as a field, no submit button"],
  },
  {
    name: "KeyboardAvoidingPadding",
    color: "#059669",
    tag: "padding",
    desc: "Granular per-side padding control instead of uniform padding.",
    props: [
      { name: "paddingTop", type: "number", default: "0" },
      { name: "paddingBottom", type: "number", default: "0" },
      { name: "paddingLeft", type: "number", default: "0" },
      { name: "paddingRight", type: "number", default: "0" },
      { name: "variant", type: "'light' | 'dark' | 'primary' | 'surface' | 'transparent'", default: "'surface'" },
      { name: "behavior", type: "'padding' | 'position' | 'height'", default: "iOS: 'padding', Android: 'height'" },
      { name: "keyOffset", type: "number", default: "0" },
    ],
    example: `<KeyboardAvoidingPadding
  paddingTop={24}
  paddingBottom={40}
  paddingLeft={16}
  paddingRight={16}
>
  {children}
</KeyboardAvoidingPadding>`,
  },
  {
    name: "KeyboardAwareContent",
    color: "#D97706",
    tag: "scroll",
    desc: "Optimized for scrollable / long content. Supports render prop or children.",
    props: [
      { name: "renderContent", type: "() => ReactNode", default: "—", note: "Takes priority over children" },
      { name: "variant", type: "'light' | 'dark' | 'primary' | 'surface' | 'transparent'", default: "'surface'" },
      { name: "padded", type: "boolean | 'small' | 'medium' | 'large'", default: "'medium'" },
      { name: "keyOffset", type: "number", default: "iOS: 40, Android: 0" },
    ],
    example: `<KeyboardAwareContent
  renderContent={() => <LongForm />}
/>

{/* or via children */}
<KeyboardAwareContent>
  <LongForm />
</KeyboardAwareContent>`,
  },
];

const variantRows = [
  { name: "light", bg: "#F9FAFB", text: "#111", border: "#E5E7EB" },
  { name: "dark", bg: "#111827", text: "#F9FAFB", border: "#374151" },
  { name: "primary", bg: "#EFF6FF", text: "#1D4ED8", border: "#BFDBFE" },
  { name: "surface", bg: "#FFFFFF", text: "#111", border: "#E5E7EB" },
  { name: "transparent", bg: "transparent", text: "#111", border: "#E5E7EB", stripe: true },
];

const paddingRows = [
  { name: "false / 0", px: 0 },
  { name: "small", px: 8 },
  { name: "true / medium", px: 16 },
  { name: "large", px: 24 },
];

export default function QuickRef() {
  const [active, setActive] = useState(0);
  const comp = components[active];

  return (
    <div style={{
      fontFamily: "'Berkeley Mono', 'Fira Code', 'Courier New', monospace",
      background: "#0C0C0F",
      color: "#E2E2E8",
      minHeight: "100vh",
      padding: "32px 24px",
      boxSizing: "border-box",
    }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, letterSpacing: 3, color: "#555", textTransform: "uppercase" }}>React Native</span>
          <span style={{ color: "#333" }}>·</span>
          <span style={{ fontSize: 11, letterSpacing: 3, color: "#555", textTransform: "uppercase" }}>Quick Reference</span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: "6px 0 0", color: "#fff", letterSpacing: -0.5 }}>
          KeyboardAvoiding<span style={{ color: "#2D6BE4" }}>View</span>
        </h1>
      </div>

      {/* Tab Strip */}
      <div style={{ display: "flex", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
        {components.map((c, i) => (
          <button key={c.name} onClick={() => setActive(i)} style={{
            padding: "6px 14px",
            borderRadius: 6,
            border: `1px solid ${active === i ? c.color : "#2A2A30"}`,
            background: active === i ? c.color + "22" : "transparent",
            color: active === i ? c.color : "#666",
            fontSize: 12,
            fontFamily: "inherit",
            cursor: "pointer",
            fontWeight: active === i ? 600 : 400,
            transition: "all 0.15s",
          }}>
            {c.name.replace("KeyboardAvoiding", "KAV-").replace("KeyboardAware", "KA-")}
          </button>
        ))}
      </div>

      {/* Component Card */}
      <div style={{
        border: `1px solid ${comp.color}44`,
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 20,
      }}>
        {/* Card Header */}
        <div style={{
          background: comp.color + "18",
          borderBottom: `1px solid ${comp.color}33`,
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}>
          <span style={{
            background: comp.color,
            color: "#fff",
            fontSize: 9,
            fontWeight: 700,
            padding: "2px 7px",
            borderRadius: 4,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}>{comp.tag}</span>
          <span style={{ fontWeight: 600, fontSize: 15, color: "#fff" }}>{comp.name}</span>
        </div>

        <div style={{ padding: "14px 18px" }}>
          <p style={{ margin: "0 0 16px", color: "#9994A8", fontSize: 13, lineHeight: 1.6 }}>{comp.desc}</p>

          {/* Notes */}
          {comp.notes && (
            <div style={{ marginBottom: 16 }}>
              {comp.notes.map((n, i) => (
                <div key={i} style={{
                  fontSize: 12, color: "#8B8898", padding: "4px 0 4px 12px",
                  borderLeft: `2px solid ${comp.color}55`,
                  marginBottom: 4,
                }}>
                  {n}
                </div>
              ))}
            </div>
          )}

          {/* Props Table */}
          <div style={{ marginBottom: 18, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr>
                  {["Prop", "Type", "Default", ""].map(h => (
                    <th key={h} style={{
                      textAlign: "left", padding: "6px 10px",
                      color: "#555", fontWeight: 500,
                      borderBottom: "1px solid #1E1E25",
                      whiteSpace: "nowrap",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comp.props.map((p, i) => (
                  <tr key={p.name} style={{ background: i % 2 === 0 ? "#0F0F14" : "transparent" }}>
                    <td style={{ padding: "7px 10px", color: comp.color, fontWeight: 600, whiteSpace: "nowrap" }}>{p.name}</td>
                    <td style={{ padding: "7px 10px", color: "#7C7B8A", fontStyle: "italic" }}>{p.type}</td>
                    <td style={{ padding: "7px 10px", color: "#E2E2E8" }}>{p.default}</td>
                    <td style={{ padding: "7px 10px", color: "#555", fontSize: 11 }}>{p.note || ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Example */}
          <div style={{
            background: "#080810",
            border: "1px solid #1E1E28",
            borderRadius: 8,
            padding: "14px 16px",
          }}>
            <div style={{ fontSize: 10, color: "#444", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Usage</div>
            <pre style={{ margin: 0, fontSize: 12, color: "#C5C2D4", lineHeight: 1.7, overflowX: "auto" }}>{comp.example}</pre>
          </div>
        </div>
      </div>

      {/* Shared Reference Tables side by side */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        {/* Variants */}
        <div style={{ border: "1px solid #1E1E28", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ background: "#141418", padding: "10px 14px", borderBottom: "1px solid #1E1E28" }}>
            <span style={{ fontSize: 10, color: "#555", letterSpacing: 2, textTransform: "uppercase" }}>variant=</span>
          </div>
          <div>
            {variantRows.map(v => (
              <div key={v.name} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "8px 14px", borderBottom: "1px solid #111",
              }}>
                <div style={{
                  width: 28, height: 20, borderRadius: 4,
                  background: v.stripe
                    ? "repeating-linear-gradient(45deg,#ccc 0,#ccc 2px,transparent 2px,transparent 8px)"
                    : v.bg,
                  border: `1px solid ${v.border}`,
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: 12, color: "#C5C2D4", fontWeight: 500 }}>{v.name}</span>
                <span style={{ fontSize: 11, color: "#444", marginLeft: "auto" }}>{v.bg === "transparent" ? "transparent" : v.bg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Padding */}
        <div style={{ border: "1px solid #1E1E28", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ background: "#141418", padding: "10px 14px", borderBottom: "1px solid #1E1E28" }}>
            <span style={{ fontSize: 10, color: "#555", letterSpacing: 2, textTransform: "uppercase" }}>padded=</span>
          </div>
          <div>
            {paddingRows.map(p => (
              <div key={p.name} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "8px 14px", borderBottom: "1px solid #111",
              }}>
                <div style={{ width: 60, flexShrink: 0 }}>
                  <div style={{
                    background: "#2D6BE422",
                    border: "1px solid #2D6BE444",
                    borderRadius: 3,
                    height: 16,
                    width: Math.max(4, p.px * 2 + 4),
                  }} />
                </div>
                <span style={{ fontSize: 12, color: "#C5C2D4", fontWeight: 500 }}>{p.name}</span>
                <span style={{ fontSize: 11, color: "#444", marginLeft: "auto" }}>{p.px}px</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Behavior note */}
      <div style={{
        border: "1px solid #1E1E28", borderRadius: 10,
        padding: "12px 16px",
        display: "flex", gap: 24, flexWrap: "wrap",
      }}>
        <div style={{ fontSize: 10, color: "#444", letterSpacing: 2, textTransform: "uppercase", alignSelf: "center", minWidth: 70 }}>behavior=</div>
        {[
          { v: "padding", d: "Adds padding below content (iOS default)" },
          { v: "height", d: "Shrinks view height (Android default)" },
          { v: "position", d: "Moves view absolutely upward" },
        ].map(b => (
          <div key={b.v} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: 12, color: "#2D6BE4", fontWeight: 600 }}>{b.v}</span>
            <span style={{ fontSize: 11, color: "#555" }}>{b.d}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, fontSize: 11, color: "#333", textAlign: "center" }}>
        All components extend RNKeyboardAvoidingViewProps · forwardRef-compatible · Platform-aware defaults
      </div>
    </div>
  );
}