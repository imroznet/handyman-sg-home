# Replace handymansg.com with this Lovable project

Goal: point your existing domain **handymansg.com** at this Lovable site and make every SEO signal (canonical, og:url, sitemap) use that domain so Google transfers ranking to the new site instead of treating it as a duplicate.

## What you do (one-time, in your domain registrar)

1. Publish this project (click **Publish** top-right). You'll get a `*.lovable.app` URL.
2. Open **Project Settings → Domains → Connect Domain**, enter `handymansg.com`.
3. At your current domain registrar (GoDaddy / Namecheap / wherever handymansg.com lives now):
   - Remove the existing A / CNAME records pointing to your old site.
   - Add **A record** `@` → `185.158.133.1`
   - Add **A record** `www` → `185.158.133.1`
   - Add **TXT record** `_lovable` → (value Lovable shows you)
4. Wait for DNS to propagate (usually <1 hour, up to 72h). Lovable auto-issues SSL.

⚠️ The moment you change DNS, your **old** handymansg.com site goes offline. Make sure you're ready to switch.

## What I do (in code, after you approve this plan)

1. **Update the canonical domain constant** from `handy-sg-pro.lovable.app` to `https://handymansg.com` everywhere it's referenced (currently nowhere yet — I'll add it as a single `SITE_URL` constant).
2. **Add per-route `head()` SEO** on every page (`/`, `/services`, `/about`, `/contact`) with:
   - Unique title + meta description
   - `og:title`, `og:description`, `og:url`, `og:type`
   - `<link rel="canonical">` pointing to `https://handymansg.com/<path>`
3. **Add JSON-LD structured data** in `__root.tsx` — `LocalBusiness` schema (name, phone +65 8312 2991, email, area served: Singapore, opening hours, service list). This is the single biggest SEO win for a local service business.
4. **Create `/sitemap.xml`** as a server route listing all pages with `https://handymansg.com` URLs.
5. **Create `/robots.txt`** allowing all crawlers + `Sitemap: https://handymansg.com/sitemap.xml`.
6. **Add Open Graph image** to `<head>` using one of your hero images so WhatsApp / Facebook / LinkedIn previews look good.

## After DNS is live

Tell me when handymansg.com loads this site. Then:
- I'll help you verify the domain in **Google Search Console** (one-click via the connector) and submit the new sitemap.
- Google will re-index within 1–2 weeks; rankings from the old site transfer because the domain is identical.

## Out of scope (ask if you want these)
- Neighborhood/service landing pages (`/services/tv-mounting`, `/areas/tampines`) — biggest *new* ranking opportunity but more work.
- 301 redirects for any old URL paths that don't exist on this site (only needed if old site had blog posts or deep pages).
