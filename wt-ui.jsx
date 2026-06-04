// Reusable UI primitives for the Dynamic Content Strategy walkthrough.

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ---------- Brand chrome ----------

function DHLogo({ size = 28, color = "var(--dh-red)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" aria-label="Delivery Hero">
      <path fillRule="evenodd" clipRule="evenodd"
      d="M419.714 248.327c-.116.054-.179.107-.268.152l-46.63 19.034-1.431.653-11.357 51.964c-.76 1.772-3.032 2.193-4.561.707l-33.975-40.188-.161-.116-191.563 82.246c-.161.09-.349.126-.536.126a1.283 1.283 0 01-1.288-1.289c0-.412.205-.787.527-1.029l165.61-124.036-20.954-47.875c-1.046-2.175.885-4.501 3.443-3.857h.018l50.752 12.51 39.404-35.096v.009c1.699-1.333 4.015-.385 4.445 1.727l3.845 52.725 45.44 26.604c1.95 1.235 1.673 4.125-.76 5.029zM396.552 97.633C337.759 74.546 273.1 91.88 233.196 136.246l-155.7 166.9c-2.093 2.246-1.127 5.065 1.43 5.441l41.479 2.55c3.327.206 3.738 3.061 2.066 5.02L21.073 425.598c-1.77 1.897.358 4.877 2.781 4.126l144.772-45.772c3.059-1.056 5.42 1.673 4.123 4.071l-19.362 34.255c-1.002 1.951.877 4.627 3.309 4.448l208.715-46.515c49.876-7.901 94.404-41.208 114.196-91.642 29.807-75.687-7.432-161.164-83.055-190.936z"
      fill={color} />
    </svg>);
}

// ---------- Chips & tags ----------

function Tag({ tone = "neutral", children, soft = true, style = {}, mono = false }) {
  const tones = {
    neutral: { bg: "var(--surface-2)", fg: "var(--ink-soft)", bd: "var(--border)" },
    red: { bg: "var(--red-tint)", fg: "var(--dh-red)", bd: "var(--red-edge)" },
    green: { bg: "var(--green-tint)", fg: "var(--green-2)", bd: "var(--green-edge)" },
    amber: { bg: "var(--amber-tint)", fg: "var(--amber)", bd: "var(--amber-edge)" },
    blue: { bg: "var(--blue-tint)", fg: "var(--blue-2)", bd: "var(--blue-edge)" },
    ink: { bg: "var(--ink)", fg: "#fff", bd: "var(--ink)" }
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "3px 9px",
      fontFamily: mono ? "var(--mono)" : "var(--font)",
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: mono ? 0 : 0.02,
      color: t.fg,
      background: soft ? t.bg : t.fg,
      border: `1px solid ${t.bd}`,
      borderRadius: 999,
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...style
    }}>
      {children}
    </span>);
}

function Dot({ tone = "neutral", size = 8, pulse = false, style = {} }) {
  const colors = { neutral: "var(--ink-faint)", red: "var(--dh-red)", green: "var(--green)", amber: "var(--amber)", blue: "var(--blue)" };
  return (
    <span style={{
      display: "inline-block", width: size, height: size, borderRadius: "50%",
      background: colors[tone] || colors.neutral,
      animation: pulse ? "pulseDot 1.8s ease-in-out infinite" : undefined,
      flex: "0 0 auto",
      ...style
    }} />);
}

function Kbd({ children }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", padding: "2px 6px",
      fontFamily: "var(--mono)", fontSize: 11, fontWeight: 600,
      color: "var(--ink-soft)", background: "var(--surface)",
      border: "1px solid var(--border)",
      borderBottom: "2px solid var(--border-strong)",
      borderRadius: 4
    }}>{children}</span>);
}

// ---------- Surfaces ----------

function Card({ children, padded = true, style = {}, accent, hover = false, className }) {
  const accentBorderTop = accent ? { borderTop: `3px solid ${accent}` } : {};
  return (
    <div className={className} style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: padded ? 16 : 0,
      boxShadow: "var(--shadow-1)",
      transition: hover ? "border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease" : undefined,
      ...accentBorderTop,
      ...style
    }}>
      {children}
    </div>);
}

function Stat({ value, label, tone = "ink", size = "md", style = {} }) {
  const valColor = { ink: "var(--ink)", red: "var(--dh-red)", green: "var(--green-2)", amber: "var(--amber)", blue: "var(--blue-2)" }[tone] || "var(--ink)";
  const sizes = { sm: 28, md: 40, lg: 56, xl: 72 };
  return (
    <div style={style}>
      <div style={{
        fontFamily: "var(--font)", fontWeight: 700,
        fontSize: sizes[size], lineHeight: 1,
        color: valColor, letterSpacing: "-0.02em"
      }}>{value}</div>
      <div style={{ marginTop: 6, fontSize: 13, color: "var(--ink-mute)", lineHeight: 1.4 }}>{label}</div>
    </div>);
}

function Eyebrow({ children, tone, style = {} }) {
  const colors = { red: "var(--dh-red)", green: "var(--green-2)", amber: "var(--amber)", blue: "var(--blue-2)" };
  return (
    <div className="eyebrow" style={{ color: tone ? colors[tone] : "var(--ink-mute)", ...style }}>{children}</div>);
}

// ---------- StepFrame ----------

function StepFrame({ kicker, eyebrowTone, title, lede, children, padding = "0", maxWidth = 1100 }) {
  return (
    <div style={{ maxWidth, margin: "0 auto", padding }}>
      {kicker && <Eyebrow tone={eyebrowTone} style={{ marginBottom: 8 }}>{kicker}</Eyebrow>}
      {title &&
      <h1 style={{
        margin: 0,
        fontFamily: "var(--font)", fontWeight: 700,
        fontSize: 38, lineHeight: 1.1,
        letterSpacing: "-0.025em",
        color: "var(--ink)",
        textWrap: "balance",
        maxWidth: 900
      }}>{title}</h1>
      }
      {lede &&
      <p style={{
        margin: "12px 0 0",
        fontSize: 16, lineHeight: 1.45,
        color: "var(--ink-soft)",
        maxWidth: 760,
        fontWeight: 400,
        textWrap: "pretty"
      }}>{lede}</p>
      }
      {children && <div style={{ marginTop: title || lede ? 24 : 0 }}>{children}</div>}
    </div>);
}

// ---------- Connector arrow (simple svg) ----------

function ArrowRight({ size = 18, color = "var(--ink-mute)", style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);
}
function ArrowDown({ size = 18, color = "var(--ink-mute)", style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M12 5v14M6 13l6 6 6-6" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);
}

function CheckIcon({ size = 16, color = "var(--green-2)", animate = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill={color} fillOpacity={animate ? "0.12" : "0.10"} stroke={color} strokeWidth="1.4" />
      <path d="M7.5 12.5l3 3 6-6.5"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      strokeDasharray="24" strokeDashoffset={animate ? "24" : "0"}
      style={animate ? { animation: "drawTick 380ms ease-out 80ms forwards" } : undefined} />

    </svg>);
}

function XIcon({ size = 16, color = "var(--dh-red)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.10" stroke={color} strokeWidth="1.4" />
      <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>);
}

// ---------- ResolvedText ----------

function ResolvedText({ children, resolved, animate = true }) {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{
        color: resolved ? "var(--ink-mute)" : "var(--ink)",
        opacity: resolved ? 0.7 : 1,
        transition: "color 320ms ease, opacity 320ms ease"
      }}>{children}</span>
      {resolved &&
      <span style={{
        position: "absolute", left: -1, right: -1, top: "calc(50% + 0px)",
        height: 1.5,
        background: "var(--green-2)",
        transformOrigin: "left center",
        animation: animate ? "ledgerStrike 320ms ease-out forwards" : undefined,
        transform: animate ? "scaleX(0)" : "scaleX(1)"
      }} />
      }
    </span>);
}

Object.assign(window, {
  DHLogo, Tag, Dot, Kbd,
  Card, Stat, Eyebrow,
  StepFrame, ArrowRight, ArrowDown, CheckIcon, XIcon,
  ResolvedText
});