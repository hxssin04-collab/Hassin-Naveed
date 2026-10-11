# Website reference audit

## Reference authority

The user's full brief is `/workspace/attachments/6062feb4-e178-46d9-acd7-36e935e2dfa8/Pasted text.txt`. Its priority is explicit: the eight screen photographs supply the visual identity; the video supplies composition, proportions and browsing flow. The photographed screens are not used as page images.

The photographs show warm neutral off-white surfaces, muted deep plum controls, classic serif headings, small neutral sans-serif supporting copy, compact navigation, restrained borders, and modest image corners. Their home hero features one burgundy floral cloth doll with flowers. Collection names sit below the photographs. The story uses a rose/navy pair beside a vase. Internal pages show left catalogue filters, a three-column product listing, left gallery thumbnails and a right purchase panel.

Camera lighting and screen glare prevent defensible exact colour extraction. The palette in `DESIGN.md` follows the intended visual character with a neutral ivory background and deeper muted plum, rather than copying a yellow camera cast.

## All eight photographed references

The pictures are identified by their upload order. Several are closer views of the same design board, so they reinforce a single visual system.

| Picture | Visible reference | Details carried into the refinement |
| --- | --- | --- |
| 1 | Complete desktop and mobile design board | Shared ivory/plum identity, compact header and consistent shopping/editorial pages |
| 2 | Homepage, collections and story, closer left view | Single rose hero doll, sturdy serif hierarchy, captions under collection pictures, two-doll story photograph |
| 3 | Catalogue, builder, journal and checkout | Left filters, three catalogue columns, central customization preview, quiet form styling |
| 4 | Product details, bag, checkout and mobile navigation | Gallery thumbnails, full-width purchase action, compact bag controls and restrained mobile menu |
| 5 | Closer homepage, collections, story and footer | Off-white surfaces, small image corners, plum shopping/story controls and deep footer |
| 6 | Gallery view of the same homepage/collections/story design | Repeated type, spacing, image placement and footer identity |
| 7 | Closer catalogue, customization and journal view | Product-grid density, three-part customizer and editorial article cards |
| 8 | Closer product, bag, checkout and mobile view | Product purchase hierarchy, quantity/removal placement and consistent checkout controls |

## Video composition evidence

Frames were extracted to `/workspace/reference-analysis/video-audit`. Useful comparison points are:

| Time | Composition |
| --- | --- |
| 0.0s | Compact announcement/header; 43/57 hero with a nearly square photograph |
| 3.5s | Four compact benefits |
| 7.5s | Three substantial featured cards |
| 11.8s | Four tall collection cards, approximately 175×290 within the filmed interface |
| 14.8s | Text introduction, large central preview and open selection panel |
| 16.8s | Large, almost square story photograph beside short copy |
| 18.5s | Substantial values copy beside group photography |
| 25.8s | Centered inset newsletter with a pill email control; compact brand/three-link-group footer |

The video uses a separate Hijabi Bear brand and brighter orange/purple styling. Those details are not carried into Hijabi Plushies. The brief's journal section remains in the specified order even though the video does not supply its complete editorial treatment.

## Implemented fidelity corrections

- Reduced the header from 30px/86px to 26px/72px and made the whole header sticky.
- Increased the existing serif weight from 500 to 600, reduced oversized section headings to 36–40px, and strengthened supporting-copy contrast.
- Replaced the three-doll hero with the new single burgundy floral doll and bouquet recreation. The existing group photograph is preserved for the values section.
- Changed the hero from a 730×470 panoramic frame to approximately 730×608 at 1440px. The right-biased crop preserves the face, bouquet and central embroidery; peripheral gown edges trim at this proportion.
- Changed homepage collection images from 4:5 to 3:5, while preserving captions below images according to the photographs.
- Removed the customiser's nested bordered panel and overlay preview label. Six working style selections, price and optional note remain.
- Changed the story from a wide 430px-high photograph to a nearly square 54/43 composition and restored the short “Learn More” action.
- Replaced the shallow icon strip with a full values/photo section and a quiet four-value list.
- Changed the full-width split newsletter strip to an inset centered panel with an integrated email pill.
- Kept existing honest benefit wording because final materials and worldwide shipping are unconfirmed. Unsupported customisation variants, fabricated reviews and unsupported gifting features remain excluded.

## Current homepage evidence

The production build passed with `npm run build`. Browser capture checks reported no runtime errors and no unloaded homepage images. The page has no horizontal overflow at 320, 390, 768, 1024, 1280 or 1440px. The hero shopping action is visible in the first desktop and phone viewport.

Fresh review artifacts are in `artifacts/`:

- `refinement-home-desktop-viewport.png` and `refinement-home-desktop.png` at 1440×900.
- `refinement-home-mobile-viewport.png` and `refinement-home-mobile.png` at 390×844.
- `refinement-home-laptop-viewport.png` at 1366×768.
- `refinement-home-tablet-viewport.png` at 768×900.
- `refinement-builder-desktop.png`, `refinement-collections-desktop.png`, `refinement-story-desktop.png`, `refinement-values-desktop.png`, and `refinement-newsletter-desktop.png`.

These artifacts document a targeted reference-based refinement, not a claim of exact pixel matching. The supplied product photographs are unavailable as original assets, so the storefront uses the project's generated plushie recreations.

## Shopping pages after the homepage review

The same ivory, plum, type weight, borders and image corners now carry into the shopping pages. Shop, bag and checkout introductions omit extra eyebrow text; their 46px desktop headings and 40–42px phone headings match the quieter hierarchy of pictures 3, 4, 7 and 8. The catalogue retains its left filters and three-column desktop grid.

The product gallery retains left thumbnails on desktop. Quantity now precedes a full-width Add to Bag action, followed by favourites and information disclosures. Bag rows align the photograph, product details, quantity/removal controls and line total; phone rows move the controls and total below the product details. Bag and checkout summaries stack at tablet widths. No fabricated ratings, unsupported variants or payment features were added.

Fresh normal-viewport and full-page captures cover shop, product, bag and checkout at 1440×900 and 390×844, with filenames `refinement-{page}-{desktop|mobile}[-viewport].png`. The focused `refinement-checkout-summary-mobile.png` confirms the phone summary thumbnails paint correctly; Chromium can omit decoded offscreen thumbnails during a full-page capture.

The retained browser regression and production smoke results are documented in [QA_REPORT.md](QA_REPORT.md). They verify shopping behaviour, responsive widths, images, accessible controls and reduced motion independently of this qualitative visual comparison.
