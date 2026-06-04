// var-app.jsx — Variants Steer Co page app shell

const { useState: uVS, useEffect: uVE, useMemo: uVM, useCallback: uVCb } = React;

const VAR_STEPS = [
  { kind: "cover", title: "Cover" },
  { kind: "step1", title: "Slide 1 · Commercial Anchor" },
  { kind: "step2", title: "Slide 2 · Strategic Scope" },
  { kind: "step3", title: "Slide 3 · Variant Grouping Mechanism" },
  { kind: "step4", title: "Slide 4 · Internal Evaluation" },
  { kind: "step5", title: "Slide 5 · Gray Area Cases" },
  { kind: "step6", title: "Slide 6 · Platform Disalignment" },
  { kind: "step7", title: "Slide 7 · Platform Validation Metrics" },
  { kind: "step8", title: "Slide 8 · Engineering Under Fire" },
  { kind: "step9", title: "Slide 9 · Mass Scaling" },
  { kind: "step10", title: "Slide 10 · Roadmap" },
  { kind: "step11", title: "Slide 11 · What's In Progress" },
  { kind: "step12", title: "Slide 12 · Long-Term Vision" },
];

// ─────────────────────────────────────────
// Header
// ─────────────────────────────────────────
function VarHeader({ idx, totalSteps, step }) {
  var isSlide = step.kind !== "cover";

  return (
    <header className="no-print" style={{
      position: "sticky", top: 0, zIndex: 20,
      background: "color-mix(in oklab, var(--bg) 90%, transparent)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <DHLogo size={28} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)" }}>Product Variants</div>
            <div className="eyebrow" style={{ marginTop: 2 }}>Steer Co</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Tag tone="amber">{isSlide ? "Slide " + idx : "Cover"}</Tag>
          <div style={{ fontSize: 12.5, color: "var(--ink-mute)", fontFamily: "var(--mono)" }}>
            <span style={{ color: "var(--ink)", fontWeight: 600 }}>{idx + 1}</span> / {totalSteps}
          </div>
        </div>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────
// Bottom nav
// ─────────────────────────────────────────
function VarNavBar({ idx, total, onPrev, onNext, onGoto }) {
  var isCover = idx === 0;
  var isLast  = idx === total - 1;
  return (
    <div className="no-print" style={{
      position: "sticky", bottom: 0, zIndex: 15, marginTop: 40,
      padding: "16px 0 24px",
      background: "linear-gradient(0deg, var(--bg) 70%, color-mix(in oklab, var(--bg) 0%, transparent))",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
    }}>
      <button onClick={onPrev} disabled={isCover} style={varBtn(false, isCover)}>← Back</button>

      <div style={{ display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap", justifyContent: "center" }}>
        {VAR_STEPS.map(function (s, i) {
          var isCur = i === idx;
          return (
            <button key={i} onClick={function () { onGoto(i); }} title={s.title}
              style={{
                width: isCur ? 24 : 8, height: 8, padding: 0,
                background: isCur ? "var(--dh-red)" : "var(--border-strong)",
                border: "none", borderRadius: 999, cursor: "pointer",
                transition: "all 180ms ease",
              }} />
          );
        })}
      </div>

      <button onClick={onNext} disabled={isLast} style={varBtn(true, isLast)}>
        {isLast ? "End" : "Next →"}
      </button>
    </div>
  );
}

function varBtn(primary, disabled) {
  return {
    padding: "10px 18px",
    fontFamily: "var(--font)", fontWeight: 600, fontSize: 14,
    background: primary ? (disabled ? "var(--ink-mute)" : "var(--ink)") : "var(--surface)",
    color: primary ? "#fff" : "var(--ink)",
    border: "1px solid " + (primary ? (disabled ? "var(--ink-mute)" : "var(--ink)") : "var(--border)"),
    borderRadius: 999, cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "all 160ms ease",
    boxShadow: primary && !disabled ? "var(--shadow-1)" : "none",
  };
}

// ─────────────────────────────────────────
// App
// ─────────────────────────────────────────
function VarApp() {
  var initial = (function () {
    var h = parseInt((window.location.hash || "").replace("#", ""), 10);
    return isNaN(h) ? 0 : Math.max(0, Math.min(VAR_STEPS.length - 1, h));
  }());

  var idxState = uVS(initial);
  var idx    = idxState[0];
  var setIdx = idxState[1];

  uVE(function () {
    window.location.hash = String(idx);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [idx]);

  var goTo = uVCb(function (n) { setIdx(Math.max(0, Math.min(VAR_STEPS.length - 1, n))); }, []);
  var next = uVCb(function () { goTo(idx + 1); }, [idx, goTo]);
  var prev = uVCb(function () { goTo(idx - 1); }, [idx, goTo]);

  uVE(function () {
    function onKey(e) {
      if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === "Home") { e.preventDefault(); goTo(0); }
      else if (e.key === "End")  { e.preventDefault(); goTo(VAR_STEPS.length - 1); }
    }
    window.addEventListener("keydown", onKey);
    return function () { window.removeEventListener("keydown", onKey); };
  }, [next, prev, goTo]);

  var step = VAR_STEPS[idx];
  var ctx  = uVM(function () { return { goTo: goTo, stepIdx: idx }; }, [idx, goTo]);

  var stepEl = (function () {
    switch (step.kind) {
      case "cover": return React.createElement(VarCover, { ctx: ctx });
      case "step1": return React.createElement(VarStep1, { ctx: ctx });
      case "step2": return React.createElement(VarStep2, { ctx: ctx });
      case "step3": return React.createElement(VarStep3, { ctx: ctx });
      case "step4": return React.createElement(VarStep4, { ctx: ctx });
      case "step5": return React.createElement(VarStep5, { ctx: ctx });
      case "step6": return React.createElement(VarStep6, { ctx: ctx });
      case "step7": return React.createElement(VarStep7, { ctx: ctx });
      case "step8": return React.createElement(VarStep8, { ctx: ctx });
      case "step9": return React.createElement(VarStep9, { ctx: ctx });
      case "step10": return React.createElement(VarStep10, { ctx: ctx });
      case "step11": return React.createElement(VarStep11, { ctx: ctx });
      case "step12": return React.createElement(VarStep12, { ctx: ctx });
      default:      return null;
    }
  }());

  return (
    <div>
      <VarHeader idx={idx} totalSteps={VAR_STEPS.length} step={step} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 32px 0" }}>
        <main>
          <div key={idx} data-screen-label={step.title} className="fade-up" style={{ minHeight: "60vh" }}>
            {stepEl}
          </div>
          <VarNavBar idx={idx} total={VAR_STEPS.length} onPrev={prev} onNext={next} onGoto={goTo} />
        </main>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(VarApp, null));