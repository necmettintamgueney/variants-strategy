#!/usr/bin/env python3
"""
Convert Variants presentation to PowerPoint format.
"""

from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
import re

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

def add_title_slide(prs, title, subtitle):
    """Add a title slide."""
    slide = prs.slides.add_slide(prs.slide_layouts[6])  # Blank

    # Title
    title_box = slide.shapes.add_textbox(Inches(0.5), Inches(2.5), Inches(9), Inches(1.5))
    tf = title_box.text_frame
    p = tf.paragraphs[0]
    p.text = title
    p.font.size = Pt(44)
    p.font.bold = True
    p.font.color.rgb = INK

    # Subtitle
    sub_box = slide.shapes.add_textbox(Inches(0.5), Inches(4), Inches(9), Inches(1))
    tf = sub_box.text_frame
    p = tf.paragraphs[0]
    p.text = subtitle
    p.font.size = Pt(18)
    p.font.color.rgb = INK_SOFT

    return slide

def add_content_slide(prs, kicker, title, lede, content_items):
    """Add a content slide with bullets."""
    slide = prs.slides.add_slide(prs.slide_layouts[6])  # Blank

    # Kicker
    if kicker:
        kicker_box = slide.shapes.add_textbox(Inches(0.5), Inches(0.3), Inches(9), Inches(0.3))
        tf = kicker_box.text_frame
        p = tf.paragraphs[0]
        p.text = kicker
        p.font.size = Pt(11)
        p.font.bold = True
        p.font.color.rgb = INK_MUTE

    # Title
    title_box = slide.shapes.add_textbox(Inches(0.5), Inches(0.6), Inches(9), Inches(0.8))
    tf = title_box.text_frame
    p = tf.paragraphs[0]
    p.text = title
    p.font.size = Pt(32)
    p.font.bold = True
    p.font.color.rgb = INK

    # Lede
    if lede:
        lede_box = slide.shapes.add_textbox(Inches(0.5), Inches(1.3), Inches(9), Inches(0.5))
        tf = lede_box.text_frame
        p = tf.paragraphs[0]
        p.text = lede
        p.font.size = Pt(14)
        p.font.color.rgb = INK_SOFT

    # Content
    if content_items:
        content_box = slide.shapes.add_textbox(Inches(0.5), Inches(1.9), Inches(9), Inches(5))
        tf = content_box.text_frame
        tf.word_wrap = True

        for i, item in enumerate(content_items):
            if i == 0:
                p = tf.paragraphs[0]
            else:
                p = tf.add_paragraph()
            p.text = "• " + item
            p.font.size = Pt(14)
            p.font.color.rgb = INK
            p.space_after = Pt(8)

    return slide

def create_presentation():
    """Create the full presentation."""
    prs = Presentation()
    prs.slide_width = Inches(10)
    prs.slide_height = Inches(7.5)

    # Cover slide
    add_title_slide(prs,
        "Product Variants",
        "Commercial anchor to long-term vision — a complete account of the Q1/Q2 variants initiative")

    # Slide 1: Commercial Anchor
    add_content_slide(prs,
        "Slide 1 · Commercial Anchor",
        "Why We Invest in Variants",
        "Connecting cross-platform data and revenue opportunities to our core mission.",
        [
            "The Root Problem: Similar versions of the same product are not listed together in our catalog",
            "Talabat Historical Data: 6.5% of variant PDP sessions → users added multiple SKUs to cart",
            "Industry Benchmark: 'Flavor' is the 2nd most common variant in grocery",
            "Combined GMV Opportunity: ~€12.2M across Talabat, PedidosYa, and Pandora"
        ])

    # Slide 2: Strategic Scope
    add_content_slide(prs,
        "Slide 2 · Strategic Scope",
        "Narrowing the Horizon for Q1/Q2",
        "Balancing a massive catalog footprint against speed-to-market.",
        [
            "Product Types: 7 unique types, focused on Packaged Food & Beverages + Packaged Non-Food",
            "Variant Attributes: 11 distinct attributes, focused on Item Size + Flavor",
            "Scope reduction: 7→2 product types, 11→2 attributes",
            "Speed to market over complexity for early validation"
        ])

    # Slide 3: Variant Grouping Mechanism
    add_content_slide(prs,
        "Slide 3 · Variant Grouping Mechanism",
        "How It Works",
        "From raw catalog to live variant groups in 5 automated steps.",
        [
            "1. Products → Filter catalog for grouping candidates",
            "2. Filter → Same brand, same type, same category",
            "3. Enrich → Extract variant attributes (Size, Flavor)",
            "4. Group → Match variants into clusters",
            "5. Live → Push to PIM for customer-facing variant picker",
            "Zero manual work — fully automated pipeline"
        ])

    # Slide 4: Internal Evaluation
    add_content_slide(prs,
        "Slide 4 · Internal Evaluation",
        "Validation Results & Performance Baseline",
        "5,000-product deep dive to validate the grouping logic.",
        [
            "42% Correct Match — Flawlessly categorized as pure size or flavor variants",
            "45% Gray Area — Items customers view as variants but outside fixed definitions",
            "8% Missing Attributes — Variant relationships identified but flavor info absent",
            "4% Pure Errors — Structurally incorrect matches",
            "Results: 80% group accuracy, 93% discovery rate",
            "Key insight: 'If a customer sees these nested together, would they mind?'"
        ])

    # Slide 5: Gray Area Cases
    add_content_slide(prs,
        "Slide 5 · Gray Area Cases",
        "The Gray Area Challenge",
        "Between internal evaluation and platform disagreement.",
        [
            "Example: Instant Noodles with Beef, Chicken, Pork, Shrimp",
            "Model thinks: Flavor variants ❌",
            "Actually: Protein Type variants ✓",
            "False Friend Technique: AI matrix to recognize attributes that look like flavor but aren't",
            "Other examples: Fat Content, Roast Level, Main Ingredient, Texture",
            "These are filtered out before grouping to ensure accuracy"
        ])

    # Slide 6: Platform Disalignment
    add_content_slide(prs,
        "Slide 6 · Platform Disalignment",
        "Platform Alignment Challenges",
        "Different platforms had different understandings of what a 'variant' should be.",
        [
            "HungerStation (MENA): Precision + Audit stance, Line-by-line validation, Aligned ✓",
            "Pandora (APAC): Precision Focus, Hard stop on non-flavor attributes, Aligned ✓",
            "PedidosYa (LATAM): Scale Focus, No review capacity allocated, Delayed ⏳",
            "The Feedback Gridlock: PedidosYa demanded custom multi-attribute stack (Flavor + Sweetener Type)",
            "This delayed their go-live path"
        ])

    # Slide 7: Platform Validation Metrics
    add_content_slide(prs,
        "Slide 7 · Platform Validation Metrics",
        "After Platform Validations",
        "Observed metrics after platform validation and quick fixes.",
        [
            "HungerStation: 33% → 90% validation success rate (+57pp improvement)",
            "Foodpanda APAC: 99% → 90% grouping accuracy (format issues fixed)",
            "PedidosYa: 85% grouping success (pending full deployment)",
            "Key takeaway: Platform validations revealed issues not visible in internal evaluations"
        ])

    # Slide 8: Engineering Under Fire
    add_content_slide(prs,
        "Slide 8 · Engineering Under Fire",
        "Unblocking Group Creation",
        "Solving the missing attribute bottleneck with a targeted AI solution.",
        [
            "Problem: 8% of potential variant groups blocked due to missing attributes",
            "PIM requires complete attribute data — single missing value blocks entire group",
            "Solution: New AI Agent to predict missing attribute values",
            "Results: 90%+ Coverage, 90%+ Accuracy, Built in 1 sprint",
            "False-Friend Ingestion implemented to filter gray area from output"
        ])

    # Slide 9: Mass Scaling
    add_content_slide(prs,
        "Slide 9 · Mass Scaling",
        "Breaking the Review Bottleneck",
        "Expanding to 750,000 products while transitioning to a post-moderation framework.",
        [
            "750,000 products processed across aligned platform catalogs",
            "Before: Manual review loops, 2-3 week feedback cycles, platform gates",
            "After: Automated groups pushed live, retroactive error flagging",
            "Post-moderation framework → faster time to revenue",
            "Status: Live now — creating and uploading variant groups in structured batches"
        ])

    # Slide 10: Roadmap
    add_content_slide(prs,
        "Slide 10 · Roadmap",
        "What's Next",
        "Phased approach balancing immediate wins with long-term transformation.",
        [
            "NOW: Product Type Scaling (GM, Electronics, Tobacco, Pharma, Ultra Fresh)",
            "NOW: Assortment-Wide Grouping (continuous matching against live inventory)",
            "NOW: Live Ingestion / Regrouping (dynamic injection into existing groups)",
            "NEXT: Capturing the 'Gray Area' (universal 'Preference' attribute)",
            "NEXT: Targeted Scaling Framework (test before full rollout)",
            "NEXT: Granular Quality Controls (track matching health)",
            "LATER: Infrastructure Modernization (dismantle backend limits)",
            "LATER: The Dynamic Paradigm Shift (semantic similarity grouping)"
        ])

    # Slide 11: What's In Progress
    add_content_slide(prs,
        "Slide 11 · What's In Progress",
        "Expansion Plans",
        "By end of Q2, we'll cover all product types and attributes.",
        [
            "Q2 Targets: All 7 product types, all 11 attributes",
            "Platform Expansion: eFood, Talabat (Glovo later)",
            "Call for Support: New evaluations needed for expansion",
            "Goal: Utilise manual evaluations to train AI-as-a-judge",
            "Longer term: Regular annotations/labelling for model performance",
            "Talabat: Has own variant tool — need collaboration to centralise"
        ])

    # Slide 12: Long-Term Vision
    add_content_slide(prs,
        "Slide 12 · Long-Term Vision",
        "Shifting to Semantic Entity-Based Guardrails",
        "Moving from rigid definitions to flexible, dynamic similarities.",
        [
            "STOP: Teaching rigid definitions of 'flavor' per category",
            "START: Tagging core product entities, let groups build organically",
            "Paradigm shift: Similarities over static rules",
            "Unlocked variant types: Grind sizes, Protein types, Packaging, Textures",
            "De-risking: Zero platform friction, offline validation, financial audit",
            "Low-investment testing framework before architectural commitment"
        ])

    # Save
    output_path = "/Users/necmettin.tamgueney/variants-strategy/Variants.pptx"
    prs.save(output_path)
    print(f"Saved to: {output_path}")
    return output_path

if __name__ == "__main__":
    create_presentation()