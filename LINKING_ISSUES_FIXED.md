# Website Linking Issues - Fixed

## Summary
This document describes the broken link issues found on the static version of the edvln.com website and the fixes that were applied.

## Root Cause
The website was originally designed for Squarespace, which uses extensionless URLs (e.g., `/about`, `/prosjekter`). When deployed as a static site, these links don't work because static hosting requires the `.html` file extension (e.g., `/about.html`, `/prosjekter.html`).

## Issues Fixed

### 1. Main Navigation Links
**Problem:** Links in the header navigation were using extensionless URLs.

**Files Fixed:**
- `index.html` - Updated `/about` → `/about.html` (2 instances)
- `about.html` - Updated `/about` → `/about.html` (3 instances for self-reference)
- `prosjekter.html` - Updated `/prosjekter` → `/prosjekter.html` and `/about` → `/about.html`

**Impact:** ✅ Main navigation between Home, About, and Prosjekter pages now works correctly.

### 2. Pagination Links
**Problem:** Links between the film and foto gallery pages used `/work/film` and `/work/foto` paths that don't exist.

**Files Fixed:**
- `film.html` - Updated `/work/foto` → `/foto.html`
- `foto.html` - Updated `/work/film` → `/film.html`

**Impact:** ✅ "Next" and "Previous" navigation between film and foto galleries now works.

### 3. Homepage Portfolio Links
**Files Checked:**
- `index.html` - Links to `/film.html` and `/foto.html` were already correct ✅

## Current Status

### Working Pages
All main pages are now accessible and navigable:
- ✅ `/` or `/index.html` - Homepage
- ✅ `/about.html` - About page
- ✅ `/prosjekter.html` - Projects overview (Norwegian version)
- ✅ `/projects.html` - Projects page (simpler English version)
- ✅ `/film.html` - Film portfolio gallery
- ✅ `/foto.html` - Photo portfolio gallery

### Case Sensitivity Note
⚠️ **Important for deployment:** 
- File names are case-sensitive on most web servers (Linux/Unix)
- Current files use lowercase: `prosjekter.html`, `about.html`, etc.
- Links have been standardized to lowercase to match
- If deploying to GitHub Pages or similar, ensure URLs are lowercase

## Recommendations for Future Development

### 1. For Static Hosting (Current Setup)
If continuing with static HTML hosting:
- Always use `.html` extension in links
- Use relative paths (e.g., `./about.html` or `/about.html`)
- Test locally before deploying
- Consider using a local server for testing (e.g., `python -m http.server`)

### 2. For Improved User Experience
Consider adding one of these solutions:
- **URL Rewriting:** Configure server (e.g., `.htaccess` for Apache) to allow extensionless URLs
- **Build Process:** Use a static site generator that handles URL routing
- **Client-side Router:** Add JavaScript to handle extensionless navigation

### 3. For Squarespace Migration
If planning to fully migrate from Squarespace:
- Export all project pages that currently only exist on Squarespace
- Update all absolute `https://edvln.com/` URLs to relative paths
- Create missing project detail pages (see list below)

## How to Test Locally

```bash
# Option 1: Python simple server
cd /path/to/edvinTrialWebsite
python3 -m http.server 8000

# Option 2: Node.js http-server
npx http-server -p 8000

# Then open: http://localhost:8000
```

Test these navigation paths:
1. Home → Prosjekter ✅
2. Home → About ✅  
3. Prosjekter → About ✅
4. Film → Foto (pagination) ✅
5. Foto → Film (pagination) ✅

## Related Files
- `styles.css` - Styles are correctly referenced
- `script.js` - Scripts are correctly referenced
- `.nojekyll` - Ensures GitHub Pages doesn't use Jekyll processing

## Deployment Checklist
Before deploying to production:
- [ ] Test all main navigation links
- [ ] Test pagination between galleries
- [ ] Verify all images load correctly
- [ ] Test on mobile viewport
- [ ] Check console for any 404 errors
- [ ] Verify external links still work (Instagram, YouTube, email)
