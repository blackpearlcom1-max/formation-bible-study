# Bible App — Active Task Tracker
*Last updated: April 30, 2026*
*For full 75-task checklist: see Formation_Master_Roadmap_Checklist.docx*

---

## 🔴 PHASE 0 — Tony's Personal To-Dos (Claude cannot do these)
*Complete ALL of Phase 0 before touching the backend*

- [ ] Confirm final spelling: "Berean Defense" or "Berean Defender"?
- [ ] Register Berean Defense LLC in Wyoming → northwestregisteredagent.com (~$164)
- [ ] Get EIN from IRS → irs.gov (free, online, ~15 min)
- [ ] File DBA "Formation Bible Study" under Berean Defense LLC
- [ ] File USPTO trademark — "Berean Defense" Class 41 ($250) → teas.uspto.gov
- [ ] File USPTO trademark — "Formation" Class 9 + 41 ($500) → teas.uspto.gov
- [ ] Purchase domains: bereandefense.com + formationbible.com
- [ ] Open dedicated business bank account under Berean Defense LLC EIN

---

## 🟡 PHASE 1 — Website Pages (In Progress)

### Group A — Legal & Compliance ✅ COMPLETE
- [x] Privacy Policy (privacy_policy.html) — 10 sections, Apr 16 2026
- [x] Terms of Service (terms.html) — 19 sections, industry standard, Apr 16 2026
- [x] Cookie Policy (cookie_policy.html) — 9 sections, Apr 16 2026

### Group B — Legal & Compliance (Remaining)
- [x] AI Disclaimer page (ai_disclaimer.html) — Claude API disclosure, AI limitations — 8 sections, Apr 16 2026
- [x] COPPA Notice (coppa.html) — children under 13, parental consent — 7 sections, Apr 16 2026
- [x] Billing Terms page (billing_terms.html) — subscriptions, Stripe, refunds, auto-renewal — 10 sections, Apr 16 2026

### Group C — Brand & Identity
- [x] About Us page (about.html) — Berean foundation, Acts 17:11, Romans 12:2 — Apr 16 2026
- [x] Statement of Faith page (statement_of_faith.html) — 10 articles, Scripture-anchored — Apr 16 2026
- [x] Mission page (mission.html) — Great Commission, Matt 28:18–20, Acts 17:11–12 — Apr 16 2026

### Group D — User Experience
- [x] Home / Landing page (index.html) ✅
- [x] Features page (features.html) ✅
- [x] Pricing page (pricing.html) ✅
- [x] Signup / Waitlist page (signup.html) ✅ — footer needs manual fix (iCloud lock)
- [x] How It Works page (how_it_works.html) — 6-step journey, Observe/Interpret/Apply, 4 learning levels — Apr 16 2026
- [x] FAQ page (faq.html) — 20 questions, 5 categories, accordion + filter tabs — Apr 16 2026
- [x] Contact / Support page (contact.html) — email form, company info, response times, social links, pre-launch notice, success state — Apr 30 2026
- [x] Error Reporting page (error_reporting.html) — 6 error categories, severity selector, sidebar with process steps & response times, animated success state — Apr 16 2026

### Group E — Monetization
- [x] Checkout / Subscription page (checkout.html) — full 2-step UI (plan select → account/payment), billing toggle (monthly/annual), Stripe integration points marked, pre-launch banner, "Coming Soon" redirects to waitlist — Apr 16 2026

### Group F — Deployment (Tony — do in order)
- [x] Create Cloudflare account → dash.cloudflare.com/sign-up — DONE (confirmed May 2026)
- [x] Purchase domain: formationbible.com — DONE, registered in Cloudflare (confirmed May 2026)
- [x] Upload formation-website folder to Cloudflare Pages → deployed May 7, 2026
        Beta URL (English): https://young-sound-b24b.blackpearlcom1.workers.dev
- [x] Upload formation-website-es folder to Cloudflare Pages → deployed May 7, 2026
        Beta URL (Spanish): https://formation-es.pages.dev
        Note: netlify.toml renamed to .bak (was causing deploy stall)
- [ ] Upgrade Cloudflare to Pro plan ($20/month)
- [ ] Connect formationbible.com custom domain to Pages project
- [ ] Set up email: support@formationbible.com via Cloudflare Email Routing (free) or Google Workspace ($6/mo)
- [x] Upgrade Claude to $100/month Max plan → done (confirmed May 2026)
- [ ] Fix signup.html footer links manually (iCloud lock prevents Claude edits)
- [ ] Collect 100+ email waitlist signups
- [ ] Conduct 10–15 user interviews
- [x] Fill in contact info (phone, address, email) → contact.html updated — no social links (intentional)

---

## ✅ PHASE 2 — Technical Setup (COMPLETE — May 6, 2026)
*SCOPE: Website only — no mobile app*
- [x] Create GitHub organization for Berean Defense LLC
- [x] Create Stripe account, connect to LLC bank account — test keys saved, sandbox mode
- [x] Set up Railway account (backend hosting) — Hobby $5/mo, project: glorious-simplicity
- [x] Register API.Bible, get BSB API key — Pro $29/mo, 150k calls/mo
- [x] Get Anthropic API key (console.anthropic.com — NOT Claude.ai sub) — key: formation-production
- [x] Set up Supabase project (DB + Auth — replaces Firebase) — project: formation-bible, us-east-1
- [x] Set up Upstash Redis (caching) at upstash.com — formation-bible-cache, us-east-1, free tier
- [x] Configure Anthropic Console cost alert at $50/month — spend cap set, email alerts at $40/$45

---

## 🟡 PHASE 3 — Backend Build (IN PROGRESS — May 7, 2026)
*SCOPE: Website backend only — Node.js + Express API*
*Folder: `formation-backend/` — LIVE on Railway at https://formation-backend-production.up.railway.app*
*GitHub: https://github.com/blackpearlcom1-max/formation-backend (May 7, 2026)*

*Sprint 0 — Foundation* ✅ COMPLETE
- [x] Initialize Node.js + Express backend project — server.js, package.json, src/
- [x] Set up PostgreSQL schema (via Supabase) — supabase/migrations/001_initial_schema.sql
- [x] Set up Redis caching layer (Upstash) — src/config/redis.js (cached() helper)
- [x] CI/CD pipeline (GitHub Actions → Railway) — .github/workflows/deploy.yml

*Sprint 1 — Bible Reading* ✅ COMPLETE
- [x] Bible text API route (BSB via API.Bible) — src/services/bibleService.js
- [x] Chapter/verse lookup endpoint — GET /api/bible/chapter/:abbr/:id, /verse/:abbr/:id, /passage/:abbr/:id
- [x] Parallel translation support — GET /api/bible/parallel/:passageId?translations=BSB,KJV,ESV
- [x] Translation registry — src/config/bibleTranslations.js (EN: BSB,KJV,NIV,ESV,NLT,NASB,NKJV | ES: RVR1960,NVI,DHH)
⚠️  TONY ACTION: Confirm translation IDs in API.Bible dashboard — see comments in bibleTranslations.js

*Sprint 2 — Auth & User Data* ✅ COMPLETE
- [x] Supabase Auth (email + Google) — handled client-side by Supabase JS SDK; backend verifies JWT
- [x] Auth middleware — src/middleware/auth.js (requireAuth) + requirePlan.js (free/formation/pro gating)
- [x] User profile endpoint — GET/PATCH /api/user/profile
- [x] Verse notes — full CRUD /api/user/verse-notes
- [x] Study notes — full CRUD /api/user/study-notes
- [x] Reading history — GET/POST /api/user/history

*Sprint 3 — AI Study Assistant* ✅ COMPLETE (May 6, 2026)
- [x] 5-step AI pipeline route (/api/study)
- [x] Claude API integration (research + drafting) — claude-haiku-4-5 for speed + cost
- [x] API.Bible verse validation (parallel) — full 66-book ref parser
- [x] Gemini verification (parallel) — gemini-1.5-flash, theology accuracy check
- [x] Redis caching for repeat queries — 24h TTL, SHA-256 cache key
- [x] "Flag this answer" error reporting endpoint — POST /api/study/flag (open, no auth)

*Sprint 4 — Monetization & Monitoring* ✅ COMPLETE (May 7, 2026)
- [x] Stripe billing (Free / Formation $7 / Plus $12 / Pro $29) — billingService.js + billing.js routes
- [x] Subscription webhooks — checkout.completed, subscription.updated/deleted, invoice.payment_failed
- [x] Rate limiting — express-rate-limit wired (general 300/15min, study 30/15min, billing 20/15min)
- [x] Sentry error tracking — @sentry/node in server.js (enabled when SENTRY_DSN set)
- [ ] UptimeRobot — Tony action: register free account → ping https://[railway-url]/health every 5 min
- [ ] Security audit (API keys, RLS, rate limits) — Tony action: run checklist below before launch

⚠️  TONY ACTIONS before going live (Sprint 4):
- [x] Create 6 Stripe Price IDs in Stripe dashboard → added to Railway Shared Variables (May 7, 2026)
        STRIPE_PRICE_FORMATION_MONTHLY ($7/mo) = price_1TUKZnFtLzzT3Qk4yQ3boaWn
        STRIPE_PRICE_FORMATION_ANNUAL ($60/yr) = price_1TUKsFFtLzzT3Qk4HEQ3HPUa
        STRIPE_PRICE_PLUS_MONTHLY ($12/mo) = price_1TUKwvFtLzzT3Qk4pADAIfmQ
        STRIPE_PRICE_PLUS_ANNUAL ($108/yr) = price_1TUKy8FtLzzT3Qk4mPfHPrBT
        STRIPE_PRICE_PRO_MONTHLY ($29/mo) = price_1TUKzsFtLzzT3Qk4Kagw23eM
        STRIPE_PRICE_PRO_ANNUAL ($264/yr) = price_1TUL1aFtLzzT3Qk4CfoeOhON
- [x] Register Stripe webhook endpoint — created May 7, 2026
        Destination ID: we_1TUVABFtLzzT3Qk4ZGwdVqp1 | 11 events | STRIPE_WEBHOOK_SECRET added to Railway
- [x] Create Sentry project (sentry.io, free tier) → SENTRY_DSN added to Railway (May 7, 2026)
- [x] Set up UptimeRobot — monitor active, pinging /health every 5 min (May 7, 2026)
- [x] npm install @sentry/node — installed via package.json on Railway deploy (May 7, 2026)

---

## ⬜ PHASE 4 — Launch
- [ ] Beta test with waitlist users
- [ ] Fix critical bugs from beta
- [ ] Soft launch — email waitlist + YouTube announcement
- [ ] Update AdSense tax info to LLC EIN
- [ ] Convert YouTube channels to Brand Accounts
- [ ] Create LinkedIn Company Page for Berean Defense LLC

---

## 📋 Quick Context (read this, not history)
- **Company:** Berean Defense LLC | **Product:** Formation Bible Study (website)
- **Sites:** TWO websites — English (formationbible.com) + Spanish (formacion-biblica.com)
- **Backend:** ONE shared backend serves both sites (multi-language support built in from Sprint 0)
- **Tech stack:** Node.js + Express + PostgreSQL (Supabase) + Supabase Auth + Redis (Upstash) | Hosted on Railway + Cloudflare Pages
- **Bible API:** API.Bible Pro ($29/mo) — English translations: BSB (primary), KJV, NIV, ESV, NLT, NASB, NKJV | Spanish translations: RVR1960 (primary), NVI, DHH, RVC, LBLA
- **Pricing:** Free · Formation $7/mo ($60/yr) · Formation Plus $12/mo ($108/yr) · Formation Pro $29/mo ($264/yr)
- **Monthly infra cost:** ~$44–54/mo (API.Bible Pro $29 + Railway $5 + Anthropic API ~$10–20)
- **Status:** Phase 1 complete. Phase 2 in progress (GitHub ✅, Anthropic API ✅).
- **Master checklist:** `Formation_Master_Roadmap_Checklist.docx` — 75 tasks, landscape Word doc
- **Full strategy:** See `BIBLE_WebApp_QUICK_REF.md` (or `BIBLE_WebApp_MASTER_SKILL.md` for deep dive)
- **Design memory:** See `FORMATION_MEMORY.md` in vault root

---

## How to Use This File
Each session: read `FORMATION_MEMORY.md` + this TASKS.md → pick up at first unchecked item → mark tasks complete as done.
