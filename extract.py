import os
from PIL import Image
from rembg import remove

def process_image(img_path, crop_box, out_name):
    print(f"Processing {out_name}...")
    img = Image.open(img_path)
    cropped = img.crop(crop_box)
    
    # Remove background
    out = remove(cropped)
    out.save(f"public/assets/{out_name}.png")
    print(f"Saved {out_name}.png")

def main():
    # product-lineup.jpg: (724, 1024)
    # Left cup (Grape): 
    process_image("public/assets/product-lineup.jpg", (0, 350, 300, 950), "grape-cup")

    # Middle cup (Basil Seeds):
    process_image("public/assets/product-lineup.jpg", (200, 350, 500, 950), "basil-seeds")

    # Right cup (Lychee):
    process_image("public/assets/product-lineup.jpg", (450, 350, 724, 950), "lychee-cup")

    # Logo (Top):
    process_image("public/assets/product-lineup.jpg", (100, 50, 650, 320), "arabian-logo-new")

    # grape-products.jpg: (1024, 723)
    # Pouch: (Assuming center right)
    process_image("public/assets/grape-products.jpg", (300, 300, 650, 723), "grape-pouch")

if __name__ == "__main__":
    main()
