# Images Directory

This directory contains all images for the ShotByEdvin website.

## Directory Structure

- `/portfolio/` - Portfolio images for projects (film and photo work)
- `/about/` - Images for the about page (profile photo, etc.)

## Adding Images

To add your actual photos:

1. **Resize and optimize images** before uploading for web performance:
   - Portfolio images: Recommended size 1920x1080px or similar aspect ratios
   - Profile photo: Recommended size 800x800px
   - Use JPEG format with 80-90% quality for photos
   - Use PNG format only for images requiring transparency

2. **Name your files descriptively:**
   - Good: `konsert-oslo-2024.jpg`, `portrett-edvin.jpg`
   - Avoid: `IMG_1234.jpg`, `photo1.jpg`

3. **Replace placeholder images** in the HTML files:
   - Find the placeholder `<img>` tags
   - Update the `src` attribute to point to your image file
   - Update the `alt` attribute with descriptive text

## Example

Replace:
```html
<img src="images/portfolio/placeholder.jpg" alt="Placeholder">
```

With:
```html
<img src="images/portfolio/konsert-oslo-2024.jpg" alt="Konsertfotografi fra Oslo 2024">
```

## Copyright

All images in this directory are copyrighted by Edvin Fjørtoft Pettersen.
Unauthorized use is prohibited.
