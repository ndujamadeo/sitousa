# 'Nduja Italia USA - Setup Guide

## Project Overview

This is a modern, fully responsive landing page for importing and selling authentic Calabrian 'nduja in America. Built with Next.js 16, TypeScript, and Tailwind CSS.

## What's Included

### Pages & Sections
- **Hero Section**: Stunning gradient hero with call-to-action buttons
- **About Section**: Explains what 'nduja is with custom SVG illustration
- **Products Section**: Three product variants (Classic, Mild, Extra Hot) with custom SVG jars
- **Usage Guide**: Four ways to enjoy 'nduja with emoji icons
- **Why Choose Us**: Three key benefits
- **Call to Action**: Prominent conversion section
- **Contact Form**: Professional contact form for inquiries

### Components
- **Navbar**: Sticky navigation with smooth scroll and mobile menu
- **Footer**: Multi-column footer with links and social media
- **NdujaHero**: Custom SVG illustration of 'nduja on a wooden board
- **ProductSVG**: Dynamic SVG component for product jars (3 variants)

### Custom Features
- ✅ Smooth scroll animations
- ✅ Custom scrollbar styling (red theme)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO optimized metadata
- ✅ Fast performance with Next.js 16
- ✅ Custom SVG illustrations (no external image dependencies)
- ✅ Hover effects and transitions
- ✅ Mobile-first design

## Quick Start

### 1. Install Dependencies
```bash
cd nduja-usa
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit: **http://localhost:3000**

### 3. Build for Production
```bash
npm run build
npm start
```

## Customization Guide

### Change Colors
The site uses a red/orange color palette. To change:
- Update `app/page.tsx` - search for `red-600`, `red-800`, `orange-500`, etc.
- Update `components/ProductSVG.tsx` - modify the `colors` object
- Update `app/globals.css` - change scrollbar colors

### Update Content
All content is in American English. To modify:
- **Hero text**: Edit `app/page.tsx` line ~13-18
- **About section**: Edit `app/page.tsx` line ~34-46
- **Product descriptions**: Edit `app/page.tsx` line ~90-157
- **Contact info**: Edit `components/Footer.tsx` line ~40-50

### Replace SVG Images with Photos
To use real product photos:
1. Add images to `public/images/` folder
2. Install sharp: `npm install sharp`
3. Import Image component: `import Image from "next/image"`
4. Replace SVG components with Image tags:
```tsx
<Image
  src="/images/your-product.jpg"
  alt="Product"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>
```

### Modify Product Variants
To add/remove product variants:
1. Edit the product grid in `app/page.tsx` (line ~83)
2. Add new variant colors in `components/ProductSVG.tsx`
3. Update the interface type if needed

### Change Font
Current font: **Inter** (Google Fonts)

To change:
```tsx
// In app/layout.tsx
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
// Apply in className
```

## File Structure Explained

```
nduja-usa/
├── app/
│   ├── layout.tsx          # Root layout with Navbar/Footer
│   ├── page.tsx            # Main landing page (all sections)
│   ├── globals.css         # Global styles, animations, scrollbar
│   └── favicon.ico         # Site icon
│
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Footer.tsx          # Footer with 4 columns
│   ├── NdujaHero.tsx       # Hero SVG illustration
│   └── ProductSVG.tsx      # Product jar SVG (3 variants)
│
├── public/                 # Static files (add images here)
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies
└── README.md               # Project documentation
```

## Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Follow prompts. Done in < 2 minutes!

### Netlify
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## Adding Real Images

Currently, the site uses custom SVG illustrations. To add real photos:

### Option 1: Use Public Folder
```tsx
import Image from "next/image";

<Image
  src="/images/nduja-jar.jpg"
  alt="'Nduja Jar"
  width={600}
  height={400}
/>
```

### Option 2: Use External URLs
Update `next.config.ts`:
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-cdn.com',
    },
  ],
},
```

## Adding Form Functionality

The contact form is currently frontend-only. To make it functional:

### Option 1: Use Form Service (Easiest)
- [Formspree](https://formspree.io/)
- [Formspark](https://formspark.io/)
- [Web3Forms](https://web3forms.com/)

### Option 2: Add API Route
Create `app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Send email via SendGrid, Resend, etc.
  return Response.json({ success: true });
}
```

## SEO Optimization

Already included:
- ✅ Semantic HTML5
- ✅ Meta tags in `layout.tsx`
- ✅ Descriptive alt text
- ✅ Fast loading times

To enhance:
1. Add `sitemap.xml`
2. Add `robots.txt`
3. Implement structured data (JSON-LD)
4. Add Open Graph images

## Performance Tips

Current performance: **Excellent** ⚡

To maintain:
- Use Next.js Image component for photos
- Enable compression in hosting
- Use CDN for static assets
- Keep bundle size small

## Support & Customization

### Need Help?
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://typescriptlang.org/docs

### Want to Hire a Developer?
This site is ready to launch but can be enhanced with:
- E-commerce functionality (Stripe/Shopify)
- Blog/recipes section
- Multilingual support (EN/IT)
- Admin dashboard
- Email newsletter
- Customer reviews

## License
MIT - Feel free to use for commercial projects

---

🌶️ **Buon appetito!** Made with passion for authentic Italian flavors.
