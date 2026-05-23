# Quick Start Guide - Testing Laboratory Website

## 🚀 Get Started in 5 Minutes

This guide helps you understand, customize, and deploy your professional testing laboratory website.

---

## 📁 File Structure Overview

```
/src
├── /app
│   ├── App.tsx                          # Main application entry
│   └── /components
│       ├── navbar.tsx                   # Sticky navigation with mobile menu
│       ├── hero.tsx                     # Hero section with CTAs
│       ├── services.tsx                 # Testing services grid (10+ domains)
│       ├── about-accreditations.tsx     # Company info + certifications
│       ├── process-flow.tsx             # 5-step process visualization
│       ├── contact-inquiry.tsx          # Contact forms (inquiry + sample booking)
│       ├── footer.tsx                   # Footer with compliance info
│       └── /ui                          # Reusable UI components library
└── /styles
    ├── theme.css                        # Color tokens & design system
    ├── tailwind.css                     # Tailwind imports
    └── fonts.css                        # Font imports
```

---

## 🎨 Customization Guide

### 1. Update Company Information

**Location**: `/src/app/components/navbar.tsx` and `/src/app/components/footer.tsx`

```tsx
// Change company name and tagline
<div className="text-lg font-semibold">Your Lab Name</div>
<div className="text-xs">Your Tagline</div>

// Update contact information
Phone: "+1 (234) 567-890"
Email: "info@yourlab.com"
Address: "Your address here"
```

### 2. Customize Colors

**Location**: `/src/styles/theme.css`

```css
:root {
  /* Primary brand colors - change these */
  --lab-blue-dark: #0F3460;      /* Your primary color */
  --lab-teal: #0A7373;            /* Your secondary color */
  --lab-orange: #F97316;          /* Your accent color */
}
```

**Pro Tip**: Use a tool like [Coolors.co](https://coolors.co) to generate professional color palettes.

### 3. Update Services

**Location**: `/src/app/components/services.tsx`

Find the `services` array and modify:

```tsx
const services = [
  {
    icon: YourIcon,                    // Import from lucide-react
    title: "Your Service Name",
    description: "Service description here...",
    tests: ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"],
    color: "bg-blue-50 text-blue-700"  // Choose from design system
  },
  // Add more services...
];
```

**Available Color Schemes**:
- `bg-[var(--lab-blue-light)] text-[var(--lab-blue-primary)]`
- `bg-[var(--lab-teal-light)] text-[var(--lab-teal)]`
- `bg-[var(--lab-orange-light)] text-[var(--lab-orange)]`
- `bg-green-50 text-green-700`
- `bg-purple-50 text-purple-700`
- `bg-pink-50 text-pink-700`

### 4. Modify Hero Section

**Location**: `/src/app/components/hero.tsx`

```tsx
// Update headline
<h1>Your Laboratory Name
  <span className="block">Your Value Proposition</span>
</h1>

// Update description
<p>Your laboratory description and key differentiators...</p>

// Update stats/features
const features = [
  { icon: Award, text: "Your Accreditation" },
  // Add your features...
];
```

### 5. Update Accreditations

**Location**: `/src/app/components/about-accreditations.tsx`

```tsx
const accreditations = [
  {
    name: "Your Accreditation",
    description: "Description",
    logo: "image-url-here"  // Use Unsplash or your own images
  },
  // Add more...
];
```

### 6. Customize About Section

**Location**: `/src/app/components/about-accreditations.tsx`

```tsx
// Update stats
const stats = [
  { icon: Users, value: "Your#", label: "Your Metric" },
  // Add your stats...
];

// Update company story
<p>Your laboratory's story and mission...</p>
```

---

## 🖼️ Adding Images

### Option 1: Use Existing Unsplash Integration

Images are already integrated from Unsplash with relevant laboratory themes:
- Laboratory equipment
- Scientists at work  
- Testing facilities
- Scientific instruments

**To change images**, update the Unsplash URLs in:
- Hero section (`hero.tsx`)
- About section (`about-accreditations.tsx`)
- Accreditation logos (`about-accreditations.tsx`)

### Option 2: Use Your Own Images

Replace Unsplash URLs with your own image URLs:

```tsx
// Before
<img src="https://images.unsplash.com/..." alt="..." />

// After
<img src="/assets/your-image.jpg" alt="..." />
```

**Best Practices**:
- Optimize images (use WebP format when possible)
- Recommended dimensions: 800x600px for section images
- Keep file sizes under 200KB for web performance

---

## 📝 Form Customization

### Modify Form Fields

**Location**: `/src/app/components/contact-inquiry.tsx`

**Add a new field**:

```tsx
<div className="space-y-2">
  <Label htmlFor="new-field">Field Label *</Label>
  <Input
    id="new-field"
    placeholder="Placeholder text"
    {...form.register("newField", { required: true })}
  />
</div>
```

**Update service types dropdown**:

```tsx
const serviceTypes = [
  "Your Service 1",
  "Your Service 2",
  // Add all your services...
];
```

### Handle Form Submissions

Currently forms show success messages. To connect to a backend:

```tsx
const handleInquirySubmit = async (data: InquiryFormData) => {
  setIsSubmitting(true);
  
  try {
    // Replace with your API endpoint
    const response = await fetch('/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      toast.success("Inquiry submitted successfully!");
      inquiryForm.reset();
    }
  } catch (error) {
    toast.error("Submission failed. Please try again.");
  }
  
  setIsSubmitting(false);
};
```

---

## 🎯 Navigation & Sections

### Add a New Section

1. **Create component file**: `/src/app/components/your-section.tsx`

```tsx
export function YourSection() {
  return (
    <section id="your-section" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[var(--lab-blue-dark)] mb-8">
          Your Section Title
        </h2>
        {/* Your content */}
      </div>
    </section>
  );
}
```

2. **Add to App.tsx**:

```tsx
import { YourSection } from "@/app/components/your-section";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <YourSection />  {/* Add here */}
        {/* Other sections... */}
      </main>
      <Footer />
    </div>
  );
}
```

3. **Add to navigation** in `navbar.tsx`:

```tsx
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Your Section", href: "#your-section" },  // Add here
  // Other links...
];
```

---

## 📱 Responsive Design Testing

### Test on Multiple Devices

1. **Chrome DevTools**:
   - Press F12
   - Click device toolbar icon
   - Test on: iPhone SE, iPad, Desktop

2. **Breakpoints to Test**:
   - Mobile: 375px (iPhone)
   - Tablet: 768px (iPad)
   - Desktop: 1440px (Laptop)

### Common Responsive Issues & Fixes

**Text too small on mobile**:
```tsx
// Add responsive text sizing
<h2 className="text-2xl sm:text-3xl lg:text-4xl">
```

**Images overflow on mobile**:
```tsx
// Add responsive image classes
<img className="w-full h-auto max-w-full" />
```

**Cards not stacking on mobile**:
```tsx
// Ensure proper grid classes
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates optimized production files in the `/dist` folder.

### Deploy to Hosting Platforms

**Vercel** (Recommended):
```bash
npm install -g vercel
vercel
```

**Netlify**:
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

**Traditional Hosting**:
Upload contents of `/dist` folder to your web server.

---

## 🔧 Common Customizations

### Change Font

**Location**: `/src/styles/fonts.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}
```

### Add Social Media Links

**Location**: `/src/app/components/footer.tsx`

Update the `socialLinks` array:

```tsx
const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/yourlab", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourlab", label: "Twitter" },
  // Add more...
];
```

### Update Working Hours

**Location**: `/src/app/components/contact-inquiry.tsx`

```tsx
{
  icon: Clock,
  title: "Working Hours",
  details: ["Your working hours here", "Weekend hours"],
  action: null
}
```

---

## 🎨 Branding Checklist

Use this checklist to fully customize the website:

- [ ] Company name and tagline (Navbar, Footer)
- [ ] Logo (upload your own or use FlaskConical icon)
- [ ] Primary brand colors (theme.css)
- [ ] Contact information (phone, email, address)
- [ ] Services list and descriptions
- [ ] Accreditations and certifications
- [ ] About section company story
- [ ] Statistics and proof points
- [ ] Hero section headline and description
- [ ] Call-to-action button text
- [ ] Footer compliance information
- [ ] Social media links
- [ ] Privacy policy and terms links

---

## 📊 Performance Optimization Tips

### 1. Optimize Images
- Use WebP format
- Compress images (TinyPNG, ImageOptim)
- Use appropriate dimensions (don't use 4K images for thumbnails)

### 2. Lazy Load Components
```tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

### 3. Minimize Animations on Mobile
Motion animations automatically respect `prefers-reduced-motion` setting.

---

## 🐛 Troubleshooting

### Forms not submitting
- Check browser console for errors
- Verify all required fields have validation
- Ensure form submission handler is properly connected

### Layout breaks on mobile
- Check responsive classes (sm:, md:, lg:)
- Test on actual devices, not just DevTools
- Verify container max-width is set

### Colors not showing
- Ensure CSS variables are defined in theme.css
- Check class names match exactly (case-sensitive)
- Clear browser cache

### Images not loading
- Verify image URLs are accessible
- Check network tab in DevTools
- Ensure images are properly optimized

---

## 📚 Additional Resources

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Radix UI Components**: https://www.radix-ui.com/
- **Lucide Icons**: https://lucide.dev/
- **React Hook Form**: https://react-hook-form.com/
- **Motion Documentation**: https://motion.dev/

---

## 💡 Pro Tips

1. **Keep it simple**: Don't add too many animations or effects
2. **Test on real devices**: Emulators don't always show the real experience
3. **Use semantic HTML**: Better for SEO and accessibility
4. **Maintain consistency**: Stick to the design system
5. **Progressive enhancement**: Build for mobile first, enhance for desktop

---

## 🆘 Need Help?

Common tasks and where to find them:

| Task | File Location |
|------|--------------|
| Change colors | `/src/styles/theme.css` |
| Update services | `/src/app/components/services.tsx` |
| Modify hero text | `/src/app/components/hero.tsx` |
| Edit contact info | `/src/app/components/navbar.tsx`, `footer.tsx` |
| Customize forms | `/src/app/components/contact-inquiry.tsx` |
| Add navigation item | `/src/app/components/navbar.tsx` |
| Update accreditations | `/src/app/components/about-accreditations.tsx` |

---

**Quick Start Guide Version**: 1.0.0  
**Last Updated**: January 2026  
**Happy Building! 🚀**
