# GoExplore

A modern, interactive Next.js travel exploration platform for discovering amazing destinations around the world with an elegant, adventure-focused design system.

## 🚀 Project Status

| Component | Status | Details |
|-----------|--------|---------|
| **Build** | ✅ PASSING | Latest build: 6.8s, zero critical errors |
| **Production Build** | ✅ READY | All 7 routes pre-rendered, optimized for deployment |
| **TypeScript** | ✅ PASSING | Full type safety with Next.js 15 compatibility |
| **ESLint** | ✅ PASSING | Zero code quality errors, only optimization warnings |
| **Tests** | ✅ PASSING | Jest configuration ready, test suite active |
| **Deployment** | ✅ READY | GitHub Actions CI/CD configured, ready for Vercel/Netlify |

## ✨ Features

- ✅ **Next.js 15** with App Router - latest React server components
- ✅ **TypeScript** - full type safety and developer experience
- ✅ **Tailwind CSS** - modern utility-first styling with extended design system
- ✅ **Responsive Design** - mobile-first approach (mobile, tablet, desktop)
- ✅ **Dark Mode Support** - seamless light/dark theme switching
- ✅ **Interactive Components** - engaging UI with smooth animations
- ✅ **Advanced Typography** - Playfair Display headers + Inter body fonts
- ✅ **Travel Theme Colors** - primary blue, accent orange, emerald, cyan, sunset red
- ✅ **GitHub CI/CD** - automated testing and deployment workflows
- ✅ **ESLint & Prettier** - code quality and formatting
- ✅ **Jest Testing** - unit and component testing framework
- ✅ **Performance Optimized** - 60fps animations, optimized images, fast page loads

## Project Structure

```
GoExplore/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with navigation & providers
│   │   ├── page.tsx                # Home page with hero section & animations
│   │   ├── globals.css             # Global styles, animations, typography utilities
│   │   ├── explore/
│   │   │   └── page.tsx            # Interactive explore destinations page
│   │   ├── about/
│   │   │   └── page.tsx            # About GoExplore page
│   │   ├── deals/
│   │   │   └── page.tsx            # Travel deals & offers page
│   │   ├── destination/
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Dynamic destination detail pages
│   │   └── __tests__/
│   │       └── page.test.tsx       # Jest unit tests
│   ├── components/                 # Reusable React components
│   │   ├── Navigation.tsx          # Interactive navigation with animations
│   │   ├── CanvasGlobe.tsx         # 3D canvas globe renderer
│   │   ├── InteractiveWorldMap.tsx # Interactive world map with location pins
│   │   ├── BookingAggregator.tsx   # Travel booking search & filters
│   │   ├── DealsAndOffers.tsx      # Travel promotions display
│   │   ├── EventsSection.tsx       # Upcoming events showcase
│   │   ├── LocationCard.tsx        # Reusable destination card component
│   │   ├── DestinationCarousel.tsx # Image carousel for destinations
│   │   ├── TopAttractionsSection.tsx # Featured attractions display
│   │   ├── InteractiveEngagement.tsx # User engagement features
│   │   ├── GlobeComponent.tsx      # Globe visualization wrapper
│   │   └── ThemeToggle.tsx         # Dark/light mode switcher
│   ├── context/
│   │   └── ThemeContext.tsx        # Theme provider & context
│   └── lib/
│       ├── attractions.ts          # Attractions data & utilities
│       └── wikipedia.ts            # Wikipedia integration utilities
├── public/
│   └── globe.json                  # 3D globe geometry data
├── .github/workflows/              # CI/CD automation
│   ├── build.yml                   # Build & test workflow
│   ├── deploy.yml                  # Production deployment
│   └── quality.yml                 # Code quality checks
├── package.json                    # Dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.ts              # Tailwind CSS with custom theme
├── postcss.config.mjs              # PostCSS configuration
├── next.config.js                  # Next.js configuration
├── jest.config.js                  # Jest testing configuration
└── jest.setup.js                   # Jest setup & mocks
```

## Design System

### Typography System
- **Display Font**: Playfair Display (serif, 700-900 weights)
  - Hero titles, section headers, brand-forward elements
  - Elegant, distinctive, adventure-focused appearance
  
- **Body Font**: Inter (sans-serif, 300-800 weights)
  - Body copy, descriptions, labels, navigation
  - Modern, clean, highly readable on all devices
  
- **Monospace Font**: Space Mono
  - Promo codes, technical text, data display

### Color Palette (Travel-Themed)
```typescript
primary:   '#3b82f6'    // Ocean Blue - Main CTAs & navigation
accent:    '#f97316'    // Vibrant Orange - Deals, promotions, urgency
crystal:   '#06b6d4'    // Cyan - Secondary actions
emerald:   '#22c55e'    // Green - Positive indicators
sunset:    '#ef4444'    // Red - Alerts & warnings
```

### Custom Animations (60fps)
- `float` - Gentle floating motion
- `pulse-slow` - Subtle pulsing effect
- `spin-slow` - Slow rotation
- `bounce-gentle` - Soft bouncing
- `shimmer` - Loading shimmer effect
- `glow` - Glowing effect
- `slide-in` - Slide entrance animation
- `fade-in-up` - Fade with upward motion
- `scale-in` - Scale entrance effect
- `swing` - Subtle swing motion

### Typography Utilities
```css
.heading-display  /* 3-6xl, Playfair Display 900 */
.heading-large    /* 2-4xl, Playfair Display 800 */
.heading-medium   /* xl-3xl, Playfair Display 700 */
.text-body        /* Base body text, Inter 400 */
.text-body-lg     /* Large body text, Inter 400 */
.text-body-sm     /* Small text/labels, Inter 400 */
```

## Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn (v8+)

### Installation

```bash
# Clone the repository
git clone https://github.com/deekshithmr95/GoExplore.git
cd GoExplore

# Install dependencies
npm install
```

### Development

```bash
# Start the development server (hot reload)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-update as you edit files.

### Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm start
```

### Linting & Code Quality

```bash
# Run ESLint for code quality checks
npm run lint

# Run type checking
npm run type-check

# Run all quality checks
npm run quality
```

### Testing

```bash
# Run Jest tests
npm test

# Run tests in watch mode (useful during development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Build Output & Performance

### Latest Production Build

```
✅ Build Status: PASSING (6.8s compilation)
✅ TypeScript: No errors
✅ ESLint: No critical errors (only optimization warnings)
✅ Routes Compiled: 7/7 (100% success rate)

Route Performance:
  / (Home)                          175 B    110 kB
  /explore                        8.03 kB    114 kB
  /deals                          2.98 kB    105 kB
  /destination/[slug]             7.61 kB    110 kB
  /about                            123 B    102 kB
  /_not-found                       993 B    103 kB

First Load JS (Shared): 102 kB
- chunks/255-cf2e1d3491ac955b.js       45.7 kB
- chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB

Build Features:
✅ Static pre-rendering where possible
✅ Dynamic rendering on demand for interactive pages
✅ Font optimization (Playfair Display, Inter, Space Mono)
✅ CSS-in-JS with Tailwind minification
✅ Image optimization (next/image)
✅ Code splitting & lazy loading
```

### Performance Optimization

- **60fps Animations**: Hardware-accelerated CSS animations
- **Font Loading**: Google Fonts with fallbacks, ~100ms load time
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Minification**: Production bundle size optimized
- **Caching**: Efficient static asset caching strategy

## Pages & Routes

| Route | Component | Status | Features |
|-------|-----------|--------|----------|
| `/` | Home Page | ✅ Active | Hero section, featured destinations, animated background, CTA buttons |
| `/explore` | Explore | ✅ Active | Interactive world map, destination search, location pins, carousel |
| `/deals` | Travel Deals | ✅ Active | Promotions display, filtering, booking aggregator |
| `/about` | About | ✅ Active | Company info, mission statement, responsive layout |
| `/destination/[slug]` | Destination Detail | ✅ Active | Dynamic pages, attractions list, booking options, image gallery |
| `/_not-found` | 404 Page | ✅ Active | Custom 404 with navigation links |

## Key Components

### Navigation
- **Sticky Header** with logo and menu
- **Animated Hover Effects** on navigation items
- **Dark Mode Toggle** in header
- **Mobile Responsive** with hamburger menu support

### Home Page
- **Hero Section** with animated gradient background
- **Featured Destinations Carousel** with smooth transitions
- **Interactive Elements** with fade-in animations
- **Call-to-Action Buttons** with hover effects
- **Staggered Animation** for better user experience

### Interactive World Map
- **Dynamic Map Display** with location pins
- **Pin Animations** and hover effects
- **Destination Search** functionality
- **Location Details** on click/hover
- **Responsive Map Container**

### Booking Aggregator
- **Search Filters** for destinations, dates, travelers
- **Real-time Filtering** capabilities
- **Hotel/Flight Integration** UI
- **Responsive Layout** for all devices
- **Dark Mode Compatible**

### Design System Components
- **Glass Morphism** effects with backdrop blur
- **Gradient Overlays** for visual hierarchy
- **Shadow Depth** for elevation
- **Smooth Transitions** for all interactive elements
- **Accessibility Features** (focus states, ARIA labels)

## GitHub CI/CD Pipeline

### Automated Workflows

The project includes comprehensive GitHub Actions workflows for quality assurance and deployment:

#### 1. **Build & Test Workflow** (`.github/workflows/build.yml`)
Triggers on: Push to `main`/`develop`, Pull Requests

**Steps:**
- ✅ Node.js 18.x & 20.x multi-version testing
- ✅ Dependency installation
- ✅ TypeScript type checking
- ✅ ESLint linting
- ✅ Production build verification
- ✅ Jest test suite execution
- ✅ Code coverage reporting (Codecov)

**Status:** All checks passing

#### 2. **Deploy Workflow** (`.github/workflows/deploy.yml`)
Triggers on: Push to `main` branch (production)

**Steps:**
- ✅ Install dependencies
- ✅ Run production build
- ✅ Deploy to hosting provider
- ✅ Health check verification

**Configured for:** Vercel (recommended), Netlify, GitHub Pages

**To enable:**
```yaml
# For Vercel (easiest)
- run: npm install -g vercel
  env:
    VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
- run: vercel --prod --token $VERCEL_TOKEN

# For Netlify
- run: npm install -g netlify-cli
- run: netlify deploy --prod --auth ${{ secrets.NETLIFY_AUTH_TOKEN }}

# For GitHub Pages
- uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./out
```

#### 3. **Code Quality Workflow** (`.github/workflows/quality.yml`)
Triggers on: Push, Pull Requests

**Checks:**
- ✅ ESLint code analysis
- ✅ TypeScript type safety
- ✅ Jest test coverage
- ✅ Dependency vulnerabilities
- ✅ Code formatting consistency

**Status:** All quality gates passing

### Setting Up CI/CD

1. **GitHub Secrets Configuration:**
   ```bash
   VERCEL_TOKEN          # For Vercel deployment
   NETLIFY_AUTH_TOKEN    # For Netlify deployment
   NETLIFY_SITE_ID       # For Netlify deployment
   CODECOV_TOKEN         # For code coverage
   ```

2. **Vercel Integration (Recommended):**
   - Connect repository in Vercel dashboard
   - Configure environment variables
   - Enable automatic deployments from `main`

3. **Status Badges** (add to README):
   ```markdown
   ![Build Status](https://github.com/deekshithmr95/GoExplore/workflows/Build%20&%20Test/badge.svg)
   ![Code Quality](https://github.com/deekshithmr95/GoExplore/workflows/Code%20Quality/badge.svg)
   [![codecov](https://codecov.io/gh/deekshithmr95/GoExplore/branch/main/graph/badge.svg)](https://codecov.io/gh/deekshithmr95/GoExplore)
   ```

## Environment Variables

Create a `.env.local` file in the root directory for local development:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# Optional: Wikipedia API for destination information
NEXT_PUBLIC_WIKIPEDIA_API=https://en.wikipedia.org/w/api.php

# Optional: External service integrations
NEXT_PUBLIC_BOOKING_API=https://api.booking.com
NEXT_PUBLIC_MAPS_API_KEY=your_google_maps_key
```

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Keep sensitive keys in `.env.local` (server-side only).

## Styling with Tailwind CSS

Tailwind CSS is configured with a comprehensive design system for the travel theme.

### Configuration Files

- **`tailwind.config.ts`** - Custom theme, colors, animations, breakpoints
- **`globals.css`** - Global styles, component utilities, animations
- **`postcss.config.mjs`** - PostCSS pipeline with Tailwind integration

### Template Paths

Tailwind scans these directories for class names:

```typescript
content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
```

### Custom Utilities

```css
/* Component utilities in globals.css */
.btn-primary      /* Styled primary button */
.btn-secondary    /* Styled secondary button */
.card             /* Styled card container */
.card-hover       /* Card with hover effects */
.glass            /* Glass morphism effect */
.glow-effect      /* Glowing effect */
.heading-display  /* Display heading typography */
.heading-large    /* Large heading typography */
.text-body        /* Body text typography */
```

### Extend Colors

To add custom colors, edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        600: '#3b82f6',
        700: '#1d4ed8',
      },
      accent: {
        600: '#f97316',
        700: '#ea580c',
      },
    },
  },
}
```

### Dark Mode

Dark mode is fully supported and configured with Tailwind:

```tsx
// Enable dark mode in components
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content adapts to dark mode
</div>
```

Toggle dark mode using the ThemeToggle component in the navigation header.

## Deployment

### Recommended: Vercel (Easiest)

Vercel is the official Next.js hosting platform with zero-config deployment:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
vercel

# Deploy to production
vercel --prod
```

Or connect GitHub repository directly in Vercel dashboard for automatic deployments.

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --publish=.next
```

### GitHub Pages

For static exports (if using `output: 'export'` in next.config.js):

```bash
npm run build
npx gh-pages -d out
```

### Docker

Create and run a Docker container:

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]
```

**Build and run:**
```bash
docker build -t goexplore .
docker run -p 3000:3000 goexplore
```

### Self-Hosted (Linux/Ubuntu)

```bash
# Clone and setup
git clone https://github.com/deekshithmr95/GoExplore.git
cd GoExplore
npm install
npm run build

# Using PM2 for process management
npm install -g pm2
pm2 start npm --name "goexplore" -- start
pm2 save
pm2 startup

# Using systemd service
sudo nano /etc/systemd/system/goexplore.service
# [Add service configuration below]
```

**Systemd Service Example:**
```ini
[Unit]
Description=GoExplore Next.js Application
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/GoExplore
ExecStart=/usr/bin/npm start
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

### Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Contributing

We welcome contributions! Here's how to get started:

### Development Workflow

1. **Fork the repository** on GitHub
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** with clear commit messages
4. **Run quality checks:**
   ```bash
   npm run lint      # Check code quality
   npm test          # Run tests
   npm run build     # Build for production
   ```
5. **Commit your changes:**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push to your fork:**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Create a Pull Request** with a clear description

### Commit Message Format

Follow conventional commits for clarity:

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
test: add tests
chore: update dependencies
```

### Code Standards

- **TypeScript**: Use strict type safety
- **ESLint**: All code must pass linting
- **Formatting**: Code is automatically formatted
- **Testing**: Add tests for new features
- **Documentation**: Update README for API changes

### Reporting Issues

Create a detailed issue including:
- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment (OS, Node version, browser)
- Screenshots/logs if applicable

## Project Stats

- **Created:** 2024
- **Language:** TypeScript + React
- **License:** MIT
- **Contributors:** Welcome!
- **Issues:** [Report here](https://github.com/deekshithmr95/GoExplore/issues)
- **Discussions:** [Join here](https://github.com/deekshithmr95/GoExplore/discussions)

## Troubleshooting

### Common Issues

**Port 3000 Already in Use**
```bash
# Change port
npm run dev -- -p 3001
```

**Module Not Found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build Fails**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**TypeScript Errors**
```bash
# Run type check
npm run type-check

# Update TypeScript
npm install typescript@latest
```

### Getting Help

- 📚 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- ⚛️ [React Documentation](https://react.dev)
- 🐛 [GitHub Issues](https://github.com/deekshithmr95/GoExplore/issues)
- 💬 [GitHub Discussions](https://github.com/deekshithmr95/GoExplore/discussions)

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Free to use for personal and commercial projects
- ✅ Modify and distribute the code
- ✅ Use in closed-source applications
- ⚠️ Include the license notice

## Acknowledgments

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Static typing for JavaScript
- **React** - UI library
- **Jest** - Testing framework
- **GitHub Actions** - CI/CD automation

## Resources

### Documentation
- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- ⚛️ [React Documentation](https://react.dev)
- 📘 [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Learning
- [Next.js Learn](https://nextjs.org/learn)
- [Tailwind CSS Tutorials](https://tailwindcss.com/docs/installation)
- [React Tutorial](https://react.dev/learn)
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

### Community
- 💬 [GitHub Discussions](https://github.com/deekshithmr95/GoExplore/discussions)
- 🐛 [Report Issues](https://github.com/deekshithmr95/GoExplore/issues)
- ⭐ [Star on GitHub](https://github.com/deekshithmr95/GoExplore)

---

## Project Maintenance

### Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update to latest major versions (careful!)
npm install -g npm-check-updates
ncu -u
npm install
```

### Regular Maintenance

- Run `npm audit` to check for vulnerabilities
- Keep dependencies up to date
- Monitor GitHub for security advisories
- Review and merge pull requests regularly
- Update documentation as features change

### Performance Monitoring

- Monitor Core Web Vitals in production
- Use [Vercel Analytics](https://vercel.com/docs/analytics) for insights
- Review build times regularly
- Test on real devices and networks

---

<div align="center">

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**

[⭐ Star this project](https://github.com/deekshithmr95/GoExplore) • [🔗 Report Bug](https://github.com/deekshithmr95/GoExplore/issues) • [💡 Suggest Feature](https://github.com/deekshithmr95/GoExplore/discussions)

**© 2024 GoExplore. All rights reserved.**

</div>
