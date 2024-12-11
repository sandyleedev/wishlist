import base64

from typing import List
from PIL import Image
from io import BytesIO

def create_collage_html(
        title_list: List[str],
        url_list: List[str],
        img_list: List[Image.Image],
) -> str:

    collage_width = 500
    collage_height = 500
    image_size = 250

    # Create collage canvas
    collage = Image.new("RGBA", (collage_width, collage_height))

    positions = [
        (0, 0),
        (image_size, 0),
        (0, image_size),
        (image_size, image_size)
    ]

    # Create collage image
    for i, img in enumerate(img_list):
        if i >= len(positions):
            break
        img = img.resize((image_size, image_size))
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
            .collage-container {{
                position: relative;
                width: {collage_width}px;
                height: {collage_height}px;
            }}
            .clickable-area {{
                position: absolute;
                cursor: pointer;
                transition: background-color 0.2s;
            }}
        </style>
    </head>
    <body>
        <div class="collage-container">
            <img src="data:image/png;base64,{base64_image}" alt="Collage" style="width: {collage_width}px; height: {collage_height}px;">
    """

    # Add clickable areas
    for i, url in enumerate(url_list):
        if i >= len(positions):
            break
        x, y = positions[i]
        html += f"""
            <a href="{url}" target="_blank">
                <div class="clickable-area" style="left: {x}px; top: {y}px; width: {image_size}px; height: {image_size}px;"></div>
                <span>item name!</span>
            </a>
        """

    html += """
        </div>
    </body>
    </html>
    """

    return html