# Formation Bible App — Phase 2 Backend Setup Guide
> Complete ALL of these before Claude writes a single line of backend code.
> Most tasks take 5–15 minutes each. Total time: ~2–3 hours.
> Last updated: May 6, 2026

---

## WHY THIS ORDER MATTERS
Each account feeds the next. Get them in this order so you're never blocked mid-session.

---

## ✅ ACCOUNT 1 — GitHub Organization
**Time:** ~5 min | **Cost:** Free

1. Go to → https://github.com/organizations/plan
2. Choose **Free** plan
3. Organization name: `berean-defense` (or `bereandefense`)
4. Email: your business email
5. ✅ Done — tell Claude the org name and Claude will initialize all repos

**What Claude does next:** Creates `formation-app`, `formation-backend`, and `formation-website` repos with proper structure, `.gitignore`, and branch protection rules.

---

## ✅ ACCOUNT 2 — Anthropic API Key
**Time:** ~5 min | **Cost:** Pay-as-you-go (budget $50/mo alert)

1. Go to → https://console.anthropic.com
2. Sign in with Google or create account
3. Click **API Keys** → **Create Key**
4. Name it: `formation-production`
5. Copy the key — save it somewhere safe (you only see it once)
6. Go to **Billing** → add a credit card → set **Usage Limit** to $50/month
7. ✅ Done — tell Claude the key starts with `sk-ant-...` (don't share the full key in chat)

**What Claude uses this for:** The AI Study Assistant — every question a user asks goes through Claude API.

---

## ✅ ACCOUNT 3 — API.Bible (Free Bible Text)
**Time:** ~5 min | **Cost:** Free

1. Go to → https://scripture.api.bible/signup
2. Create an account
3. Go to **My Apps** → **Add App**
4. App name: `Formation Bible`
5. Copy your **API Key**
6. The Berean Standard Bible (BSB) ID is: `bba9f40183526463-01`
7. ✅ Done

**What Claude uses this for:** Every Bible verse displayed in the app comes from this API. Free, unlimited.

---

## ✅ ACCOUNT 4 — Firebase (Auth + Push Notifications)
**Time:** ~10 min | **Cost:** Free (Spark plan handles launch traffic)

1. Go to → https://console.firebase.google.com
2. Click **Create a project**
3. Project name: `formation-bible`
4. Disable Google Analytics (you'll use Mixpanel instead)
5. In the project → **Authentication** → **Get Started** → enable:
   - Email/Password ✅
   - Google ✅
6. Go to **Project Settings** → **Service Accounts** → **Generate New Private Key**
7. Save the `.json` file — Claude will use it for the backend
8. ✅ Done

**What Claude uses this for:** User login, account creation, session management, push notifications.

---

## ✅ ACCOUNT 5 — Stripe (Payments)
**Time:** ~15 min | **Cost:** 2.9% + 30¢ per transaction (no monthly fee)

1. Go to → https://dashboard.stripe.com/register
2. Create account with your business email
3. Fill in business info → Berean Defense LLC, Wyoming
4. Add your business bank account (routing + account number)
5. Go to **Developers** → **API Keys**
6. Copy both:
   - **Publishable key** (starts with `pk_live_...`)
   - **Secret key** (starts with `sk_live_...`)
7. Also copy the **Test** versions (`pk_test_...` and `sk_test_...`) — Claude uses these first
8. ✅ Done — tell Claude you have both test and live keys ready

**What Claude sets up:** 4 subscription products (Free, Formation $7/mo, Formation Plus $12/mo, Formation Pro $29/mo), trial periods, webhooks for subscription events.

---

## ✅ ACCOUNT 6 — Railway (Backend Hosting)
**Time:** ~5 min | **Cost:** ~$5–20/month based on usage

1. Go to → https://railway.app
2. Sign in with GitHub (important — connects to your repos)
3. Start a new project
4. Select **Empty Project** for now
5. Upgrade to **Hobby plan** ($5/month) — required for custom domains
6. ✅ Done — Claude will connect your backend repo here and configure everything

**What Claude deploys here:** Your Node.js + Express API server that powers the entire app backend.

---

## ✅ ACCOUNT 7 — Apple Developer Program
**Time:** ~15 min to enroll | **Takes 1–2 days to be approved**
**Cost:** $99/year

1. Go to → https://developer.apple.com/enroll
2. Choose **Organization** enrollment (not Individual — you have an LLC)
3. You'll need:
   - Your LLC's D-U-N-S Number (get free at https://www.dnb.com/duns-number/get-a-duns-number.html — takes 1–5 business days)
   - EIN (your LLC's tax ID)
   - Legal entity name: Berean Defense LLC
4. Complete enrollment and pay $99
5. ✅ Done when Apple sends approval email

**What this unlocks:** TestFlight (beta testing), App Store submission, push notification certificates.

---

## ✅ ACCOUNT 8 — Google Play Developer
**Time:** ~10 min | **Cost:** $25 one-time

1. Go to → https://play.google.com/console/signup
2. Sign in with your Google account
3. Pay $25 one-time registration fee
4. Fill in developer name: `Berean Defense LLC`
5. Accept the Developer Distribution Agreement
6. ✅ Done — approval is usually instant

**What this unlocks:** Publishing Formation on Android, Google Play beta testing.

---

## ✅ ACCOUNT 9 — Upstash Redis (Caching Layer)
**Time:** ~5 min | **Cost:** Free for launch traffic

1. Go to → https://upstash.com
2. Create account with GitHub
3. Click **Create Database**
4. Name: `formation-cache`
5. Region: **US-East-1** (closest to Railway's default region)
6. Copy the **REST URL** and **REST Token**
7. ✅ Done

**What Claude uses this for:** Caches frequent Bible verse lookups and AI responses so repeat queries cost $0 instead of hitting the Anthropic API every time.

---

## 🔑 WHAT TO TELL CLAUDE AFTER YOU'RE DONE

Once you have these accounts, start a new session and say:

> "Phase 2 is complete. I have:
> - GitHub org: [org name]
> - Anthropic API key: ready
> - API.Bible key: ready
> - Firebase project: ready (I have the service account JSON)
> - Stripe: test keys ready
> - Railway: connected to GitHub
> - Apple Developer: pending approval
> - Google Play: approved
> - Upstash Redis: ready
>
> Let's start Phase 3 — Sprint 0."

Claude will then initialize all repos, set up the full project structure, and begin Sprint 0 of the backend build.

---

## ⏱️ ESTIMATED TOTAL TIME
| Task | Time |
|------|------|
| GitHub org | 5 min |
| Anthropic API | 5 min |
| API.Bible | 5 min |
| Firebase | 10 min |
| Stripe | 15 min |
| Railway | 5 min |
| Apple Developer | 15 min (+ 1–2 days approval wait) |
| Google Play | 10 min |
| Upstash Redis | 5 min |
| **Total active time** | **~75 min** |

Start Apple Developer enrollment first (longest approval time), then complete the others while waiting.

---

## 📋 QUICK STATUS TRACKER
- [ ] GitHub org created
- [ ] Anthropic API key + billing limit set
- [ ] API.Bible key obtained
- [ ] Firebase project created + service account JSON downloaded
- [ ] Stripe account created + test/live keys copied
- [ ] Railway account connected to GitHub
- [ ] Apple Developer enrollment submitted
- [ ] Google Play Developer account activated
- [ ] Upstash Redis database created
