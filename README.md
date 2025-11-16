# Baseaim Lead Form Website

A modern, conversion-optimized lead capture website built with Next.js, featuring Baseaim's signature animated gradient background and brand identity.

## Features

- **Animated Gradient Background** - Beautiful 45-60 second smooth wave animations with GPU acceleration
- **Responsive Lead Form** - Fully validated form with real-time error checking
- **Baseaim Branding** - Exact color palette, typography, and design aesthetic from baseaim.co
- **Mobile-First Design** - Optimized for all devices and screen sizes
- **Accessibility** - Respects `prefers-reduced-motion` and includes ARIA labels
- **Performance Optimized** - GPU-accelerated animations, browser-optimized CSS
- **TypeScript** - Full type safety throughout the application

## Tech Stack

- **Framework:** Next.js 15.1.0 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **Fonts:** Google Fonts (Inter, Poppins, Montserrat, DM Serif Display, Work Sans, JetBrains Mono)
- **Package Manager:** npm

## Brand Colors

### Primary Colors (Blues)
- Sky Blue: `#87CEEB`
- Deep Blue: `#0A2E6E`
- Medium Blue: `#0052CC`
- Bright Blue: `#0066FF`
- Azure Blue: `#4FC3F7`
- Light Blue: `#6BB6FF`
- Powder Blue: `#B0E0E6`

### Accent Colors
- Brand Red: `#E11D48`
- Brand Orange: `#F97316`
- Brand Yellow: `#EAB308`

### Background Colors
- Ice Blue: `#F8FCFF`
- Sky Tint: `#E1F5FE`
- Cloud White: `#E3F2FD`

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd "e:\websites\baseaim lead form"
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
baseaim lead form/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with gradient animations
├── components/
│   ├── GradientBG.tsx      # Animated gradient background component
│   ├── Header.tsx          # Navigation header with logo
│   └── LeadForm.tsx        # Lead capture form with validation
├── public/                 # Static assets
├── .gitignore
├── next.config.ts
├── package.json
├── tailwind.config.ts      # Tailwind config with brand colors
├── tsconfig.json
└── README.md
```

## Component Overview

### GradientBG Component
- 5 animated wave layers with different speeds
- GPU-accelerated with `transform3d`
- Optimized blur for Firefox
- Respects `prefers-reduced-motion`

### LeadForm Component
- Real-time validation for all fields
- Email and phone format validation
- Loading states during submission
- Success/error feedback messages
- TypeScript interfaces for type safety

### Header Component
- Baseaim logo (target/crosshair design)
- Link to main Baseaim website
- CTA button for navigation

## Customization

### Changing Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  'sky-blue': '#87CEEB',
  'deep-blue': '#0A2E6E',
  // ... add more colors
}
```

### Form Submission

The form currently logs to console. To connect to your backend, edit `components/LeadForm.tsx`:

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  // Replace with your API endpoint
  const response = await fetch('/api/submit-lead', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
}
```

### Modifying Typography

Fonts are configured in `app/layout.tsx`. To add/remove fonts:

1. Import from `next/font/google`
2. Configure the font variable
3. Add to Tailwind config
4. Apply in components

## Performance Notes

- **GPU Acceleration:** All animations use `transform3d` for hardware acceleration
- **Backface Visibility:** Prevents flickering on animated elements
- **CSS Containment:** Uses `contain: layout style paint` for browser optimization
- **Reduced Motion:** Animations disabled for users who prefer reduced motion
- **Mobile Optimization:** Slower animation speeds on mobile to save battery

## Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest) - Optimized blur settings
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Other Platforms

Build the production bundle:
```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting provider's Next.js deployment guide.

## Contact Integration

Update the contact information in `app/page.tsx`:

- Phone: `0468 047 436`
- Email: `contact@baseaim.com`
- Website: `https://baseaim.co`

## License

For use in authorized Baseaim projects.

## Credits

**Design System:** Baseaim (https://baseaim.co)
**Created:** 2025
**Built with:** Next.js, Tailwind CSS, TypeScript

---

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Support

For issues or questions about this lead form website, contact the Baseaim team or refer to the [Next.js documentation](https://nextjs.org/docs).

## Additional Resources

- [Baseaim Main Website](https://baseaim.co)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
