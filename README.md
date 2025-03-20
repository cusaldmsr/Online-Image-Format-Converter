<div align="center">
<img src="convertor.svg" width = "300">
</div>
<div align="center">
  
# Image Format Converter

<br>

<p align="center">
        <img src="https://img.shields.io/github/created-at/cusaldmsr/Online-Image-Format-Converter"/>
        <img src="https://img.shields.io/github/commit-activity/m/cusaldmsr/Online-Image-Format-Converter"/>
        <img src="https://img.shields.io/github/forks/cusaldmsr/Online-Image-Format-Converter"/>
        <img src="https://img.shields.io/github/stars/cusaldmsr/Online-Image-Format-Converter"/>
        <img src="https://img.shields.io/github/watchers/cusaldmsr/Online-Image-Format-Converter"/>
</p>
</div>
A simple web application that allows users to convert image formats (JPG, PNG, JPEG, SVG) directly in the browser.

## Features

- Upload images from your device
- Preview the uploaded image
- Convert between JPG, JPEG, PNG, and SVG formats
- Download the converted image
- Responsive design using Bootstrap
- Client-side processing (no server required)

## Demo

[Click here...](https://cusaldmzr.github.io/Online-Image-Format-Converter/)


<div align="center">
  
  ## Screenshots
<div align="left">
<img src="https://github.com/user-attachments/assets/db6adf10-053d-44a5-b927-fe0a41b72926" width = "500">
</div>
<div align="right">
<img src="https://github.com/user-attachments/assets/603db76b-5a00-4870-8ffd-87007d8975a3" width = "500">
</div>
</div>



## Installation

1. Clone the repository:
```bash
git clone https://github.com/cusaldmsr/Online-Image-Format-Converter.git
```
2. Navigate to the project directory:
```bash
cd Online-Image-Format-Converter
```
3. Open index.html in a web browser directly, or serve it using a local server:
4. Then visit http://localhost:8000 in your browser.

## Usage
   
1. Open the application in a web browser
2. Click "Choose File" to upload an image
3. Select the desired output format from the dropdown
4. Click "Convert Image"
5. Preview the converted image
6. Click "Download Converted Image" to save the result


## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- HTML5 Canvas API

## File Structure
```
image-format-converter/
│
├── index.html      # Main HTML file
├── styles.css      # Custom CSS styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Notes
- The conversion is performed client-side using the HTML5 Canvas API
- SVG conversion is basic and embeds the raster image data (not true vector conversion)
- Works with common image formats (JPG, JPEG, PNG)
- Requires an internet connection to load Bootstrap CDN (initial load only)
- No external dependencies beyond Bootstrap

## Limitations
- SVG conversion creates a wrapper around the original image rather than true vectorization
- Large images might affect performance due to client-side processing
- Browser compatibility depends on Canvas API support

## Author
[Kusal Damsara](https://github.com/cusaldmsr)

Feel free to open an issue if you have any questions or suggestions!
