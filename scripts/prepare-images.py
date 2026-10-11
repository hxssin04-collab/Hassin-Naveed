"""Create responsive WebP files without altering the preserved source PNGs."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
destination = root / "public" / "images"
destination.mkdir(parents=True, exist_ok=True)
for source in sorted((root / "assets" / "source").glob("*.png")):
    # Preserve the original group photograph and use the refinement as the hero.
    output_name = {"hero": "companions", "hero-reference": "hero"}.get(source.stem, source.stem)
    with Image.open(source) as original:
        image = original.convert("RGB")
        for width in (160, 320, 640, 960):
            candidate = image.resize(
                (width, round(image.height * width / image.width)),
                Image.Resampling.LANCZOS,
            )
            candidate.save(destination / f"{output_name}-{width}.webp", quality=86, method=6)
        image.thumbnail((1440, 1800), Image.Resampling.LANCZOS)
        image.save(destination / f"{output_name}.webp", quality=88, method=6)
