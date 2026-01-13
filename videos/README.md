# Videos Directory

This directory contains video files for the ShotByEdvin website.

## Adding Videos

To add your actual video content:

1. **Prepare your videos for web:**
   - Convert to MP4 format (H.264 codec) for best compatibility
   - Recommended resolution: 1920x1080 (Full HD) or 1280x720 (HD)
   - Compress for web to reduce file size (use tools like HandBrake)
   - Consider creating a poster image (thumbnail) for each video

2. **Video file naming:**
   - Use descriptive names: `showreel-2024.mp4`, `film-work-highlights.mp4`
   - Keep filenames lowercase with hyphens instead of spaces

3. **Update HTML to reference your videos:**

Replace the placeholder in index.html:
```html
<video autoplay muted loop playsinline>
    <source src="videos/your-video-file.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

4. **Background video best practices:**
   - Keep videos under 10MB for fast loading
   - Use muted autoplay for background videos
   - Always provide a fallback poster image
   - Consider mobile experience (videos can be disabled on mobile to save bandwidth)

## Example Usage

```html
<video autoplay muted loop playsinline poster="images/portfolio/video-poster.jpg">
    <source src="videos/showreel-2024.mp4" type="video/mp4">
    Din nettleser støtter ikke video.
</video>
```

## Copyright

All videos in this directory are copyrighted by Edvin Fjørtoft Pettersen.
Unauthorized use is prohibited.
