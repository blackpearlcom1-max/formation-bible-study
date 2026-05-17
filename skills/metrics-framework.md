# Formation Metrics Framework — Skill File
*Load this for analytics setup, Mixpanel event planning, UTM configuration, or reporting work.*

---

## THE RULE: Measure Outcomes, Not Activity

Traffic is a diagnostic metric. Email signups are a diagnostic metric. The only metrics that matter are the ones that prove Formation created new behavior — not just captured existing attention.

**The gold standard: Reading Plan Completion Rate.** Everything else is upstream of it.

---

## THE FORMATION OUTCOME FUNNEL

Every metric maps to one step in this chain. If a step has no measurement, it's a blind spot.

```
YOUTUBE VIDEO
  → [Metric: Click-Through Rate on description link (UTM tracked)]
WEBSITE / HUB PAGE
  → [Metric: Email Opt-In Rate (signups ÷ unique visitors)]
EMAIL SIGNUP
  → [Metric: Welcome Email Open Rate]
  → [Metric: Day-1 Reading Plan Start Rate (from email)]
READING PLAN STARTED
  → [Metric: Day-3 Retention (still active at Day 3)]
  → [Metric: Day-7 Retention]
  → [Metric: Plan Completion Rate]
PLAN COMPLETED
  → [Metric: Book Link Click Rate (post-completion)]
  → [Metric: App Download Rate (if app is live)]
BOOK PURCHASED / APP DOWNLOADED
  → [Metric: Formation Subscription Conversion Rate]
FORMATION SUBSCRIBER
  → [Metric: Monthly Churn Rate]
  → [Metric: MRR (Monthly Recurring Revenue)]
  → [Metric: LTV (Lifetime Value)]
```

---

## MIXPANEL EVENT TRACKING — IMPLEMENTATION SPEC

These events must be set up in Phase 1, Sprint 1. Not Phase 5.

### Core Events

| Event Name | Trigger | Properties |
|-----------|---------|-----------|
| `plan_started` | User begins Day 1 of any plan | plan_id, plan_name, plan_length, user_id, source (email/organic/push) |
| `plan_day_completed` | User completes a day's reading + reflection | plan_id, day_number, user_id, time_spent_seconds |
| `plan_completed` | User finishes final day of plan | plan_id, user_id, days_taken, completion_streak |
| `plan_abandoned` | User inactive 3+ days mid-plan | plan_id, last_day_completed, user_id |
| `verse_highlighted` | User highlights a verse | book, chapter, verse, color, user_id |
| `note_created` | User creates a study note | book, chapter, verse, note_length, user_id |
| `book_link_clicked` | User clicks Beacons book link | source (post_plan / nav / email / push), user_id |
| `subscription_started` | User begins paid subscription | tier (formation/pro), billing (monthly/annual), user_id |
| `subscription_churned` | User cancels subscription | tier, days_active, last_active_plan, user_id |
| `ai_query_sent` | User submits AI study question | query_length, response_time, user_id, plan_context |
| `community_post_created` | User posts in community | post_length, chapter_context, user_id |
| `email_signup` | New waitlist/user registration | source (utm_source), campaign (utm_campaign), is_new_user |

### Funnel Dashboard Setup in Mixpanel

Build these funnels on Day 1:
1. **Core Retention Funnel:** plan_started → plan_day_completed (Day 3) → plan_day_completed (Day 7) → plan_completed
2. **Monetization Funnel:** plan_completed → book_link_clicked → subscription_started
3. **Acquisition Funnel:** email_signup → plan_started → plan_day_completed (Day 1)

---

## UTM PARAMETER CONVENTION

### Formula
```
https://formationbible.com?utm_source=[SOURCE]&utm_medium=[MEDIUM]&utm_campaign=[CAMPAIGN]&utm_content=[CONTENT]
```

### Source Values
| utm_source | Use When |
|-----------|---------|
| `youtube` | YouTube video description or pinned comment |
| `email` | Any email in the welcome or nurture sequence |
| `community` | YouTube Community Tab post |
| `instagram` | Instagram bio link or story |
| `podcast` | Any podcast appearance |
| `direct` | Tony mentions the URL verbally (no tracking possible, but set as default) |

### Medium Values
| utm_medium | Use When |
|-----------|---------|
| `description` | Video description link |
| `pinned-comment` | Pinned comment on video |
| `email-welcome` | 3-part welcome sequence |
| `email-nurture` | Ongoing email newsletter |
| `bio` | Static bio/profile link |
| `story` | Instagram or YouTube story |

### Campaign Values (= series slug)
```
ekklesia-bible-class
sons-of-noah
revelation-series
dead-sea-scrolls
ethiopian-bible
early-church
decoding-ai-families
book-promo
waitlist-launch
```

### Example Links
```
// YouTube description for Ekklesia Bible Class Ep. 5
https://formationbible.com?utm_source=youtube&utm_medium=description&utm_campaign=ekklesia-bible-class&utm_content=ep5

// Email welcome sequence, Email #2
https://formationbible.com/reading-plans?utm_source=email&utm_medium=email-welcome&utm_campaign=welcome-sequence&utm_content=email2
```

---

## INCREMENTALITY TRACKING

**Definition:** Did this campaign/video create NEW behavior, or just capture existing behavior?

**How to measure:**
- In Google Analytics (GA4), create a segment: "New Users" (first visit in last 30 days)
- After each major YouTube video release, check: what % of website visitors that week were "New Users" vs returning?
- Track separately: new email signups vs existing email subscribers who re-engaged

**Weekly Incrementality Report template:**
```
Week of [DATE]:
New Videos Published: [list]
Total website visitors: [N]
  → New visitors (first-time): [N] ([%])
  → Returning visitors: [N] ([%])
New email signups: [N]
  → From YouTube (UTM tracked): [N]
  → Organic (direct): [N]
Reading plans started this week: [N]
  → By new users (this week signup): [N]
  → By existing users: [N]
INCREMENTAL GROWTH: [new signups who also started a plan]
```

---

## THE NORTH STAR METRICS (Check Weekly)

| Metric | Target | Current | Trend |
|--------|--------|---------|-------|
| Reading Plan Completion Rate | >40% | TBD | — |
| Day-7 Retention | >25% | TBD | — |
| Email → Plan Start Rate | >30% | TBD | — |
| Plan Completion → Book Click Rate | >15% | TBD | — |
| Free → Paid Conversion | >5% | TBD | — |
| Monthly Churn (paid) | <5% | TBD | — |

---

## REPORTING LANGUAGE GUIDE

When reporting metrics to Tony or stakeholders, always lead with outcomes, not activity:

❌ "We had 2,400 website visitors this week."
✅ "212 people started a reading plan this week — up 40% from last week."

❌ "Our email list grew by 300 subscribers."
✅ "300 new subscribers joined — 89 of them (30%) started a reading plan within 24 hours."

❌ "The video got 15,000 views."
✅ "The video drove 340 website clicks (2.3% CTR) and 48 new reading plan starts."

---

*Part of the Formation Skills Library | Bible App & Website/skills/*
*Source: Video 2 — "How to Prove Your Marketing Is Working (So Your Boss Stops Asking)"*
