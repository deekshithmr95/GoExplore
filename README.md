# GoExplore

A modern Next.js application for exploring and discovering amazing destinations around the world.

## Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Responsive Design** - mobile-first approach
- ✅ **Dark Mode Support** - built-in dark theme
- ✅ **GitHub CI/CD** - automated testing and deployment
- ✅ **ESLint** - code quality checks

## Project Structure

```
GoExplore/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with navigation
│   │   ├── page.tsx          # Home page
│   │   ├── explore/
│   │   │   └── page.tsx      # Explore destinations page
│   │   ├── about/
│   │   │   └── page.tsx      # About page
│   │   └── globals.css       # Global Tailwind CSS
│   └── components/           # Reusable React components
├── public/                   # Static assets
├── .github/workflows/        # CI/CD configurations
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── next.config.js
```

## Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/GoExplore.git
cd GoExplore

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Pages

- **Home** (`/`) - Welcome page with featured destinations
- **Explore** (`/explore`) - Browse all available destinations
- **About** (`/about`) - Learn about GoExplore

## GitHub CI/CD

The project includes three GitHub Actions workflows:

### 1. Build & Test Workflow (`.github/workflows/build.yml`)

Runs on push and pull requests to `main` and `develop` branches:
- Tests on Node.js 18.x and 20.x
- Installs dependencies
- Runs linter
- Builds application
- Runs tests with coverage
- Uploads coverage to Codecov

### 2. Deploy Workflow (`.github/workflows/deploy.yml`)

Runs on push to `main` branch:
- Installs dependencies
- Builds application
- Deploys to production (configure deployment commands)

**To enable deployment**, update the Deploy workflow with your hosting provider:

```yaml
# For Vercel
- run: npm install -g vercel && vercel --prod --token ${{ secrets.VERCEL_TOKEN }}

# For Netlify
- run: npm install -g netlify-cli && netlify deploy --prod --auth ${{ secrets.NETLIFY_AUTH_TOKEN }} --site ${{ secrets.NETLIFY_SITE_ID }}

# For GitHub Pages
- uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./out
```

### 3. Code Quality Workflow (`.github/workflows/quality.yml`)

Runs on push and pull requests:
- Runs linter
- Type checks with TypeScript
- Runs tests with coverage

## Environment Variables

Create a `.env.local` file in the root directory for local development:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Styling with Tailwind CSS

Tailwind CSS is configured to scan template files in:
- `./src/pages/**/*.{js,ts,jsx,tsx,mdx}`
- `./src/components/**/*.{js,ts,jsx,tsx,mdx}`
- `./src/app/**/*.{js,ts,jsx,tsx,mdx}`

### Custom Colors

Edit `tailwind.config.ts` to customize colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#0070f3',
      secondary: '#ff6b6b',
    },
  },
}
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run linter: `npm run lint`
4. Run tests: `npm test`
5. Commit and push
6. Create a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues and feature requests, please create an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS
