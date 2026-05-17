# Formation Website — Cloudflare Pages Migration Checklist
> Move from Netlify (free) → Cloudflare Pages Pro ($20/month)
> Estimated time: 15–30 minutes
> No code changes needed. Zero downtime if steps are followed in order.

---

## WHY WE'RE MIGRATING
- Netlify free tier: 100GB bandwidth/month → site **suspends** when exceeded
- Cloudflare Pages Pro: **Unlimited bandwidth** → never crashes, no matter the traffic
- Same cost or less, far more capable at scale (1M+ users)
- 300+ global data centers vs Netlify's fewer edge nodes
- Built-in DDoS protection, 99.99% uptime SLA

---

## STEP 1 — Create Your Cloudflare Account
- [ ] Go to https://dash.cloudflare.com/sign-up
- [ ] Sign up with your business email (e.g., tony@formationbible.com)
- [ ] Verify your email address

---

## STEP 2 — Register Your Domain (if not already done)
- [ ] In Cloudflare dashboard → click **Domain Registration** → **Register Domains**
- [ ] Search for `formationbible.com`
- [ ] Purchase (~$10/year — Cloudflare sells at cost, no markup)
- [ ] ✅ This automatically puts DNS under Cloudflare control — no extra steps

> If you already own the domain elsewhere (GoDaddy, Namecheap, etc.):
> - Go to Cloudflare → **Add a Site** → enter your domain
> - Cloudflare will scan your DNS records
> - Update your domain registrar's nameservers to the two Cloudflare nameservers provided
> - Wait 5–30 minutes for propagation

---

## STEP 3 — Deploy the Website on Cloudflare Pages
**Option A: Upload Files Directly (Easiest — no GitHub needed)**
- [ ] In Cloudflare dashboard → **Workers & Pages** → **Create Application** → **Pages**
- [ ] Click **Upload Assets**
- [ ] Name your project: `formation-website`
- [ ] Drag and drop the entire `formation-website` folder
- [ ] Click **Deploy site**
- [ ] Cloudflare gives you a preview URL (e.g., `formation-website.pages.dev`) — test it

**Option B: Deploy from GitHub (Best for ongoing updates)**
- [ ] Push your `formation-website` folder to a GitHub repository
- [ ] In Cloudflare Pages → **Connect to Git** → authorize GitHub
- [ ] Select your repository
- [ ] Build settings: Framework = **None**, Build command = leave blank, Output directory = `.`
- [ ] Click **Save and Deploy**
- [ ] Every time you push to GitHub, the site auto-deploys ✅

---

## STEP 4 — Upgrade to Pages Pro
- [ ] In Cloudflare dashboard → **Account** → **Plans**
- [ ] Upgrade to **Pro plan** ($20/month)
- [ ] This gives you: unlimited bandwidth, advanced analytics, faster builds, priority support

---

## STEP 5 — Connect Your Custom Domain
- [ ] In your Pages project → **Custom Domains** → **Set up a custom domain**
- [ ] Enter `formationbible.com`
- [ ] Also add `www.formationbible.com` → set to redirect to `formationbible.com`
- [ ] Cloudflare activates SSL automatically (free, instant)
- [ ] Your site is now live at https://formationbible.com ✅

---

## STEP 6 — Verify Everything Works
- [ ] Visit https://formationbible.com — loads correctly ✅
- [ ] Visit https://formationbible.com/pricing — loads (no .html needed) ✅
- [ ] Visit https://formationbible.com/faq — loads ✅
- [ ] Visit https://formationbible.com/signup — loads ✅
- [ ] Visit https://formationbible.com/robots.txt — shows your robots.txt ✅
- [ ] Visit https://formationbible.com/sitemap.xml — shows your sitemap ✅
- [ ] Check padlock in browser — SSL is active ✅
- [ ] Test on mobile ✅

---

## STEP 7 — Set Up Professional Email
**Option A: Cloudflare Email Routing (Free — forwards to Gmail)**
- [ ] Cloudflare dashboard → **Email** → **Email Routing**
- [ ] Add address: `tony@formationbible.com` → forward to your personal Gmail
- [ ] You receive emails at your professional address, reply from Gmail
- [ ] Cost: Free

**Option B: Google Workspace (Full professional email — recommended)**
- [ ] Go to https://workspace.google.com → start trial
- [ ] $6/user/month — gives you Gmail with your domain, Google Drive, Meet, etc.
- [ ] In Cloudflare DNS → add the MX records Google provides
- [ ] Cost: $6/month

---

## STEP 8 — Turn Off Netlify
- [ ] Confirm the Cloudflare site is fully working
- [ ] Log into Netlify → find your site → **Site Settings** → **Delete site**
- [ ] (Optional) Keep Netlify account free tier — costs nothing to leave idle

---

## FILES ALREADY PREPARED FOR CLOUDFLARE
These files are in your `formation-website` folder and work automatically:

| File | Purpose |
|------|---------|
| `_redirects` | Clean URLs (/pricing instead of /pricing.html) + shortcut redirects |
| `_headers` | Security headers, cache rules, CSP policy |
| `robots.txt` | AI crawler permissions |
| `sitemap.xml` | Full site map for search + AI indexing |

---

## TOTAL COST AFTER MIGRATION

| Item | Cost |
|------|------|
| Cloudflare Pages Pro | $20/month |
| Domain (formationbible.com) | ~$10/year |
| Email (Cloudflare routing) | Free |
| Email (Google Workspace) | $6/month (optional upgrade) |
| **Total minimum** | **$20/month + $10/year** |

---

## WHAT YOU GAIN VS NETLIFY FREE
| | Netlify Free (Before) | Cloudflare Pro (After) |
|---|---|---|
| Bandwidth | 100GB/month → site suspends | Unlimited — never suspends |
| CDN Locations | ~20 edge nodes | 300+ global locations |
| DDoS Protection | Basic | Enterprise-grade |
| SSL | Free | Free |
| Custom Domain | Extra setup | Included |
| 1M+ users | ❌ Crashes | ✅ Handles it |
| Monthly Cost | $0 | $20 |
