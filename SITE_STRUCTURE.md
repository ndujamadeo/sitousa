# 'Nduja Italia USA - Site Structure

## Overview
Multi-page website for importing and selling authentic Calabrian 'nduja in America. Built with Next.js 16, TypeScript, and Tailwind CSS.

## Pages

### 1. Home (/)
**Purpose**: Welcome page with introduction and quick navigation

**Sections**:
- **Hero**: Full-screen with gradient background, main headline, CTA buttons
- **What is 'Nduja**: Brief introduction with SVG illustration
- **Features**: 4 key benefits (Authentic, Natural, Artisan, Direct Import)
- **Product Preview**: Heat level overview with link to products page
- **Call to Action**: Dual CTA (Shop Now / Contact Us)

**Key Actions**:
- Navigate to Products page
- Navigate to About page
- Navigate to Contact page

---

### 2. About (/about)
**Purpose**: Tell the story of 'nduja with focus on tradition and authenticity

**Sections**:
- **Hero**: Title and tagline
- **Born in Calabria**: Origin story of 'nduja in Spilinga
- **Tradition Through Generations**: Family heritage and generational knowledge
- **The Art of Making 'Nduja**: Production process and craftsmanship
- **The Soul of Calabria**: Territory and regional identity
- **Our Mission in America**: Why we import and what we stand for
- **Our Commitment**: 4 core values (Authenticity, Natural, Artisanal, Direct Trade)
- **CTA**: Links to Products and Contact

**Content Style**:
- Storytelling approach (inspired by Filiera Madeo)
- Focus on heritage, passion, and tradition
- Emphasis on "generational knowledge"
- "Intelligent ecosystem" of production
- Direct connection to Calabrian territory
- NO mention of other products (only 'nduja)

---

### 3. Products (/products)
**Purpose**: Showcase the 3 product varieties with detailed information

**Sections**:
- **Hero**: Product collection introduction
- **Product Grid**: 3 detailed product cards
  - **Classic 'Nduja** (Medium heat: 🌶️🌶️🌶️)
  - **Mild 'Nduja** (Gentle heat: 🌶️🌶️)
  - **Extra Hot 'Nduja** (Intense heat: 🌶️🌶️🌶️🌶️🌶️)
- **How to Enjoy**: 4 usage ideas with icons
- **Pro Tips**: 3 expert suggestions (temperature, pairing, freezing)
- **Storage & Handling**: Practical information and allergen details
- **CTA**: Contact for orders

**Product Information**:
- Detailed descriptions
- Serving suggestions (4 per product)
- Ingredients list
- Origin (Spilinga, Calabria)
- Spice level indicators

---

### 4. Contact (/contact)
**Purpose**: Enable customers to inquire and place orders

**Sections**:
- **Hero**: Welcome message
- **Contact Form**: Full form with fields:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Order Type: Retail / Wholesale / Bulk / General Inquiry
  - Company Name (optional)
  - Message (required)
- **Direct Contact**: Email, Phone, Origin location
- **Order Types**: Retail, Wholesale, Bulk explanations
- **Shipping Information**: Quick facts
- **FAQ Quick Links**: Common questions
- **Social Media**: Follow buttons

**Form Features**:
- Client-side validation
- Order type selector
- Separate field for business inquiries
- Currently frontend-only (needs backend integration)

---

## Components

### Global Components

#### Navbar (`components/Navbar.tsx`)
- **Type**: Client Component (uses state)
- **Features**:
  - Sticky navigation
  - Changes appearance on scroll (transparent → white)
  - Mobile responsive with hamburger menu
  - Links: Home (logo) / About / Products / Contact / Order Now
  - Logo: 🌶️ 'Nduja Italia

#### Footer (`components/Footer.tsx`)
- **Type**: Server Component
- **Structure**: 4 columns
  1. Company Info: Logo, tagline
  2. Quick Links: Home, About, Products, Contact
  3. Products: List of variants + Gift Sets
  4. Contact: Email, Phone, Location, Social links
- **Bottom Bar**: Copyright, Privacy Policy, Terms of Service

### Page-Specific Components

#### NdujaHero (`components/NdujaHero.tsx`)
- **Purpose**: SVG illustration of 'nduja on wooden board
- **Features**:
  - Responsive SVG (800x600 viewbox)
  - Gradient colors (red to orange)
  - Textured appearance
  - Drop shadow effects
  - Text: "'NDUJA" + "Calabrian Tradition"

#### ProductSVG (`components/ProductSVG.tsx`)
- **Purpose**: Product jar illustrations
- **Features**:
  - Dynamic component (3 variants: classic, mild, hot)
  - Color-coded by heat level
  - Glass jar with 'nduja inside
  - Label with product name
  - Made in Italy badge (Italian flag)
  - Spice level indicators

---

## Content Strategy

### Language
- **American English** throughout
- Professional yet warm tone
- Food-focused vocabulary
- Emphasis on authenticity and tradition

### Key Messaging
1. **Authenticity**: Made in Calabria, traditional methods
2. **Quality**: Premium ingredients, no shortcuts
3. **Heritage**: Generational knowledge, family tradition
4. **Direct Import**: From Calabria to America
5. **Versatility**: Multiple uses and heat levels

### Target Audience
- **Primary**: Home cooks and food enthusiasts
- **Secondary**: Restaurants and specialty stores (wholesale)
- **Tertiary**: Gift buyers and corporate clients

---

## Technical Details

### Routing
- Next.js App Router (file-based routing)
- All pages are Server Components except Contact form
- No dynamic routes (yet)

### SEO
Each page has optimized metadata:
- Title: Descriptive and keyword-rich
- Description: Clear value proposition
- Keywords: Relevant search terms

### Performance
- SVG graphics (no external images = fast loading)
- Optimized bundle size
- Server-side rendering
- Automatic code splitting per route

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+

---

## Navigation Flow

```
HOME (/)
├─→ About (/about)
│   └─→ Back to Products or Contact
├─→ Products (/products)
│   └─→ Contact for orders
└─→ Contact (/contact)
    └─→ Form submission (to be implemented)
```

### User Journeys

**Journey 1: Learn & Buy**
1. Land on Home
2. Read "What is 'Nduja"
3. Click "Discover Our Story" → About page
4. Return and click "View All Products" → Products page
5. Click "Contact Us for Orders" → Contact page
6. Submit form

**Journey 2: Quick Purchase**
1. Land on Home
2. Click "Explore Our Products" (Hero CTA)
3. Browse products → Products page
4. Click "Contact Us for Orders" → Contact page
5. Submit form

**Journey 3: Research**
1. Land on Home
2. Click "Our Story" → About page
3. Read full story
4. Click "View Products" → Products page
5. Bookmark or contact

---

## Future Enhancements

### Phase 2
- [ ] E-commerce integration (Stripe/Shopify)
- [ ] Shopping cart functionality
- [ ] User accounts
- [ ] Order tracking
- [ ] Backend for contact form (SendGrid/Resend)

### Phase 3
- [ ] Blog/Recipes section
- [ ] Customer reviews
- [ ] Photo gallery
- [ ] Video content
- [ ] Newsletter signup
- [ ] Social media feed integration

### Phase 4
- [ ] Multilingual support (EN/IT)
- [ ] Wholesale portal
- [ ] Store locator
- [ ] Loyalty program
- [ ] Recipe submission
- [ ] Live chat

---

## Content Management

### How to Update Content

**Homepage**:
- File: `app/page.tsx`
- Edit sections directly in JSX

**About Page**:
- File: `app/about/page.tsx`
- Update story sections
- Keep focus on 'nduja (not other products)

**Products Page**:
- File: `app/products/page.tsx`
- Update product descriptions
- Modify serving suggestions
- Change storage info

**Contact Page**:
- File: `app/contact/page.tsx`
- Update contact information
- Modify form fields
- Change FAQ answers

**Navigation**:
- Navbar: `components/Navbar.tsx`
- Footer: `components/Footer.tsx`

---

## Deployment Checklist

Before going live:
- [ ] Replace placeholder email (info@ndujaitalia.com)
- [ ] Replace placeholder phone (+1 555 123-4567)
- [ ] Add real social media links
- [ ] Set up contact form backend
- [ ] Add Google Analytics
- [ ] Test all links
- [ ] Test mobile responsiveness
- [ ] Check SEO metadata
- [ ] Add robots.txt and sitemap.xml
- [ ] Set up SSL certificate
- [ ] Test form submissions
- [ ] Add legal pages (Privacy Policy, Terms)

---

**Last Updated**: 2026-03-31
**Version**: 2.0 (Multi-page structure)
