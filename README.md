# Hijabi Plushies

A responsive React storefront recreation based on the supplied Hijabi Plushies screen photographs and the layout of the supplied video. Warm ivory surfaces, muted plum controls, editorial serif headings and embroidered hijabi plushie photographs carry through the entire shopping and editorial experience.

## Run locally

Tested with Node 24.19.0, npm 11.9.0 and system Chromium 154 on Debian. Install dependencies from the committed lockfile:

```bash
npm ci --cache /workspace/tooling/npm-cache
npm run dev -- --port 5173
```

The development server listens on all interfaces. For a production build and local production smoke check:

```bash
npm run build
npm run preview -- --port 4173
```

Run the desktop, mobile and responsive browser checks:

```bash
npm run test:e2e
```

The Playwright configuration uses `/usr/bin/chromium`; set `CHROMIUM_PATH` if your executable is elsewhere. Screenshots are saved to `artifacts/`; the current run’s HTML report, traces and JSON results are generated in ignored `playwright-report/` and `test-results/` directories.

## Included experience

- Homepage with the requested hero, compact benefits, featured plushies, cultural collection carousel, working style selector, story, values, journal, newsletter and footer.
- Full catalogue with collection/price filters and shareable sorting; six individual collection landing pages.
- Six product pages, an Arabian portrait/detail gallery, quantity controls, persistent favourites and a persistent shopping bag.
- A customiser using six complete illustrated outfits. Changing the selected style changes the image; an optional gift note stays with the bag item.
- A validated three-step demo checkout with illustrative standard/express delivery and exact GBP totals.
- About, journal, three articles, contact preview, shipping/returns information, privacy, terms, guest account guidance and useful missing-page states.
- Native modal search and mobile navigation, keyboard focus handling, skip navigation, responsive pictures and reduced motion support.

## Preview boundaries

This is a functional frontend design preview. The £49.99 product prices and £4.95/£8.95 delivery options are samples. Completing checkout does not place an order or process payment. There are no payment fields, account provider, inventory service or order backend.

The product photographs are generated recreations of the visual references, not original manufactured-product photography. The six collection names describe design inspirations rather than claims of cultural authenticity. Final materials, dimensions, age suitability, certifications, delivery services and stock require confirmation before live sales. Source PNGs are retained in `assets/source`; see [ASSET_PROVENANCE.md](ASSET_PROVENANCE.md).

Contact and newsletter forms validate locally and explicitly state that no message or subscription is sent. Checkout contact/address fields are temporary page state, are never saved in local storage, and are cleared at demo completion. The browser stores only the bag (including optional gift notes) and favourites. No analytics or external font requests were added.

## Project structure

`src/data.ts` holds catalogue/editorial data; `store.tsx` owns validated browser persistence and totals; `components.tsx` holds shared navigation, cards, controls and footer; `home.tsx`, `shop.tsx`, `commerce.tsx` and `editorial.tsx` contain page groups. `App.tsx` composes routes and page focus; `styles.css` contains the shared design tokens and responsive system.

The original tracked `2.0` file remains unchanged. `vercel.json` provides the Vite build and SPA fallback configuration. Deployment needs the hosting account integration or secure credentials; a local build or Git push does not establish that a public deployment exists.

See [DESIGN.md](DESIGN.md) for visual decisions and [QA_REPORT.md](QA_REPORT.md) for current-build verification and limits.
