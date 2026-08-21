import os
from PIL import Image

def process_image(img_path, crop_box, out_name):
    print(f"Cropping {out_name}...")
    img = Image.open(img_path)
    cropped = img.crop(crop_box)
    
    # Save directly without rembg
    cropped.save(f"public/assets/{out_name}.png")
    print(f"Saved {out_name}.png")

def main():
    # product-lineup.jpg: (724, 1024)
    # Left cup (Grape): 
    process_image("public/assets/product-lineup.jpg", (0, 350, 260, 950), "grape-cup")

    # Middle cup (Basil Seeds):
    process_image("public/assets/product-lineup.jpg", (220, 350, 500, 950), "basil-seeds")

    # Right cup (Lychee):
    process_image("public/assets/product-lineup.jpg", (450, 400, 724, 950), "lychee-cup")

    # Logo (Top):
    process_image("public/assets/product-lineup.jpg", (100, 50, 650, 320), "arabian-logo-new")

    # grape-products.jpg: (1024, 723)
    # Pouch: (Assuming center right)
    process_image("public/assets/grape-products.jpg", (300, 100, 800, 723), "grape-pouch")

if __name__ == "__main__":
    main()
