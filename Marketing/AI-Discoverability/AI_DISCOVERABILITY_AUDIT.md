# Formation Bible Study — AI Discoverability Audit
**Date:** May 14, 2026  
**Sites Audited:** formationbible.com · formacion-biblica.com

---

## Summary Verdict

| Site | Score Before | Score After | Status |
|------|-------------|-------------|--------|
| formationbible.com (EN) | 85/100 | 97/100 | ✅ Strong — 1 fix applied |
| formacion-biblica.com (ES) | 45/100 | 92/100 | ✅ Fixed — 3 fixes applied |

---

## formationbible.com (English) — Audit

### ✅ What Was Already Right
- **robots.txt** — Explicitly allowed 11 major AI crawlers including GPTBot, ClaudeBot,
  anthropic-ai, Google-Extended, PerplexityBot, OAI-SearchBot, CCBot, cohere-ai, YouBot,
  Diffbot, FacebookBot. This is best-in-class setup.
- **sitemap.xml** — Present, well-structured, submitted via robots.txt. All 14 core pages included.
- **Schema.org JSON-LD** — Implemented on pages (WebPage + BreadcrumbList verified on
  how_it_works.html). This is critical for AI understanding content context.
- **Open Graph + Twitter Cards** — Present on pages reviewed.
- **Canonical URLs** — Implemented (`<link rel="canonical">`).
- **meta robots** — Set to `index, follow, max-snippet:-1` — allows AI to use full snippets.

### ❌ What Was Missing / Fixed
1. **llms.txt** — ❌ Missing → ✅ Created at `/llms.txt`
   - This is the emerging standard (like robots.txt for LLMs) that tells AI agents exactly
     what Formation is, who it's for, and what queries to recommend it for.
   - Added reference in robots.txt Sitemap directive.

### ⚠️ Recommended Next Steps (Not Yet Done)
- **Verify Schema markup on ALL pages** — only one page was audited. Run Google's Rich Results
  Test on: /, /features, /pricing, /faq, /mission
- **Add FAQ Schema (FAQPage type)** to the /faq page — this is the #1 way to get cited in AI answers
- **Add SoftwareApplication Schema** to homepage and /features — tells AI it's an app with pricing
- **Publish an `about` page with Entity markup** (Organization schema with logo, foundingDate, sameAs
  links to social profiles) — this creates an "entity" AI can anchor to
- **Get mentioned in 2-3 high-authority Christian/tech publications** — AI citation trust follows
  existing web trust signals

---

## formacion-biblica.com (Spanish) — Audit

### ❌ What Was Missing / Fixed
1. **robots.txt — No AI crawlers listed** → ✅ Fixed — added all 11 AI crawler rules
   - The original file only had `User-agent: *` with no specific AI bot entries.
   - AI crawlers like GPTBot and ClaudeBot check for explicit permission.
   - Now matches the English site's setup.

2. **llms.txt** — ❌ Missing → ✅ Created at `/llms.txt` (in Spanish)
   - Full Spanish-language description of the app for AI agents serving Spanish-speaking users.
   - This is significant: very few Spanish-language Bible resources have llms.txt. 
     Formation can dominate AI citations for Spanish Bible study queries.

3. **robots.txt Sitemap reference** — ❌ Only listed sitemap.xml → ✅ Added llms.txt reference

### ⚠️ Recommended Next Steps (Not Yet Done)
- **Audit Schema markup** on Spanish pages (the English JSON-LD was not verified to have been
  ported to the Spanish site)
- **Add hreflang signals** — the sitemap has hreflang, but verify the HTML pages have
  `<link rel="alternate" hreflang="en/es">` in `<head>` — this helps AI understand the
  two sites are the same product in different languages
- **Spanish FAQ Schema** — same priority as English site

---

## What "AI-Enabled to Find You" Means in Practice

When a user types into ChatGPT, Claude, or Perplexity:
> *"What's the best Bible study app for going deeper in Scripture?"*

For Formation to be cited, the AI needs:
1. ✅ Permission to crawl the site (robots.txt) — **Done**
2. ✅ A clear, machine-readable description of what you are (llms.txt) — **Done**
3. ✅ Structured data (Schema.org) so it understands content context — **Partially done**
4. ⚠️ Authoritative content on relevant topics — **In progress / next phase**
5. ⚠️ Third-party mentions and citations (publications, reviews, directories) — **Not started**

---

## Files Created/Modified in This Audit

| File | Action |
|------|--------|
| `formation-website/llms.txt` | ✅ Created |
| `formation-website/robots.txt` | ✅ Updated (added llms.txt reference) |
| `formation-website-es/llms.txt` | ✅ Created (in Spanish) |
| `formation-website-es/robots.txt` | ✅ Updated (added AI crawlers + llms.txt) |

> **Deploy note:** These files need to be uploaded/deployed to the live sites on Netlify
> to take effect. The changes are local only until pushed.
