# Media Assets Guide for ShotByEdvin Website

This guide explains how to add your photos and videos to the website.

## Quick Start

1. **Prepare your media files** (see detailed instructions below)
2. **Add files to the appropriate directories:**
   - Photos: `/images/portfolio/` or `/images/about/`
   - Videos: `/videos/`
3. **Uncomment and update the HTML** (see examples below)
4. **Test locally** before deploying

---

## 📸 Adding Photos

### Step 1: Prepare Your Images

**Resize and optimize images for web:**

- **Portfolio images**: 1920x1080px or 1200x800px
- **Profile photo**: 800x800px or 600x600px
- **Format**: JPEG (80-90% quality) for photos, PNG for graphics with transparency
- **File size**: Keep under 500KB per image for fast loading

**Recommended tools:**
- [TinyPNG](https://tinypng.com/) - Free online image compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- Adobe Photoshop "Export for Web"
- GIMP (free, open-source)

### Step 2: Name Your Files

Use descriptive, lowercase names with hyphens:

✅ **Good:**
- `konsert-oslo-spektrum-2024.jpg`
- `portrett-edvin-profile.jpg`
- `event-wedding-bergen.jpg`

❌ **Avoid:**
- `IMG_1234.jpg`
- `DSC00456.jpg`
- `photo 1.jpg` (no spaces!)

### Step 3: Add Files to Directories

```
images/
├── about/
│   └── profile-edvin.jpg          ← Your profile photo
└── portfolio/
    ├── konsert-1.jpg               ← Concert photos
    ├── portrett-1.jpg              ← Portrait photos
    ├── event-1.jpg                 ← Event photos
    ├── reklame-1.jpg               ← Advertising photos
    ├── kunstner-1.jpg              ← Artist branding photos
    ├── film-1.jpg                  ← Film/video thumbnails
    └── video-poster.jpg            ← Video thumbnail for homepage
```

### Step 4: Update HTML Files

#### For About Page (about.html)

Find this line:
```html
<!-- <img src="images/about/profile-edvin.jpg" alt="Edvin Fjørtoft Pettersen - Fotograf"> -->
```

Uncomment and update:
```html
<img src="images/about/profile-edvin.jpg" alt="Edvin Fjørtoft Pettersen - Fotograf">
```

#### For Projects Page (projects.html)

Each project card has a placeholder. Find:
```html
<!-- <img src="images/portfolio/konsert-1.jpg" alt="Konsertfotografering"> -->
```

Uncomment and update with your image:
```html
<img src="images/portfolio/konsert-oslo-2024.jpg" alt="Konsertfotografi fra Oslo Spektrum 2024">
```

**Repeat for all 6 project cards**, using appropriate images for each category.

---

## 🎥 Adding Video Background

### Step 1: Prepare Your Video

**Video specs for web:**
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Duration**: Keep short (30-60 seconds for looping)
- **File size**: Under 10MB for background videos
- **Frame rate**: 24-30 fps

**Compression tools:**
- [HandBrake](https://handbrake.fr/) (Free, excellent for video compression)
- [CloudConvert](https://cloudconvert.com/mp4-converter) (Online converter)
- Adobe Media Encoder
- FFmpeg (command-line tool)

**HandBrake settings for web video:**
1. Open HandBrake
2. Select your video file
3. Choose "Web" > "Gmail Large 3 Minutes 720p30" preset
4. Adjust video dimensions to 1920x1080 if needed
5. Set quality to RF 22-24 for good balance
6. Start encode

### Step 2: Create a Poster Image

Extract a frame from your video to use as a poster (loading thumbnail):

**Using VLC Media Player:**
1. Open video in VLC
2. Pause at desired frame
3. Video menu > Take Snapshot
4. Save as `video-poster.jpg` in `/images/portfolio/`

### Step 3: Add Files

```
videos/
└── showreel-2024.mp4               ← Your video file

images/portfolio/
└── video-poster.jpg                ← Video thumbnail
```

### Step 4: Update index.html

Find this section:
```html
<!--
<video class="hero-video" autoplay muted loop playsinline poster="images/portfolio/video-poster.jpg">
    <source src="videos/showreel-2024.mp4" type="video/mp4">
    Din nettleser støtter ikke video.
</video>
-->
```

Uncomment and update:
```html
<video class="hero-video" autoplay muted loop playsinline poster="images/portfolio/video-poster.jpg">
    <source src="videos/showreel-2024.mp4" type="video/mp4">
    Din nettleser støtter ikke video.
</video>
```

---

## 🧪 Testing Your Changes

### Test Locally

1. **Open the website in a browser:**
   - Double-click `index.html` or
   - Use a local server: `python3 -m http.server 8000`
   - Navigate to `http://localhost:8000`

2. **Check each page:**
   - ✅ Homepage: Video plays (if added)
   - ✅ About page: Profile photo displays
   - ✅ Projects page: All 6 project images display

3. **Test responsive design:**
   - Resize browser window
   - Test on mobile device
   - Check images scale properly

### Check File Sizes

Keep total page weight reasonable:
- Homepage with video: < 15MB
- About page: < 2MB
- Projects page: < 3MB

Use browser DevTools (F12) > Network tab to check.

---

## 📱 Mobile Optimization

### Disable Video on Mobile (Optional)

Videos can use a lot of data on mobile. To disable on mobile, add this to your CSS:

```css
@media (max-width: 768px) {
    .hero-video {
        display: none;
    }
}
```

### Serve Smaller Images on Mobile

Consider using the `<picture>` element for responsive images:

```html
<picture>
    <source media="(max-width: 768px)" srcset="images/portfolio/konsert-1-mobile.jpg">
    <img src="images/portfolio/konsert-1.jpg" alt="Konsertfotografi">
</picture>
```

---

## ✅ Checklist

Before deploying:

- [ ] All images optimized and under 500KB each
- [ ] Video compressed and under 10MB
- [ ] All image `alt` attributes are descriptive
- [ ] HTML comments removed (uncommented)
- [ ] Tested on desktop browser
- [ ] Tested on mobile device
- [ ] Page load time is acceptable (< 3 seconds)
- [ ] Images display correctly on all pages

---

## 🆘 Troubleshooting

### Image doesn't show up
- Check file path is correct (case-sensitive!)
- Verify file is in the right directory
- Check file extension matches (`.jpg` vs `.JPG`)
- Look in browser console (F12) for errors

### Video doesn't play
- Ensure video is MP4 format
- Check file size (< 10MB recommended)
- Verify `autoplay`, `muted`, and `playsinline` attributes are set
- Try a different browser
- Check browser console for errors

### Page loads slowly
- Compress images more (use TinyPNG or Squoosh)
- Reduce video file size (use HandBrake)
- Remove unused images from directories
- Consider lazy loading for images below the fold

### Images look pixelated
- Use higher resolution source images
- Don't upscale small images
- Export at correct dimensions (see specs above)

---

## 📞 Need Help?

If you run into issues:
1. Check the browser console for errors (F12 > Console tab)
2. Verify file paths match exactly (including capitalization)
3. Make sure HTML comments are properly removed
4. Test in a different browser

---

**Copyright Notice:** All media files (photos and videos) are copyrighted by Edvin Fjørtoft Pettersen. Unauthorized use is prohibited.
