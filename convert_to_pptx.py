#!/usr/bin/env python3
"""
Convert Variants presentation to PowerPoint format with proper styling.
"""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.oxml.ns import nsmap

# Colors
DH_RED = RGBColor(0xD6, 0x1F, 0x26)
INK = RGBColor(0x1B, 0x1F, 0x2A)
INK_SOFT = RGBColor(0x4A, 0x52, 0x60)
INK_MUTE = RGBColor(0x6B, 0x72, 0x80)
GREEN = RGBColor(0x00, 0x8C, 0x58)
AMBER = RGBColor(0xC8, 0x87, 0x0D)
BLUE = RGBColor(0x00, 0x66, 0xB3)
PURPLE = RGBColor(0x7B, 0x3F, 0xA0)
BG = RGBColor(0xFA, 0xFA, 0xF7)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
GREEN_TINT = RGBColor(0xE4, 0xF6, 0xEC)
AMBER_TINT = RGBColor(0xFB, 0xF0, 0xD6)
BLUE_TINT = RGBColor(0xE1, 0xEE, 0xF7)
RED_TINT = RGBColor(0xFC, 0xE8, 0xE9)

def set_shape_fill(shape, color):
    """Set shape fill color."""
    shape.fill.solid()
    shape.fill.fore_color.rgb = color

def set_shape_line(shape, color=None, width=Pt(0)):
    """Set shape border."""
    if color:
        shape.line.color.rgb = color
        shape.line.width = width
    else:
        shape.line.fill.background()

def add_colored_bar(slide, x, y, width, height, color):
    """Add a colored rectangle bar."""
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, x, y, width, height)
    set_shape_fill(shape, color)
    set_shape_line(shape)
    return shape

def add_cover_slide(prs):
    """Add the cover slide."""
    slide = prs.slides.add_slide(prs.slide_layouts[6])

    # Background
    background = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
    set_shape_fill(background, BG)
    set_shape_line(background)

    # Red accent bar at top
    add_colored_bar(slide, Inches(0), Inches(0), prs.slide_width, Inches(0.15), DH_RED)

    # Main title
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(2.2), Inches(8.4), Inches(1.5))
    tf = title_box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Product"
    p.font.size = Pt(52)
    p.font.bold = True
    p.font.color.rgb = INK

    p2 = tf.add_paragraph()
    p2.text = "Variants"
    p2.font.size = Pt(52)
    p2.font.bold = True
    p2.font.color.rgb = DH_RED

    # Subtitle
    sub_box = slide.shapes.add_textbox(Inches(0.8), Inches(4.0), Inches(8.4), Inches(0.8))
    tf = sub_box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Commercial anchor to long-term vision — a complete account of the Q1/Q2 variants initiative across Talabat, PedidosYa, and Pandora."
    p.font.size = Pt(16)
    p.font.color.rgb = INK_SOFT

    # Stats boxes
    stats = [("12", "slides"), ("3", "platforms"), ("750K", "products"), ("~€12.2M", "GMV")]
    x_start = Inches(0.8)
    for i, (val, label) in enumerate(stats):
        x = x_start + Inches(i * 2.3)
        box = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, Inches(5.2), Inches(2.1), Inches(1.1))
        set_shape_fill(box, WHITE)
        set_shape_line(box, RGBColor(0xE4, 0xE4, 0xDD), Pt(1))

        # Value
        val_box = slide.shapes.add_textbox(x + Inches(0.1), Inches(5.35), Inches(1.9), Inches(0.5))
        tf = val_box.text_frame
        p = tf.paragraphs[0]
        p.text = val
        p.font.size = Pt(28)
        p.font.bold = True
        p.font.color.rgb = INK
        p.alignment = PP_ALIGN.CENTER

        # Label
        lbl_box = slide.shapes.add_textbox(x + Inches(0.1), Inches(5.85), Inches(1.9), Inches(0.3))
        tf = lbl_box.text_frame
        p = tf.paragraphs[0]
        p.text = label
        p.font.size = Pt(11)
        p.font.color.rgb = INK_MUTE
        p.alignment = PP_ALIGN.CENTER

def add_content_slide(prs, slide_num, kicker, title, lede, bullets, accent_color=DH_RED):
    """Add a content slide with styling."""
    slide = prs.slides.add_slide(prs.slide_layouts[6])

    # Background
    background = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
    set_shape_fill(background, BG)
    set_shape_line(background)

    # Top accent bar
    add_colored_bar(slide, Inches(0), Inches(0), prs.slide_width, Inches(0.08), accent_color)

    # Kicker
    if kicker:
        kicker_box = slide.shapes.add_textbox(Inches(0.6), Inches(0.35), Inches(8.8), Inches(0.3))
        tf = kicker_box.text_frame
        p = tf.paragraphs[0]
        p.text = kicker
        p.font.size = Pt(10)
        p.font.bold = True
        p.font.color.rgb = accent_color

    # Title
    title_box = slide.shapes.add_textbox(Inches(0.6), Inches(0.65), Inches(8.8), Inches(0.7))
    tf = title_box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = title
    p.font.size = Pt(30)
    p.font.bold = True
    p.font.color.rgb = INK

    # Lede
    if lede:
        lede_box = slide.shapes.add_textbox(Inches(0.6), Inches(1.3), Inches(8.8), Inches(0.4))
        tf = lede_box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = lede
        p.font.size = Pt(13)
        p.font.color.rgb = INK_SOFT

    # Bullets with colored dots
    y_start = Inches(1.85) if lede else Inches(1.5)
    bullet_height = Inches(0.55) if len(bullets) > 8 else Inches(0.6)

    for i, bullet in enumerate(bullets):
        y = y_start + (i * bullet_height)

        # Colored dot
        dot = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(0.6), y + Inches(0.15), Inches(0.12), Inches(0.12))
        set_shape_fill(dot, accent_color)
        set_shape_line(dot)

        # Bullet text
        text_box = slide.shapes.add_textbox(Inches(0.85), y, Inches(8.5), bullet_height - Inches(0.1))
        tf = text_box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]

        # Check if bold prefix exists (text before first colon)
        if ":" in bullet:
            parts = bullet.split(":", 1)
            run = p.add_run()
            run.text = parts[0] + ":"
            run.font.size = Pt(13)
            run.font.bold = True
            run.font.color.rgb = INK

            run2 = p.add_run()
            run2.text = parts[1]
            run2.font.size = Pt(13)
            run2.font.color.rgb = INK_SOFT
        else:
            p.text = bullet
            p.font.size = Pt(13)
            p.font.color.rgb = INK

    # Slide number footer
    footer_box = slide.shapes.add_textbox(Inches(9.2), Inches(7.0), Inches(0.6), Inches(0.3))
    tf = footer_box.text_frame
    p = tf.paragraphs[0]
    p.text = str(slide_num)
    p.font.size = Pt(10)
    p.font.color.rgb = INK_MUTE
    p.alignment = PP_ALIGN.RIGHT

def create_presentation():
    """Create the full presentation."""
    prs = Presentation()
    prs.slide_width = Inches(10)
    prs.slide_height = Inches(7.5)

    # Cover
    add_cover_slide(prs)

    # Slide 1: Commercial Anchor
    add_content_slide(prs, 1,
        "Slide 1 · Commercial Anchor",
        "Why We Invest in Variants",
        "Connecting cross-platform data and revenue opportunities to our core mission.",
        [
            "The Root Problem: Similar versions of the same product are not listed together in our catalog",
            "Talabat Historical Data: 6.5% of variant PDP sessions → users added multiple SKUs to cart",
            "+1.77% increase in average unique items per user",
            "Industry Benchmark: 'Flavor' is the 2nd most common variant in grocery",
            "Combined GMV Opportunity: ~€12.2M across Talabat, PedidosYa, and Pandora"
        ], DH_RED)

    # Slide 2: Strategic Scope
    add_content_slide(prs, 2,
        "Slide 2 · Strategic Scope",
        "Narrowing the Horizon for Q1/Q2",
        "Balancing a massive catalog footprint against speed-to-market.",
        [
            "Product Types: 7 unique types, focused on Packaged Food & Beverages + Packaged Non-Food",
            "Variant Attributes: 11 distinct attributes, focused on Item Size + Flavor",
            "Scope reduction: 7 → 2 product types, 11 → 2 attributes",
            "Speed to market over complexity for early validation phase"
        ], AMBER)

    # Slide 3: Variant Grouping Mechanism
    add_content_slide(prs, 3,
        "Slide 3 · Variant Grouping Mechanism",
        "How It Works",
        "From raw catalog to live variant groups in 5 automated steps.",
        [
            "Step 1 - Products: Filter catalog for grouping candidates",
            "Step 2 - Filter: Same brand, same type, same category",
            "Step 3 - Enrich: Extract variant attributes (Size, Flavor)",
            "Step 4 - Group: Match variants into clusters",
            "Step 5 - Live: Push to PIM for customer-facing variant picker",
            "Zero manual work — fully automated pipeline"
        ], BLUE)

    # Slide 4: Internal Evaluation
    add_content_slide(prs, 4,
        "Slide 4 · Internal Evaluation",
        "Validation Results & Performance Baseline",
        "5,000-product deep dive to validate the grouping logic.",
        [
            "42% Correct Match: Flawlessly categorized as pure size or flavor variants",
            "45% Gray Area: Items customers view as variants but outside fixed definitions",
            "8% Missing Attributes: Variant relationships identified but flavor info absent",
            "4% Pure Errors: Structurally incorrect matches",
            "80% group accuracy, 93% discovery rate achieved",
            "Key insight: 'If a customer sees these nested together, would they mind?'"
        ], GREEN)

    # Slide 5: Gray Area Cases
    add_content_slide(prs, 5,
        "Slide 5 · Gray Area Cases",
        "The Gray Area Challenge",
        "Between internal evaluation and platform disagreement.",
        [
            "Example: Instant Noodles with Beef, Chicken, Pork, Shrimp protein types",
            "Model thinks these are Flavor variants (incorrect)",
            "Actually: Protein Type variants (correct grouping)",
            "False Friend Technique: AI matrix to recognize attributes that look like flavor but aren't",
            "Other gray area examples: Fat Content, Roast Level, Main Ingredient, Texture",
            "These are filtered out before grouping to ensure accuracy"
        ], AMBER)

    # Slide 6: Platform Disalignment
    add_content_slide(prs, 6,
        "Slide 6 · Platform Disalignment",
        "Platform Alignment Challenges",
        "Different platforms had different understandings of what a 'variant' should be.",
        [
            "HungerStation (MENA): Precision + Audit stance, Line-by-line validation, Aligned ✓",
            "Pandora (APAC): Precision Focus, Hard stop on non-flavor attributes, Aligned ✓",
            "PedidosYa (LATAM): Scale Focus, No review capacity allocated, Delayed",
            "The Feedback Gridlock: PedidosYa demanded Flavor + Sweetener Type stack",
            "This late requirement delayed their go-live path"
        ], DH_RED)

    # Slide 7: Platform Validation Metrics
    add_content_slide(prs, 7,
        "Slide 7 · Platform Validation Metrics",
        "After Platform Validations",
        "Observed metrics after platform validation and quick fixes.",
        [
            "HungerStation: 33% → 90% validation success rate (+57pp improvement)",
            "Foodpanda APAC: 99% → 90% grouping accuracy (format issues fixed)",
            "PedidosYa: 85% grouping success (pending full deployment)",
            "Key takeaway: Platform validations revealed issues not visible in internal evaluations",
            "Quick fixes led to significant improvements across all platforms"
        ], GREEN)

    # Slide 8: Engineering Under Fire
    add_content_slide(prs, 8,
        "Slide 8 · Engineering Under Fire",
        "Unblocking Group Creation",
        "Solving the missing attribute bottleneck with a targeted AI solution.",
        [
            "Problem: 8% of potential variant groups blocked due to missing attributes",
            "PIM requires complete attribute data — single missing value blocks entire group",
            "Solution: New AI Agent to predict missing attribute values",
            "Results: 90%+ Coverage, 90%+ Accuracy, Built in 1 sprint",
            "False-Friend Ingestion implemented to filter gray area from output"
        ], DH_RED)

    # Slide 9: Mass Scaling
    add_content_slide(prs, 9,
        "Slide 9 · Mass Scaling",
        "Breaking the Review Bottleneck",
        "Expanding to 750,000 products while transitioning to a post-moderation framework.",
        [
            "750,000 products processed across aligned platform catalogs",
            "Before: Manual review loops, 2-3 week feedback cycles, platform gates",
            "After: Automated groups pushed live, retroactive error flagging",
            "Post-moderation framework → faster time to revenue",
            "Status: Live now — creating and uploading variant groups in structured batches"
        ], GREEN)

    # Slide 10: Roadmap
    add_content_slide(prs, 10,
        "Slide 10 · Roadmap",
        "What's Next",
        "Phased approach balancing immediate wins with long-term transformation.",
        [
            "NOW - Product Type Scaling: GM, Electronics, Tobacco, Pharma, Ultra Fresh",
            "NOW - Assortment-Wide Grouping: Continuous matching against live inventory",
            "NOW - Live Ingestion: Dynamic injection into existing groups",
            "NEXT - Gray Area: Universal 'Preference' attribute to capture 45% opportunity",
            "NEXT - Targeted Scaling: Test before full rollout",
            "NEXT - Quality Controls: Track matching health",
            "LATER - Infrastructure Modernization: Dismantle backend limits",
            "LATER - Dynamic Paradigm: Semantic similarity grouping"
        ], BLUE)

    # Slide 11: What's In Progress
    add_content_slide(prs, 11,
        "Slide 11 · What's In Progress",
        "Expansion Plans",
        "By end of Q2, we'll cover all product types and attributes.",
        [
            "Q2 Targets: All 7 product types, all 11 attributes",
            "Platform Expansion: eFood, Talabat (Glovo later)",
            "Call for Support: New evaluations needed for expansion",
            "Goal: Utilise manual evaluations to train AI-as-a-judge mechanism",
            "Longer term: Regular annotations/labelling for model performance",
            "Talabat: Has own variant tool — need collaboration to centralise"
        ], BLUE)

    # Slide 12: Long-Term Vision
    add_content_slide(prs, 12,
        "Slide 12 · Long-Term Vision",
        "Shifting to Semantic Entity-Based Guardrails",
        "Moving from rigid definitions to flexible, dynamic similarities.",
        [
            "STOP: Teaching rigid definitions of 'flavor' per category",
            "START: Tagging core product entities, let groups build organically",
            "Paradigm shift: Similarities over static rules",
            "Unlocked: Grind sizes, Protein types, Packaging, Textures, Regional variants",
            "De-risking: Zero platform friction, offline validation, financial audit",
            "Low-investment testing framework before architectural commitment"
        ], PURPLE)

    # Save
    output_path = "/Users/necmettin.tamgueney/Downloads/Variants.pptx"
    prs.save(output_path)
    print(f"Saved to: {output_path}")
    return output_path

if __name__ == "__main__":
    create_presentation()