# Essentials - Clothing Line

A modern, minimalist clothing line website built with Next.js 15, TypeScript, and Tailwind CSS. Ready for deployment on Vercel.

![Essentials](https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=630&fit=crop)

## Features

- 🎨 **Modern Design** - Clean, minimalist aesthetic perfect for a clothing brand
- 📱 **Fully Responsive** - Looks great on all devices
- 🛍️ **Product Catalog** - Browse products by category
- 📧 **Contact Form** - Built-in contact form with validation
- ⚡ **Fast Performance** - Optimized images and code splitting
- 🔍 **SEO Ready** - Meta tags and Open Graph configured
- ♿ **Accessible** - Semantic HTML and ARIA labels

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or navigate to the project:
```bash
cd essentials
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
essentials/
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── products/       # Products catalog
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   └── components/
│       ├── Header.tsx      # Navigation header
│       └── Footer.tsx      # Site footer
├── public/                 # Static assets
├── vercel.json             # Vercel configuration
└── package.json
```

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)

3. Click "Add New Project"

4. Import your GitHub repository

5. Click "Deploy"

### Option 3: Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)

2. Click "Import Git Repository"

3. Select your repository

4. Configure project settings (defaults work fine)

5. Click "Deploy"

## Environment Variables

For production, you may want to add environment variables in Vercel:

- `NEXT_PUBLIC_SITE_URL` - Your production URL
- Any API keys for integrations

## Customization

### Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --primary: #1a1a1a;
  --secondary: #f5f5f5;
  --accent: #d4a574;
  --muted: #737373;
}
```

### Products

Update the product data in `src/app/products/page.tsx`:

```typescript
const allProducts = [
  {
    id: 1,
    name: 'Product Name',
    price: 99,
    category: 'tops',
    image: '/path/to/image.jpg',
    description: 'Product description',
  },
  // Add more products...
];
```

### Branding

Update the brand name and metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Essentials | Minimalist Clothing Line",
  description: "Your description here",
};
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please contact hello@essentials.com

---

Built with ❤️ using Next.js and Vercel
