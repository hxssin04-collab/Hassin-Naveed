# Hijabi Plushies design specification

The supplied screen photographs determine visual identity. The video determines homepage section order and relative composition; its separate brand and saturated colour palette are not used.

## Palette and type

| Token | Value | Purpose |
| --- | --- | --- |
| Ivory | `#fbf9f5` | Main page background |
| Surface | `#f7f3ee` | Collections, values and quiet panels |
| Ink | `#30262e` | Headings and primary copy |
| Muted | `#71666c` | Supporting copy on light surfaces |
| Plum | `#51364a` | Buttons, active selections and focus |
| Blush | `#e9dedf` | Newsletter and selected accents |
| Footer | `#372c37` | Deep footer background |
| Line | `#dfd8d3` | Subtle borders |

Newsletter supporting copy uses `#625660` for sufficient contrast on blush. Footer links use a lighter muted tone. Cormorant Garamond 500/600 gives headings their editorial character; DM Sans 400/500/600 supports readable interfaces. Latin font files are served locally.

Desktop hero headings are 68px, mobile 54px. Section headings are generally 44px/38px. Small eyebrow text is restrained and letter-spaced. Product names remain large enough to scan at two-column mobile sizes.

## Composition

The desktop container is capped at 1280px with 48px outer gutters (32px on tablets, 20px on mobile). At 1440px, the cap creates 80px actual outer gutters. The hero uses 43% copy and 57% photography, with a large landscape image. The photographs provide rich colour while the interface stays calm.

Homepage sequence: hero; four compact benefits; three large featured products; a six-item cultural collection carousel showing four at desktop; three-part customiser; image/text story; faith, culture, identity and kindness; three journal cards; blush newsletter; four-column plum footer. Sections use a consistent 36–48px rhythm rather than large empty gaps.

The customiser places introduction, preview and controls side by side at desktop, then adapts to a two-column tablet layout and a natural single-column mobile sequence. It only exposes six designs that have matching images. Unsupported characters, skin-tone swaps and component-level clothing changes are omitted.

Shop filters sit beside the grid at desktop and expand through a labelled button on mobile. Main catalogue cards show two mobile columns; featured homepage products use one large column. Collections keep large imagery through a controlled horizontal track. Product details use a two-column desktop gallery/interface and stack on mobile. Bag and checkout summaries sit beside the content at desktop and follow it on mobile.

## Components and behavior

Primary controls use muted plum, light text, pill silhouettes and a 46px minimum height. Secondary controls use quiet outlines or text links. Image surfaces use 12px radii; inputs use 8px. Borders replace heavy shadows. No gradients, floating decorative cards or continuous animation are used.

Transitions are 140–220ms and support clear hover, wishlist and selection feedback. Reduced-motion users get immediate transitions and scrolling. Images declare dimensions/aspect ratios; the hero is prioritised, thumbnails load eagerly and lower images load lazily through responsive WebP candidates.

Native dialogs manage search/mobile navigation modality. Icon actions have accessible labels, selection controls expose pressed/checked states, fields have visible labels, product information uses disclosure controls, and a polite toast announces bag/favourite updates. Route changes focus the page heading and reset scroll; checkout step changes focus their headings.
