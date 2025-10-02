# GitHub Pages Deployment Instructions

Your website is ready to deploy! Follow these simple steps:

## Step 1: Configure GitHub Pages Settings

1. Go to your GitHub repository
2. Click **Settings** (top right)
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` (or your default branch)
   - **Folder**: Select **`/ (root)`** (NOT `/docs`)
5. Click **Save**

## Step 2: Verify Files

Make sure these files are in your repository root:
- `index.html` (home page)
- `about.html` (about page)
- `data-viz.html` (data visualization page)
- `style.css` (styles)
- `script.js` (mobile menu)
- `.nojekyll` (tells GitHub to skip Jekyll processing)
- `images/iu-trident-logo.png` (logo)

## Step 3: Wait for Deployment

After saving the settings, GitHub will automatically deploy your site. This usually takes 1-2 minutes.

Your site will be available at: `https://[your-username].github.io/[repository-name]/`

## Troubleshooting

If you see errors:
- Make sure the folder is set to `/ (root)` not `/docs`
- Verify the `.nojekyll` file exists in the root
- Check that all HTML files are in the root directory
- Wait a few minutes for GitHub to rebuild the site

That's it! Your site should now be live.
