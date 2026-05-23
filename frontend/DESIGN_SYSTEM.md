# Design System Reference Guide

## 🎨 Color Palette

### Primary Colors
```css
--lab-blue-dark: #0F3460       /* Deep blue for headings, primary text */
--lab-blue-primary: #1A5490    /* Brand blue, interactive elements */
--lab-blue-light: #E0EBF5      /* Light blue backgrounds */

--lab-teal: #0A7373            /* Secondary brand color */
--lab-teal-light: #E0F2F2      /* Light teal backgrounds */

--lab-orange: #F97316          /* Call-to-action buttons */
--lab-orange-light: #FFF0E6    /* Light orange backgrounds */
```

### Neutral Colors
```css
--lab-gray-50: #F8FAFC         /* Lightest gray - section backgrounds */
--lab-gray-100: #F1F5F9        /* Very light gray */
--lab-gray-200: #E2E8F0        /* Borders, dividers */
--lab-gray-600: #475569        /* Secondary text */
--lab-gray-700: #334155        /* Body text */
--lab-gray-900: #0F172A        /* Footer background, darkest text */
```

### Usage Guidelines

**Blue (Primary)**
- Navigation elements
- Section headings
- Logo background
- Links hover states
- Use for: Trust, professionalism, authority

**Teal (Secondary)**
- Icons in about/stats sections
- Secondary CTAs
- Accent elements
- Use for: Scientific precision, analytics

**Orange (Accent)**
- Primary CTAs ("Get Quote", "Submit")
- Important badges
- Hover states on key actions
- Use for: Urgency, action, conversion

**Gray (Neutral)**
- Text hierarchy (700 for body, 600 for secondary)
- Backgrounds (50-100 for sections)
- Borders (200)
- Use for: Content structure, readability

---

## 📐 Spacing System

### Base Grid: 4px

```css
4px   = 0.25rem  /* Micro spacing */
8px   = 0.5rem   /* Small gaps */
12px  = 0.75rem  /* Component spacing */
16px  = 1rem     /* Standard spacing */
24px  = 1.5rem   /* Section padding (mobile) */
32px  = 2rem     /* Section padding (tablet) */
48px  = 3rem     /* Large spacing */
64px  = 4rem     /* Section padding (desktop) */
80px  = 5rem     /* Extra large spacing */
```

### Component Spacing

**Cards**
- Padding: 16px (mobile), 24px (desktop)
- Gap between cards: 16px (mobile), 24px (tablet), 32px (desktop)

**Sections**
- Vertical padding: 64px (mobile), 80px (tablet), 96px (desktop)
- Horizontal padding: 16px (mobile), 24px (tablet), 32px (desktop)

**Forms**
- Input spacing: 16px between fields
- Label-to-input: 8px
- Form sections: 24px

---

## 🔤 Typography

### Font Stack
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 
             'Segoe UI', Roboto, sans-serif;
```

### Type Scale

```css
/* Headings */
h1: 2.5rem (40px) mobile → 3.75rem (60px) desktop
h2: 1.875rem (30px) mobile → 3rem (48px) desktop
h3: 1.5rem (24px) mobile → 2rem (32px) desktop
h4: 1.125rem (18px)

/* Body */
text-xl: 1.25rem (20px)    /* Large body, hero descriptions */
text-lg: 1.125rem (18px)   /* Lead paragraphs */
text-base: 1rem (16px)     /* Standard body text */
text-sm: 0.875rem (14px)   /* Small text, captions */
text-xs: 0.75rem (12px)    /* Micro text, labels */
```

### Font Weights
```css
font-normal: 400    /* Body text */
font-medium: 500    /* Headings, labels, buttons */
font-semibold: 600  /* Emphasis */
font-bold: 700      /* Strong emphasis, stats */
```

### Line Heights
```css
leading-tight: 1.25    /* Headings */
leading-normal: 1.5    /* Body text */
leading-relaxed: 1.625 /* Large body text */
```

---

## 🎯 Component Patterns

### Buttons

**Primary CTA**
```tsx
<Button className="bg-[var(--lab-orange)] hover:bg-[var(--lab-orange)]/90">
  Get Quote
</Button>
```

**Secondary CTA**
```tsx
<Button variant="outline" className="border-[var(--lab-blue-primary)] 
        text-[var(--lab-blue-primary)] hover:bg-[var(--lab-blue-light)]">
  Learn More
</Button>
```

**Sizes**
- Small: h-10 px-4 (40px height)
- Default: h-12 px-6 (48px height)
- Large: h-14 px-8 (56px height)

### Cards

**Standard Service Card**
```tsx
<Card className="hover:shadow-xl transition-shadow border-[var(--lab-gray-200)]">
  <CardHeader>
    <div className="h-12 w-12 rounded-lg bg-[color] flex items-center justify-center">
      <Icon />
    </div>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardContent>
    {content}
  </CardContent>
</Card>
```

**Icon Container Colors**
- Blue services: `bg-[var(--lab-blue-light)] text-[var(--lab-blue-primary)]`
- Teal services: `bg-[var(--lab-teal-light)] text-[var(--lab-teal)]`
- Orange services: `bg-[var(--lab-orange-light)] text-[var(--lab-orange)]`

### Badges

**Status Badge**
```tsx
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
     bg-[var(--lab-blue-light)] text-[var(--lab-blue-primary)] text-sm font-medium">
  <Icon className="h-4 w-4" />
  <span>Badge Text</span>
</div>
```

### Form Inputs

**Standard Input**
```tsx
<div className="space-y-2">
  <Label htmlFor="input-id">Field Label *</Label>
  <Input id="input-id" placeholder="Placeholder..." />
</div>
```

**Input Spacing**
- Mobile: Full width, stacked
- Desktop: Grid with gap-4

---

## 📱 Responsive Breakpoints

### Tailwind Breakpoints
```css
/* Mobile First Approach */
/* Default: < 640px */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Grid Patterns

**Service Cards**
```tsx
/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

**Stats/Features**
```tsx
/* Mobile: 2 columns, Desktop: 4 columns */
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
```

**Footer Columns**
```tsx
/* Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
```

---

## ✨ Animations & Transitions

### Motion Animations

**Fade In + Slide Up**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

**Fade In + Slide Left**
```tsx
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

**Staggered Children**
```tsx
transition={{ duration: 0.5, delay: index * 0.1 }}
```

### CSS Transitions

**Hover States**
```css
transition-colors    /* Color changes */
transition-shadow    /* Shadow changes */
transition-transform /* Scale, translate */
transition-all       /* All properties */

duration-300         /* 300ms (standard) */
```

**Common Patterns**
- Cards: `hover:shadow-xl transition-shadow duration-300`
- Buttons: `hover:bg-primary/90 transition-colors`
- Icons: `group-hover:scale-110 transition-transform`

---

## 🔒 Accessibility Guidelines

### Color Contrast
- Normal text: Minimum 4.5:1
- Large text: Minimum 3:1
- Interactive elements: Minimum 3:1

### Touch Targets
- Minimum size: 44x44px (mobile)
- Spacing between: At least 8px

### Focus Indicators
```tsx
className="focus:ring-2 focus:ring-[var(--lab-blue-primary)] focus:ring-offset-2"
```

### ARIA Labels
```tsx
<button aria-label="Close menu">
  <X className="h-6 w-6" />
  <span className="sr-only">Close menu</span>
</button>
```

---

## 📦 Component Library

### Available UI Components

- **Button**: Primary, secondary, outline, ghost variants
- **Card**: CardHeader, CardTitle, CardDescription, CardContent
- **Input**: Text, email, tel, number inputs
- **Label**: Form field labels
- **Textarea**: Multi-line text input
- **Select**: Dropdown selection
- **Tabs**: Tab navigation
- **Sheet**: Mobile slide-out menu
- **Dialog**: Modal dialogs
- **Toaster**: Toast notifications (Sonner)

### Icons (Lucide React)

**Common Icons Used**
```tsx
import { 
  FlaskConical,    // Lab logo
  Menu, X,         // Navigation
  Phone, Mail,     // Contact
  Award, Shield,   // Trust indicators
  CheckCircle2,    // Success states
  ArrowRight,      // Navigation arrows
  Send            // Form submission
} from "lucide-react";
```

---

## 🎯 Design Principles

### 1. Mobile-First
Start with mobile layout, enhance for larger screens

### 2. Trust & Credibility
Use blue tones, professional imagery, accreditation badges

### 3. Clear Hierarchy
Strong typographic hierarchy, visual weight distribution

### 4. Accessibility
WCAG 2.1 AA compliance, keyboard navigation, screen reader support

### 5. Performance
Lazy loading, optimized images, minimal animations

### 6. Consistency
Reusable components, consistent spacing, predictable patterns

---

## 🚀 Quick Start Examples

### Create a New Section
```tsx
<section className="py-16 sm:py-20 lg:py-24 bg-[var(--lab-gray-50)]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold 
           text-[var(--lab-blue-dark)] mb-4">
        Section Title
      </h2>
      <p className="text-lg text-[var(--lab-gray-600)]">
        Section description
      </p>
    </motion.div>
    
    {/* Section content */}
  </div>
</section>
```

### Create a CTA Banner
```tsx
<div className="bg-gradient-to-r from-[var(--lab-blue-primary)] 
     to-[var(--lab-teal)] rounded-2xl p-8 sm:p-12 shadow-xl">
  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
    Banner Title
  </h3>
  <p className="text-lg text-white/90 mb-6">
    Banner description
  </p>
  <Button className="bg-white text-[var(--lab-blue-primary)] 
         hover:bg-gray-100">
    Call to Action
  </Button>
</div>
```

---

**Design System Version**: 1.0.0  
**Last Updated**: January 2026  
**Maintained by**: Precision Labs Design Team
