# Animated Gradient Background - Complete Transfer Guide

> **Transfer this file to your new project and share it with Claude for easy implementation**

---

## 📋 Overview

This is a professional animated gradient background system with smooth wave animations, optimized for performance across all browsers and devices. The design creates a calming, modern aesthetic perfect for hero sections and landing pages.

---

## 🎨 Brand Colors & Design System

### Primary Color Palette
```css
/* Blues - Primary Brand Colors */
Sky Blue: #87CEEB (rgb(135, 206, 235))
Deep Blue: #0A2E6E (rgb(10, 46, 110))
Medium Blue: #0052CC (rgb(0, 82, 204))
Bright Blue: #0066FF (rgb(0, 102, 255))
Azure Blue: #4FC3F7 (rgb(79, 195, 247))
Light Blue: #6BB6FF (rgb(107, 182, 255))
Powder Blue: #B0E0E6 (rgb(176, 224, 230))

/* Accent Colors */
Brand Red: #E11D48 (rgb(225, 29, 72))
Brand Orange: #F97316 (rgb(249, 115, 22))
Brand Yellow: #EAB308 (rgb(234, 179, 8))

/* Background Colors */
Pure White: #FFFFFF
Ice Blue: #F8FCFF (rgb(248, 252, 255))
Sky Tint: #E1F5FE (rgb(225, 245, 254))
Cloud White: #E3F2FD (rgb(227, 242, 253))

/* Text Colors */
Dark Gray: #1A1A1A
Charcoal: #1F2937
Medium Gray: #374151
```

### Gradient Variables
```css
/* Subtle Gradients for overlays */
--gradient-blue-start: rgba(59, 130, 246, 0.15);
--gradient-blue-end: rgba(147, 197, 253, 0.08);
--gradient-cyan-start: rgba(34, 211, 238, 0.12);
--gradient-cyan-end: rgba(165, 243, 252, 0.06);
--gradient-purple-start: rgba(168, 85, 247, 0.1);
--gradient-purple-end: rgba(196, 181, 253, 0.05);

/* Brand Accent Gradient */
--brand-accent: #E11D48;
--brand-gradient: linear-gradient(135deg, #E11D48 0%, #F97316 50%, #EAB308 100%);
```

---

## 🔤 Typography System

### Font Families

**Primary Fonts (Google Fonts):**
1. **Inter** - Main body text and UI elements
   - Weights: 300, 400, 500, 600, 700
   - Use: Body text, buttons, forms, navigation

2. **Poppins** - Headlines and important text
   - Weights: 300, 400, 500, 600, 700, 800, 900
   - Use: Section headers, card titles, callouts

3. **Montserrat** - Hero headlines and emphasis
   - Weights: 400, 500, 600, 700
   - Use: Main headlines, hero text, brand statements

4. **DM Serif Display** - Elegant italics and highlights
   - Weight: 400 (normal + italic)
   - Use: Accent words, cycling text, decorative elements

5. **Work Sans** - Alternative sans-serif
   - Weights: 300, 400, 500, 600, 700
   - Use: Subheadings, supporting text

6. **JetBrains Mono** - Code and technical displays
   - Weights: 400, 500, 600
   - Use: Calculator numbers, metrics, technical data

### Font Usage Examples
```css
/* Headlines */
.hero-headline {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600-700;
  color: #1a1a1a;
}

/* Accent/Cycling Words */
.hero-highlight {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-weight: 400;
  background: linear-gradient(135deg, #87CEEB, #0052CC, #0066FF);
}

/* Body Text */
body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

/* Section Titles */
.section-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600-700;
}

/* Metrics/Numbers */
.metric-value {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500-600;
}
```

---

## ✨ Design Aesthetic

**Style:** Modern, clean, professional with subtle motion
**Mood:** Trustworthy, innovative, calming
**Animation Style:** Slow, smooth, continuous (45-60 second loops)
**Visual Depth:** Layered gradients with soft blur effects

**Key Characteristics:**
- Minimalist white base with blue gradient accents
- Soft, organic wave shapes (not geometric)
- Gentle animations that don't distract
- High contrast text on gradient backgrounds
- Ample white space
- Subtle shadows and depth effects

---

## 📦 Complete Implementation Code

### 1. React Component

**File: `components/GradientBG.tsx` (or `.jsx`)**

```tsx
'use client'

export default function GradientBG() {
  return (
    <div className="moving-gradient-hero">
      {/* Base gradient layer */}
      <div className="gradient-base"></div>

      {/* Edge wave layers - positioned around perimeter */}
      <div className="wave-layer wave-1"></div>
      <div className="wave-layer wave-2"></div>
      <div className="wave-layer wave-3"></div>
      <div className="wave-layer wave-4"></div>
      <div className="wave-layer wave-5"></div>

      {/* Soft overlay for depth */}
      <div className="gradient-overlay"></div>
    </div>
  )
}
```

---

### 2. Complete CSS Styles

**Add to your global CSS file (e.g., `globals.css` or `styles.css`):**

```css
/* ========================================
   ANIMATED GRADIENT BACKGROUND SYSTEM
   ======================================== */

/* Main Container */
.moving-gradient-hero {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

/* Base Gradient Layer */
.gradient-base {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center,
    #FFFFFF 0%,
    #FFFFFF 40%,
    #F8FCFF 60%,
    #E1F5FE 80%,
    #87CEEB 100%);
  opacity: 1;
}

/* Wave Layers Base Styles */
.wave-layer {
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 50% 40% 60% 30%;
  filter: blur(25px);
  opacity: 0.5;
  animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  backface-visibility: hidden;
  transform: translateZ(0);
  contain: layout style paint;
}

/* Firefox-specific optimization */
@supports (-moz-appearance:none) {
  .wave-layer {
    filter: blur(20px);
  }
}

/* Individual Wave Configurations */
.wave-1 {
  background: linear-gradient(45deg,
    rgba(10, 46, 110, 0.9) 0%,
    rgba(79, 195, 247, 0.7) 50%,
    rgba(135, 206, 235, 0.5) 100%);
  top: -30%;
  left: -30%;
  animation: wave-drift-1 45s infinite linear;
  transform-origin: center center;
}

.wave-2 {
  background: linear-gradient(-45deg,
    rgba(135, 206, 235, 0.5) 0%,
    rgba(107, 182, 255, 0.7) 50%,
    rgba(10, 46, 110, 0.9) 100%);
  bottom: -30%;
  right: -30%;
  animation: wave-drift-2 60s infinite linear reverse;
  transform-origin: center center;
}

.wave-3 {
  background: linear-gradient(90deg,
    rgba(107, 182, 255, 0.6) 0%,
    rgba(135, 206, 235, 0.7) 30%,
    rgba(10, 46, 110, 0.5) 70%,
    rgba(79, 195, 247, 0.6) 100%);
  top: -20%;
  right: -20%;
  width: 60%;
  height: 60%;
  animation: wave-drift-3 50s infinite linear;
  transform-origin: center center;
}

.wave-4 {
  background: linear-gradient(180deg,
    rgba(10, 46, 110, 0.8) 0%,
    rgba(107, 182, 255, 0.6) 50%,
    rgba(176, 224, 230, 0.4) 100%);
  top: 60%;
  left: -25%;
  width: 50%;
  height: 70%;
  animation: wave-drift-1 55s infinite linear reverse;
  transform-origin: center center;
}

.wave-5 {
  background: linear-gradient(270deg,
    rgba(79, 195, 247, 0.7) 0%,
    rgba(135, 206, 235, 0.5) 50%,
    rgba(107, 182, 255, 0.6) 100%);
  bottom: -10%;
  left: 50%;
  width: 55%;
  height: 60%;
  animation: wave-drift-2 48s infinite linear;
  transform-origin: center center;
}

/* Gradient Overlay */
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center,
    transparent 0%,
    transparent 50%,
    rgba(227, 242, 253, 0.1) 80%,
    rgba(187, 222, 251, 0.15) 100%);
  animation: overlay-pulse 40s infinite alternate;
}

/* Keyframe Animations */
@keyframes wave-drift-1 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(20px, -10px, 0) rotate(180deg);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(360deg);
  }
}

@keyframes wave-drift-2 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(-15px, 10px, 0) rotate(180deg);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(360deg);
  }
}

@keyframes wave-drift-3 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(15px, 8px, 0) rotate(180deg);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(360deg);
  }
}

@keyframes overlay-pulse {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.02);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .wave-layer {
    filter: blur(25px);
  }

  .wave-1 {
    animation-duration: 60s;
  }

  .wave-2 {
    animation-duration: 75s;
  }

  .wave-3 {
    animation-duration: 65s;
  }
}

/* Accessibility: Disable animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .wave-layer {
    animation: none;
  }

  .gradient-overlay {
    animation: none;
  }
}
```

---

## 🚀 Usage Examples

### Basic Hero Section
```tsx
import GradientBG from '@/components/GradientBG'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <GradientBG />

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-gray-900">
          Your Hero Headline
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Your supporting text here
        </p>
      </div>
    </section>
  )
}
```

### Full-Page Landing
```tsx
export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <GradientBG />
      <div className="relative z-10">
        {/* Your page content */}
      </div>
    </div>
  )
}
```

---

## 🎯 Implementation Instructions for Claude

**Copy and paste this to Claude in your new project:**

> Hi Claude! I need to implement an animated gradient background system in my project. I have a complete implementation guide with all the code, brand colors, and design system.
>
> Please:
> 1. Create the `GradientBG` component from the code in section "📦 Complete Implementation Code"
> 2. Add all the CSS styles to my global stylesheet
> 3. Set up the fonts (Inter, Poppins, Montserrat, DM Serif Display, Work Sans) if not already installed
> 4. Show me how to use it in my hero section/landing page
> 5. Verify the color palette matches the brand colors listed in section "🎨 Brand Colors & Design System"
>
> **Important setup notes:**
> - The component uses absolute positioning, so it must be inside a `position: relative` container
> - Content should have `z-index: 10` or higher to appear above the gradient (z-index: 1)
> - The gradient is designed for light backgrounds - text should be dark colors
> - All animations are GPU-accelerated for smooth performance
>
> Let me know if you need the tailwind config or any customization!

---

## 🎨 Customizing Colors

To change the color scheme, modify these key areas:

### For Purple/Pink Theme:
```css
.gradient-base {
  background: radial-gradient(ellipse at center,
    #FFFFFF 0%,
    #FFFFFF 40%,
    #F3E8FF 60%,
    #E9D5FF 80%,
    #C084FC 100%);
}

/* Update wave gradients with purple/pink rgba values */
.wave-1 {
  background: linear-gradient(45deg,
    rgba(168, 85, 247, 0.9) 0%,
    rgba(217, 70, 239, 0.7) 50%,
    rgba(236, 72, 153, 0.5) 100%);
}
```

### For Green/Emerald Theme:
```css
.gradient-base {
  background: radial-gradient(ellipse at center,
    #FFFFFF 0%,
    #FFFFFF 40%,
    #DCFCE7 60%,
    #BBF7D0 80%,
    #4ADE80 100%);
}
```

---

## 📱 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest) - Optimized blur for performance
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Respects `prefers-reduced-motion` for accessibility

---

## ⚡ Performance Notes

- Uses `transform3d` for GPU acceleration
- `backface-visibility: hidden` prevents flicker
- `contain: layout style paint` for browser optimization
- Blur reduced on Firefox for better performance
- Slower animation timings on mobile to reduce battery usage

---

## 📞 Support

If you encounter any issues with implementation, make sure:
1. The parent container has `position: relative`
2. Content has higher `z-index` than the gradient (which uses z-index: 1)
3. The container has defined height (min-h-screen or specific px/rem value)
4. CSS is properly imported in your project

---

**Created by:** Baseaim Design System
**Last Updated:** 2025
**Version:** 1.0
**License:** For use in authorized projects
