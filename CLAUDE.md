# CLAUDE.md: Nnaya Divine Reach Services (NDRS)

Brampton not-for-profit supporting youth, seniors, families and newcomers with food, skills, wellness and Igbo cultural programs.

- Live domain: ndrs.ca (found in code; confirm)
- Host: HostGator via GitHub Actions FTP deploy (since 11 Nov 2026).
- Design and audience: see `brand-dna.md`. Placeholders: `PLACEHOLDERS.md` (create it when you find one).

## Studio rules (Jacques' web studio: apply to every task)
- This site must look custom-made for this client, never like a template. Never reuse another client's palette, font pairing, layout rhythm or signature element. No generic AI layout (centered hero + 3 icon cards + testimonial slider + CTA band) unless Jacques asks for it.
- Read `brand-dna.md` in this repo before any design or content change. Items marked ❓ are not confirmed: ask, don't invent.
- Real copy and real photos only. Never invent reviews, testimonials, statistics, people or partner logos. Every placeholder goes in `PLACEHOLDERS.md`.
- Done means: `npm ci && npm run build` passes, you checked desktop and mobile yourself, alt text, AA contrast, page titles/descriptions, compressed images.
- Push to the deploy branch only after the build passes and the change is verified (pushing deploys the live site). Never commit secrets.
- Report to Jacques in plain language, no jargon, with the live link. Anything he must do himself (secrets, DNS, accounts): click-by-click steps.
- Studio stack (zero recurring cost): client's own host via GitHub Actions FTP deploy; Cloudflare free in front; images in Cloudinary or the repo; video on YouTube or Mux (store the public Playback ID, never the Asset ID); forms via Web3Forms; editing via Pages CMS + Sveltia at `/admin`. No Vercel Hobby or Netlify for client sites.

## Stack and build
- Originally a Readdy export: Vite + React + TypeScript + Tailwind + React Router, i18next installed.
- Install and build: `npm ci && npm run build` → output in `out/`.
- Dev preview: `npm run dev`.
- Routes: `/`, `/404`, `/about`, `/accessibility`, `/contact`, `/donate`, `/get-support`, `/igbo-roots`, `/impact`, `/news`, `/partner`, `/privacy`, `/programs`, `/volunteer`.

## Deploy
- `.github/workflows/deploy.yml` (studio standard): push to `main` → `npm ci && npm run build` → FTPS upload of `out/` → live check of `SITE_URL` (default https://www.ndrs.ca) and every sitemap address.
- Secrets `FTP_SERVER` (= gator3095.hostgator.com), `FTP_USERNAME`, `FTP_PASSWORD`. The workflow finds the site folder itself. Optional variables: `SITE_URL`, `FTP_SERVER_DIR`, `FTP_PROTOCOL`.
- `public/.htaccess`: https, clean addresses, share-preview pages, SPA fallback, caching.

## Share previews and SEO
- `src/content/seo.json` → `scripts/social-pages.mjs` (inside `npm run build`): one HTML file per published page with its own title, description, canonical and 1200×630 picture, plus `sitemap.xml`. Social apps never run JavaScript, so this is what they show. In the browser, `src/seo/site.ts` sets the same tags: keep both in step, and change the domain in both if it changes.
- Share card `public/social/home.jpg` (brand colours + tagline) and app icons `public/icon-*.png` replace the Readdy placeholders. The photos in `Images/` are NOT used for sharing: several carry third-party watermarks or look AI-generated.

## Where things live
- Pages: `src/pages/<page>/` (one folder per page, sections in `components/`). Routes: `src/router/`.
- Text, images and links are mostly hard-coded inside the page components (`src/pages/<page>/components/*.tsx`).
- Next studio step for this site: move client-facing content into `src/content/*.json` and wire up both editors (Pages CMS + Sveltia at `/admin`), exactly like `jacquesmofa/CAWAP` (see its CLAUDE.md and `scripts/studio-tools/` for `extract.mjs`, `snapshot.mjs`, `compare.mjs`). Verify with before/after snapshots that visitors see no change.

## Known issues (found 10 Nov 2026)
- 9 Readdy AI placeholder image URLs (`readdy.ai/api/search-image`) are still in the code. Replace them with real photos and track the rest in `PLACEHOLDERS.md`.
- Some forms post to Readdy's form service (`readdy.ai/api/form`). Move them to Web3Forms with the client's email (studio standard) and test that a message actually arrives.
- Real photos exist in the repo's `Images/` folder (9 files): use them before any stock photo.
- Design overlap with other clients: Same font stack as Crowned and ACCAH (same Readdy template). Must diverge.
