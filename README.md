# Savita Pathak - Portfolio 🚀

A modern, high-performance portfolio showcasing skills, projects, and experience as a **Python Developer**, **Data Scientist**, and **Creative Technologist**.

Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

## Features ✨

- **Lightning-Fast Performance**: Built with Vite for ultra-fast development and production builds
- **Modern Design**: Dark-themed UI with purple gradient accents and smooth animations
- **Animated Typing Effect**: Dynamic text animation in the hero section cycling through roles
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop devices
- **Component-Based Architecture**: Modular React components for easy customization
- **Smooth Animations**: Engaging interactions with CSS transitions and effects
- **Analytics Ready**: Vercel Analytics integration for tracking user engagement
- **SEO Optimized**: Clean markup and semantic HTML for better search engine visibility

## Tech Stack 🛠️

- **Frontend Framework**: React 19 with Vite 5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite (ESBuild-powered)
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel, Netlify, or any static host

## Project Structure 📁

```
src/
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
├── globals.css             # Global styles
└── components/
    ├── Header.tsx          # Navigation header
    ├── Banner.tsx          # Hero section with typing effect
    ├── Experience.tsx      # Work experience cards
    ├── About.tsx           # Skills & certifications
    ├── Projects.tsx        # Featured projects
    ├── DesignPortfolio.tsx # Design work showcase
    ├── WorksInProgress.tsx # Upcoming projects
    ├── SocialMedia.tsx     # Social links
    └── Footer.tsx          # Contact section

public/                    # Static assets
index.html                 # HTML entry point
vite.config.ts            # Vite configuration
tsconfig.json             # TypeScript config
```

## Getting Started 🚀

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/monkeybuilds/My_Portfolio.git
cd My_Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000` with hot module replacement enabled.

### Development

Edit components in `src/components/` - changes will instantly reflect in the browser.

### Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The optimized build will be in the `dist/` directory.

## Deployment 🌐

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages or Static Hosting
1. Run `npm run build`
2. Upload contents of `dist/` folder to your hosting service

See [VITE_DEPLOYMENT_GUIDE.md](./VITE_DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## Performance 📊

- **Fast Build Times**: Vite provides near-instant dev startup
- **Optimized Bundle**: Tree-shaking and code-splitting out of the box
- **Lighthouse Score**: Optimized for performance, accessibility, and SEO

## Images & Assets 🖼️

- Project images: `public/projects/`
- Design portfolio: `public/assets/portfolio/`
- Cards and icons: `public/cards/`, `public/logo/`

## License 📜

© 2026 Savita Pathak. All rights reserved.

Feel free to fork and customize for your own portfolio. Attribution appreciated! 

## Contact 📧

- GitHub: [@monkeybuilds](https://github.com/monkeybuilds)
- YouTube: [Builds Monkey](https://www.youtube.com/@buildsmonkey)
- Instagram: [@atharvapath](https://www.instagram.com/atharvapath)

---

⭐ If you found this project helpful or interesting, please consider giving it a star!
