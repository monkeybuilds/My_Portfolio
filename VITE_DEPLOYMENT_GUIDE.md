# Portfolio Deployment Guide - Vite Edition

Your portfolio has been successfully migrated from Next.js to Vite! Here's how to deploy it.

## Local Development

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
This will start Vite dev server on `http://localhost:3000` with hot module replacement.

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## Deployment Options

### 1. **Vercel** (Recommended - Same as before)
```bash
npm install -g vercel
vercel
```
Vercel will auto-detect Vite and deploy automatically.

### 2. **Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

Or connect your GitHub repo to Netlify for auto-deployments.

### 3. **GitHub Pages**
Update `vite.config.ts` base path if using a project repo:
```typescript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

Then deploy with:
```bash
npm run build
# Push dist/ to gh-pages branch
```

### 4. **Static Hosting (AWS S3, Azure Static Web Apps, etc.)**
1. Run `npm run build`
2. Upload contents of `dist/` folder to your hosting service
3. Configure server to serve `index.html` for all routes

## Project Structure

```
src/
├── App.tsx              # Main app component
├── main.tsx             # Entry point
├── globals.css          # Global styles
├── vite-env.d.ts        # Vite types
└── components/          # All React components
    ├── Header.tsx
    ├── Banner.tsx
    ├── Experience.tsx
    ├── About.tsx
    ├── Projects.tsx
    ├── DesignPortfolio.tsx
    ├── WorksInProgress.tsx
    ├── SocialMedia.tsx
    └── Footer.tsx

public/                 # Static assets (served as-is)
├── assets/
├── cards/
├── logo/
└── projects/

vite.config.ts         # Vite configuration
tsconfig.json          # TypeScript config
package.json           # Dependencies
index.html             # Entry HTML file
```

## Key Differences from Next.js

1. **No Image component**: Use standard `<img>` tags instead of `next/image`
2. **No Link component**: Use standard `<a>` tags instead of `next/link`
3. **No built-in SSR**: Vite creates static SPA - perfect for portfolios
4. **Faster builds**: Vite is significantly faster than Next.js for SPA builds
5. **Hot Module Replacement**: Faster dev experience with HMR

## Environment Variables

Create a `.env` file in the root:
```
VITE_API_URL=https://api.example.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## Performance Optimization

- **CSS Minification**: Automatically handled by Vite
- **Code Splitting**: Vite automatically splits large files
- **Asset Optimization**: Images and fonts are optimized in build

## Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3001
```

### Build size too large
Check with:
```bash
npm run build -- --analyze
```

### Assets not loading in production
Ensure `public/` folder assets are referenced correctly (no leading slashes for relative paths in CSS).

## Next Steps

1. Test locally: `npm run dev`
2. Build: `npm run build`
3. Preview: `npm run preview`
4. Deploy to your chosen platform
5. Update DNS/domain settings if needed

Happy deploying! 🚀
