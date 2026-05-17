# Formation Beta — Tracking & Monitoring Setup Guide

Everything is coded. You just need to complete three one-time setup steps below.

---

## What Was Added

| Feature | How It Works |
|---|---|
| **Email alert on new signup** | Supabase fires a webhook → your Railway backend → sends you an email |
| **API usage logging** | Every backend call is logged to Supabase (`api_usage_logs` table) |
| **Admin stats endpoint** | `GET /api/admin/stats` — see registrations + API call counts |
| **Page visit analytics** | Cloudflare Web Analytics on all 4 HTML pages (login + app, EN + ES) |

---

## Step 1 — Run the Supabase Migration

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard/project/tdlaxuquplqejvijqiow)
2. Click **SQL Editor** in the left sidebar
3. Paste the contents of `formation-backend/supabase/migrations/002_usage_tracking.sql`
4. Click **Run**

This creates the `api_usage_logs` table, the `beta_registrations` view, and the `usage_daily_summary` view.

---

## Step 2 — Add Environment Variables to Railway

Go to your Railway project → **Variables** and add these:

```
NOTIFY_EMAIL_USER=blackpearlcom1@gmail.com
NOTIFY_EMAIL_APP_PASS=<your Gmail App Password — see below>
NOTIFY_EMAIL_TO=blackpearlcom1@gmail.com
WEBHOOK_SECRET=<generate a random 32-char string — e.g. use https://generate-secret.vercel.app/32>
ADMIN_SECRET=<generate another random 32-char string>
```

### Getting a Gmail App Password
1. Go to [myaccount.google.com](https://myaccount.google.com) → **Security**
2. Make sure **2-Step Verification** is ON
3. Search for **"App passwords"** in the search bar
4. Create one → select **Mail** → copy the 16-character password
5. Paste it as `NOTIFY_EMAIL_APP_PASS` (no spaces)

### Deploy
After adding env vars, Railway will redeploy automatically. The new `nodemailer` package installs during build.

---

## Step 3 — Set Up Supabase Auth Webhook

1. Go to [Supabase Dashboard](https://supabase.com/dashboard/project/tdlaxuquplqejvijqiow)
2. Click **Database → Webhooks** in the left sidebar
3. Click **Create a new webhook**
4. Fill in:
   - **Name:** `new-user-registration-alert`
   - **Table:** `auth` schema → `users` table
   - **Events:** ✅ INSERT
   - **Webhook URL:** `https://<your-railway-url>/api/webhooks/auth-event`
     *(Find your Railway URL in Railway dashboard → your service → Settings)*
   - **HTTP Headers:** Add one header:
     - Key: `Authorization`
     - Value: `Bearer <your WEBHOOK_SECRET from Step 2>`
5. Click **Create webhook**

From now on, every new signup triggers an email to you within seconds.

---

## Step 4 — Set Up Cloudflare Web Analytics (Page Visits)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **Web Analytics** in the left sidebar
3. Click **Add a site** → enter `fbsapp.pages.dev`
4. Copy the **token** (looks like: `abc123def456...`)
5. Open these 4 files and replace `REPLACE_WITH_CF_ANALYTICS_TOKEN` with your token:
   - `formation-app/login.html`
   - `formation-app/app.html`
   - `formation-app-es/login.html`
   - `formation-app-es/app.html`
6. Repeat for `fbsapp-es.pages.dev` (or use the same token for both)
7. Redeploy both Cloudflare Pages sites

Cloudflare Analytics is cookie-free, GDPR-friendly, and free.

---

## Using the Admin Stats Endpoint

Once deployed, you can check stats anytime:

```bash
# Summary: registrations + API usage
curl -H "Authorization: Bearer <ADMIN_SECRET>" \
  https://<railway-url>/api/admin/stats

# Full list of beta registrations
curl -H "Authorization: Bearer <ADMIN_SECRET>" \
  https://<railway-url>/api/admin/registrations

# Raw API usage log
curl -H "Authorization: Bearer <ADMIN_SECRET>" \
  https://<railway-url>/api/admin/usage
```

Or you can view registrations directly in Supabase:
- **Auth Dashboard:** supabase.com/dashboard → Authentication → Users
- **SQL query:** `SELECT * FROM beta_registrations;`
- **Usage logs:** `SELECT * FROM usage_daily_summary;`

---

## Files Changed

### New Files
- `formation-backend/supabase/migrations/002_usage_tracking.sql` — DB tables + views
- `formation-backend/src/middleware/trackUsage.js` — API call logger
- `formation-backend/src/routes/webhooks.js` — Auth webhook → email alert
- `formation-backend/src/routes/admin.js` — Stats endpoint

### Modified Files
- `formation-backend/server.js` — adds `trackUsage` middleware
- `formation-backend/src/routes/index.js` — registers webhooks + admin routes
- `formation-backend/package.json` — adds `nodemailer` dependency
- `formation-backend/.env.example` — documents new env vars
- `formation-app/_headers` — CSP updated for Cloudflare Analytics
- `formation-app-es/_headers` — CSP updated for Cloudflare Analytics
- `formation-app/login.html` — analytics beacon added
- `formation-app/app.html` — analytics beacon added
- `formation-app-es/login.html` — analytics beacon added
- `formation-app-es/app.html` — analytics beacon added
