# Formation — Deployment Guide
**Sprint 5 release — Do these steps in order.**

---

## Step 1 — Supabase: Run the Study Groups SQL migration

This must happen BEFORE deploying the backend or the groups feature will error.

1. Go to your Supabase project dashboard → **Database → SQL Editor**
2. Open the file: `formation-backend/supabase/study_groups_migration.sql`
3. Paste the entire contents into the SQL Editor and click **Run**
4. Confirm you see 4 new tables: `study_groups`, `group_members`, `group_notes`, `group_prayer_requests`

---

## Step 2 — Railway: Deploy the backend

The backend has new routes: Study Groups (`/api/groups`) and Daily Verse (`/api/study/daily`).

1. Open your terminal and navigate to the backend folder:
   ```
   cd "Bible App & Website/formation-backend"
   ```
2. Commit and push to your Railway-connected branch:
   ```
   git add -A
   git commit -m "Sprint 5: Study Groups, Daily Verse, Profile, Progress Dashboard"
   git push
   ```
3. Railway will auto-deploy. Watch the deploy log — it should complete in under 2 minutes.
4. Verify the backend is live by visiting:
   `https://formation-backend-production.up.railway.app/api/study/daily`
   — you should get a JSON response (may be cached or show today's verse)

---

## Step 3 — Cloudflare Pages: Deploy the English site

**Drag and drop the folder — do NOT drag individual files.**

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Pages**
2. Open your existing **formation-website** project
3. Click **Upload assets** (or the deploy/upload button for your project)
4. Drag the entire `formation-website` folder into the upload area
5. Wait for the upload to complete and the deployment to go live
6. Visit your English beta URL and verify: `beta.html` loads, all 6 tabs are visible (Read, Ask the Word, Study Notes, Reading Plan, Groups, Progress)

---

## Step 4 — Cloudflare Pages: Deploy the Spanish site

Same process as Step 3 for the Spanish project.

1. Go to **Pages** → open your **formation-website-es** project
2. Click **Upload assets**
3. Drag the entire `formation-website-es` folder into the upload area
4. Wait for deployment
5. Visit your Spanish beta URL and verify: `beta.html` loads, all 6 tabs are visible in Spanish

---

## Step 5 — Smoke test checklist

After both sites are live, test these in order:

**Auth**
- [ ] Sign in with magic link works on both EN and ES sites
- [ ] Profile avatar (initials) appears in the nav after sign-in

**Profile panel**
- [ ] Click avatar → panel slides in from the right
- [ ] Set a display name → save → name appears in nav
- [ ] Change password link sends a reset email

**Daily Verse (Read tab)**
- [ ] Daily verse card appears at top of Read tab
- [ ] "Read reflection" expands the devotional
- [ ] "Read Chapter →" navigates to the correct chapter
- [ ] Dismiss button hides the card for the rest of the day

**Study Groups**
- [ ] Create a new group → invite code appears
- [ ] Join a group with the invite code (use a second account or browser)
- [ ] Post a note in the group
- [ ] Post a prayer request → mark it answered
- [ ] Set a group reading plan

**Progress Dashboard**
- [ ] Progress tab shows streak, chapters, notes, highlights, groups
- [ ] Mark a reading day complete → revisit Progress tab → streak increments

**Research Companion (Ask tab)**
- [ ] All 5 mode buttons are visible and selectable
- [ ] Ask a question → answer matches the selected mode

**Reading Plan**
- [ ] Start a plan → days render correctly
- [ ] "Read Now" navigates to the correct chapter

---

## Environment variables (already set on Railway — no changes needed)

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | Claude API for AI study + daily verse |
| `GEMINI_API_KEY` | Gemini for theological verification |
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key |
| `BIBLE_API_KEY` | API.Bible key |
| `REDIS_URL` | Redis for caching (24h study + daily verse until midnight) |

---

## If something breaks

- **Groups 500 error** → Supabase SQL migration (Step 1) was not run. Run it now.
- **Daily verse not loading** → Check Railway logs for `ANTHROPIC_API_KEY` or `REDIS_URL` errors.
- **Profile save not working** → Supabase `auth.updateUser` requires the user's JWT. Check that the user is fully signed in.
- **Tabs not showing** → Hard-refresh the browser (Cmd+Shift+R / Ctrl+Shift+R) — old cached JS may be running.

---

*Formation — Sprint 5 complete. English + Spanish sites ready for beta.*
