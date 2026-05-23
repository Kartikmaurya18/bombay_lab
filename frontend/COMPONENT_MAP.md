# Component Architecture Map

## 📐 Visual Component Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│                         App.tsx                              │
│                     (Main Container)                         │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
   ┌─────────┐         ┌─────────┐       ┌─────────┐
   │ Navbar  │         │  Main   │       │ Footer  │
   │ (Fixed) │         │ Content │       │         │
   └─────────┘         └─────────┘       └─────────┘
                            │
        ┌───────────────────┼───────────────────┬──────────┐
        │                   │                   │          │
        ▼                   ▼                   ▼          ▼
   ┌─────────┐        ┌──────────┐      ┌──────────┐  ┌──────────┐
   │  Hero   │        │ Services │      │  About & │  │ Process  │
   │ Section │        │   Grid   │      │  Accred. │  │   Flow   │
   └─────────┘        └──────────┘      └──────────┘  └──────────┘
                                                           │
                                                           ▼
                                                    ┌──────────────┐
                                                    │  Contact &   │
                                                    │   Inquiry    │
                                                    └──────────────┘
```

---

## 🗂️ Component Reference Guide

### **1. Navbar Component** (`navbar.tsx`)

**Purpose**: Primary navigation with responsive behavior

**Features**:
- Sticky positioning (stays at top during scroll)
- Logo with company branding
- Desktop: Inline navigation links
- Mobile: Hamburger menu with Sheet component
- Contact information (phone)
- Primary CTA button ("Get Quote")

**State Management**:
- `isOpen` - Controls mobile menu visibility

**Key Functions**:
- `scrollToSection(href)` - Smooth scroll to page sections

**Responsive Behavior**:
```
Mobile:    [Logo] [    ] [☰]
Desktop:   [Logo] [Nav Links ────] [Contact] [CTA]
```

**Dependencies**:
- Sheet (Radix UI) for mobile menu
- Button component
- Lucide icons: Menu, X, Phone, FlaskConical

---

### **2. Hero Component** (`hero.tsx`)

**Purpose**: Above-the-fold value proposition and trust indicators

**Sections**:
- Main headline with gradient text
- Subheadline description
- Primary and secondary CTAs
- Trust badges (4 features grid)
- Hero image (desktop only)
- Floating stats card

**Visual Elements**:
- Background gradient (blue → white → teal)
- Subtle grid pattern overlay
- Motion animations (fade-in, slide-up)

**Responsive Layout**:
```
Mobile:                    Desktop:
┌────────────────┐        ┌──────────┬──────────┐
│  Headline      │        │ Headline │          │
│  Description   │        │ Descrip. │  Hero    │
│  [CTA] [CTA]   │        │ [2 CTAs] │  Image   │
│  Features 2x2  │        │ Features │  + Card  │
└────────────────┘        └──────────┴──────────┘
```

**Dependencies**:
- Motion (animations)
- Button component
- Lucide icons: ArrowRight, Award, Shield, Clock, CheckCircle2

---

### **3. Services Component** (`services.tsx`)

**Purpose**: Showcase 10+ testing service domains

**Structure**:
- Section header with badge and title
- Service cards grid (responsive)
- Each card contains:
  - Colored icon container
  - Service title
  - Description
  - Key tests (3 visible + more badge)
  - "Request Testing" CTA
- Bottom CTA banner for custom testing

**Service Data Schema**:
```tsx
{
  icon: IconComponent,
  title: string,
  description: string,
  tests: string[],
  color: string  // Tailwind classes
}
```

**Grid Responsive Behavior**:
```
Mobile:    1 column
Tablet:    2 columns
Desktop:   3 columns
```

**All 10 Services**:
1. Materials & Metallurgy
2. Construction & Civil
3. Chemical Analysis
4. Environmental Testing
5. Food & Beverage
6. Pharmaceutical & Cosmetic
7. Microbiology
8. Electrical & Electronics
9. Calibration Services
10. Textiles & Polymers

**Dependencies**:
- Card components
- Button component
- Motion (scroll animations)
- 10+ Lucide icons

---

### **4. AboutAccreditations Component** (`about-accreditations.tsx`)

**Purpose**: Build trust through company story and certifications

**Two Main Sections**:

#### **A. About Section**
- Company story with large text
- Image (laboratory team)
- Statistics grid (4 stats):
  - Active Clients
  - Accuracy Rate
  - Average TAT
  - Tests/Month
- "Why Choose Us" cards (4 reasons)

#### **B. Accreditations Section**
- 6 accreditation badges with logos:
  - ISO/IEC 17025:2017
  - NABL
  - UKAS
  - FSSAI
  - CDSCO
  - EPA
- Quality Management System statement

**Stats Data Schema**:
```tsx
{
  icon: IconComponent,
  value: string,  // e.g., "2000+"
  label: string   // e.g., "Active Clients"
}
```

**Responsive Layout**:
```
Mobile:                Desktop:
┌──────────────┐      ┌────────┬────────┐
│   Content    │      │Content │ Image  │
│   Stats 2x2  │      │Stats 4 │        │
├──────────────┤      ├────────┴────────┤
│ Why Us Cards │      │   Why Us Cards  │
│   (stacked)  │      │    (4 columns)  │
├──────────────┤      ├─────────────────┤
│Accred. Badges│      │ Accred. Badges  │
│  (2 columns) │      │   (6 columns)   │
└──────────────┘      └─────────────────┘
```

**Dependencies**:
- Card components
- Motion animations
- Lucide icons: Shield, Award, Users, Clock, Target, TrendingUp

---

### **5. ProcessFlow Component** (`process-flow.tsx`)

**Purpose**: Visualize the 5-step testing process

**Process Steps**:
1. **Inquiry & Quote** - Initial contact and quotation
2. **Sample Submission** - Sample drop-off or pickup
3. **Testing & Analysis** - Laboratory testing
4. **Report Generation** - Detailed test report creation
5. **Delivery & Support** - Report delivery and consultation

**Step Data Schema**:
```tsx
{
  icon: IconComponent,
  number: string,      // "01" to "05"
  title: string,
  description: string,
  color: string        // Background color for icon
}
```

**Responsive Layout**:
```
Mobile:                Desktop:
┌──────────────┐      ┌───┬───┬───┬───┬───┐
│   Step 01    │      │ 1 │→│ 2 │→│ 3 │→│ 4 │→│ 5 │
├──────────────┤      └───┴───┴───┴───┴───┘
│      ↓       │      (Horizontal flow with arrows)
├──────────────┤
│   Step 02    │
└──────────────┘
(Vertical with connectors)
```

**Visual Elements**:
- Desktop: Horizontal cards with arrow connectors
- Mobile: Vertical cards with line connectors
- Gradient connection line (blue → teal → green)
- Hover effects on cards

**Dependencies**:
- Card components
- Motion animations
- Lucide icons: MessageSquare, FileCheck, FlaskConical, FileText, CheckCircle

---

### **6. ContactInquiry Component** (`contact-inquiry.tsx`)

**Purpose**: Dual form system for client communication

**Layout Structure**:
```
┌────────────┬──────────────────────┐
│  Contact   │   Form Tabs          │
│  Info      │  ┌─────────────────┐ │
│  Cards     │  │ General Inquiry │ │
│            │  │ Sample Booking  │ │
│  Quick     │  ├─────────────────┤ │
│  Info Box  │  │  [Form Fields]  │ │
│            │  │  [Submit]       │ │
└────────────┴──────────────────────┘
```

**Two Form Types**:

#### **A. General Inquiry Form**
Fields:
- Full Name *
- Email *
- Phone Number *
- Company/Organization
- Service Type * (dropdown)
- Message/Requirements *

#### **B. Sample Booking Form**
Fields:
- Full Name *
- Email *
- Phone Number *
- Company/Organization *
- Testing Service Required * (dropdown)
- Number of Samples *
- Urgency Level * (Standard/Express/Urgent)
- Sample Description *
- Additional Requirements

**Contact Information Cards** (4 cards):
1. Phone (2 numbers)
2. Email (2 addresses)
3. Location (address with map link)
4. Working Hours

**Form Validation**:
- Required fields enforced
- Email format validation
- Real-time error feedback
- Success toast on submission

**State Management**:
```tsx
- isSubmitting: boolean
- inquiryForm: useForm hook
- sampleForm: useForm hook
```

**Dependencies**:
- React Hook Form (validation)
- Card components
- Input, Label, Textarea, Select
- Tabs component
- Sonner (toast notifications)
- Motion animations

---

### **7. Footer Component** (`footer.tsx`)

**Purpose**: Site-wide footer with navigation and compliance

**Sections** (4 columns on desktop):

#### **Column 1: Company Info**
- Logo and tagline
- Company description
- Contact information (phone, email, address)

#### **Column 2: Quick Links**
- Home
- Services
- About Us
- Accreditations
- Contact

#### **Column 3: Services**
- Top 6 service categories
- Each links to services section

#### **Column 4: Compliance & Legal**
- Accreditation list
- Privacy Policy
- Terms of Service

**Bottom Bar**:
- Copyright notice
- Accreditation number
- Social media icons (4)

**Disclaimer Section**:
- ISO compliance statement
- Testing standards notice

**Responsive Layout**:
```
Mobile:              Desktop:
┌──────────────┐    ┌────┬────┬────┬────┐
│   Company    │    │ Co │Link│Serv│Comp│
├──────────────┤    │ mny│ s  │ ice│ lnc│
│  Quick Links │    └────┴────┴────┴────┘
├──────────────┤    ┌──────────────────┐
│   Services   │    │   Bottom Bar     │
├──────────────┤    ├──────────────────┤
│  Compliance  │    │   Disclaimer     │
└──────────────┘    └──────────────────┘
```

**Dependencies**:
- Lucide icons: FlaskConical, Mail, Phone, MapPin, Social icons

---

## 🎨 UI Component Library

### **Shared Components** (`/src/app/components/ui/`)

| Component | Usage | Description |
|-----------|-------|-------------|
| **Button** | All sections | Primary, secondary, outline variants |
| **Card** | Services, About, Contact | Content containers with hover states |
| **Input** | Contact forms | Text, email, tel, number inputs |
| **Label** | Forms | Form field labels |
| **Textarea** | Forms | Multi-line text input |
| **Select** | Forms | Dropdown selection menus |
| **Tabs** | Contact section | Tab navigation for forms |
| **Sheet** | Navbar | Mobile slide-out menu |
| **Toaster** | Global | Toast notification system |

---

## 🔄 Data Flow & State

### **Component State Overview**

```
App (Stateless)
│
├── Navbar (Local State)
│   └── isOpen: boolean (mobile menu)
│
├── Hero (Stateless, motion only)
│
├── Services (Stateless)
│
├── AboutAccreditations (Stateless)
│
├── ProcessFlow (Stateless)
│
├── ContactInquiry (Form State)
│   ├── isSubmitting: boolean
│   ├── inquiryForm: FormState
│   └── sampleForm: FormState
│
└── Footer (Stateless)
```

### **Navigation Flow**

```
User Clicks Nav Link
        ↓
scrollToSection(href)
        ↓
document.querySelector(href)
        ↓
element.scrollIntoView({ smooth })
        ↓
Smooth scroll to section
```

### **Form Submission Flow**

```
User Fills Form
        ↓
Validation (React Hook Form)
        ↓
handleSubmit triggered
        ↓
setIsSubmitting(true)
        ↓
Simulate API call (1.5s delay)
        ↓
Show success toast
        ↓
Reset form
        ↓
setIsSubmitting(false)
```

---

## 📊 Component Dependencies Matrix

| Component | Motion | Forms | Cards | Icons | Sheets | Tabs |
|-----------|--------|-------|-------|-------|--------|------|
| Navbar    | ❌     | ❌    | ❌    | ✅    | ✅     | ❌   |
| Hero      | ✅     | ❌    | ❌    | ✅    | ❌     | ❌   |
| Services  | ✅     | ❌    | ✅    | ✅    | ❌     | ❌   |
| About     | ✅     | ❌    | ✅    | ✅    | ❌     | ❌   |
| Process   | ✅     | ❌    | ✅    | ✅    | ❌     | ❌   |
| Contact   | ✅     | ✅    | ✅    | ✅    | ❌     | ✅   |
| Footer    | ❌     | ❌    | ❌    | ✅    | ❌     | ❌   |

---

## 🎯 Component Props & Customization

### **Stateless Components** (No Props Needed)
All main components are self-contained with data defined internally:
- Navbar
- Hero
- Services
- AboutAccreditations
- ProcessFlow
- ContactInquiry
- Footer

**Customization Method**: Edit data arrays within component files

### **Example: Adding a Service**

```tsx
// In services.tsx
const services = [
  // Existing services...
  {
    icon: YourIcon,
    title: "New Testing Domain",
    description: "Description here...",
    tests: ["Test 1", "Test 2", "Test 3"],
    color: "bg-blue-50 text-blue-700"
  }
];
```

---

## 🔗 Component Interconnections

### **Cross-Component References**

```
Navbar
  └─→ scrollToSection("#services")
  └─→ scrollToSection("#about")
  └─→ scrollToSection("#contact")

Hero
  └─→ scrollToSection("#contact")
  └─→ scrollToSection("#services")

Services
  └─→ scrollToSection("#contact")

ProcessFlow
  └─→ scrollToSection("#contact")

Footer
  └─→ scrollToSection("#home")
  └─→ scrollToSection("#services")
  └─→ scrollToSection("#about")
```

### **Global Components**

- **Toaster**: Rendered in App.tsx, accessible anywhere via `toast()`
- **Navbar**: Fixed at top, visible on all sections
- **Footer**: Bottom of page, visible after all content

---

## 📝 Component Checklist

Use this to verify all components are working:

### **Navbar**
- [ ] Logo displays correctly
- [ ] Desktop navigation links work
- [ ] Mobile hamburger opens Sheet
- [ ] Smooth scrolling to sections
- [ ] "Get Quote" button scrolls to contact
- [ ] Sticky behavior works on scroll

### **Hero**
- [ ] Headline and description render
- [ ] Primary and secondary CTAs work
- [ ] 4 feature badges display
- [ ] Hero image loads (desktop)
- [ ] Stats card appears (desktop)
- [ ] Motion animations play smoothly

### **Services**
- [ ] All 10 service cards display
- [ ] Icons and colors correct
- [ ] Test badges show (3 + more)
- [ ] "Request Testing" buttons work
- [ ] Custom testing CTA banner displays
- [ ] Hover effects work (desktop)

### **About & Accreditations**
- [ ] Company description renders
- [ ] 4 stats cards display correctly
- [ ] Laboratory image loads
- [ ] "Why Choose Us" cards (4) display
- [ ] 6 accreditation badges render
- [ ] QMS statement appears

### **Process Flow**
- [ ] All 5 steps display
- [ ] Desktop: Horizontal layout with arrows
- [ ] Mobile: Vertical layout with connectors
- [ ] Icons and colors correct
- [ ] "Start Your Project" CTA works

### **Contact & Inquiry**
- [ ] 4 contact info cards display
- [ ] Tab switching works (Inquiry/Sample)
- [ ] Form validation functions
- [ ] Required fields enforce
- [ ] Service dropdown populated
- [ ] Submit shows loading state
- [ ] Success toast appears
- [ ] Form resets after submit

### **Footer**
- [ ] All 4 columns render
- [ ] Quick links functional
- [ ] Social icons display
- [ ] Copyright year correct
- [ ] Disclaimer text appears

---

## 🎨 Styling Patterns

### **Consistent Class Patterns**

```tsx
// Section wrapper
<section className="py-16 sm:py-20 lg:py-24 bg-[color]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Section header
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--lab-blue-dark)] mb-4">

// Description text
<p className="text-lg text-[var(--lab-gray-600)]">

// Icon container
<div className="h-12 w-12 rounded-lg bg-[color] flex items-center justify-center">

// Card grid
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## 🚀 Performance Considerations

### **Component Optimization**

| Component | Optimization Strategy |
|-----------|----------------------|
| **Images** | Lazy loading, responsive sizing |
| **Animations** | `viewport={{ once: true }}` to prevent re-animation |
| **Forms** | Controlled re-renders with React Hook Form |
| **Icons** | Tree-shakeable imports from Lucide |
| **Modals** | Conditional rendering (Sheet only when open) |

---

**Component Map Version**: 1.0.0  
**Last Updated**: January 17, 2026  
**Total Components**: 7 major + 30+ UI components  
**Lines of Code**: 2,500+ production-ready code
