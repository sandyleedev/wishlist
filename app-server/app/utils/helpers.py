import base64
from typing import List
from PIL import Image
from io import BytesIO
import math


def create_collage_html(
        title_list: List[str],
        url_list: List[str],
        img_list: List[Image.Image],
) -> str:

    # Determine grid size based on the number of items
    num_items = len(img_list)
    grid_size = 2  # Default grid size (2x2)

    if 5 <= num_items <= 9:
        grid_size = 3  # 3x3 grid for 5-9 items
    elif 10 <= num_items <= 16:
        grid_size = 4  # 4x4 grid for 10-16 items

    collage_size = 250
    image_size = 200

    collage_width = grid_size * collage_size  # Calculate width based on grid size
    collage_height = grid_size * collage_size + 50  # Add extra space for titles below the images

    # Create collage canvas
    collage = Image.new("RGBA", (collage_width, collage_height))

    # Determine positions for each item (for images only)
    positions = []
    for row in range(grid_size):
        for col in range(grid_size):
            if len(positions) < num_items:
                # Adjust the position considering the reduced image size and extra space
                x_pos = col * collage_size + (collage_size - image_size) // 2
                y_pos = row * collage_size + (collage_size - image_size) // 2
                positions.append((x_pos, y_pos))

    # Create collage image
    for i, img in enumerate(img_list):
        if i >= len(positions):
            break
        img = img.resize((image_size, image_size))  # Resize images to smaller size
        position = positions[i]
        collage.paste(img, position)

    # Convert collage to base64
    img_io = BytesIO()
    collage.save(img_io, format='PNG')
    img_io.seek(0)
    base64_image = base64.b64encode(img_io.getvalue()).decode()

    # Create HTML with clickable areas
    html = f"""
    <html>
    <head>
        <style>
            .wrapper {{
                background-color: #FFF7D1;
                width: 100vw;
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 30px;
            }}
            .collage-container {{
                position: relative;
                width: {collage_width}px;
                height: {collage_height}px;
            }}
            .wishlist-title {{
                text-align: center;
                font-size: 32px;
                font-weight: bold;
                margin-bottom: 20px; /* Space between Wishlist title and collage */
            }}
            .clickable-area {{
                position: absolute;
                cursor: pointer;
                transition: background-color 0.2s;
                text-align: center;
                width: {collage_size}px;
                height: {collage_size}px; /* Adjust height for title */
            }}
            .title {{
                position: absolute;
                top: calc({image_size}px + 10px);  /* Place title below the image */
                width: 100%;
                text-align: center;
                color: black;
                font-weight: bold;
                font-size: 14px;
            }}
        </style>
    </head>
    <body>
        <div class="wrapper">
            <!-- Wishlist Title -->
            <div class="wishlist-title">Wishlist!</div>
    
            <div class="collage-container">
                <img src="data:image/png;base64,{base64_image}" alt="Collage" style="width: {collage_width}px; height: {collage_height}px;">
    """

    # Add clickable areas with titles below the images
    for i, (url, title) in enumerate(zip(url_list, title_list)):
        if i >= len(positions):
            break
        x, y = positions[i]
        html += f"""
            <a href="{url}" target="_blank">
                <div class="clickable-area" style="left: {x - (collage_size - image_size) // 2}px; top: {y}px;">
                    <div class="title">{title}</div>
                </div>
            </a>
        """

    html += """
            </div>
        </div> 
    </body>
    </html>
    """

    return html