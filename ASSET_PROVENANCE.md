# Asset provenance

The user supplied photographed website screens and a layout video. No original production plushie photographs were available in the recovered repository. The screen photographs and video were treated as design references and were not used as page backgrounds or flattened substitutes for the interface.

Nine new images were generated during this recreation to match the requested embroidered cloth dolls, round faces, black embroidered eyes, blush cheeks, floral hijabs, warm light and ivory textile settings. They are conceptual recreations and must be replaced or approved against verified final product photography before live product sales.

| Asset | Use | Preserved source |
| --- | --- | --- |
| Arabian | Arabian Princess portrait | `assets/source/arabian.png` |
| Turkish | Turkish Beauty portrait | `assets/source/turkish.png` |
| Pakistani | Pakistani Grace portrait | `assets/source/pakistani.png` |
| South Asian | South Asian Dream portrait | `assets/source/south-asian.png` |
| Balkan | Balkan Charm portrait | `assets/source/balkan.png` |
| Egyptian | Egyptian Elegance portrait | `assets/source/egyptian.png` |
| Hero | Three-companion hero | `assets/source/hero.png` |
| Story | Two-companion editorial photograph | `assets/source/story.png` |
| Embroidery | Rose embroidery concept detail | `assets/source/embroidery.png` |

`assets/source/manifest.json` records the generation filenames and SHA-256 hashes. Source PNG files are unchanged. `public/images` contains 45 derived WebPs: one larger file and 160/320/640/960px candidates for each asset. Only technical resampling and WebP compression were applied. The product gallery’s embroidery image is a generated detail interpretation, not a verified photograph of the same manufactured item.

Regenerate the derived images with `python scripts/prepare-images.py` in an environment with Pillow. The application runtime does not need Python or Pillow. Cormorant Garamond and DM Sans are packaged by Fontsource and served locally; their licence files are included with the corresponding npm packages. Interface icons come from Phosphor Icons.
