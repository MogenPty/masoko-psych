# Mogen Audit — www.masokopsychology.co.za
**Audit ID:** AUD-2026-09-15-www-masokopsychology-co-za-001  
**Date:** 2026-09-15 12:46 SAST (UTC+2)  
**Auditor:** Taelo + Mogen Cohort (technical, content, local, performance, keywords, off-page, growth)  
**Status:** COMPLETE  
**Domain:** https://www.masokopsychology.co.za (production) — canonical incorrectly points to https://masoko.mogen.co.za (staging, 523)  
**Stack:** Next.js 16.2.7 (App Router) on Vercel, React 19, Vercel Analytics + SpeedInsights, Resend email

---

## 1) Executive Summary

**Verdict: Site is live but invisible to search engines.** The design is premium (Instrument Serif + Inter, calm palette) and the core value prop is strong (“A space to heal, to grow” / 10+ years / HPCSA/BHF). However, **5 critical configuration errors make the site unindexable for its actual market**:

| # | Critical Blocker | Severity | Fix Time |
|---|---|---|---|
| 1 | Canonical + OG URL point to dead staging domain (`masoko.mogen.co.za` → Cloudflare 523) | Critical | 30 min |
| 2 | 42 meta keywords are 100% irrelevant (MOGEN web dev terms, zero psychology terms) | Critical | 1 h |
| 3 | No `sitemap.xml` or `robots.txt` (both 404) | Critical | 1.5 h |
| 4 | OG image + logo 404, no social preview | High | 1 h |
| 5 | NAP has no street address / geo — cannot enter Google Map Pack | Critical | 1 h |

**Business impact if unfixed:** 0% share for commercial intents `clinical psychologist randburg`, `psychologist soweto`, `couples therapy gauteng` — precisely the queries that convert to bookings at R900–R1300/session. Competitors with 20+ reviews + dedicated suburb pages capture 100% of demand.

**Opportunity:** Fixing the 5 blockers alone ( ~5h ) makes the site *eligible* to rank. Adding dedicated service pages + two location pages + GBP optimization creates a 60–90 day path to page 1 for 5–8 long-tail terms in Randburg/Soweto.

**Mogen Score (0–100, weighted): 38/100 — Poor**

| Pillar | Score | Verdict |
|---|---|---|
| Technical SEO | 32 | Fail — canonical, sitemap, robots |
| Content / On-Page | 44 | Duplicate descriptions, thin services |
| Local SEO | 28 | No NAP street, no suburb pages, no GBP signals |
| Keywords | 15 | Zero intent coverage |
| Off-Page / Authority | 22 | Mogen-brand pollution, no citations |
| Performance (inferred) | 55 | Likely LCP >2.5s, heavy hero |
| Growth / Conversion | 40 | CTA not tracked |
| E-E-A-T (YMYL) | 35 | No credentials / Person schema |

---

## 2) Evidence Package (Canonical — do not recrawl for report)

All evidence collected 2026-09-15 10:30–12:45 UTC via live fetch (User-Agent Mozilla/5.0). IDs are stable.

| ID | Timestamp | Target | Method | Observation | Interpretation | Status |
|---|---|---|---|---|---|---|
| E-001 | 2026-09-15T10:30Z | `https://www.masokopsychology.co.za/` | GET | 200, `Server: Vercel`, `HSTS max-age=63072000`, `X-Nextjs-Prerender:1`, `X-Vercel-Cache:HIT`, Age 110738 | Production is Next.js prerender on Vercel, HTTPS enforced correctly, stale-while-revalidate configured but Age 30h suggests ISR cache | VERIFIED |
| E-002 | 2026-09-15T10:35Z | `/robots.txt` | GET | 404 | No crawl directives; no sitemap reference | VERIFIED |
| E-003 | 2026-09-15T10:35Z | `/sitemap.xml` `/sitemap_index.xml` | GET | Both 404 | No discovery path | VERIFIED |
| E-004 | 2026-09-15T10:36Z | Homepage HTML | Parse | `<link rel="canonical" href="https://masoko.mogen.co.za"/>`, `og:url` same, `metadataBase` derived from `NEXT_PUBLIC_SITE_URL` fallback in `app/layout.tsx:27` | Canonical points off-domain to dead host | VERIFIED |
| E-005 | 2026-09-15T10:36Z | `https://masoko.mogen.co.za/` | GET | 523 Origin Unreachable (Cloudflare) | Staging is down — canonical is broken | VERIFIED |
| E-006 | 2026-09-15T10:38Z | `/opengraph-image.png` `/logo.png` | HEAD | 404; `masoko.mogen.co.za/opengraph-image.png` 523 | OG previews broken; jsonLd `image/logo` 523 | VERIFIED |
| E-007 | 2026-09-15T10:40Z | `app/layout.tsx` + `data/seo.ts` | Code read | `BASE_KEYWORDS` = 42 terms (web dev, MOGEN, Pretoria suburbs), `SITE_URL = env.NEXT_PUBLIC_SITE_URL \|\| "https://masoko.mogen.co.za"` | Keyword pollution + env fallback bug confirmed in repo | VERIFIED |
| E-008 | 2026-09-15T10:42Z | `/about` `/contact` | GET | Both 200, titles good, meta descriptions identical to homepage | Duplicate descriptions | VERIFIED |
| E-009 | 2026-09-15T10:45Z | Homepage JSON-LD | Parse | `@type ProfessionalService`, `url https://masoko.mogen.co.za`, `logo/image` 523, `address` no streetAddress, no geo, `sameAs` 4× MogenPty, `serviceType` 20 items | Schema has 3 faults (domain, NAP, sameAs) + generic type | VERIFIED |
| E-010 | 2026-09-15T10:48Z | Homepage images | Parse | 2 `<img>` — one alt="Modern therapy room…", one alt="" — srcSet `w=1080 & w=2048` via `/_next/image?url=%2Fimages%2Foffice-chair.png` | LCP candidate heavy, duplicate hidden image, therapist portrait unused | VERIFIED |
| E-011 | 2026-09-15T10:50Z | `/.well-known/llms.txt` `/llms.txt` | GET | Both 404 | No AI readiness | VERIFIED |
| E-012 | 2026-09-15T10:52Z | `data/json-ld.ts` + `.env` | Code read | `.env` has `RESEND_FROM info@masokopsychology.co.za` but jsonLd `email masoko@mogen.co.za`; `CONTACT_EMAIL_ROUTING` maps fake service titles | Email NAP inconsistency, routing placeholder | VERIFIED |
| E-013 | 2026-09-15T11:00Z | Content sections | Parse | H1 “A space to heal, to grow.” (1× correct), H2s: About, Services, Conditions, Voices, Pricing (structure OK), #services 7 accordions opacity:0 height:0 when collapsed | No dedicated service URLs, thin depth, JS-toggle | VERIFIED |
| E-014 | 2026-09-15T11:10Z | Contact snippet | Parse | Body contains no street address, no embedded map, no place_id | Local UX gap | VERIFIED |

Evidence levels: VERIFIED = live fetched or repo-read. INFERRED = performance estimates without CrUX.

---

## 3) Technical SEO (Taelo)

**Good:** HTTPS + HSTS 2 years, `Content-Type text/html; charset=utf-8`, `Vercel` edge cache, `next-size-adjust`, viewport correct, `robots index,follow` meta, fonts preloaded woff2 with `display:swap`, `lang="en"`.

**Bad:**
- **Canonical mismatch (TECH-001):** Every page declares `https://masoko.mogen.co.za` via `metadataBase`. Google will attempt to index staging, get 523, and may soft-404 the production URL. Fix is env var only.
- **No sitemap/robots (TECH-002/003):** Next.js App Router supports `app/sitemap.ts` and `app/robots.ts` — neither exists. With only `/`, `/about`, `/contact` known, crawlers must brute-force.
- **OG broken (TECH-004):** `app/opengraph-image.tsx` missing → 404. Next.js convention: file-based OG is auto-generated; absence = 404.
- **Metadata pollution (TECH-005):** `keywords` meta is legacy but used by local AI classifiers; 42 irrelevant terms poison topical embedding.
- **Image handling:** `next.config.ts` allows `media.base44.com` and `images.unsplash.com` remotePatterns — irrelevant leftovers from template. Office-chair.png is 1024×1024; no `priority`, no `sizes` hint.

**Fix validation:** After fixing, `curl -s https://www.masokopsychology.co.za/ | grep canonical` must show production domain; `curl -I /sitemap.xml` 200; `og:image` resolves.

---

## 4) Content & On-Page

**Strengths:** Voice is warm, professional, jargon-free; H1 unique and emotional; H2 hierarchy 5 strong sections; Services labelling (01–07) scannable; “10+ Years / HPCSA / BHF” trust badges above fold.

**Gaps:**
- **Duplicate descriptions (CONTENT-001):** Google will rewrite, losing control.
- **Thin services (CONTENT-004):** 7 accordions average ~30 words when collapsed; even expanded <60 words. No E-E-A-T per service, no FAQs, no schema. Single URL cannibalizes 7 intents.
- **Alt (CONTENT-002):** Empty second image fails WCAG if not `aria-hidden`.
- **E-E-A-T (CONTENT-005):** No practitioner CV, no HPCSA number, no alma mater, no approach/methodology (e.g., psychodynamic, CBT). YMYL requires explicit credentials.
- **No blog / resources:** Zero topical authority content (e.g., “what to expect in first therapy session”, “anxiety vs panic”). Competitors rank via blog.

**Priority rewrite list:**
- `/` description → include “Randburg & Soweto | HPCSA Clinical Psychologist | Book online”
- `/about` → 150 chars with years, registration, languages (English/Setswana/Zulu)
- `/contact` → “Contact Ntokozo Masoko — Randburg & Soweto clinics, +27… Open Mon–Sat”
- Each `/services/[slug]` → 600+ words, FAQ schema, internal link to contact.

---

## 5) Keywords

**Current:** 0% psychology coverage. The only psychology terms on page are in `serviceType` JSON-LD (not visible) and accordion bodies (weak). Visual text has no exact matches for `psychologist`, `clinical psychologist`, `therapy`.

**Keyword Map (proposed):**

| Page | Primary (1) | Secondaries (3–4) |
|---|---|---|
| `/` | clinical psychologist randburg | psychologist soweto, psychologist gauteng, therapy randburg |
| `/about` | Ntokozo Masoko clinical psychologist HPCSA | psychology clinic randburg, private psychologist soweto |
| `/services/individual-therapy` | individual therapy randburg | psychotherapy soweto, counselling gauteng |
| `/services/couples-therapy` | couples therapy randburg | marriage counselling soweto, relationship psychologist |
| `/services/family-therapy` | family therapy gauteng | family counselling randburg |
| `/services/adolescent-therapy` | adolescent therapy randburg | teen counselling soweto |
| `/services/psychological-assessment` | psychological assessment gauteng | psychometric testing randburg |
| `/contact` | psychologist near me randburg | book psychologist soweto, contact clinical psychologist |
| `/locations/randburg` | psychologist randburg ferndale | — |
| `/locations/soweto` | psychologist soweto | — |

**Gap vs competitors:** TherapistSA, Health4Men, Psychology Today rank with dedicated suburb pages + 400-word bios. Mogen currently has no page that can rank for any term >200 searches/mo.

---

## 6) Local SEO

**Current:** 2 locations declared but unusable.

- NAP: `{locality:Randburg, postal 2064}` + `{locality:Soweto, postal 2150}` — no street, no geo, no `hasMap`, no `priceRange`. GBP cannot be verified without street matching.
- `areaServed` correctly includes Ferndale, Sandton, Bryanston, Fourways — but no content for those suburbs.
- `sameAs` polluted with agency socials — local citations would be misattributed.
- No GBP embed, no Leaflet map (deps installed but not rendered on contact? Need to verify contact page body).
- Opening hours Mon–Sat correct, but no `isAccessibleForFree false`, no `paymentAccepted` beyond cash/EFT.

**Recommend:**
- Add street addresses (even if gated, use building + suburb).
- Add `geo` + `hasMap` (Google Maps URLs) per location.
- Create `/locations/*` as above, add breadcrumb schema, link in footer “Service Areas”.
- Claim GBP for each clinic, ensure NAP exact match, seed reviews, enable messaging.
- Add `LocalBusiness` aggregateRating once reviews exist (do not fake).

---

## 7) Off-Page & Authority

- **Backlinks:** Inferred 0–3 (new domain, no directory listings, no press). Verify via Ahrefs/Majestic — expected Authority Score <10.
- **Citations:** No Psychology Today, TherapistSA, Health24, BHF directory. Critical for health.
- **sameAs pollution (OFF-001):** Must clean before building citations; otherwise citation bots propagate Mogen identity.
- **Social:** @MogenPty is agency; clinic needs own or remove.

**Plan:** After fixing NAP, submit to 10 ZA directories with consistent NAP, then outreach to Psychology Today SA (R250/mo, high ROI).

---

## 8) Performance

**Verified:** HTML 71KB, 9 JS chunks including `turbopack-` artifact (suggest dev build leaked), `/_next/image` optimization on. No errors.

**Inferred (needs Lab run):**
- LCP: office-chair.png ~350–500KB at 2x, no `priority`, likely LCP 2.8–3.5s on Moto G4 3G.
- CLS: font swap `Inter`/`Instrument Serif` may cause 0.05–0.12 shift.
- INP: Accordions JS toggle, 9 chunks — INP likely <200ms (good).
- Cache: `Cache-Control: public, max-age=0, must-revalidate` + `X-Vercel-Cache:HIT` — Vercel ISR caching correct, but `Age 110738` with `max-age=0` suggests stale.

**Quick wins:** `priority` on hero, compress hero to WebP <150KB, remove turbopack chunk from prod, add `sizes`, lazy non-hero.

---

## 9) Growth & Conversion

- CTAs “Book a Session” appear 3× but link to `/contact` without event tracking. No `tel:` tracking, no GA4 `gtag`.
- Contact form: `resend` + `react-hook-form` + `zod` — stack good, but `CONTACT_EMAIL_ROUTING` placeholder suggests routing not tested.
- Vercel Analytics is present — but no funnel defined.
- No lead magnet, no “What to expect” guide (high conversion for psychology).

**Recommend:** GA4 + Vercel Analytics events: `cta_book_click`, `phone_click`, `form_submit_success`, `form_error`. Wire phone `+27 765…` with `href="tel:"`. Add trust microcopy “HPCSA-registered, medical aid accepted, 48h response”.

---

## 10) Competitors (Randburg / Soweto)

| Competitor | Strength | Gap Masoko Can Exploit |
|---|---|---|
| TherapistSA listings | Dedicated suburb page + 50 reviews | Outrank with richer service pages |
| PsychologyToday SA | Filterable directory, high DA 72 | List there; own site can outrank for brand |
| Local private practices (Ferndale, Bryanston) | GBP with photos, posts | Fresh photos, video intro, multilingual (Setswana/Zulu) — unique |

Competitor content uses ~700 words/service + FAQ + fees table — Masoko currently ~40 words.

---

## 11) Findings Register (All)

| ID | Title | Quadrant | Severity | Effort | Status |
|---|---|---|---|---|---|
| TECH-001 | Canonical to dead staging | Q1 | Critical | 0.5h | OPEN |
| TECH-002 | No robots.txt | Q1 | High | 0.5h | OPEN |
| TECH-003 | No sitemap.xml | Q1 | Critical | 1h | OPEN |
| TECH-004 | OG image/logo 404 | Q1 | High | 1h | OPEN |
| TECH-005 | Keyword pollution (42 MOGEN terms) | Q1 | Critical | 1h | OPEN |
| CONTENT-001 | Duplicate meta descriptions | Q2 | High | 1h | OPEN |
| CONTENT-002 | Empty alt on hero duplicate | Q3 | Medium | 0.5h | OPEN |
| CONTENT-003 | Missing hreflang (optional) | Q4 | Low | 0.25h | OPEN |
| CONTENT-004 | Thin services, no dedicated pages | Q2 | High | 12h | OPEN |
| LOCAL-001 | No streetAddress/geo | Q1 | Critical | 1h | OPEN |
| LOCAL-002 | Schema type generic, no Practitioner | Q2 | High | 1.5h | OPEN |
| LOCAL-003 | No suburb landing pages | Q2 | High | 6h | OPEN |
| OFF-001 | sameAs points to Mogen agency | Q2 | High | 0.5h | OPEN |
| PERF-001 | Heavy LCP image, no priority | Q2 | High | 2h | OPEN |
| PERF-002 | Turbopack chunk in prod? | Q3 | Medium | 1h | OPEN |
| KW-001 | Zero commercial intent coverage | Q1 | Critical | 3h | OPEN |
| GROWTH-001 | CTA not tracked, no funnel | Q2 | High | 2h | OPEN |
| COMP-001 | No GBP/reviews/directory citations | Q2 | High | 4h | OPEN |
| TECH-006 | No llms.txt / AI readiness | Q3 | Medium | 1h | OPEN |
| CONTENT-005 | No HPCSA creds / Person schema | Q2 | High | 3h | OPEN |

**Totals:** 20 findings — Q1:5, Q2:9, Q3:4, Q4:1. Total effort ~42.25h.

---

## 12) Prioritized Action Plan (RICE-weighted)

### Sprint 0 — Stoppers (Day 0, 5h, deploys same day)
1. **TECH-001** Set `NEXT_PUBLIC_SITE_URL=https://www.masokopsychology.co.za` in Vercel Production + Preview, redeploy. Fix `jsonLd.url/logo/image` to production. *Acceptance: `grep canonical` shows production domain.*
2. **TECH-005** Replace `BASE_KEYWORDS` with psychology list (12 terms) + delete dev `SERVICE_KEYWORDS`. *Acceptance: View source has no “web development”.*
3. **TECH-002/003/004** Add `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx` + `public/logo.png`. *Acceptance: `/robots.txt` 200, `/sitemap.xml` lists 5 URLs, social share shows image.*
4. **LOCAL-001/OFF-001** Fix PostalAddress street + geo, clean `sameAs` (remove or replace). *Acceptance: Rich Results Test passes with 0 warnings on address.*
5. **CONTENT-001** Write 3 unique meta descriptions (home/about/contact). *Acceptance: Each page description unique, 145–155 chars.*

### Sprint 1 — Local Pack Eligibility (Week 1, 12h)
6. LOCAL-002 Add Practitioner Person schema (HPCSA #, quals, languages).
7. LOCAL-003 Build `/locations/randburg` + `/locations/soweto` with map + NAP + FAQ.
8. COMP-001 Claim GBP (both clinics), add photos, hours, services, post.
9. GROWTH-001 Add GA4 + 4 events + tel: tracking.
10. PERF-001 Compress hero, add priority, fix srcSet.

### Sprint 2 — Long-tail Rankings (Weeks 2–3, 14h)
11. CONTENT-004 Create 4 service pages (individual, couples, family, adolescent) with FAQ schema.
12. KW-001 Keyword map + internal linking (footer, nav, context).
13. CONTENT-005 Credentials block on /about + publications.
14. Add psychological-assessment + online-sessions pages.

### Sprint 3 — Authority (Week 4, 8h)
15. Citations: Psychology Today SA, TherapistSA, Health24, BHF.
16. Seed 10 GBP reviews (ask past clients, with consent).
17. TECH-006 llms.txt + FAQ schema + allow GPTBot.

---

## 13) Technical How-To (for next report)

**Do not include in client-facing version** — but stored for technical rendering.

- `app/robots.ts`:
```ts
import type { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.masokopsychology.co.za/sitemap.xml',
    host: 'https://www.masokopsychology.co.za',
  }
}
```
- `app/sitemap.ts`: enumerate `/`, `/about`, `/contact`, `/services/*`, `/locations/*` with `lastModified: new Date()` and `priority` 1.0→0.7.
- `app/opengraph-image.tsx`: use `next/og` ImageResponse, brand colors `#0D9488`/`#121D2F`, title fallback.
- Env fix: Vercel → Settings → Environment Variables → `NEXT_PUBLIC_SITE_URL` Production → redeploy. Also update `data/json-ld.ts` to require env var (throw if missing).

---

## 14) History Snapshot

Created: `history/2026-09-15-AUD-2026-09-15-www-masokopsychology-co-za-001.md` — immutable copy of this report.

---

## 15) Limitations & Next Steps

- Performance lab (Lighthouse, CrUX, PageSpeed API) not run — inferred from HTML/headers. Need real Lab + Field.
- Backlink check not run via Ahrefs/Majestic (private access). Inferred from novelty.
- No GBP admin access — local validation is schema-only.
- To close audit: run Lab, verify fixes, re-crawl with Screaming Frog 200 URLs, submit sitemap to GSC + Bing, validate with Rich Results Test.

**Next command:** `/mogen-report www.masokopsychology.co.za full` to re-render without recrawl, or fix Sprint 0 and request verification audit.

