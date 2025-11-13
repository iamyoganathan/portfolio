# Yoganathan C - Flutter Developer Portfolio 🚀

A modern, interactive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and comprehensive project showcases focused on Flutter development and AI integration.

## ✨ Features

- **Modern Design**: Clean, professional interface with dark theme
- **Interactive Elements**: Smooth animations powered by Framer Motion
- **Responsive**: Optimized for all devices and screen sizes
- **Performance**: Optimized images, lazy loading, and bundle optimization
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Contact Form**: Functional contact form with validation and spam protection
- **Project Showcase**: Detailed project presentations with scroll animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **3D Graphics**: Three.js (@react-three/fiber)
- **Form Handling**: Native FormData API with validation
- **Deployment**: Vercel

## 📱 Pages & Features

### 🏠 Home

- Hero section with animated introduction
- Interactive project navigation with Bento Grid
- Smooth scroll animations
- Command palette (Cmd/Ctrl + K)

### 👨‍💻 About

- Personal story and journey
- Development philosophy
- Interactive timeline
- Current learning progress

### 🚀 Projects

- Language Learning App with AI pronunciation feedback
- Digital Diary for Students with productivity analytics
- Expense Tracker with cloud synchronization
- Interactive project cards with technology highlighting

### ⚡ Skills

- Interactive skill radar charts
- Animated progress bars
- Technology showcase
- Learning journey timeline
- Certification highlights

### 📞 Contact

- Functional contact form
- Real-time validation
- QR code for quick contact
- Social media links
- Availability status

### 📄 Resume

- Interactive resume preview
- Sectioned content display
- PDF download functionality
- Quick stats overview

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Hero.tsx        # Homepage hero section
│   ├── Navigation.tsx  # Main navigation
│   ├── ScrollStack.tsx # Project showcase
│   ├── SkillsRadar.tsx # Skills visualization
│   └── ...
├── about/              # About page
├── projects/           # Projects showcase
├── skills/             # Skills overview
├── contact/            # Contact form
├── resume/             # Resume page
├── api/                # API routes
│   └── contact/        # Contact form handler
├── globals.css         # Global styles
└── layout.tsx          # Root layout

public/
├── profile.jpg         # Profile image
├── resume/            # Resume files
└── ...
```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Optional: Google Site Verification
GOOGLE_SITE_VERIFICATION=your_verification_code

# Optional: Enable Web Vitals logging
NEXT_PUBLIC_ENABLE_WEB_VITALS=true

# Optional: Analytics tracking
NEXT_PUBLIC_GA_ID=your_ga_id
```

### Customization

1. **Personal Information**: Update `app/layout.tsx` metadata and component content
2. **Projects**: Modify `app/data/projects.ts` with your projects
3. **Skills**: Update skill data in `app/skills/page.tsx`
4. **Resume**: Replace PDF in `public/resume/` and update preview data
5. **Styling**: Customize colors and themes in `app/globals.css`
6. **Contact Info**: Update email and social links in contact components

## 🎨 Design System

### Colors

- **Primary**: Emerald (`#10b981`)
- **Background**: Dark Navy (`#071021`)
- **Text**: Slate variants for hierarchy
- **Accents**: Cyan for highlights

### Typography

- **Font**: Geist Sans (Primary), Geist Mono (Code)
- **Scale**: Tailwind's type scale
- **Weight**: 400-600 range

### Animations

- **Hover**: Subtle scale and color transitions
- **Scroll**: Reveal animations with Framer Motion
- **Interactive**: Ripple effects and micro-interactions

## 📊 Performance

### Optimizations Implemented

- Image optimization with Next.js Image component
- Bundle splitting and lazy loading
- CSS optimization and tree shaking
- Font optimization with Geist fonts
- SEO meta tags and structured data
- Web Vitals monitoring

### Performance Scores

- **Lighthouse**: 95+ average
- **Core Web Vitals**: All metrics in "Good" range
- **Bundle Size**: < 200kb initial load

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Development Tools

- **Viewport Debugger**: Shows current breakpoint in development
- **Error Boundaries**: Graceful error handling
- **Web Vitals**: Performance monitoring
- **Hot Reload**: Fast development iteration

## 🎯 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile**: iOS Safari 12+, Chrome Mobile 70+

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Gokulnoob/portfolio/issues).

## 📬 Contact

- **Email**: iamyoganathanc@gmail.com
- **Phone**: +91 9626671504
- **LinkedIn**: [linkedin.com/in/yoganathan-c](https://linkedin.com/in/yoganathan-c)
- **GitHub**: [github.com/iamyoganathan](https://github.com/iamyoganathan)

---

⚡ Built with passion and modern web technologies by Yoganathan C

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
