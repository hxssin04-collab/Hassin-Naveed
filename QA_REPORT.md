# Reference refinement verification

**Ready for frontend design review.** This report covers the refinement against all eight photographs and the video's composition on 11 October 2026. The homepage was reviewed before the internal shopping pages. The implementation retains the established visual system and existing demo commerce scope.

## Executed checks

| Check | Actual result |
| --- | --- |
| `npm run build` | Passed TypeScript and Vite production build |
| `npm run test:e2e` | 49 passed; 0 failed, skipped or flaky; retries disabled; 4.7 minutes |
| Desktop browser journeys | 17 passed at 1440 × 900 |
| Mobile browser journeys | 17 passed at 390 × 844 with touch/mobile emulation |
| Responsive checks | 15 representative routes × 5 widths = 75 checks; no horizontal page overflow |
| Axe accessibility | 10 scans: five key pages on desktop and mobile; zero WCAG 2 A/AA and 2.1 A/AA violations |
| Production smoke | Built `dist` through Vite preview; 46 checks each at desktop/mobile widths passed across home, shop, product, bag and checkout, including review/completion |
| Source image integrity | All ten preserved PNG hashes match the manifest; 50 derived WebPs present |

The final automated run started at `2026-10-11T16:03:28.864Z` and lasted 282.4 seconds. Its compact retained results are in [artifacts/refinement-qa-summary.json](artifacts/refinement-qa-summary.json). Production evidence is in [artifacts/refinement-production-smoke.json](artifacts/refinement-production-smoke.json). Playwright generates detailed HTML, JSON and failure traces in ignored report directories when rerun. System Chromium 154 on Debian, Node 24.19.0 and npm 11.9.0 were used. No assertions were disabled and no retries hid failures.

## Behavior verified

Navigation reaches shop, collection and article pages. Search returns matching designs, handles an empty query result and closes after navigation. Native modal focus stays inside the dialog during tabbing, Escape closes it and restores the opener, and mobile menu navigation works. The skip link and reduced-motion preference were exercised. The compact header stays visible after scrolling and still opens the shop on desktop and phone.

Collection and price filtering update the URL and survive reload. Alphabetical sorting produces the expected six-product order. Price sorting preserves the sample prices. Favourites survive navigation and reload and can be removed. Product gallery selection, quantity controls, subsequent-route gallery/quantity reset and heading focus passed.

The bag retains quantities and optional gift notes across reloads, updates exact GBP subtotals and removes items into a useful empty state. Two £49.99 plushies produce £99.98. The customiser changes to the selected outfit image and saves that design and note in the bag. New regression coverage verifies that saved duplicate designs with equivalent trimmed notes merge into one row, their quantity caps at 20, and unknown products or invalid quantities are rejected.

Checkout rejects missing required fields, offers example details, changes delivery totals (£54.94 standard / £58.94 express for one plushie), supports editing/review and clearly completes as a demo. Tests observed no POST requests from checkout, contact or newsletter forms. Checkout contact/address details were absent from local storage, cleared from the page at completion and blank after reload; bag contents remained saved. Contact and newsletter validation and local-demo success feedback passed.

The separate production smoke checks two plushies: £99.98 subtotal, £104.93 with standard sample delivery and £108.93 with express sample delivery. It verifies quantity changes, removal/re-addition, native validation, review and completion focus, image decoding and page widths. No runtime, console or HTTP errors, or POST requests, were observed at either size.

Six representative image-heavy routes were walked at both sizes. All rendered images loaded, no HTTP responses of 400 or higher were observed, and no JavaScript page errors were reported. Guest account guidance, empty checkout and missing-page navigation passed.

Widths checked: 320, 390, 768, 1024 and 1440px. Routes: home, shop, collections, Arabian collection, Arabian product, customiser, favourites, bag, checkout, about, journal, embroidery article, contact, privacy and account. These are representative width checks, not a claim that every possible route/state was exhaustively tested.

## Visual evidence

Twenty-four full-page captures cover twelve page types at desktop/mobile widths: home, shop, collections, individual collection, product, customiser, bag, checkout, about, journal, article and contact. Additional hero viewport and focused customiser-panel captures preserve readable composition evidence.

- [Desktop hero](artifacts/refinement-home-desktop-viewport.png), [laptop hero](artifacts/refinement-home-laptop-viewport.png), [tablet hero](artifacts/refinement-home-tablet-viewport.png) and [mobile hero](artifacts/refinement-home-mobile-viewport.png)
- [Desktop shop](artifacts/refinement-shop-desktop-viewport.png) and [mobile product](artifacts/refinement-product-mobile-viewport.png)
- [Desktop customiser](artifacts/refinement-builder-desktop.png), [story](artifacts/refinement-story-desktop.png), [values](artifacts/refinement-values-desktop.png) and [newsletter/footer](artifacts/refinement-newsletter-desktop.png)
- [Desktop bag](artifacts/refinement-bag-desktop-viewport.png), [desktop checkout](artifacts/refinement-checkout-desktop-viewport.png) and [phone checkout summary](artifacts/refinement-checkout-summary-mobile.png)

Visual inspection confirmed the neutral ivory/deep-plum palette, stronger serif weight, compact header, single burgundy hero doll and bouquet, 43/57 desktop hero, taller collection portraits, open three-part customiser, substantial story/values sections, centered inset newsletter and compact footer. Hero copy remains two lines with the shopping action visible at 1440×900, 1366×768, 768×900 and 390×844. Shopping screenshots confirm left filters/gallery thumbnails, the full-width product purchase action, aligned bag controls and responsive summaries.

Chromium full-page capture can omit decoded offscreen thumbnails during rasterisation. Focused normal-viewport captures show all six customiser images and both checkout summary images. The refinement's mobile checkout full-page capture was refreshed using screenshot-only synchronous decoding, with no source change. Image-load checks passed independently. [REFERENCE_AUDIT.md](REFERENCE_AUDIT.md) documents the comparison with all eight pictures and the video; camera lighting and unavailable original product photographs limit exact pixel matching.

## Limits and launch prerequisites

These are Chromium desktop/mobile emulation checks, not physical-device, Safari, Firefox or screen-reader verification. Automated accessibility results do not establish full WCAG conformance. No Lighthouse, field performance or penetration-test score is claimed.

The catalogue uses generated reference-style imagery and sample prices. Product specifications, safety/age suitability, stock and real delivery policies are unverified. Checkout processes no payments and places no orders; account authentication, contact delivery and mailing-list subscription are intentionally not connected. A real commerce launch needs verified product photography/data, backend/payment/fulfilment integrations and final business policies.

The local production build and preview were verified. A fresh request to the supplied Netlify address was blocked by the environment's CONNECT proxy with HTTP 403, so its deployed version, public-access state and production routing/headers could not be validated. A Git push alone does not verify that the hosting provider deployed this refinement.
