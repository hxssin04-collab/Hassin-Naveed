# Current recreation verification

**Ready with known limitations for frontend design review and continued development.** Live commerce and public deployment are separate prerequisites. This report covers the rebuilt source in the current environment on 11 October 2026; no scores or pass counts from the lost environment are reused.

## Executed checks

| Check | Actual result |
| --- | --- |
| `npm run build` | Passed TypeScript and Vite production build |
| `npm run test:e2e` | 47 passed; 0 failed, skipped or flaky; retries disabled; 5.2 minutes |
| Desktop browser journeys | 16 passed at 1440 × 900 |
| Mobile browser journeys | 16 passed at 390 × 844 with touch/mobile emulation |
| Responsive checks | 15 representative routes × 5 widths = 75 checks; no horizontal page overflow |
| Axe accessibility | 10 scans: five key pages on desktop and mobile; zero WCAG 2 A/AA and 2.1 A/AA violations |
| Production smoke | Built `dist` served through Vite preview; home, shop, product and checkout rendered; add-to-bag and checkout review passed with £54.94 total; zero runtime errors |
| Production dependency audit | `npm audit --omit=dev --json`: zero reported vulnerabilities |

The final automated run started at `2026-10-11T13:05:48.202Z`. Its compact retained results are in [artifacts/qa-summary.json](artifacts/qa-summary.json). Playwright generates detailed HTML, JSON and failure traces in ignored report directories when rerun. System Chromium 154.0.8037.57 on Debian, Node 24.19.0 and npm 11.9.0 were used.

## Behavior verified

Navigation reaches shop, collection and article pages. Search returns matching designs, handles an empty query result and closes after navigation. Native modal focus stays inside the dialog during tabbing, Escape closes it and restores the opener, and mobile menu navigation works. The skip link and reduced-motion preference were exercised.

Collection and price filtering update the URL and survive reload. Alphabetical sorting produces the expected six-product order. Price sorting preserves the sample prices. Favourites survive navigation and reload and can be removed. Product gallery selection, quantity controls, subsequent-route gallery/quantity reset and heading focus passed.

The bag retains quantities and optional gift notes across reloads, updates exact GBP subtotals and removes items into a useful empty state. Two £49.99 plushies produce £99.98. The customiser changes to the selected outfit image and saves that design and note in the bag.

Checkout rejects missing required fields, offers example details, changes delivery totals (£54.94 standard / £58.94 express for one plushie), supports editing/review and clearly completes as a demo. Tests observed no POST requests from checkout, contact or newsletter forms. Checkout contact/address details were absent from local storage, cleared from the page at completion and blank after reload; bag contents remained saved. Contact and newsletter validation and local-demo success feedback passed.

Six representative image-heavy routes were walked at both sizes. All rendered images loaded, no HTTP responses of 400 or higher were observed, and no JavaScript page errors were reported. Guest account guidance, empty checkout and missing-page navigation passed.

Widths checked: 320, 390, 768, 1024 and 1440px. Routes: home, shop, collections, Arabian collection, Arabian product, customiser, favourites, bag, checkout, about, journal, embroidery article, contact, privacy and account. These are representative width checks, not a claim that every possible route/state was exhaustively tested.

## Visual evidence

Twenty-four full-page captures cover twelve page types at desktop/mobile widths: home, shop, collections, individual collection, product, customiser, bag, checkout, about, journal, article and contact. Additional hero viewport and focused customiser-panel captures preserve readable composition evidence.

- [Desktop hero](artifacts/home-desktop-viewport.png) and [mobile hero](artifacts/home-mobile-viewport.png)
- [Desktop shop](artifacts/shop-desktop.png) and [mobile product](artifacts/product-mobile.png)
- [Desktop customiser panel](artifacts/builder-panel-desktop.png) and [mobile customiser](artifacts/builder-mobile.png)
- [Desktop checkout](artifacts/checkout-desktop.png)

Visual inspection confirmed the ivory/plum palette, editorial headings, large plushie photographs, 43/57 desktop hero, mobile stacking, product/collection proportions and consistent internal-page styling. Chromium full-page capture can omit a small decoded thumbnail during rasterisation; focused normal-viewport panel captures show all six images. This capture artifact is distinct from the image-load checks, which passed.

The initial run found insufficient newsletter supporting-text contrast on blush (4.18:1). The final source uses a darker neutral and both accessibility scans passed. Test helpers were corrected to await URL-controlled radio state, target the correct form status region, use visible mobile product links and load offscreen carousel pictures for screenshot captures. No assertions were disabled and no retries hid failures.

## Limits and launch prerequisites

These are Chromium desktop/mobile emulation checks, not physical-device, Safari, Firefox or screen-reader verification. Automated accessibility results do not establish full WCAG conformance. No Lighthouse, field performance or penetration-test score is claimed.

The catalogue uses generated reference-style imagery and sample prices. Product specifications, safety/age suitability, stock and real delivery policies are unverified. Checkout processes no payments and places no orders; account authentication, contact delivery and mailing-list subscription are intentionally not connected. A real commerce launch needs verified product photography/data, backend/payment/fulfilment integrations and final business policies.

The local production build and preview were verified. A public hosting URL, production routing/headers and provider deployment were not validated by this worker; deployment depends on the hosting integration and access configuration handled separately.
