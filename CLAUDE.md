# Tony's Project Memory — Claude Working Context

## Who Tony Is
- **Name**: Tony (Antoine Banks) — blackpearlcom1@gmail.com
- **Background**: Non-technical founder. Relies on Claude to write code, build deliverables, and drive the technical work.
- **Other Projects**: Medical billing LinkedIn content (@DecodingAI4Families), Ekklesia Bible series (YouTube — Women in the Bible, Habakkuk, Revelation series)

---

## Company: Berean Defense, LLC

- **Legal name**: Berean Defense, LLC (name researched and confirmed available Feb 16, 2026 in Claude.ai chat)
- **Note**: Tony sometimes says "Berean Defender" — the researched/recommended name is "Berean Defense" — confirm with Tony which to use before filing
- **Incorporation**: Wyoming LLC recommended — use Northwest Registered Agent (~$164 first year)
- **Status**: NOT yet registered as of March 27, 2026
- **Trademark**: USPTO Intent to Use application recommended — Class 41 (Educational services) — $250 via TEAS Plus — NOT yet filed
- **Domains to secure**: bereandefense.com, bereandefense.org, bereandefense.app
- **Biblical basis**: Acts 17:11 — Bereans "examined the Scriptures daily"

---

## Active Project: Formation Bible Study App

### One-Line Pitch
A progressive Bible study app for serious Christians who want depth without seminary complexity — the gap between simple devotional apps (too shallow) and academic software (too complex).

### App Name & Legal Structure
- **App name**: Formation
- **DBA**: Berean Defense LLC doing business as Formation Bible Study (legal paperwork name)
- **Public brand**: Formation (app store, user-facing, trademark)
- **Trademark**: File USPTO Intent to Use for "Formation" in Class 9 (downloadable app) + Class 41 (educational services)
- **Landing page**: Built March 27, 2026 — `BIBLE APP/landing_page.html`

### Domains & Sites
- **English site**: formationbible.com → folder: `formation-website/`
- **Spanish site**: formacion-biblica.com → folder: `formation-website-es/`
- **Hosting**: One Netlify account, two separate site deployments
- **Spanish folder complete as of April 30, 2026** — all 17 pages + deploy config built

### Key Files in This Vault
- `BIBLE APP/bible_app_launch_roadmap.md.docx` — Full MVP features, tech stack, 6-week pre-launch plan, 12-phase dev roadmap
- `BIBLE APP/Christian_&_Bible_Study_App_Market_A_Strategic_Analysis_for_New_Entrants.docx` — Market research, competitive analysis, 12 unmet needs
- `BIBLE APP/TASKS.md` — Current task tracker (always check this)
- `BIBLE APP/landing_page.html` — Live landing page (email capture, waitlist)
- `BIBLE APP/CLAUDE.md` — This file (also saved here as backup)

### Target Audience
"Serious but not seminary" Christians, age 28–55. Finds simple devotional apps too shallow, academic software too complex. Small group leaders, growing Christians, question-askers.

### Core Value Prop
Progressive Bible study that grows with you — from daily devotion to deep scholarship.

### MVP Features (v1.0)
1. Progressive Learning Paths (4 levels: beginner to scholar)
2. Inductive Bible Study Framework (Observe, Interpret, Apply)
3. Deep Formation Focus (no streaks, depth metrics)
4. Authentic Community (study groups, accountability partners)
5. Life Application Integration (journaling, habit tracking)
6. Prayer Integration (pray the scripture, prayer journal)
7. Personalization (learning style, pace, maturity level)

### Bible Translation
- **Launch**: Berean Standard Bible (BSB) only — free/open license, no legal issues
- **Future**: Add other translations after securing licenses via API.Bible

### Tech Stack
- **Frontend**: React Native (iOS + Android)
- **Backend**: Node.js + Express
- **Database**: PostgreSQL + Redis
- **Auth**: Firebase Auth
- **Hosting (MVP)**: Railway
- **Bible API**: API.Bible or direct BSB integration
- **AI/Search backend**: Claude API (Anthropic API key — NOT the Claude.ai subscription)
- **Payments**: Stripe
- **Analytics**: Mixpanel
- **Ads**: Considering ad-supported free tier to offset Claude API costs

### Monetization — CONFIRMED PRICING (March 27, 2026)
**No "free for limited time" — permanent free tier only.**

| Tier | Monthly | Annual |
|---|---|---|
| Free (permanent) | $0 | $0 |
| Formation | $7 | $60 |
| Formation Plus | $12 | $108 |
| Formation Pro | $29 | $264 |

- **Free**: BSB only, 50 notes, 1 reading plan, read-only community, 5 AI queries/day, ad-supported
- **Formation ($7)**: Full BSB + future translations, unlimited notes, all reading plans, full community, AI study assistant, no ads, 14-day free trial
- **Formation Plus ($12)**: Everything in Formation + accountability partners, early feature access, 14-day free trial
- **Formation Pro ($29)**: Everything in Formation Plus + unlimited AI queries, priority support, 14-day free trial
- **AI cost**: ~$0.50–$1.50/user/month (Haiku for search, Sonnet for deep study)
- **Net margin**: ~$6–7/month per Formation subscriber

### 24/7 Monitoring Strategy (confirmed March 27, 2026)
Three-layer system:
1. **Always-on tools**: Sentry (errors), Railway (uptime), Anthropic Console (API costs), Mixpanel (usage), Stripe (payments), UptimeRobot (availability) — run automatically and alert Tony directly
2. **Scheduled Claude sessions**: Automated daily/weekly Cowork check-ins reviewing logs, costs, and metrics — produces a health report without Tony having to ask
3. **On-demand sessions**: Tony brings alerts or issues to Cowork, Claude diagnoses and fixes

Claude's role: Build monitoring into the app from Sprint 1. Run scheduled health checks. Fix issues immediately when Tony opens a session.

### Timeline
- Dev start: April 1, 2026
- MVP launch target: 6–12 months (Oct 2026 – April 2027)

---

## Legal Notes
- **Competitor naming**: Do NOT name YouVersion or Logos on landing page or in marketing — use generic descriptions ("simple devotional apps", "academic software")
- **BSB**: Free to use commercially under open license
- **Modern translations** (NIV, ESV, etc.): Require paid licenses — do NOT promise these until licensed
- **"No ads" claim**: REMOVED from landing page — keeping ad option open
- **DBA**: File "Formation" as DBA under Berean Defense LLC with state Secretary of State
- **Claude API**: Legal to use in app with ads; cannot use Claude.ai subscription credentials for app backend

---

## Project Status Log

### March 27, 2026 — Session 1 (Day 1)
- ✅ Market research complete
- ✅ MVP features defined
- ✅ Tech stack decided
- ✅ CLAUDE.md memory file set up
- ✅ TASKS.md created
- ✅ Landing page built (`landing_page.html`) — legal fixes applied
- ✅ Company name confirmed: Berean Defense LLC (from Feb 16 Claude.ai session)
- ✅ DBA strategy confirmed: Formation operates as DBA under Berean Defense LLC
- ❌ LLC not yet registered
- ❌ Trademark not yet filed
- ❌ Domain not yet purchased
- ❌ Dev environment not yet set up

### April 16, 2026 — Session 3
- ✅ ai_disclaimer.html built — 8 sections, full AI features disclosure
  - Sections: What Is Formation AI, What AI Can Help With, What AI Cannot Do,
    Data Handling & Privacy, AI Usage by Plan, Our AI Principles,
    Third-Party AI Provider (Anthropic), Report a Problem
  - Tier table with Free/Formation/Pro AI query limits
  - Full Anthropic API disclosure with no-affiliation statement
  - "Errors can occur" warning card prominently displayed

### April 16, 2026 — Session 2
- ✅ bible_app_launch_roadmap.md.docx rebuilt as clean printable Word doc (Formation_App_Launch_Roadmap.docx)
- ✅ terms.html fully rebuilt — upgraded from 13 → 19 sections (industry standard)
  - Added: AI disclosure (§8), Third-Party Services (§9), DMCA/Copyright (§10),
    Indemnification (§13), full Arbitration/AAA (§15), Wyoming governing law (§16),
    Miscellaneous/Severability/Force Majeure (§17)
- ✅ Formation_Master_Roadmap_Checklist.docx created — landscape Word, 75 numbered tasks
  - Phase 0 (8 tasks): Company formation — NOT STARTED
  - Phase 1 (21 tasks): Website pages — IN PROGRESS (legal group complete)
  - Phase 2 (9 tasks): Technical setup — NOT STARTED
  - Phase 3 (28 tasks): Backend build — NOT STARTED
  - Phase 4 (9 tasks): Launch — NOT STARTED
- ✅ FORMATION_MEMORY.md updated with current page status, design system, terms sections
- ✅ TASKS.md updated with full phase breakdown
- ✅ SESSION_QUICK_START_v2.md created (original SESSION_QUICK_START.md was iCloud-locked)
- ❌ LLC not yet registered (Phase 0 — Tony's action required)
- ❌ Trademark not yet filed
- ❌ Domain not yet purchased

### April 30, 2026 — Session 5: Spanish Site Complete
- ✅ All 17 Spanish pages built in `formation-website-es/` — pixel-for-pixel mirror of English site
- ✅ Full Spanish translation: fluent, natural Spanish throughout (not machine literal)
- ✅ "Formation" brand name kept in English everywhere (proper noun)
- ✅ Netlify forms differentiated with -es suffix: waitlist-es, signup-es, contact-es, error-report-es
- ✅ Contact emails use @formacion-biblica.com domain for routing separation
- ✅ lang="es" and locale="es_ES" on all pages; all canonical URLs → https://formacion-biblica.com/
- ✅ Scripture books translated: Acts→Hechos, Matthew→Mateo, Romans→Romanos, etc.
- ✅ Deployment config files created in formation-website-es/:
  - netlify.toml — build settings, security headers, cache rules, www→non-www redirect
  - robots.txt — allow all crawlers, sitemap pointer
  - _redirects — www→non-www, .html extension cleanup
  - _headers — security + cache headers
  - sitemap.xml — all 17 pages with hreflang alternates (en/es cross-links)
- ✅ CLAUDE.md updated with Spanish page inventory and session log
- **Deployment plan**: One Netlify account → Two separate sites
  - Site 1: formationbible.com → formation-website/ folder (English)
  - Site 2: formacion-biblica.com → formation-website-es/ folder (Spanish)
- ❌ Domains not yet purchased (formationbible.com + formacion-biblica.com) — Tony's action
- ❌ Netlify sites not yet deployed — Tony's action (drag-drop folder or GitHub connect)
- ❌ checkout.html not built (post-MVP, same status as English)

### April 16, 2026 — Session 4 (continued)
- ✅ how_it_works.html built — 6-step numbered journey with connector lines, Observe/Interpret/Apply method cards, sample reading plans, AI query examples, note-taking tools, community features, 4 learning levels (Foundation/Formation/Scholar/Teacher), Berean Check with Acts 17:11, CTA
- ✅ faq.html built — 20 questions across 5 categories: About Formation (5), Plans & Pricing (4), AI & Bible Study (5), Faith & Doctrine (3), Account & Privacy (4); interactive accordion with category filter tabs; Acts 17:11 scripture anchor; "Still Have a Question" CTA card

### English Pages Built as of April 16, 2026
| Page | File | Status |
|------|------|--------|
| Landing / Home | index.html | ✅ DONE |
| Features | features.html | ✅ DONE |
| Pricing | pricing.html | ✅ DONE |
| Waitlist Signup | signup.html | ✅ DONE (footer: manual fix needed) |
| Privacy Policy | privacy_policy.html | ✅ DONE — 10 sections |
| Terms of Service | terms.html | ✅ DONE — 19 sections |
| Cookie Policy | cookie_policy.html | ✅ DONE — 9 sections |
| AI Disclaimer | ai_disclaimer.html | ✅ DONE — 8 sections |
| COPPA Notice | coppa.html | ✅ DONE — 7 sections |
| Billing Terms | billing_terms.html | ✅ DONE — 10 sections |
| About Us | about.html | ✅ DONE — Berean story, Acts 17:11, Romans 12:2 |
| Statement of Faith | statement_of_faith.html | ✅ DONE — 10 articles, fully Scripture-anchored |
| Mission | mission.html | ✅ DONE — Great Commission, Matt 28:18–20, Acts 17:11–12 |
| How It Works | how_it_works.html | ✅ DONE — 6-step journey, 4 learning levels |
| FAQ | faq.html | ✅ DONE — 20 questions, 5 categories, accordion |
| Contact | contact.html | ❌ Not built |
| Error Reporting | error_reporting.html | ❌ Not built |
| Checkout | checkout.html | ❌ Not built |

### Spanish Pages Built as of April 30, 2026 (formation-website-es/)
| Page | File | Status |
|------|------|--------|
| Landing / Inicio | index.html | ✅ DONE — waitlist-es form, full Spanish schema |
| Características | features.html | ✅ DONE — inductive study, bento grid, CTA |
| Precios | pricing.html | ✅ DONE — monthly/yearly toggle, 4 tiers, comparison table |
| Registro | signup.html | ✅ DONE — signup-es form, tab auth, plan badge |
| Acerca de | about.html | ✅ DONE — 7 sections, Hechos 17:11, Romanos 12:2 |
| Misión | mission.html | ✅ DONE — Gran Comisión, Mateo 28:18–20 |
| Cómo Funciona | how_it_works.html | ✅ DONE — 6 pasos, 4 niveles, método OIA |
| FAQ | faq.html | ✅ DONE — 20 preguntas, 5 categorías, acordeón |
| Contacto | contact.html | ✅ DONE — contact-es form, 3 tarjetas |
| Declaración de Fe | statement_of_faith.html | ✅ DONE — 10 artículos, Escritura en cada uno |
| Términos de Servicio | terms.html | ✅ DONE — 19 secciones, Wyoming LLC, AAA |
| Política de Privacidad | privacy_policy.html | ✅ DONE — 10 secciones, GDPR, CCPA, COPPA |
| Política de Cookies | cookie_policy.html | ✅ DONE — 9 secciones, tabla de terceros |
| Aviso de IA | ai_disclaimer.html | ✅ DONE — 8 secciones, tabla de 4 niveles |
| Aviso COPPA | coppa.html | ✅ DONE — 7 secciones, menores de 13 |
| Términos de Facturación | billing_terms.html | ✅ DONE — 10 secciones, tabla de precios |
| Reportar un Error | error_reporting.html | ✅ DONE — error-report-es form, radio de severidad |
| Checkout | checkout.html | ❌ Not built (same as English — post-MVP) |

---

## Roles

### Claude handles:
- Writing all code (React Native app, Node.js backend, etc.)
- Building all deliverables (landing page, docs, specs, wireframes)
- Driving technical architecture decisions
- Updating TASKS.md as work progresses

### Tony must handle (requires personal action):
- Register Berean Defense LLC in Wyoming (Northwest Registered Agent)
- File USPTO Intent to Use trademark — "Berean Defense" Class 41, "Formation" Class 9 + 41
- Purchase domains (bereandefense.com + formationbible.com or similar)
- Open business bank account
- Create Apple Developer account ($99/yr) and Google Play ($25 one-time)
- Set up Stripe account
- File DBA "Formation" under Berean Defense LLC with state
- Conduct 10–15 user interviews for validation

---

## How to Resume in a New Session
1. Read this CLAUDE.md file immediately
2. Read `BIBLE APP/TASKS.md` for current task status
3. Say: "Ready to pick up where we left off on the Formation app, Tony." Reference next task.
4. Never make Tony re-explain the project from scratch.

## ⚠️ STANDING RULE — Always Check the Folder First
**Before asking Tony ANY question about the project, check the folder files first.**
- Read CLAUDE.md + TASKS.md every session before speaking
- If unsure about domain registrar, hosting, API keys, credentials, status of a task — check api-keys.md, TASKS.md, CLOUDFLARE_MIGRATION_CHECKLIST.md, FORMATION_MEMORY.md first
- Only ask Tony if the answer is genuinely not in any file
- Tony should never have to answer a question that's already documented

## Key Context Shortcuts
- "the app" = Formation Bible Study App
- "the company" = Berean Defense LLC
- "the landing page" = BIBLE APP/landing_page.html
- "the tasks" = BIBLE APP/TASKS.md
