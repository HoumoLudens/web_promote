from pathlib import Path

from PIL import Image


def split_image_2x2(image_path: Path, output_dir: Path) -> None:
    with Image.open(image_path) as img:
        width, height = img.size

        if width % 2 != 0 or height % 2 != 0:
            raise ValueError(
                f"Image size must be even for exact 2x2 split, got {width}x{height}."
            )

        half_w = width // 2
        half_h = height // 2

        # (left, upper, right, lower)
        boxes = {
            "top_left": (0, 0, half_w, half_h),
            "top_right": (half_w, 0, width, half_h),
            "bottom_left": (0, half_h, half_w, height),
            "bottom_right": (half_w, half_h, width, height),
        }

        output_dir.mkdir(parents=True, exist_ok=True)

        stem = image_path.stem
        for name, box in boxes.items():
            part = img.crop(box)
            part.save(output_dir / f"{stem}_{name}.png")


if __name__ == "__main__":
    root = Path(__file__).resolve().parent.parent
    source = root / "image" / "miguo.png"
    target = root / "image" / "miguo_2x2"

    if not source.exists():
        raise FileNotFoundError(f"Source image not found: {source}")

    split_image_2x2(source, target)
    print(f"Done. Saved 4 images to: {target}")
