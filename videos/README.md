# Videos Directory

**Important:** This directory should NOT contain large video files in the Git repository, as they cause deployment timeouts on GitHub Pages.

## Recommended Approach for Videos

### Option 1: External Hosting (Recommended)
Host your videos on:
- **YouTube** - Free, reliable, good for public content
- **Vimeo** - Professional, better quality control
- **CDN Services** - Cloudflare R2, AWS S3, Bunny CDN

Then embed the video in your HTML instead of hosting it directly.

### Option 2: Background Image (Current Implementation)
The website currently uses a static background image (`images/nokkelbarn.jpg`) instead of video to ensure fast, reliable deployment.

## Why Not Store Videos Here?

Large video files (>10MB) cause:
- ❌ Deployment timeouts (10+ minutes)
- ❌ Slow git operations
- ❌ Repository bloat
- ❌ Poor performance on slower connections

## If You Must Store Small Videos

Only store videos if:
- File size is **under 5MB**
- Video is highly compressed for web
- You've tested deployment time

**Better solution:** Use external video hosting services and embed them in your HTML.

## Copyright

All videos in this directory are copyrighted by Edvin Fjørtoft Pettersen.
Unauthorized use is prohibited.
