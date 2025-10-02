# Disrupted Development Research Group Website

This is a simple static HTML website for the Disrupted Development research group.

## Files Needed for GitHub Pages

The following files are required for the website to work:

- `index.html` - Home page
- `about.html` - About page  
- `data-viz.html` - Data Visualization page
- `style.css` - Stylesheet
- `script.js` - JavaScript for mobile navigation
- `images/iu-trident-logo.png` - IU logo
- `.nojekyll` - Tells GitHub Pages to skip Jekyll processing

## GitHub Pages Setup Instructions

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select your main branch (usually `main` or `master`)
   - **Folder**: Select **`/ (root)`** NOT `/docs`
4. Click "Save"
5. Wait a few minutes for GitHub Pages to deploy
6. Your site will be available at `https://[your-username].github.io/[repository-name]/`

## Important Notes

- Make sure the branch is set to deploy from **root** (`/`), not `/docs`
- The `.nojekyll` file must be present in the root directory
- All HTML, CSS, and JS files must be in the root directory
- Do not add any Jekyll configuration files (`_config.yml`, `Gemfile`, etc.)

## Troubleshooting

If you see Jekyll errors:
1. Verify `.nojekyll` file exists in the root
2. Check GitHub Pages settings are set to deploy from root (`/`), not `/docs`
3. Make sure you're deploying from the correct branch
4. Try pushing a small change to trigger a new deployment
