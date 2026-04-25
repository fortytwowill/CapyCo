from PIL import Image, ImageDraw, ImageFont
import os

IMG_DIR = "/Users/capyco/CapyCo/public/images"
SRC_IMG = os.path.join(IMG_DIR, "new-mascot.png")

img = Image.open(SRC_IMG)
w, h = img.size
print(f"Source: {w}x{h}")

# 1. Square icon crop (center, mascot face area) — 1:1 from center
icon_size = min(w, h)
left = (w - icon_size) // 2
top = (h - icon_size) // 2
icon_crop = img.crop((left, top, left + icon_size, top + icon_size))

# 2. Favicon 32x32
favicon = icon_crop.resize((32, 32), Image.LANCZOS)
favicon.save(os.path.join(IMG_DIR, "favicon-32x32.png"))
print("Saved favicon-32x32.png")

# 3. Apple touch icon 180x180
apple = icon_crop.resize((180, 180), Image.LANCZOS)
apple.save(os.path.join(IMG_DIR, "apple-touch-icon.png"))
print("Saved apple-touch-icon.png")

# 4. PWA icon 512x512
pwa = icon_crop.resize((512, 512), Image.LANCZOS)
pwa.save(os.path.join(IMG_DIR, "pwa-icon-512.png"))
print("Saved pwa-icon-512.png")

# 5. Navbar logo (small, 128x128)
nav_logo = icon_crop.resize((128, 128), Image.LANCZOS)
nav_logo.save(os.path.join(IMG_DIR, "capyco-logo-icon.png"))
print("Saved capyco-logo-icon.png")

# 6. OG Image 1200x630 with text overlay
og = Image.new("RGBA", (1200, 630), (10, 10, 15, 255))  # Dark background

# Scale mascot to fit nicely
mascot_scale = min(1200 / w, 630 / h) * 0.85
new_w = int(w * mascot_scale)
new_h = int(h * mascot_scale)
mascot_resized = img.resize((new_w, new_h), Image.LANCZOS)

# Paste mascot centered
mx = (1200 - new_w) // 2
my = (630 - new_h) // 2 - 20
og.paste(mascot_resized, (mx, my), mascot_resized)

# Add gradient overlay for text readability
overlay = Image.new("RGBA", (1200, 630), (0, 0, 0, 0))
draw = ImageDraw.Draw(overlay)
# Darken bottom for text
draw.rectangle([0, 400, 1200, 630], fill=(10, 10, 15, 180))
og = Image.alpha_composite(og, overlay)

# Add text
draw = ImageDraw.Draw(og)

# Try to load fonts
try:
    title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 72)
    subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 32)
    tagline_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
except:
    title_font = ImageFont.load_default()
    subtitle_font = tagline_font = title_font

# Title
TITLE = "CapyCo"
draw.text((600, 480), TITLE, font=title_font, fill=(245, 166, 35, 255), anchor="mm")

# Subtitle
SUB = "Vibe Coding & Marketing Agency"
draw.text((600, 545), SUB, font=subtitle_font, fill=(240, 239, 233, 255), anchor="mm")

# Tagline
TAG = "Think. Create. Grow."
draw.text((600, 590), TAG, font=tagline_font, fill=(107, 107, 107, 255), anchor="mm")

# Convert to RGB for PNG
og_rgb = og.convert("RGB")
og_rgb.save(os.path.join(IMG_DIR, "og-image.png"))
print("Saved og-image.png")

# 7. Also create a smaller hero mascot optimized (800px wide)
hero_scale = 800 / w
hero_w = int(w * hero_scale)
hero_h = int(h * hero_scale)
hero = img.resize((hero_w, hero_h), Image.LANCZOS)
hero.save(os.path.join(IMG_DIR, "capyco-mascot.png"))
print("Saved capyco-mascot.png")

print("\nAll assets generated!")
