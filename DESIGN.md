# Hijabi Plushies design specification

The eight supplied screen photographs determine the visual identity, brand and writing style. The video determines the homepage composition and section flow. Colours below are deliberate approximations of the intended interface, accounting for camera casts; they are not claimed as exact colour samples from the photographed screens.

## Palette and type

| Token | Value | Purpose |
| --- | --- | --- |
| Ivory | `#faf9f6` | Warm neutral off-white page background |
| Surface | `#f4f1ee` | Quiet collection, values and preview surfaces |
| Ink | `#332b32` | Headings and primary copy |
| Muted | `#675f65` | Readable supporting copy |
| Plum | `#4b3546` | Primary buttons, selected states and focus |
| Blush | `#e9e0e1` | Newsletter and restrained selected accents |
| Footer | `#372c37` | Deep muted plum footer |
| Line | `#ded8d4` | Light neutral dividers |

Cormorant Garamond 600 provides the established serif character; DM Sans 400/500/600 supports the shopping interface. Both are served locally. Desktop hero headings are 64px, with a 58px laptop treatment and 42–52px tablet interpolation. Mobile hero headings are 44–48px and retain two lines. Homepage section headings are generally 36–40px. Supporting section copy uses 13–14px with comfortable line heights.

## Homepage composition

The container is capped at 1280px. Standard gutters are 48px, 32px on tablets and 20px on phones. At 1440px the cap gives 80px outer gutters. The complete announcement and navigation header remains sticky, with 26px/72px desktop heights and 24px/66px mobile heights, plus the dividing border. Scroll padding accounts for the sticky header.

The homepage keeps the brief's sequence:

1. Two-part hero, 43% text and 57% photography. The new single burgundy floral doll and bouquet image uses a 1.2 desktop frame, a 1.14 phone frame, and a right-biased crop that preserves the face and bouquet. This reduces the previous panoramic presentation without hiding the shopping action on a laptop.
2. Four compact outline-icon benefits with restrained dividers. Wording avoids unconfirmed material and shipping promises.
3. Three large featured product cards. Photography stays prominent; product name, collection, price and wishlist control remain concise.
4. Four visible collection cards on desktop with a 3:5 portrait frame. Additional collections remain accessible in the working horizontal track. Names sit beneath photographs, following the screen photographs' visual treatment.
5. Three-part customiser: introduction, large preview, and open controls with narrow gaps. Six real style thumbnails update the preview, and an optional gift note persists in the bag. No unsupported character, skin-tone or clothing variants are implied.
6. Story photograph and short copy, using a 54:43 balance and a nearly square image. The button reads “Learn More” in muted plum.
7. A substantial two-column values section: short editorial copy and a quiet 2×2 Faith/Culture/Identity/Kindness list beside the preserved group photograph. No floating decorative tags are used.
8. Three journal cards with short excerpts and article links.
9. A centered inset newsletter panel, followed by the compact four-column plum footer. The panel is approximately 330px tall on desktop, and the email control occupies 55% of its width.

Sections retain a consistent 36px phone / 48px desktop padding rhythm. Portrait imagery and the substantial story/values compositions determine section height. The video’s separate brand, orange imagery treatment, purple gradients and unsupported gifting features are excluded.

## Components and behaviour

Primary controls use a flat muted-plum fill, light text, pill silhouettes and a 46px minimum height. Image surfaces use 8px corners; smaller thumbnail corners use 3–6px. Borders provide separation without heavy shadows. Header icons, collection arrows and wishlist controls retain 44px interaction targets.

The customiser adapts to two columns with a full-width introduction on tablets, then a natural introduction/preview/controls sequence on phones. Shop filters, product galleries, bag and checkout retain their existing behaviours. The internal-page composition is specified below.

Images declare dimensions and use responsive WebP candidates. The hero is prioritised. Tiny style thumbnails load eagerly; lower editorial imagery loads lazily. Full-width phone featured cards request appropriate image candidates through their own image-size hint.

Transitions are restrained and respect reduced motion. Native dialogs manage search/mobile navigation modality. Selected styles expose pressed states, forms have accessible labels, and a polite toast announces bag/favourite updates. The newsletter remains explicitly identified as a local preview because no mailing-list service is configured.

## Shopping-screen refinement

Shopping pages use the same reviewed palette and component treatment. Page-specific classes keep the homepage composition intact while reducing shop, collection, wishlist, bag and checkout headings to 46px on desktop and 40–42px on phones. Shop, bag and checkout omit the extra introductory eyebrow so the page title and shopping content begin promptly.

The shop keeps its actual six-product catalogue, three-column desktop grid and left filters. Results counts reflect the active filters. Price ranges can produce the existing useful empty state. Mobile filter and sorting controls retain comfortable targets.

Product details retain left gallery thumbnails and the right purchase panel. The quantity control sits above a separate full-width Add to Bag button, followed by favourites and the product-information disclosures. Product names are 46px on desktop and 40–42px on phones. No ratings or manufacturing claims are invented.

Desktop bag rows use four aligned areas: a 96px product photograph, product name/unit price/note, quantity and remove controls, and a right-aligned line total. Phone rows place image and product information first, then controls and total on the next line. At very narrow widths the remove control uses its trash icon while retaining its full accessible name. Quantity and removal targets are at least 44px. Bag and checkout summaries stack at tablet widths to preserve readable content and control spacing.

Checkout retains native required-field validation, the three-step local demonstration, illustrative delivery calculations, and its right summary on desktop. Form labels and gaps are compact, with 16px phone inputs to avoid automatic input zoom. The preview does not submit details, process payments or place an order.
