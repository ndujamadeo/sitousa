# NdujaLovers

A modern, multi-page website for importing and selling authentic Calabrian 'nduja from Filiera Madeo in America.

## Features

- **Multi-Page Architecture**: Separate pages for Home, About, Products, and Contact
- **Storytelling About Page**: Detailed history and tradition of 'nduja
- **Comprehensive Products Page**: 3 variants with detailed information
- **Modern Design**: Built with Next.js 16 and Tailwind CSS
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized for speed with Next.js App Router
- **SEO Optimized**: Proper metadata for each page
- **Custom SVG Graphics**: No external image dependencies

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Graphics**: Custom SVG components

## Project Structure

```
nduja-usa/
├── app/
│   ├── layout.tsx          # Root layout with navbar and footer
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About/Story page
│   ├── products/
│   │   └── page.tsx        # Products page
│   ├── contact/
│   │   ├── page.tsx        # Contact page (client component)
│   │   └── layout.tsx      # Contact layout with metadata
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── NdujaHero.tsx       # Custom SVG illustration
│   └── ProductSVG.tsx      # Product jar SVG (3 variants)
├── public/                 # Static assets
└── next.config.ts          # Next.js configuration
```

## Pages

1. **Home (/)**: Hero, introduction, features, product preview, CTA
2. **About (/about)**: Complete story of 'nduja from Calabria to America
3. **Products (/products)**: 3 product variants with details, usage guide, storage info
4. **Contact (/contact)**: Contact form, direct contact info, order types, FAQs

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors

The primary color scheme uses red tones representing the spicy nature of 'nduja. You can customize colors in `globals.css` and throughout the components.

### Content

- Update product descriptions in `app/page.tsx`
- Modify contact information in `components/Footer.tsx`
- Change navigation links in `components/Navbar.tsx`

### Images

Currently using Unsplash images as placeholders. Replace with your actual product photos by:
1. Adding images to the `public/` folder
2. Updating the `src` prop in Image components
3. Removing Unsplash domains from `next.config.ts`

## Deployment

This project can be easily deployed to:
- **Vercel**: Recommended (zero configuration)
- **Netlify**: Full Next.js support
- **AWS/GCP/Azure**: Using Docker or serverless

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## License

MIT

## Contact

For questions about this project or 'nduja products, please use the contact form on the website.

---

Made with ❤️ and 🌶️ for authentic Italian flavors in America
