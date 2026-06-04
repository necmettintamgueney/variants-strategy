// var-steps.jsx — Step renderers for Variants Steer Co walkthrough
const { useState: useVS, useEffect: useVE } = React;

// ======================================================
// COVER
// ======================================================
function VarCover({ ctx }) {
  var stats = [
  { v: "12", l: "narrative slides" },
  { v: "3", l: "platforms" },
  { v: "750K", l: "products processed" },
  { v: "~€12.2M", l: "combined GMV opportunity" }];

  return (
    <div style={{ minHeight: "72vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
      <div style={{ maxWidth: 900, width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <DHLogo size={36} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)", lineHeight: 1 }}>Delivery Hero</div>
            <div className="eyebrow" style={{ marginTop: 4 }}>Q-Commerce · Dynamic Content</div>
          </div>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", background: "var(--amber-tint)", border: "1px solid var(--amber-edge)", borderRadius: 999, marginBottom: 22 }}>
          <Dot tone="amber" size={7} pulse />
          <span style={{ fontSize: 12, color: "var(--amber)", fontWeight: 600 }}>Steer Co</span>
        </div>
        <h1 style={{ margin: 0, fontFamily: "var(--font)", fontWeight: 800, fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "var(--ink)", textWrap: "balance" }}>
          Product<br />
          <span style={{ color: "var(--dh-red)" }}>Variants</span>
        </h1>
        <p style={{ marginTop: 20, fontSize: 20, lineHeight: 1.45, color: "var(--ink-soft)", maxWidth: 660, fontWeight: 400, textWrap: "pretty" }}>
          Commercial anchor to long-term vision — a complete account of the Q1/Q2 variants initiative across Talabat, PedidosYa, and Pandora.
        </p>
        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {stats.map(function (s, i) {
            return (
              <Card key={i} padded style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 700, fontSize: 28, color: "var(--ink)", letterSpacing: "-0.025em", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: 12, color: "var(--ink-mute)", marginTop: 6 }}>{s.l}</div>
              </Card>);
          })}
        </div>
        <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 14, color: "var(--ink-mute)", fontSize: 14 }}>
          Use <Kbd>→</Kbd> <Kbd>←</Kbd> to navigate · <span style={{ fontFamily: "var(--mono)", fontSize: 12 }}>12 slides + cover</span>
        </div>
      </div>
    </div>);
}

// ======================================================
// STEP 1 — Commercial Anchor
// ======================================================
function VarStep1({ ctx }) {
  var platforms = [
  { name: "Talabat", region: "MENA", gmv: "€7.8M", detail: "Packaged Food & Beverages, Packaged Non-Food", accent: "var(--dh-red)", tint: "var(--red-tint)", edge: "var(--red-edge)" },
  { name: "PedidosYa", region: "LATAM", gmv: "€3.56M", detail: "87,765 products · 33 L3 master categories", accent: "var(--blue)", tint: "var(--blue-tint)", edge: "var(--blue-edge)" },
  { name: "Pandora", region: "APAC", gmv: "€840k", detail: "Packaged Food · Singapore & Malaysia blueprint", accent: "var(--purple)", tint: "var(--purple-tint)", edge: "#D9C2E8" }];

  return (
    <StepFrame kicker="Slide 1 · Commercial Anchor" eyebrowTone="red" title="Why We Invest in Variants" lede="Connecting cross-platform data and revenue opportunities to our core mission.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card padded style={{ background: "var(--red-tint)", borderColor: "var(--red-edge)" }}>
            <Eyebrow tone="red" style={{ marginBottom: 10 }}>The Root Problem</Eyebrow>
            <div style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink)" }}>
              Similar versions of the same product are <strong>not listed together</strong> in our catalog. Cross-sell mechanics don't capture "same product" discovery — no basket-based configurations, no matching-attribute grouping.
            </div>
          </Card>
          <Card padded>
            <Eyebrow style={{ marginBottom: 14 }}>Demand Validated · Talabat Historical Data</Eyebrow>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 36, color: "var(--green-2)", letterSpacing: "-0.025em", lineHeight: 1 }}>6.5%</div>
                <div style={{ fontSize: 12.5, color: "var(--ink-mute)", marginTop: 8, lineHeight: 1.5 }}>of variant PDP sessions → users added multiple SKUs to cart</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 36, color: "var(--green-2)", letterSpacing: "-0.025em", lineHeight: 1 }}>+1.77%</div>
                <div style={{ fontSize: 12.5, color: "var(--ink-mute)", marginTop: 8, lineHeight: 1.5 }}>increase in average unique items per user</div>
              </div>
            </div>
          </Card>
          <Card padded style={{ background: "var(--blue-tint)", borderColor: "var(--blue-edge)" }}>
            <Eyebrow tone="blue" style={{ marginBottom: 8 }}>Industry Benchmark</Eyebrow>
            <div style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.55 }}>
              <strong>"Flavor"</strong> is the <strong>2nd most common variant</strong> in grocery — deployed by <strong>4 of 9 major platforms</strong> surveyed.
            </div>
          </Card>
        </div>
        <div>
          <Eyebrow style={{ marginBottom: 14 }}>Quantified Revenue Opportunity</Eyebrow>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {platforms.map(function (p, i) {
              return (
                <div key={i} style={{ padding: "18px 20px", background: p.tint, border: "1px solid " + p.edge, borderLeft: "4px solid " + p.accent, borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: 17, color: "var(--ink)" }}>{p.name}</span>
                      <Tag tone="neutral">{p.region}</Tag>
                    </div>
                    <div style={{ fontSize: 12.5, color: "var(--ink-mute)" }}>{p.detail}</div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 20 }}>
                    <div style={{ fontWeight: 800, fontSize: 28, color: p.accent, letterSpacing: "-0.02em", lineHeight: 1 }}>{p.gmv}</div>
                    <div style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 3 }}>incr. GMV</div>
                  </div>
                </div>);
            })}
            <div style={{ padding: "16px 20px", background: "var(--ink)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>Combined opportunity</span>
              <span style={{ fontWeight: 800, fontSize: 28, color: "#fff", letterSpacing: "-0.02em" }}>~€12.2M</span>
            </div>
          </div>
        </div>
      </div>
    </StepFrame>);
}

// ======================================================
// STEP 2 — Strategic Scope (Two-Column Layout)
// ======================================================
function VarStep2({ ctx }) {
  // Product Types - separate list
  var productTypes = [
    { name: "Ultra Fresh / Loose Food & Beverages", sel: false },
    { name: "Packaged Food and Beverages", sel: true },
    { name: "Packaged Non Food", sel: true },
    { name: "Smoking / Tobacco", sel: false },
    { name: "Pharma", sel: false },
    { name: "Electronics", sel: false },
    { name: "General Merchandise", sel: false }
  ];

  // Variant Attributes - separate list (no duplicates)
  var attributes = [
    { name: "Item Size (S, M, L)", sel: true },
    { name: "Flavor", sel: true },
    { name: "Country of Origin", sel: false },
    { name: "Net Size", sel: false },
    { name: "Color", sel: false },
    { name: "Fat Type/Percent", sel: false },
    { name: "Strength (Dosage)", sel: false },
    { name: "Scent", sel: false },
    { name: "Age Group", sel: false },
    { name: "Storage (Memory)", sel: false },
    { name: "Lens Power", sel: false }
  ];

  function renderList(items) {
    return items.map(function (t, i) {
      return (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", background: t.sel ? "var(--ink)" : "var(--surface-2)", border: "1px solid " + (t.sel ? "transparent" : "var(--border)"), borderRadius: 8 }}>
          {t.sel ?
          <CheckIcon size={14} /> :
          <span style={{ width: 14, height: 14, flexShrink: 0, display: "inline-block" }}></span>
          }
          <span style={{ fontSize: 13, fontWeight: t.sel ? 700 : 400, color: t.sel ? "#fff" : "var(--ink-mute)", flex: 1 }}>{t.name}</span>
          {t.sel && <Tag tone="neutral" style={{ background: "rgba(255,255,255,0.18)", color: "#fff", border: "none", fontSize: 10 }}>Q1/Q2</Tag>}
        </div>);
    });
  }

  return (
    <StepFrame kicker="Slide 2 · Strategic Scope" eyebrowTone="amber" title="Narrowing the Horizon for Q1/Q2" lede="Balancing a massive catalog footprint against speed-to-market.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 180px 1fr", gap: 20 }}>
        <Card padded>
          <Eyebrow style={{ marginBottom: 6 }}>Product Types</Eyebrow>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 16 }}>
            <span style={{ fontWeight: 700, fontSize: 40, color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1 }}>7</span>
            <span style={{ fontSize: 13, color: "var(--ink-mute)" }}>unique types in catalog</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>{renderList(productTypes)}</div>
        </Card>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ padding: "18px 14px", background: "var(--amber-tint)", border: "1px solid var(--amber-edge)", borderRadius: "var(--radius-lg)", textAlign: "center", width: "100%" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.025em" }}>7 → 2</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "var(--amber)", letterSpacing: "0.08em", marginTop: 3 }}>PRODUCT TYPES</div>
            <div style={{ height: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ArrowDown size={14} color="var(--amber)" />
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.025em" }}>11 → 2</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "var(--amber)", letterSpacing: "0.08em", marginTop: 3 }}>ATTRIBUTES</div>
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-mute)", textAlign: "center", lineHeight: 1.55 }}>Validate logic under optimal conditions first</div>
        </div>

        <Card padded>
          <Eyebrow style={{ marginBottom: 6 }}>Variant Attributes</Eyebrow>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 16 }}>
            <span style={{ fontWeight: 700, fontSize: 40, color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1 }}>11</span>
            <span style={{ fontSize: 13, color: "var(--ink-mute)" }}>distinct attributes</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>{renderList(attributes)}</div>
        </Card>
      </div>
      <Card padded style={{ marginTop: 20, background: "var(--amber-tint)" }}>
        <Eyebrow tone="amber" style={{ marginBottom: 8 }}>Why This Scope?</Eyebrow>
        <div style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.6 }}>
          These two product types cover the majority of strategic targets from <strong>Talabat</strong>, <strong>Foodpanda APAC</strong>, and <strong>PedidosYa</strong>. Focusing on them enabled us to go live ASAP and deliver value quickly. That's why we kept the early development and evaluation phase simple — speed to market over complexity.
        </div>
      </Card>
    </StepFrame>);
}

// ======================================================
// STEP 3 — The Variant Grouping Mechanism (NEW)
// ======================================================
function VarStep3({ ctx }) {
  // Visual flow steps with icons
  var flowSteps = [
    {
      title: "Products",
      subtitle: "To Be Grouped",
      example: "Filtered catalog",
      icon: "📦"
    },
    {
      title: "Filter",
      subtitle: "Brand + Type + Category",
      example: "Same brand, same type",
      icon: "🔍"
    },
    {
      title: "Enrich",
      subtitle: "Extract Attributes",
      example: "Size: 500ml, Flavor: Chocolate",
      icon: "🤖"
    },
    {
      title: "Group",
      subtitle: "Match Variants",
      example: "4 products → 1 group",
      icon: "🔗"
    },
    {
      title: "Live",
      subtitle: "PIM Ready",
      example: "Customer sees variants",
      icon: "✅"
    }
  ];

  // Example products for visual - Lay's chips
  var exampleProducts = [
    { name: "Lay's Classic 40g", size: "40g", flavor: "Classic" },
    { name: "Lay's Classic 100g", size: "100g", flavor: "Classic" },
    { name: "Lay's BBQ 40g", size: "40g", flavor: "BBQ" },
    { name: "Lay's BBQ 100g", size: "100g", flavor: "BBQ" }
  ];

  return (
    <StepFrame kicker="Slide 3 · The Variant Grouping Mechanism" eyebrowTone="blue" title="How It Works" lede="From raw catalog to live variant groups in 5 automated steps.">
      {/* Visual Flow */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "24px 20px",
        background: "var(--surface-2)",
        borderRadius: "var(--radius-xl)",
        marginBottom: 24,
        overflowX: "auto"
      }}>
        {flowSteps.map(function (step, i) {
          return (
            <React.Fragment key={i}>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minWidth: 100
              }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--surface)",
                  border: "2px solid var(--blue-edge)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  marginBottom: 8
                }}>{step.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "var(--ink)" }}>{step.title}</div>
                <div style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 2 }}>{step.subtitle}</div>
              </div>
              {i < flowSteps.length - 1 && (
                <ArrowRight size={20} color="var(--blue)" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Concrete Example */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <Card padded style={{ background: "var(--blue-tint)", borderColor: "var(--blue-edge)" }}>
          <Eyebrow tone="blue" style={{ marginBottom: 12 }}>Concrete Example</Eyebrow>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: 12 }}>
            4 separate SKUs become 1 variant group
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {exampleProducts.map(function (p, i) {
              return (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 12px",
                  background: "var(--surface)",
                  borderRadius: "var(--radius)",
                  fontSize: 12
                }}>
                  <span style={{ flex: 1, fontWeight: 500, color: "var(--ink)" }}>{p.name}</span>
                  <Tag tone="neutral" style={{ fontSize: 10 }}>{p.size}</Tag>
                  <Tag tone="neutral" style={{ fontSize: 10 }}>{p.flavor}</Tag>
                </div>
              );
            })}
          </div>
        </Card>

        <Card padded>
          <Eyebrow style={{ marginBottom: 12 }}>What the Customer Sees</Eyebrow>
          <div style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            background: "var(--surface)"
          }}>
            <div style={{
              padding: "12px 16px",
              borderBottom: "1px solid var(--border)",
              fontWeight: 600,
              fontSize: 14,
              color: "var(--ink)"
            }}>Lay's Potato Chips</div>
            <div style={{ padding: 16 }}>
              <div style={{ fontSize: 12, color: "var(--ink-mute)", marginBottom: 8 }}>Select Size:</div>
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <span style={{ padding: "6px 12px", background: "var(--ink)", color: "#fff", borderRadius: 999, fontSize: 12 }}>40g</span>
                <span style={{ padding: "6px 12px", background: "var(--surface-2)", borderRadius: 999, fontSize: 12 }}>100g</span>
              </div>
              <div style={{ fontSize: 12, color: "var(--ink-mute)", marginBottom: 8 }}>Select Flavor:</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ padding: "6px 12px", background: "var(--ink)", color: "#fff", borderRadius: 999, fontSize: 12 }}>Classic</span>
                <span style={{ padding: "6px 12px", background: "var(--surface-2)", borderRadius: 999, fontSize: 12 }}>BBQ</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Key Benefit */}
      <Card padded style={{ marginTop: 20, background: "var(--green-tint)", borderColor: "var(--green-edge)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <CheckIcon size={20} />
          <div style={{ fontSize: 15, color: "var(--ink)" }}>
            <strong>Zero manual work</strong> — the entire pipeline runs automatically, from products to be grouped to customer-facing variant picker
          </div>
        </div>
      </Card>
    </StepFrame>);
}

// ======================================================
// STEP 4 — Internal Evaluation (Updated - clearer false-friend approach)
// ======================================================
function VarStep4({ ctx }) {
  var breakdown = [
  { pct: 42, label: "Correct Match", desc: "Flawlessly categorized as pure size or flavor variants under current rules.", color: "var(--green)", bg: "var(--green-tint)", edge: "var(--green-edge)" },
  { pct: 45, label: "The Gray Area", desc: "Items customers view as variants but outside fixed definitions — main ingredients, protein types, textures.", color: "var(--amber)", bg: "var(--amber-tint)", edge: "var(--amber-edge)" },
  { pct: 8, label: "Missing Attributes", desc: "Variant relationships identified, but flavor information completely absent at source.", color: "var(--dh-red)", bg: "var(--red-tint)", edge: "var(--red-edge)" },
  { pct: 4, label: "Pure Errors", desc: "Structurally incorrect matches — not viable for any grouping.", color: "var(--ink-faint)", bg: "var(--surface-2)", edge: "var(--border)" }];

  return (
    <StepFrame kicker="Slide 4 · Internal Evaluation" eyebrowTone="green"
    title="Validation Results & Performance Baseline"
    lede="5,000-product deep dive to validate the grouping logic and establish accuracy benchmarks.">
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 28 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22, flexWrap: "wrap" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 32, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1 }}>5,000</div>
              <div style={{ fontSize: 11.5, color: "var(--ink-mute)", marginTop: 4 }}>products reviewed</div>
            </div>
            <Tag tone="neutral" style={{ marginLeft: "auto" }}>3–4 days</Tag>
          </div>
          <div style={{ height: 20, borderRadius: 10, overflow: "hidden", display: "flex", marginBottom: 20 }}>
            {breakdown.map(function (b, i) {return <div key={i} style={{ flex: b.pct, background: b.color }} />;})}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {breakdown.map(function (b, i) {return (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: 14, alignItems: "flex-start", padding: "14px 16px", background: b.bg, border: "1px solid " + b.edge, borderRadius: "var(--radius)" }}>
                  <div style={{ fontWeight: 700, fontSize: 24, color: b.color, letterSpacing: "-0.02em", lineHeight: 1 }}>{b.pct}%</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: 3 }}>{b.label}</div>
                    <div style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.45 }}>{b.desc}</div>
                  </div>
                </div>);
              })}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card padded style={{ background: "var(--green-tint)", borderColor: "var(--green-edge)" }}>
            <Eyebrow tone="green" style={{ marginBottom: 14 }}>Initial Performance Results</Eyebrow>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 40, color: "var(--green-2)", letterSpacing: "-0.03em", lineHeight: 1 }}>80%</div>
                <div style={{ fontSize: 12.5, color: "var(--ink-mute)", marginTop: 6, lineHeight: 1.4 }}>group accuracy (8/10 correctly matched)</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 40, color: "var(--green-2)", letterSpacing: "-0.03em", lineHeight: 1 }}>93%</div>
                <div style={{ fontSize: 12.5, color: "var(--ink-mute)", marginTop: 6, lineHeight: 1.4 }}>discovery rate (93/100 true variant pairs found)</div>
              </div>
            </div>
          </Card>
          <Card padded style={{ background: "var(--amber-tint)", borderColor: "var(--amber-edge)" }}>
            <Eyebrow tone="amber" style={{ marginBottom: 8 }}>The Core Human Realization</Eyebrow>
            <div style={{ fontSize: 15, fontStyle: "italic", color: "var(--ink)", lineHeight: 1.6, borderLeft: "3px solid var(--amber)", paddingLeft: 14 }}>
              "If a customer sees these products nested together on the app interface, would they mind?"
            </div>
            <div style={{ marginTop: 12, fontSize: 13, color: "var(--ink-mute)", lineHeight: 1.5 }}>Catalog classification is highly subjective. We shifted from rigid data metrics to a UX-first evaluation lens.</div>
          </Card>
          <Card padded accent="var(--green-2)">
            <Eyebrow tone="green" style={{ marginBottom: 10 }}>How We Achieved These Numbers</Eyebrow>
            <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.6, fontWeight: 600, marginBottom: 10 }}>
              We immediately leveraged a "false-friend" approach to filter out the 45% gray area from the grouping output.
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5 }}>
              This AI-driven logic matrix was trained to distinguish true flavor variants from lookalikes — enabling us to achieve <strong style={{ color: "var(--green-2)" }}>80% accuracy</strong> and <strong style={{ color: "var(--green-2)" }}>93% discovery rate</strong> by systematically removing off-target and out-of-scope groupings.
            </div>
          </Card>
        </div>
      </div>
    </StepFrame>);
}

// ======================================================
// STEP 5 — Gray Area Cases
// ======================================================
function VarStep5({ ctx }) {
  // Examples of gray area - protein type vs flavor confusion
  var grayAreaExamples = [
    { product: "Instant Noodles", attribute: "Protein Type", values: ["Beef", "Chicken", "Pork", "Shrimp"], confusion: "Model thinks these are flavor variants, but they're actually protein types" },
    { product: "Instant Soup", attribute: "Protein Type", values: ["Chicken", "Mushroom", "Seafood"], confusion: "Main ingredient differences, not flavor variations" },
    { product: "Protein Bars", attribute: "Protein Source", values: ["Whey", "Plant-Based", "Casein"], confusion: "Different protein sources, not flavors" },
    { product: "Yogurt", attribute: "Fat Content", values: ["Full Fat", "Low Fat", "Fat-Free"], confusion: "Nutritional variation, not a flavor difference" },
    { product: "Coffee", attribute: "Roast Level", values: ["Light", "Medium", "Dark"], confusion: "Roast profile, not a flavor variant" }
  ];

  return (
    <StepFrame kicker="Slide 5 · Gray Area Cases" eyebrowTone="amber" title="The Gray Area Challenge" lede="Between internal evaluation and platform disagreement, visualizing the cases that fall outside fixed definitions.">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Visual Example */}
        <Card padded style={{ background: "var(--amber-tint)", borderColor: "var(--amber-edge)" }}>
          <Eyebrow tone="amber" style={{ marginBottom: 14 }}>Example: Instant Noodles</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--dh-red)", marginBottom: 8, textTransform: "uppercase" }}>❌ Model Thinks: Flavor Variants</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {["Beef", "Chicken", "Pork", "Shrimp"].map(function (v, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", background: "var(--red-tint)", borderRadius: "var(--radius)", border: "1px solid var(--red-edge)" }}>
                      <span style={{ fontSize: 18 }}>🍜</span>
                      <span style={{ fontSize: 13, color: "var(--ink)" }}>Instant Noodles - {v}</span>
                      <Tag tone="red" style={{ fontSize: 10, marginLeft: "auto" }}>Flavor: {v}</Tag>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--green-2)", marginBottom: 8, textTransform: "uppercase" }}>✓ Actually: Protein Type Variants</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {["Beef", "Chicken", "Pork", "Shrimp"].map(function (v, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", background: "var(--green-tint)", borderRadius: "var(--radius)", border: "1px solid var(--green-edge)" }}>
                      <span style={{ fontSize: 18 }}>🍜</span>
                      <span style={{ fontSize: 13, color: "var(--ink)" }}>Instant Noodles - {v}</span>
                      <Tag tone="green" style={{ fontSize: 10, marginLeft: "auto" }}>Protein: {v}</Tag>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>

        {/* False Friend Explanation */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <Card padded>
            <Eyebrow style={{ marginBottom: 10 }}>What is a "False Friend"?</Eyebrow>
            <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.6, marginBottom: 12 }}>
              In linguistics, a <strong>false friend</strong> is a word that looks or sounds similar to another word but has a different meaning.
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5, padding: "12px", background: "var(--surface-2)", borderRadius: "var(--radius)" }}>
              <strong style={{ color: "var(--ink)" }}>Example:</strong> The English word "Actual" looks like the Spanish "Actual" — but in Spanish it means "current," not "real."
            </div>
          </Card>
          <Card padded style={{ background: "var(--blue-tint)", borderColor: "var(--blue-edge)" }}>
            <Eyebrow tone="blue" style={{ marginBottom: 10 }}>Applied to Variants</Eyebrow>
            <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.6, marginBottom: 12 }}>
              We trained an AI matrix to recognize <strong>false friend attributes</strong> — attributes that look like flavor but aren't.
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Protein Type", "Main Ingredient", "Fat Content", "Roast Level", "Texture"].map(function (t, i) {
                return <Tag key={i} tone="neutral" style={{ fontSize: 11 }}>{t}</Tag>;
              })}
            </div>
            <div style={{ marginTop: 12, fontSize: 12, color: "var(--ink-soft)" }}>
              These are now filtered out before grouping, ensuring only true flavor variants are matched.
            </div>
          </Card>
        </div>

        {/* More Examples Table */}
        <Card padded>
          <Eyebrow style={{ marginBottom: 12 }}>More Gray Area Examples</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, fontSize: 11 }}>
            {grayAreaExamples.map(function (ex, i) {
              return (
                <div key={i} style={{ padding: "10px", background: "var(--surface-2)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                  <div style={{ fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>{ex.product}</div>
                  <div style={{ color: "var(--ink-mute)", marginBottom: 4 }}>{ex.attribute}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                    {ex.values.slice(0, 3).map(function (v, j) {
                      return <Tag key={j} tone="neutral" style={{ fontSize: 9 }}>{v}</Tag>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </StepFrame>);
}

// ======================================================
// STEP 6 — Platform Disalignment
// ======================================================
function VarStep6({ ctx }) {
  var platforms = [
  {
    name: "HungerStation", region: "MENA", stance: "Precision + Audit",
    color: "var(--dh-red)", tint: "var(--red-tint)", edge: "var(--red-edge)",
    outcome: "Aligned", outcomeTone: "green",
    desc: "Executed line-by-line validation audits. Flagged formatting issues and confirmed the ~8% missing attribute bottleneck, corrected inside the sprint.",
    bullets: ["Line-by-line validation audit", "Flagged formatting issues", "Confirmed 8% attribute gap", "Corrections made in-sprint"],
    boldAll: true
  },
  {
    name: "Pandora", region: "APAC", stance: "Precision Focus",
    color: "var(--purple)", tint: "var(--purple-tint)", edge: "#D9C2E8",
    outcome: "Aligned", outcomeTone: "green",
    desc: "Strict, risk-averse structure. Any variation based on main ingredients or non-flavor attributes was a hard stop.",
    bullets: ["Hard stop on non-flavor attrs", "Zero tolerance for ingredient-based grouping", "High bar, tightly scoped", "Requires clean attribute data"],
    boldAll: true
  },
  {
    name: "PedidosYa", region: "LATAM", stance: "Scale Focus · Operational Drag",
    color: "var(--amber)", tint: "var(--amber-tint)", edge: "var(--amber-edge)",
    outcome: "Delayed", outcomeTone: "amber",
    desc: "Wanted fast enablement and high error tolerance, but did not allocate review capacity and introduced late, unaligned scope requirements.",
    bullets: ["Speed over precision stance", "No review capacity allocated", "Late multi-attr stack demand", "Flavor + Sweetener Type stacked"],
    boldAll: true
  }];

  return (
    <StepFrame kicker="Slide 6 · Platform Disalignment" eyebrowTone="red" title="Platform Alignment Challenges" lede="Different platforms had different understandings and operational tolerances for what a 'variant' should be.">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {platforms.map(function (p, i) {
            return (
              <Card key={i} padded style={{ background: p.tint, borderColor: p.edge }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 17, color: "var(--ink)" }}>{p.name}</div>
                    <Tag tone="neutral" style={{ marginTop: 5 }}>{p.region}</Tag>
                  </div>
                  <Tag tone={p.outcomeTone}>{p.outcome}</Tag>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: p.color, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>{p.stance}</div>
                <div style={{ fontSize: 13.5, color: "var(--ink)", lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  {p.bullets.map(function (b, j) {
                    return (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.4 }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: p.color, flexShrink: 0, marginTop: 6 }}></span>
                        <span style={{ fontWeight: p.boldAll ? 700 : 400 }}>{b}</span>
                      </div>);
                  })}
                </div>
              </Card>);
          })}
        </div>
        <Card padded style={{ background: "var(--amber-tint)", borderColor: "var(--amber-edge)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <Eyebrow tone="amber">The Feedback Gridlock</Eyebrow>
            <Tag tone="amber">PedidosYa</Tag>
          </div>
          <div style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.6 }}>
            PedidosYa wanted rapid speed but did not allocate operational review capacity. They introduced a late, unaligned scope requirement — demanding a custom multi-attribute stack combining <em>Flavor</em> with <em>Sweetener Type</em> (Diet / Zero / Sugar), which delayed their go-live path.
          </div>
        </Card>
      </div>
    </StepFrame>);
}

// ======================================================
// STEP 7 — Platform Validation Metrics
// ======================================================
function VarStep7({ ctx }) {
  var metrics = [
    {
      platform: "HungerStation",
      region: "MENA",
      metric: "Validation Success Rate",
      before: "33%",
      after: "90%",
      improvement: "+57pp",
      color: "var(--dh-red)",
      tint: "var(--red-tint)",
      edge: "var(--red-edge)",
      note: "First validation had low success due to formatting issues. After fixes, dramatic improvement."
    },
    {
      platform: "Foodpanda APAC",
      region: "APAC",
      metric: "Grouping Accuracy",
      before: "99%",
      after: "90%",
      improvement: "Adjusted",
      color: "var(--purple)",
      tint: "var(--purple-tint)",
      edge: "#D9C2E8",
      note: "High initial grouping accuracy, but missing attributes and format issues were not reported. After fixes, 90% grouping success."
    },
    {
      platform: "PedidosYa",
      region: "LATAM",
      metric: "Grouping Success",
      before: "—",
      after: "85%",
      improvement: "Pending",
      color: "var(--amber)",
      tint: "var(--amber-tint)",
      edge: "var(--amber-edge)",
      note: "Delayed due to late multi-attribute requirements. Currently at 85% grouping success."
    }
  ];

  return (
    <StepFrame kicker="Slide 7 · Platform Validation Metrics" eyebrowTone="green" title="After Platform Validations" lede="Observed metrics after platform validation and quick fixes.">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {metrics.map(function (m, i) {
            return (
              <Card key={i} padded style={{ background: m.tint, borderColor: m.edge }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 17, color: "var(--ink)" }}>{m.platform}</div>
                    <Tag tone="neutral" style={{ marginTop: 5 }}>{m.region}</Tag>
                  </div>
                  <Tag tone={m.improvement === "Pending" ? "amber" : "green"}>{m.improvement}</Tag>
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: m.color, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>{m.metric}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: "16px 0" }}>
                  {m.before !== "—" && (
                    <>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontWeight: 700, fontSize: 32, color: "var(--ink-mute)", lineHeight: 1 }}>{m.before}</div>
                        <div style={{ fontSize: 10, color: "var(--ink-mute)", marginTop: 4 }}>Before</div>
                      </div>
                      <ArrowRight size={20} color="var(--green-2)" />
                    </>
                  )}
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 700, fontSize: 40, color: "var(--green-2)", lineHeight: 1 }}>{m.after}</div>
                    <div style={{ fontSize: 10, color: "var(--ink-mute)", marginTop: 4 }}>After</div>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.5, marginTop: 12 }}>{m.note}</div>
              </Card>
            );
          })}
        </div>
        <Card padded style={{ background: "var(--green-tint)", borderColor: "var(--green-edge)" }}>
          <Eyebrow tone="green" style={{ marginBottom: 8 }}>Key Takeaway</Eyebrow>
          <div style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.6 }}>
            Platform validations revealed critical formatting and attribute issues that were <strong>not visible</strong> in internal evaluations. Quick fixes led to significant improvements across all platforms.
          </div>
        </Card>
      </div>
    </StepFrame>);
}

// ======================================================
// STEP 8 — Engineering Under Fire
// ======================================================
function VarStep8({ ctx }) {
  var options = [
    {
      label: "Option A: Fine-Tune Existing Model",
      pros: ["Leverages existing infrastructure", "No new systems to maintain"],
      cons: ["Time-consuming retraining cycle", "Requires pipeline changes", "Uncertain timeline", "Would delay go-live significantly"],
      chosen: false
    },
    {
      label: "Option B: New AI Agent (Chosen)",
      pros: ["Single purpose: find missing attribute values", "No pipeline changes required", "Can be developed and tested quickly", "Easily replaceable if better models emerge"],
      cons: ["Adds a new component to maintain"],
      chosen: true
    }
  ];

  var sprintWork = [
    { label: "AI Agent Development", desc: "Built and tested multiple models, evaluated accuracy vs cost offline" },
    { label: "90%+ Coverage & Accuracy", desc: "Validated performance threshold before deployment" },
    { label: "False-Friend Ingestion", desc: "Implemented filtering to remove gray area from output" },
    { label: "Format Fixes", desc: "Resolved structural formatting issues for PIM compatibility" }
  ];

  return (
    <StepFrame kicker="Slide 8 · Engineering Under Fire" eyebrowTone="red" title="Unblocking Group Creation" lede="Solving the missing attribute bottleneck with a targeted AI solution.">
      {/* Visual: Before vs After */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
        <Card padded style={{ background: "var(--red-tint)", borderColor: "var(--red-edge)", textAlign: "center" }}>
          <Eyebrow tone="red" style={{ marginBottom: 12 }}>Before</Eyebrow>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ padding: "12px 16px", background: "var(--surface)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>📦</span>
              <span style={{ fontSize: 13, color: "var(--ink)" }}>Product A</span>
              <Tag tone="green" style={{ fontSize: 10 }}>✓ Flavor: Classic</Tag>
            </div>
            <div style={{ padding: "12px 16px", background: "var(--surface)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>📦</span>
              <span style={{ fontSize: 13, color: "var(--ink)" }}>Product B</span>
              <Tag tone="green" style={{ fontSize: 10 }}>✓ Flavor: BBQ</Tag>
            </div>
            <div style={{ padding: "12px 16px", background: "var(--surface)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>📦</span>
              <span style={{ fontSize: 13, color: "var(--ink)" }}>Product C</span>
              <Tag tone="red" style={{ fontSize: 10 }}>✗ Missing Flavor</Tag>
            </div>
          </div>
          <div style={{ marginTop: 12, padding: "10px 16px", background: "var(--dh-red)", color: "#fff", borderRadius: "var(--radius)", fontWeight: 600, fontSize: 13 }}>
            🚫 Group Creation Blocked
          </div>
        </Card>

        <Card padded style={{ background: "var(--green-tint)", borderColor: "var(--green-edge)", textAlign: "center" }}>
          <Eyebrow tone="green" style={{ marginBottom: 12 }}>After</Eyebrow>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ padding: "12px 16px", background: "var(--surface)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>📦</span>
              <span style={{ fontSize: 13, color: "var(--ink)" }}>Product A</span>
              <Tag tone="green" style={{ fontSize: 10 }}>✓ Flavor: Classic</Tag>
            </div>
            <div style={{ padding: "12px 16px", background: "var(--surface)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>📦</span>
              <span style={{ fontSize: 13, color: "var(--ink)" }}>Product B</span>
              <Tag tone="green" style={{ fontSize: 10 }}>✓ Flavor: BBQ</Tag>
            </div>
            <div style={{ padding: "12px 16px", background: "var(--surface)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>📦</span>
              <span style={{ fontSize: 13, color: "var(--ink)" }}>Product C</span>
              <Tag tone="green" style={{ fontSize: 10 }}>✓ Flavor: Paprika (AI)</Tag>
            </div>
          </div>
          <div style={{ marginTop: 12, padding: "10px 16px", background: "var(--green-2)", color: "#fff", borderRadius: "var(--radius)", fontWeight: 600, fontSize: 13 }}>
            ✓ Group Created Successfully
          </div>
        </Card>
      </div>

      {/* Two Options and Sprint Work */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <Card padded>
          <Eyebrow style={{ marginBottom: 14 }}>Why This Mattered</Eyebrow>
          <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.6, marginBottom: 12 }}>
            <strong>8% of potential variant groups</strong> were blocked due to missing attributes. Without a solution, thousands of products couldn't be grouped.
          </div>
          <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5 }}>
            The PIM requires all items in a group to have complete attribute data — a single missing value blocks the entire group creation.
          </div>
        </Card>
        <Card padded style={{ background: "var(--green-tint)", borderColor: "var(--green-edge)" }}>
          <Eyebrow tone="green" style={{ marginBottom: 10 }}>All in One Sprint</Eyebrow>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {sprintWork.map(function (item, i) {
              return (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <CheckIcon size={14} />
                  <div style={{ fontSize: 13, color: "var(--ink)" }}><strong>{item.label}</strong> — {item.desc}</div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Tag tone="green">90%+ Coverage</Tag>
            <Tag tone="green">90%+ Accuracy</Tag>
            <Tag tone="green">1 Sprint</Tag>
          </div>
        </Card>
      </div>
    </StepFrame>);
}

// ======================================================
// STEP 9 — Mass Scaling
// ======================================================
function VarStep9({ ctx }) {
  var before = ["Platform teams review every group before go-live", "Feedback cycles take 2–3 weeks per batch", "Local team availability gates the entire rollout", "Timeline slippage compounds across platforms"];
  var after = ["Automated variant groups pushed live to production directly", "Local content teams flag errors retroactively", "No pre-moderation gate — faster time to revenue", "Errors corrected in context, not in isolation"];
  return (
    <StepFrame kicker="Slide 9 · Mass Scaling" eyebrowTone="green" title="Breaking the Review Bottleneck" lede="Expanding to 750,000 products while transitioning to a post-moderation framework.">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ padding: "28px 24px", background: "var(--ink)", borderRadius: "var(--radius-xl)", textAlign: "center" }}>
          <div style={{ fontWeight: 800, fontSize: 72, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>750,000</div>
          <div style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", marginTop: 10 }}>products processed across aligned platform catalogs</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <Card padded style={{ background: "var(--red-tint)", borderColor: "var(--red-edge)" }}>
            <Eyebrow tone="red" style={{ marginBottom: 14 }}>Before · Manual Review Loop</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {before.map(function (item, i) {
                return (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <XIcon size={15} />
                    <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.5 }}>{item}</div>
                  </div>);
              })}
            </div>
          </Card>
          <Card padded style={{ background: "var(--green-tint)", borderColor: "var(--green-edge)" }}>
            <Eyebrow tone="green" style={{ marginBottom: 14 }}>After · Post-Moderation Framework</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {after.map(function (item, i) {
                return (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <CheckIcon size={15} />
                    <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.5 }}>{item}</div>
                  </div>);
              })}
            </div>
          </Card>
        </div>
        <Card padded style={{ borderColor: "var(--green-edge)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <Dot tone="green" size={10} pulse />
              <span style={{ fontWeight: 700, fontSize: 16, color: "var(--green-2)" }}>Live Now</span>
            </div>
            <div style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.5 }}>
              Final alignment and platform buy-in secured <strong>2 weeks ago</strong>. Currently creating and uploading variant groups in structured live batches.
            </div>
          </div>
        </Card>
      </div>
    </StepFrame>);
}

// ======================================================
// STEP 10 — Roadmap
// ======================================================
function VarStep10({ ctx }) {
  var nowItems = [
    { title: "Product Type Scaling", desc: "Expanding automated matching to new product types and attributes, starting with General Merchandise, Electronics, Smoking Tobacco, Pharma, and Ultra Fresh (mostly unbranded) to unlock Health & Beauty next, followed by the entire assortment." },
    { title: "Assortment-Wide Grouping", desc: "Enabling continuous matching against the entire live inventory. The system will automatically scan all available products to build new combinations or execute \"regrouping.\"" },
    { title: "Live Ingestion (Regrouping)", desc: "Allowing the system to dynamically inject newly added items directly into existing live groups inside the central database without breaking current configurations." }
  ];

  var nextItems = [
    { title: "Capturing the \"Gray Area\"", desc: "Introducing a universal, flexible variation attribute (e.g., \"Preference\") applicable across all product types to systematically capture the 45% missed opportunity uncovered in our initial validation baseline." },
    { title: "Targeted Scaling Framework", desc: "Deploying and testing this generic \"Preference\" attribute on a smaller dataset first to calculate conversion lift before scaling across other platforms and product types." },
    { title: "Granular Quality Controls", desc: "Closely tracking automated matching health across different granularities, executing immediate, localized logic adjustments if low performance happens." }
  ];

  var laterItems = [
    { title: "Infrastructure Modernization", desc: "Partnering with central database and platform teams to dismantle backend structural limits, unlocking complex, multi-dimensional variations." },
    { title: "The Dynamic Paradigm Shift", desc: "Transitioning entirely away from rigid rules and moving toward fluid, semantic similarity grouping." }
  ];

  var volumetricItems = [
    { title: "Group Volumetric Tracking", desc: "Tracking and observing the size/volume of variant groups (the total product count within each cluster) to see if there is any significant correlation between group density and customer performance." },
    { title: "Volumetric Group Rules", desc: "If a clear correlation between group size and conversion is discovered, we will establish data-driven guardrails for the minimum, optimal, and maximum product count allowed in a single group to maximize user experience." }
  ];

  return (
    <StepFrame kicker="Slide 10 · Roadmap" eyebrowTone="blue" title="What's Next" lede="Phased approach balancing immediate wins with long-term transformation.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
        {/* NOW */}
        <Card padded style={{ borderTop: "4px solid var(--green-2)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <Tag tone="green">NOW</Tag>
            <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>In Progress & Active</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {nowItems.map(function (item, i) {
              return (
                <div key={i} style={{ padding: "14px", background: "var(--green-tint)", borderRadius: "var(--radius)", border: "1px solid var(--green-edge)" }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* NEXT */}
        <Card padded style={{ borderTop: "4px solid var(--blue)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <Tag tone="blue">NEXT</Tag>
            <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>Near-Term Execution</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {nextItems.map(function (item, i) {
              return (
                <div key={i} style={{ padding: "14px", background: "var(--blue-tint)", borderRadius: "var(--radius)", border: "1px solid var(--blue-edge)" }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* LATER */}
        <Card padded style={{ borderTop: "4px solid var(--purple)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <Tag tone="neutral" style={{ background: "var(--purple-tint)", color: "var(--purple)", border: "1px solid var(--purple)" }}>LATER</Tag>
            <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>Strategic Horizon</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {laterItems.map(function (item, i) {
              return (
                <div key={i} style={{ padding: "14px", background: "var(--purple-tint)", borderRadius: "var(--radius)", border: "1px solid rgba(123, 63, 160, 0.3)" }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Volumetric Section */}
      <Card padded style={{ marginTop: 20, background: "var(--amber-tint)", borderColor: "var(--amber-edge)" }}>
        <Eyebrow tone="amber" style={{ marginBottom: 14 }}>Parallel Initiative · Volumetric Analysis</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {volumetricItems.map(function (item, i) {
            return (
              <div key={i} style={{ padding: "14px", background: "var(--surface)", borderRadius: "var(--radius)", border: "1px solid var(--amber-edge)" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)", marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            );
          })}
        </div>
      </Card>
      <div style={{ marginTop: 12, fontSize: 12, color: "var(--ink-mute)", fontStyle: "italic" }}>
        Focus shifted entirely to systemic optimization based on the data validated in the Now/Next phases.
      </div>
    </StepFrame>);
}

// ======================================================
// STEP 11 — What's In Progress
// ======================================================
function VarStep11({ ctx }) {
  var productTypes = [
    { name: "Ultra Fresh / Loose Food & Beverages", status: "Q2" },
    { name: "Packaged Food and Beverages", status: "Done" },
    { name: "Packaged Non Food", status: "Done" },
    { name: "Smoking / Tobacco", status: "Q2" },
    { name: "Pharma", status: "Q2" },
    { name: "Electronics", status: "Q2" },
    { name: "General Merchandise", status: "Q2" }
  ];

  var attributes = [
    { name: "Item Size (S, M, L)", status: "Done" },
    { name: "Flavor", status: "Done" },
    { name: "Country of Origin", status: "Q2" },
    { name: "Net Size", status: "Q2" },
    { name: "Color", status: "Q2" },
    { name: "Fat Type/Percent", status: "Q2" },
    { name: "Strength (Dosage)", status: "Q2" },
    { name: "Scent", status: "Q2" },
    { name: "Age Group", status: "Q2" },
    { name: "Storage (Memory)", status: "Q2" },
    { name: "Lens Power", status: "Q2" }
  ];

  var platforms = [
    { name: "PedidosYa", status: "Done", region: "LATAM" },
    { name: "HungerStation", status: "Done", region: "MENA" },
    { name: "Foodpanda", status: "Done", region: "APAC" },
    { name: "eFood", status: "Q2", region: "MENA" },
    { name: "Talabat", status: "Q2", region: "MENA" },
    { name: "Glovo", status: "Later", region: "Multi" }
  ];

  function renderStatus(status) {
    if (status === "Done") return <Tag tone="green">Done</Tag>;
    if (status === "Q2") return <Tag tone="amber">Q2</Tag>;
    return <Tag tone="neutral">Later</Tag>;
  }

  return (
    <StepFrame kicker="Slide 11 · What's In Progress" eyebrowTone="blue" title="Expansion Plans" lede="By end of Q2, we'll cover all product types and attributes, then expand to more platforms.">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          <Card padded>
            <Eyebrow style={{ marginBottom: 12 }}>Product Types</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {productTypes.map(function (pt, i) {
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 10px", background: pt.status === "Done" ? "var(--green-tint)" : "var(--surface-2)", borderRadius: "var(--radius)" }}>
                    <span style={{ fontSize: 12, fontWeight: pt.status === "Done" ? 600 : 400, color: "var(--ink)" }}>{pt.name}</span>
                    {renderStatus(pt.status)}
                  </div>
                );
              })}
            </div>
          </Card>
          <Card padded>
            <Eyebrow style={{ marginBottom: 12 }}>Attributes</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {attributes.map(function (a, i) {
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 10px", background: a.status === "Done" ? "var(--green-tint)" : "var(--surface-2)", borderRadius: "var(--radius)" }}>
                    <span style={{ fontSize: 11, fontWeight: a.status === "Done" ? 600 : 400, color: "var(--ink)" }}>{a.name}</span>
                    {renderStatus(a.status)}
                  </div>
                );
              })}
            </div>
          </Card>
          <Card padded>
            <Eyebrow style={{ marginBottom: 12 }}>Platforms</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {platforms.map(function (p, i) {
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", background: p.status === "Done" ? "var(--green-tint)" : "var(--surface-2)", borderRadius: "var(--radius)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: p.status === "Done" ? 600 : 400, color: "var(--ink)" }}>{p.name}</span>
                      <Tag tone="neutral" style={{ fontSize: 9 }}>{p.region}</Tag>
                    </div>
                    {renderStatus(p.status)}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Call for Support */}
        <Card padded style={{ background: "var(--amber-tint)", borderColor: "var(--amber-edge)" }}>
          <Eyebrow tone="amber" style={{ marginBottom: 14 }}>Call for Support</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "var(--ink)", marginBottom: 8 }}>Evaluation Support</div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5 }}>
                New attributes and product types will need another evaluation. Our goal is to keep it simple and focused — calculate accuracy and success of grouping for this expansion, and utilise all manual evaluations to train our AI-as-a-judge mechanism to reduce further manual validation need to a minimum.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "var(--ink)", marginBottom: 8 }}>Labelling & Annotations</div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5 }}>
                For the longer run, we'll need regular annotations/labelling to keep model performance high. As we don't have a dedicated labelling team, we need platform collaborations. We're open to any suggestions.
              </div>
            </div>
          </div>
        </Card>

        {/* Talabat Note */}
        <Card padded style={{ background: "var(--red-tint)", borderColor: "var(--red-edge)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <Eyebrow tone="red">Talabat Collaboration</Eyebrow>
          </div>
          <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.6 }}>
            Talabat has their own variant grouping tool. We'd like to reach a level where we can replace and centralise variant experience end-to-end. We faced some resistance to collaborate in previous examples — they have solutions we already had or were building. We asked to learn more, but there was minimum tendency to collaborate. As a business decision, we did not take Talabat as a pilot platform, but now we're expanding to all platforms, we need this enablement.
          </div>
        </Card>
      </div>
    </StepFrame>);
}

// ======================================================
// STEP 12 — Long-Term Vision
// ======================================================
function VarStep12({ ctx }) {
  var unlocked = ["Coffee bean grind sizes", "Instant food protein types", "Packaging variations", "Main ingredient variations", "Texture and form factors", "Regional flavor variants"];
  var derisking = [
  { label: "Zero Platform Friction", desc: "Evaluated internally on minimum scope using our existing evaluation data — no local content team cycles." },
  { label: "Offline Quality Validation", desc: "Benchmarked against historical manual validation records to assess quality shifts." },
  { label: "Financial Audit", desc: "Large-scale infrastructure cost differences audited before any architectural commitment." }];

  return (
    <StepFrame kicker="Slide 12 · Long-Term Vision" eyebrowTone="blue"
    title={<>Shifting to Semantic <span style={{ color: "var(--blue)" }}>Entity-Based</span> Guardrails</>}
    lede="Moving from rigid definitions to flexible, dynamic similarities.">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <Card padded>
            <Eyebrow style={{ marginBottom: 14 }}>The Paradigm Shift</Eyebrow>
            <div style={{ padding: 16, background: "var(--red-tint)", border: "1px solid var(--red-edge)", borderRadius: "var(--radius)", marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--dh-red)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Stop</div>
              <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.55 }}>Teaching a system hyper-specific, rigid definitions of "flavor" per category. The false-friend matrix is growing more expensive to maintain and scale with every new category.</div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
              <ArrowDown size={18} color="var(--ink-faint)" />
            </div>
            <div style={{ padding: 16, background: "var(--green-tint)", border: "1px solid var(--green-edge)", borderRadius: "var(--radius)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--green-2)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Start</div>
              <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.55 }}>Tagging <strong>core product entities</strong> and letting variant groups build organically based on shared characteristics and differences — similarities over static rules.</div>
            </div>
          </Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Card padded style={{ background: "var(--blue-tint)", borderColor: "var(--blue-edge)" }}>
              <Eyebrow tone="blue" style={{ marginBottom: 10 }}>De-Risking the Pivot</Eyebrow>
              <div style={{ fontWeight: 600, fontSize: 15, color: "var(--ink)", marginBottom: 12 }}>Low-Investment Testing Framework</div>
              {derisking.map(function (item, i) {
                return (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                    <CheckIcon size={15} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>{item.label}</div>
                      <div style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.4 }}>{item.desc}</div>
                    </div>
                  </div>);
              })}
            </Card>
            <Card padded>
              <Eyebrow style={{ marginBottom: 10 }}>Unlocked Variant Types</Eyebrow>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {unlocked.map(function (t, i) {return <Tag key={i} tone="neutral">{t}</Tag>;})}
              </div>
              <div style={{ marginTop: 12, fontSize: 12.5, color: "var(--ink-mute)", fontStyle: "italic" }}>Currently completely blocked under the static rules model.</div>
            </Card>
          </div>
        </div>
      </div>
    </StepFrame>);
}