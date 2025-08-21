# 🚀 Sinergia Studio Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://reactjs.org/)

A high-performance, enterprise-grade marketing landing page showcasing modern web development practices, advanced animations, and professional integrations for digital marketing and community management services.

## ✨ Key Features

### 🎨 **Advanced User Experience**

- **Responsive Design**: Mobile-first approach with optimized layouts across all devices
- **Fluid Animations**: Sophisticated transitions using Motion library with scroll-triggered reveals
- **3D Visual Effects**: Interactive image effects and blob animations
- **Smooth Scrolling**: Enhanced navigation with scroll-based animations

### 🔐 **Enterprise Authentication**

- **Clerk Integration**: Complete authentication system with protected routes
- **User Management**: Profile management with dynamic navigation states
- **Middleware Protection**: Route-level authentication guards

### ⚡ **Performance Optimizations**

- **Turbopack**: Ultra-fast development builds
- **Image Optimization**: Next.js optimized images with WebP/AVIF formats
- **Bundle Analysis**: Integrated webpack bundle analyzer
- **Compression**: Gzip compression and optimized asset delivery

### 🛡️ **Security & SEO**

- **Content Security Policy**: Comprehensive CSP headers
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Structured Data**: JSON-LD schema markup for enhanced SEO
- **Dynamic Sitemaps**: Automated sitemap.xml and robots.txt generation

### 📧 **Professional Email System**

- **Transactional Emails**: Resend integration with React Email templates
- **Form Validation**: Zod schema validation with React Hook Form
- **Contact Management**: Professional contact form with email delivery

### 📊 **Analytics & Monitoring**

- **Vercel Analytics**: Real-time performance monitoring
- **Error Boundaries**: Comprehensive error handling and reporting

## 🛠️ Technology Stack

### **Frontend Architecture**

- **Framework**: Next.js 15 with App Router and Server Components
- **Language**: TypeScript with strict type checking
- **UI Library**: React 19 with concurrent features
- **Styling**: Tailwind CSS v4 with custom configuration
- **Components**: Radix UI primitives with Shadcn UI patterns
- **State Management**: React Context with custom hooks

### **Development Tools**

- **Package Manager**: pnpm with workspace support
- **Linting**: ESLint with Next.js and TypeScript rules
- **Formatting**: Prettier with import sorting
- **Git Hooks**: Pre-commit validation and formatting

### **External Integrations**

- **Authentication**: Clerk with NextJS integration
- **Email Service**: Resend with React Email templates
- **Analytics**: Vercel Analytics for performance insights
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React and React Icons libraries

## 🏗️ Project Architecture

### **Component Structure**

```bash
src/components/
├── ui/           # Reusable UI primitives
├── animation/    # Animation and transition components
├── emails/       # React Email templates
├── structured-data/ # SEO schema markup
└── [features]/   # Feature-specific components
```

### **Route Organization**

```bash
src/app/
├── api/          # API routes and handlers
├── (auth)/       # Authentication-related pages
└── [pages]/      # Application pages with layouts
```

### **Service Layer**

```bash
src/
├── providers/    # Context providers composition
├── services/     # External service integrations
├── config/       # Configuration and constants
└── lib/          # Utility functions and helpers
```

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+ and pnpm (recommended)
- Environment variables configured

### **Installation**

```bash
# Clone the repository
git clone https://github.com/jovandyaz/marketing-landing-page.git
cd marketing-landing-page

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Configure your environment variables
```

### **Development Commands**

```bash
# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Format code
pnpm format
```

### **Environment Variables**

```env
# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Email Service (Resend)
RESEND_API_KEY=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_EMAIL_FROM=

```

## 📱 Services Offered

- **Training Workshops**: Professional development programs
- **Social Media Management**: Complete social media strategy and execution
- **Community Management**: Building and nurturing online communities
- **Personalized Consulting**: Tailored marketing strategies and implementation

## 🌐 Deployment

### **Vercel (Recommended)**

The project is optimized for Vercel deployment with automatic CI/CD:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourname%2Fsinergiastudio)

### **Manual Deployment**

1. Build the project: `pnpm build`
2. Configure environment variables on your hosting platform
3. Deploy the `.next` folder and `public` assets

## 📄 License

This project is private and proprietary. All rights reserved.

---
