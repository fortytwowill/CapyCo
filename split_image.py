import os
from PIL import Image

def split():
    img = Image.open('CapyCo.png')
    width, height = img.size
    
    # 4 columns, 3 rows
    col_w = width // 4
    row_h = height // 3
    
    os.makedirs('public/images/mascots', exist_ok=True)
    
    idx = 1
    for r in range(3):
        for c in range(4):
            if idx > 10:
                break
            
            left = c * col_w
            top = r * row_h
            right = left + col_w
            bottom = top + row_h
            
            cropped = img.crop((left, top, right, bottom))
            cropped.save(f'public/images/mascots/mascot_{idx}.png')
            print(f"Saved mascot_{idx}.png")
            idx += 1

split()
