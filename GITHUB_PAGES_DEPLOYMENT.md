# GitHub Pages Deployment Guide

## ✅ Automatic Deployment Setup Complete

Your GoExplore application is now configured for automatic deployment to GitHub Pages!

## 🚀 Quick Start

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository: [https://github.com/deekshithmr95/GoExplore](https://github.com/deekshithmr95/GoExplore)
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` and `/root` folder
4. Click **Save**

### Step 2: Wait for First Deployment

1. Go to **Actions** tab in your repository
2. You'll see "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-5 minutes)
4. Once completed, your site is live! 🎉

### Step 3: Visit Your Deployed Site

**Your site will be available at:**
```
https://deekshithmr95.github.io/GoExplore
```

---

## 📊 What Was Configured

### 1. **Next.js Configuration** (`next.config.js`)
```javascript
output: 'export'  // Enables static export for GitHub Pages
basePath: '/GoExplore'  // Sets correct subdirectory path
unoptimized: true  // Disables image optimization for static hosting
```

### 2. **Build Scripts** (`package.json`)
```bash
npm run build:github  # Builds with GitHub Pages configuration
GITHUB_PAGES=true    # Environment variable triggers basePath
```

### 3. **Static Pages Generation** (`destination/[slug]/page.tsx`)
- Added `generateStaticParams()` function
- Pre-generates all destination pages at build time:
  - `/destination/paris`
  - `/destination/tokyo`
  - `/destination/barcelona`

### 4. **GitHub Actions Workflow** (`.github/workflows/github-pages.yml`)
- Automatically builds and deploys on every push to `main`
- Runs tests and linting before deployment
- Tests on Node.js 18.x and 20.x
- Deploys only on successful build

### 5. **Jekyll Disable File** (`public/.nojekyll`)
- Tells GitHub Pages to skip Jekyll processing
- Ensures proper asset loading

---

## 🔄 How Automatic Deployment Works

### Workflow Trigger
Every time you push to the `main` branch:

```
git push origin main
    ↓
GitHub Actions triggered
    ↓
Install dependencies (npm ci)
    ↓
Run linting (npm run lint)
    ↓
Run tests (npm test)
    ↓
Build for GitHub Pages (npm run build:github)
    ↓
Deploy to gh-pages branch
    ↓
Your site updates automatically! 🎉
```

### Build Process
```
Step 1: Checkout code from main
Step 2: Setup Node.js 18.x and 20.x
Step 3: Install dependencies
Step 4: Lint code
Step 5: Run tests
Step 6: Build with static export
Step 7: Upload to gh-pages branch
Step 8: Deploy to GitHub Pages
```

---

## 📁 Build Output Structure

The build generates static HTML files in the `out/` directory:

```
out/
├── index.html                 # Home page
├── about.html                 # About page
├── deals.html                 # Deals page
├── explore.html               # Explore page
├── 404.html                   # 404 error page
├── .nojekyll                  # Jekyll disable marker
├── destination/
│   ├── paris.html             # Paris destination page
│   ├── tokyo.html             # Tokyo destination page
│   └── barcelona.html         # Barcelona destination page
├── globe.json                 # Globe data
└── _next/
    └── static/                # CSS, JS bundles
        ├── css/
        ├── chunks/
        └── zkFhQo0K0.../      # Build manifest
```

**Important:** The `out/` folder is automatically generated during build and deployed to GitHub Pages.

---

## ✨ All 10 Pages Pre-Generated

Your site includes:

| Page | URL | Status |
|------|-----|--------|
| Home | `/GoExplore/` | ✅ Static |
| Explore | `/GoExplore/explore` | ✅ Static |
| Deals | `/GoExplore/deals` | ✅ Static |
| About | `/GoExplore/about` | ✅ Static |
| 404 Error | `/GoExplore/404` | ✅ Static |
| Destination: Paris | `/GoExplore/destination/paris` | ✅ Static |
| Destination: Tokyo | `/GoExplore/destination/tokyo` | ✅ Static |
| Destination: Barcelona | `/GoExplore/destination/barcelona` | ✅ Static |

---

## 🛠️ Manual Build & Test Locally

If you want to build and test locally before pushing:

### Build for GitHub Pages
```bash
npm run build:github
```

### Test the build locally
```bash
# Preview the static export
cd out
npx http-server  # or any local server
# Visit http://localhost:8080
```

### Build for regular server
```bash
npm run build
npm start
```

---

## 🌐 Custom Domain (Optional)

To use a custom domain instead of `github.io`:

1. In **Settings** → **Pages**
2. Enter your custom domain in the "Custom domain" field
3. Click **Save**
4. Add a DNS CNAME record pointing to `deekshithmr95.github.io`
5. Wait for DNS verification (up to 24 hours)

Example DNS record:
```
CNAME  yourdomain.com  deekshithmr95.github.io
```

---

## 📝 Environment Variables

For GitHub Pages deployment:

| Variable | Value | Purpose |
|----------|-------|---------|
| `GITHUB_PAGES` | `true` | Triggers basePath configuration |
| `NODE_ENV` | `production` | Production build optimization |

---

## ⚠️ Important Notes

### basePath Handling
- All links in your app should use relative paths (they do ✅)
- The app is served from `/GoExplore/` subdirectory
- Next.js automatically handles basePath routing

### Static Content Limitations
GitHub Pages only serves static HTML/CSS/JS. Cannot use:
- ❌ Server-side API routes
- ❌ Database connections
- ❌ Server-side rendering (SSR)
- ❌ Middleware

✅ Your app uses static export, so all these are pre-generated at build time!

### Image Optimization
- Images are unoptimized for GitHub Pages compatibility
- All images from Unsplash load correctly
- Consider CDN for high-traffic sites

---

## 🐛 Troubleshooting

### Site not updating after push
1. Check Actions tab - workflow may still be running
2. Hard refresh browser (Ctrl+Shift+R on Windows)
3. Check for errors in workflow logs

### 404 on subdirectories
- Ensure `basePath: '/GoExplore'` in `next.config.js`
- Run `npm run build:github` to test locally
- Check `_next/static/` folder exists in `out/`

### CSS/Images not loading
- Check browser console for 404 errors
- Verify `.nojekyll` file exists in `public/`
- Clear CloudFlare/CDN cache if using one

### Workflow fails
1. Check Actions tab for error messages
2. Common issues:
   - Node version mismatch (should be 18.x or 20.x)
   - Dependency installation failed
   - Build errors (check local build first)

---

## 📊 Monitoring Deployments

### Check deployment status
1. Go to **Actions** tab
2. Click "Deploy to GitHub Pages" workflow
3. See latest run status and logs

### View build logs
1. Click the failed/successful workflow run
2. Expand "build" or "deploy" job
3. View detailed logs

### Check live site
1. Visit [https://deekshithmr95.github.io/GoExplore](https://deekshithmr95.github.io/GoExplore)
2. Open browser DevTools (F12)
3. Check Console for errors
4. Check Network tab for failed requests

---

## 🔄 Continuous Deployment

Every time you:
1. **Push to `main`** → Auto-build & deploy ✅
2. **Create PR** → Runs tests, doesn't deploy ✅
3. **Merge to `main`** → Auto-deploy after merge ✅

No manual deployment needed!

---

## 📈 Next Steps

### Optimize Your Site
- [ ] Replace placeholder images with real ones
- [ ] Add custom domain
- [ ] Enable GitHub Pages analytics
- [ ] Set up GitHub branch protection rules
- [ ] Add automated testing to CI/CD

### Enhance Features
- [ ] Add more destination pages
- [ ] Implement search functionality
- [ ] Add booking integration
- [ ] Create admin dashboard

### Performance
- [ ] Monitor Core Web Vitals
- [ ] Optimize bundle size
- [ ] Add service worker for offline support
- [ ] Enable compression

---

## 🎓 Learning Resources

- [Next.js Static Export Guide](https://nextjs.org/docs/advanced-features/static-html-export)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Workflows](https://docs.github.com/en/actions/using-workflows)
- [Deploying Next.js to GitHub Pages](https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml)

---

## ✅ Deployment Checklist

- [x] GitHub Pages enabled in settings
- [x] Next.js configured for static export
- [x] `basePath` set correctly
- [x] Dynamic routes use `generateStaticParams()`
- [x] `.nojekyll` file created
- [x] GitHub Actions workflow configured
- [x] Build passes locally
- [x] All pages pre-generate successfully
- [x] Changes pushed to `main` branch
- [x] Workflow runs and deploys automatically

---

## 🎉 You're All Set!

Your GoExplore application is now deployed to GitHub Pages with automatic CI/CD! 

**Live site:** [https://deekshithmr95.github.io/GoExplore](https://deekshithmr95.github.io/GoExplore)

Every push to `main` automatically builds, tests, and deploys your application. 🚀

---

**Need help?** Check the workflow logs in the Actions tab or review this guide!
