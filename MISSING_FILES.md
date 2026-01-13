# Missing Files and Pages

This document lists all files and pages that are referenced in the website but do not currently exist in the repository.

## 📋 Missing Project Detail Pages (Referenced but Not Created)

### From `film.html` Gallery
These are clickable gallery items that link to project detail pages:

1. **`/kortfilm.html`** (or `/kortfilm`)
   - Title: "KORTFILM" (Short Films)
   - Image: `KORTFILM - portfolio.png`
   - Status: ❌ Page does not exist
   - Action needed: Create page or remove link
   - Current behavior: Clicking leads to 404 error

2. **`/reklame.html`** (or `/reklame`)
   - Title: "REKLAME" (Advertising/Commercial Work)
   - Image: `REKLAME-portfolio.png`
   - Status: ❌ Page does not exist
   - Action needed: Create page or remove link
   - Current behavior: Clicking leads to 404 error

### From `prosjekter.html` Gallery
This gallery has several clickable project items:

3. **`/nokkelbarn.html`** (or `/nokkelbarn`)
   - Title: "NØKKELBARN (2023)"
   - Image: Film still from Nøkkelbarn project
   - Status: ❌ Page does not exist in repository
   - Note: This might exist on live Squarespace site
   - Action needed: Create page or update link to external URL
   - Current behavior: Clicking leads to 404 error

## 🌐 External Project Pages (Exist on Squarespace, Not in Repo)

These pages are referenced as absolute URLs pointing to `edvln.com` and appear to exist on the live Squarespace site but are not in this static repository:

4. **`https://edvln.com/simensteinklevparkteatret`**
   - Title: "SIMEN STEINKLEV"
   - Referenced in: `prosjekter.html` (line 1678)
   - Status: ⚠️ External link (may work on live site)
   - Image: Concert photography
   - Action needed: If migrating to static site, create local page

5. **`https://edvln.com/natnaelpark`**
   - Title: "NATNAEL"
   - Referenced in: `prosjekter.html` (line 1712)
   - Status: ⚠️ External link (may work on live site)
   - Image: Portrait photography in park
   - Action needed: If migrating to static site, create local page

6. **`https://edvln.com/konsert`**
   - Title: "Lund Gruppen Arrangement" / Concert photography
   - Referenced in: `prosjekter.html` (line 1729)
   - Status: ⚠️ External link (may work on live site)
   - Image: Concert/event photography
   - Action needed: If migrating to static site, create local page

7. **`https://edvln.com/lillecaesarpark`**
   - Title: "ADAM GRYTING" / "Lille Caesar"
   - Referenced in: `prosjekter.html` (line 1746)
   - Status: ⚠️ External link (may work on live site)
   - Image: Portrait in park setting
   - Action needed: If migrating to static site, create local page

## 📁 Missing Directories

8. **`/work/` directory**
   - Status: ❌ Directory does not exist
   - Was referenced as: `/work/film` and `/work/foto`
   - Resolution: ✅ FIXED - Updated to `/film.html` and `/foto.html`

## 📄 Summary Table

| File/Page | Type | Status | Priority | Action |
|-----------|------|--------|----------|--------|
| `/kortfilm.html` | Local project page | ❌ Missing | High | Create or remove link |
| `/reklame.html` | Local project page | ❌ Missing | High | Create or remove link |
| `/nokkelbarn.html` | Local project page | ❌ Missing | High | Create or remove link |
| `edvln.com/simensteinklevparkteatret` | External page | ⚠️ External | Medium | Keep or migrate |
| `edvln.com/natnaelpark` | External page | ⚠️ External | Medium | Keep or migrate |
| `edvln.com/konsert` | External page | ⚠️ External | Medium | Keep or migrate |
| `edvln.com/lillecaesarpark` | External page | ⚠️ External | Medium | Keep or migrate |
| `/work/` directory | Directory structure | ✅ Fixed | - | Already resolved |

## 🔧 Recommendations

### Option 1: Create Missing Pages (Recommended for Full Static Site)
Create the following files with appropriate content:
- `kortfilm.html` - Showcase short film work
- `reklame.html` - Showcase advertising/commercial photography
- `nokkelbarn.html` - Detail page for the Nøkkelbarn (2023) film project

Each should follow the same structure as existing pages (`film.html`, `foto.html`) with:
- Consistent header/navigation
- Gallery or content section
- Footer (if applicable)
- Proper meta tags for SEO

### Option 2: Remove Broken Links (Quick Fix)
If the project pages aren't ready:
- Remove the clickable links but keep the images as static gallery items
- Add "Coming Soon" text overlay
- Or remove the gallery items entirely until pages are ready

### Option 3: Keep External Links (Hybrid Approach)
For the project pages that exist on Squarespace:
- Keep the absolute URLs pointing to `edvln.com`
- Ensure they open in a new tab: `target="_blank"`
- Add visual indicator that these are external links
- Note: This creates a hybrid experience (some local, some remote)

### Option 4: Create Simple Placeholder Pages
Create minimal HTML files for each missing page:
```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Project Name - ShotByEdvin</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Project Name</h1>
    <p>Content coming soon...</p>
    <a href="prosjekter.html">← Back to Projects</a>
</body>
</html>
```

## 🎯 Next Steps

**Immediate (to prevent 404 errors):**
1. Decide on approach for missing pages (create, remove, or placeholder)
2. Update links accordingly
3. Test all gallery pages

**Long-term (for complete migration):**
1. Export content from Squarespace for all project pages
2. Create matching HTML pages in repository
3. Update all absolute URLs to relative paths
4. Maintain consistent design across all pages

## 📝 Testing Checklist

After creating missing pages, test:
- [ ] Click all gallery items in `film.html`
- [ ] Click all gallery items in `foto.html`
- [ ] Click all gallery items in `prosjekter.html`
- [ ] Verify each project page has working navigation back to galleries
- [ ] Check mobile responsiveness of new pages
- [ ] Validate HTML of new pages
- [ ] Test load times with images

## 🔗 Related Documentation
- `LINKING_ISSUES_FIXED.md` - Documentation of navigation fixes applied
- `README.md` - General project information
- `MEDIA_GUIDE.md` - Media management guide
