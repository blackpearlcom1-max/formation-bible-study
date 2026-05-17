# Formation Entity SEO — Skill File
*Load this for any SEO, schema markup, website metadata, or AI-citation strategy work.*

---

## THE SHIFT: Keywords → Entities

Google no longer indexes web pages. It maps searches to known "entities" in a database of 54 billion real-world things. If Formation isn't a defined entity, it's invisible to:
- Google AI Overviews
- ChatGPT / Perplexity citations
- "Best Bible app" recommendation lists
- Voice search results

**Formation's goal:** Become the canonical entity for "serious Bible study app" and "Ethiopian/early church Bible scholarship" in Google's knowledge graph.

---

## SCHEMA MARKUP — COPY-PASTE READY

### 1. Organization Schema (add to `<head>` of index.html)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Formation Bible Study",
  "alternateName": ["Formation", "Formation App"],
  "url": "https://formationbible.com",
  "logo": "https://formationbible.com/logo.png",
  "description": "Formation is a Bible study app built on the classical inductive method, offering verse-by-verse study, reading plans, notes, and community for serious students of scripture.",
  "foundingDate": "2026",
  "founder": {
    "@type": "Person",
    "name": "[Tony's Full Name]",
    "url": "https://www.youtube.com/@Ekklesia-b5b",
    "jobTitle": "Biblical Scholar and Creator"
  },
  "sameAs": [
    "https://www.youtube.com/@Ekklesia-b5b",
    "https://www.youtube.com/@EkklesiaEssentials",
    "https://shop.beacons.ai/ekklesia1/62a046cc-26de-41dd-80e2-2cc845272167"
  ]
}
</script>
```

### 2. SoftwareApplication Schema (add to app/features page)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Formation Bible Study",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "LifestyleApplication",
  "applicationSubCategory": "Bible Study",
  "description": "Formation Bible Study is an app using the classical inductive method with reading plans, verse highlighting, notes, Strong's concordance, and community study groups. Built on the BSB (Berean Study Bible) translation.",
  "offers": [
    {
      "@type": "Offer",
      "name": "Free Tier",
      "price": "0",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Formation",
      "price": "7",
      "priceCurrency": "USD",
      "billingPeriod": "P1M"
    },
    {
      "@type": "Offer",
      "name": "Formation Plus",
      "price": "12",
      "priceCurrency": "USD",
      "billingPeriod": "P1M"
    },
    {
      "@type": "Offer",
      "name": "Formation Pro",
      "price": "29",
      "priceCurrency": "USD",
      "billingPeriod": "P1M"
    }
  ],
  "author": {
    "@type": "Organization",
    "name": "Berean Defense LLC"
  }
}
</script>
```

### 3. Article/BlogPosting Schema (for every content page)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title]",
  "description": "[2-sentence summary]",
  "author": {
    "@type": "Person",
    "name": "[Tony's Full Name]",
    "url": "https://www.youtube.com/@Ekklesia-b5b"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Formation Bible Study",
    "url": "https://formationbible.com"
  },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "about": {
    "@type": "Thing",
    "name": "[Main topic — e.g., Ethiopian Bible, Dead Sea Scrolls]"
  }
}
</script>
```

### 4. FAQ Schema (add to bottom of every content page)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Direct, 2–3 sentence answer. Be specific. AI systems cite specific answers.]"
      }
    },
    {
      "@type": "Question",
      "name": "[Question 2]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Direct answer]"
      }
    }
  ]
}
</script>
```

---

## THE STANDARD ENTITY DESCRIPTION (Use Verbatim Everywhere)

This exact description should appear identically on: YouTube About sections, Instagram bio, Beacons page, website meta description, Google Business Profile (if applicable), App Store description (first 2 sentences).

> *"Formation is a Bible study app for serious students of scripture, built on the classical inductive method. It offers verse-by-verse study, reading plans, notes, and community features — all powered by the Berean Study Bible (BSB) translation."*

**Why verbatim?** Google builds entity confidence when it sees the same description across multiple authoritative platforms. Variation confuses the entity graph.

---

## FORMATION'S TARGET ENTITY CLUSTERS

These are the specific entity niches Formation should own. Priority order:

| Entity Cluster | Target Searches | Content Needed |
|---------------|----------------|---------------|
| **Ethiopian Bible** | "Ethiopian Orthodox Bible books," "Book of Enoch Bible," "extra books Bible" | Long-form article + FAQ |
| **Inductive Bible Study Method** | "What is inductive Bible study," "how to do inductive Bible study," "inductive Bible study app" | Definition page + how-it-works page |
| **Dead Sea Scrolls + Bible** | "Dead Sea Scrolls missing books," "what Dead Sea Scrolls reveal," "Dead Sea Scrolls Bible differences" | Long-form article |
| **Berean Study Bible (BSB)** | "What is BSB Bible," "Berean Study Bible," "best literal Bible translation" | Comparison article |
| **Formation Bible App** | "Formation Bible app," "Formation Bible study app" | Homepage + App Store |
| **Council of Laodicea** | "What did Council of Laodicea remove," "Council of Laodicea books" | Article |
| **Early Church History** | "Early church history Bible study," "what early Christians believed" | Series hub page |

---

## COMPLEXITY MOAT CONTENT CALENDAR

The video argues: complex, specific, authoritative content earns AI citations. Schedule 1–2 of these per month:

| Month | Article Title | Entity Anchored |
|-------|-------------|----------------|
| April | "What the Ethiopian Orthodox Tewahedo Bible Contains That Yours Doesn't" | Ethiopian Bible |
| May | "The Inductive Bible Study Method: Why Formation Is Built Around It" | Inductive method + Formation |
| June | "Dead Sea Scrolls: 5 Things They Reveal That Standard Translations Skip" | Dead Sea Scrolls |
| July | "Why the Council of Laodicea Matters for Every Bible Reader Today" | Council of Laodicea |
| August | "BSB vs ESV vs NIV: Why Formation Uses the Berean Study Bible" | BSB + Formation |
| September | "The 35 Books Missing from Your Protestant Bible (And Why)" | Ethiopian Bible + Canon |

**Content structure for each article:**
1. H1: Specific, curiosity-triggering title
2. H2: The conventional understanding (what most people think)
3. H2: What the scholarship actually shows
4. H2: Why this matters for Bible study today
5. H2: Common Questions (FAQ schema section — minimum 3 Q&As)
6. CTA: Join the Formation waitlist / Start the companion reading plan

---

## AI CITATION AUDIT — RUN MONTHLY

Test these queries in ChatGPT, Perplexity, AND Google AI Overviews:
1. "What are the best Bible study apps for serious students?"
2. "What Bible app covers the Ethiopian Bible?"
3. "What is the inductive Bible study method and what app uses it?"
4. "What books are in the Ethiopian Bible that aren't in the Protestant Bible?"
5. "What did the Council of Laodicea do to the Bible?"

Track: Does Formation or Tony/Ekklesia appear in any answer? Screenshot monthly. Goal: Formation appears in at least 2 of 5 queries within 90 days of content launch.

---

## UTM PARAMETER CONVENTION

Every YouTube description link must use this format:
```
https://formationbible.com?utm_source=youtube&utm_medium=description&utm_campaign=[series-slug]&utm_content=ep[number]
```

Series slugs:
- `ekklesia-bible-class`
- `sons-of-noah`
- `revelation-series`
- `dead-sea-scrolls`
- `ethiopian-bible`
- `decoding-ai-families`

---

*Part of the Formation Skills Library | Bible App & Website/skills/*
*Source: Video 3 — "You Don't Have an SEO Problem. You Have a 'Brand Entity' Problem."*
