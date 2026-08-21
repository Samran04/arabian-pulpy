import os
from rembg import remove
from PIL import Image

def process(input_path, output_path):
    print(f"Processing {input_path}...")
    with open(input_path, "rb") as i:
        input_data = i.read()
    
    # Process with rembg
    output_data = remove(input_data)
    
    with open(output_path, "wb") as o:
        o.write(output_data)
    print(f"Saved to {output_path}")

def main():
    base_dir = r"C:\Users\LENOVO\.gemini\antigravity-ide\brain\92f2d1ba-ad31-481d-afda-39f4436ef978\.user_uploaded"
    out_dir = r"c:\Users\LENOVO\Desktop\arabian-pulpy\public\assets"
    
    # The latest uploaded image
    images = {
        "media_1787333213474.png": "grape-pouch.png"
    }
    
    for in_name, out_name in images.items():
        in_path = os.path.join(base_dir, in_name)
        out_path = os.path.join(out_dir, out_name)
        if os.path.exists(in_path):
            process(in_path, out_path)
        else:
            print(f"Not found: {in_path}")

if __name__ == "__main__":
    main()
