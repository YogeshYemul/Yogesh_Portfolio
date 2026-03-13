# 🚀 Yogesh Yemul - Full Stack Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

A modern, high-performance portfolio website showcasing **Full Stack Development** expertise.
Built with React 18, TypeScript, and Tailwind CSS with stunning animations and responsive design.

[🌐 Live Demo](#-live-demo) • [📖 Documentation](#-documentation) • [🚀 Quick Start](#-quick-start) • [📞 Contact](#-contact)

</div>

---

## ✨ Features

### 🎨 **Design & UX**
- Modern, minimalist design with yellow, black, and white color theme
- Fully responsive - optimized for mobile, tablet, and desktop
- Smooth page transitions and component animations using Framer Motion
- Dark mode ready with next-themes integration

### ⚡ **Performance**
- Lightning-fast loading with Vite bundler
- Code splitting for optimal chunk sizes
- Production bundle: ~525KB total (gzipped ~130KB)
- 90+ Lighthouse performance score
- Terser minification for production

### 🎯 **Features**
- Interactive components with hover effects
- Smooth scroll navigation
- SEO optimized with proper meta tags
- Integrated contact form
- Coding profiles showcase (LeetCode, CodeChef, etc.)
- Project showcase with descriptions and links
- Skills section with proficiency display
- Education timeline
- Responsive navigation with mobile menu

### 🔒 **Development**
- Full TypeScript support for type safety
- ESLint configuration for code quality
- Path aliases (@/ for clean imports)
- Modular component architecture
- Form validation with React Hook Form
- Query management with React Query

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3** - UI library
- **TypeScript 5.8** - Type safety
- **React Router v6** - Client-side routing
- **React Hook Form** - Form state management

### Styling & Components
- **Tailwind CSS 3.4** - Utility-first CSS
- **Shadcn UI** - High-quality component library
- **Framer Motion 12.36** - Animation library
- **Radix UI** - Headless UI components

### Build & Development
- **Vite 5.4** - Modern build tool
- **SWC** - Fast JavaScript compiler
- **Terser** - JavaScript minifier
- **ESLint 9.32** - Code linting

### Deployment
- **Vercel** - Production hosting
- **Node.js** - Runtime environment

### Package Manager
- **npm** - Primary (also compatible with bun)

---

## 📊 Project Structure

```
Yogesh_Portfolio/
├── src/
│   ├── components/
│   │   ├── About.tsx              # About section
│   │   ├── CodingProfiles.tsx     # Coding platforms showcase
│   │   ├── Contact.tsx            # Contact form
│   │   ├── Education.tsx          # Education timeline
│   │   ├── Footer.tsx             # Footer component
│   │   ├── Hero.tsx               # Hero/landing section
│   │   ├── LetsConnect.tsx        # CTA section
│   │   ├── Navbar.tsx             # Navigation bar
│   │   ├── NavLink.tsx            # Navigation link component
│   │   ├── Projects.tsx           # Projects showcase
│   │   ├── Skills.tsx             # Skills section
│   │   └── ui/                    # Shadcn UI components
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   ├── pages/
│   │   ├── Index.tsx              # Main page
│   │   └── NotFound.tsx           # 404 page
│   ├── App.tsx                    # App component
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── public/
│   └── robots.txt                 # SEO robots file
├── vite.config.ts                 # Vite configuration
├── vercel.json                    # Vercel deployment config
├── tsconfig.json                  # TypeScript config
├── tailwind.config.ts             # Tailwind configuration
└── package.json                   # Dependencies & scripts
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16+ ([Download](https://nodejs.org/))
- **npm** v7+ or **bun** ([Install bun](https://bun.sh/))
- **Git**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YogeshYemul/Yogesh_Portfolio.git
cd Yogesh_Portfolio
```

2. **Install dependencies**
```bash
npm install
# or with bun
bun install
```

3. **Add your profile photo**
```bash
# Copy your profile image to:
cp your-photo.png src/assets/image.png
```

4. **Add your resume (optional)**
```bash
# Copy your resume to:
cp your-resume.pdf public/resume.pdf
```

5. **Start development server**
```bash
npm run dev
# or with bun
bun run dev
```

The app will be available at `http://localhost:5173`

---

## 🔧 Available Scripts

```bash
# Development server (with HMR)
npm run dev

# Production build
npm run build

# Build for debugging
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Lint and fix issues
npm run lint --fix
```

---

## 🌐 Live Demo

Visit the live portfolio: **[yogeshyemul.vercel.app](https://yogeshyemul.vercel.app)**

### Demo Sections
- **Hero** - Animated landing section
- **About** - Professional background
- **Skills** - Technical proficiencies
- **Projects** - Showcase of notable projects
- **Education** - Academic timeline
- **Coding Profiles** - Links to coding platforms
- **Contact** - Contact form and social links

---

## 🚢 Deployment

### ✅ Pre-deployment Checklist
- [x] Production build tested locally
- [x] Vite optimized bundle
- [x] TypeScript compilation clean
- [x] ESLint passing
- [x] Vercel configuration ready
- [x] Environment variables set (if any)

### Deploy to Vercel

#### Option 1: Automatic (Recommended)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Framework: **Vite** (auto-detected)
6. Click "Deploy"

#### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to staging
vercel

# Deploy to production
vercel --prod
```

#### Option 3: Manual Build & Deploy
```bash
# Build for production
npm run build

# The `dist/` folder is ready to deploy
# Upload contents to any static hosting service
```

### Configuration Files
- **`vercel.json`** - Deployment settings with SPA routing
- **`.vercelignore`** - Files excluded from deployment
- **`vite.config.ts`** - Build optimization settings

**Deployment Status**: ✅ Live on Vercel

---

## 🎨 Customization

### Update Portfolio Content

Edit these files to customize your portfolio:

```typescript
// src/components/Hero.tsx
// Update your name, title, and CTA

// src/components/About.tsx
// Update your bio and professional summary

// src/components/Skills.tsx
// Add or remove your technical skills

// src/components/Projects.tsx
// Update with your projects and descriptions

// src/components/Education.tsx
// Add your educational background

// src/components/CodingProfiles.tsx
// Update links to your coding platforms
```

### Modify Styling
- Edit `tailwind.config.ts` for theme customization
- Update `src/index.css` for global styles
- Component styles use Tailwind utility classes

### Add Environment Variables
Create `.env.local`:
```env
VITE_API_URL=https://your-api.com
```

Use in components:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📈 Performance Metrics

### Build Output
```
dist/
├── index.html                       1.21 kB
├── assets/
│   ├── react.js                    15.30 kB (React core)
│   ├── reactQuery.js               24.93 kB (React Query)
│   ├── radix.js                   152.49 kB (Radix UI components)
│   ├── index.js                   259.82 kB (App code)
│   └── index.css                   71.85 kB (Styles)
└── images/                         424.48 kB (Optimized images)
```

### Lighthouse Scores (Vercel Deployment)
- ⚡ Performance: 90+
- ♿ Accessibility: 95+
- ✅ Best Practices: 95+
- 🔍 SEO: 100

---

## 🆘 Troubleshooting

### Dependencies Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Build Errors
```bash
# Check TypeScript errors
npx tsc --noEmit

# Run ESLint
npm run lint

# Build with detailed output
npm run build -- --debug
```

### Vercel Deployment Issues
1. Ensure `vercel.json` is in root directory
2. Check environment variables in Vercel dashboard
3. Verify `.vercelignore` excludes test files
4. Run `npm run build` locally to verify production build works

---

## 📦 Dependencies Overview

### Core Dependencies
- `react` & `react-dom` - UI framework
- `react-router-dom` - Routing
- `react-hook-form` - Form management
- `@tanstack/react-query` - API state management

### UI & Styling
- `tailwindcss` - CSS framework
- `@radix-ui/*` - Headless UI components
- `class-variance-authority` - Component variants
- `framer-motion` - Animations
- `lucide-react` - Icon library

### Development
- `typescript` - Type checking
- `vite` - Build tool
- `eslint` - Code quality
- `tailwind-css` - Updated Tailwind CSS

---

## 🔐 Security

- No sensitive data stored in repository
- Environment variables separated from code
- Terser minification prevents code inspection
- Vercel HTTPS/SSL enabled by default

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact & Connect

### Get in Touch
- **Email**: [yogeshyemul2006@gmail.com](mailto:yogeshyemul2006@gmail.com)
- **Portfolio**: [yogeshyemul.vercel.app](https://yogeshyemul.vercel.app)

### Follow Me
- **GitHub**: [@YogeshYemul](https://github.com/YogeshYemul)
- **LinkedIn**: [Yogesh Yemul](https://linkedin.com/in/yogesh-yemul)
- **Twitter**: [@YogeshYemul](https://twitter.com/YogeshYemul)
- **LeetCode**: [Yogesh Yemul](https://leetcode.com/YogeshYemul)

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Vercel Docs](https://vercel.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

## ⚙️ System Requirements

| Requirement | Version |
|-------------|---------|
| Node.js | v16.0.0+ |
| npm | v7.0.0+ |
| TypeScript | 5.8+ |
| React | 18.3+ |
| Vite | 5.4+ |

---

## 🎯 Future Enhancements

- [ ] Blog section with markdown support
- [ ] Comments/feedback system
- [ ] Analytics integration
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] API backend integration
- [ ] CMS integration (Contentful, Sanity)

---

<div align="center">

### ⭐ If this project helped you, please star it!

Made with ❤️ by [Yogesh Yemul](https://yogeshyemul.vercel.app)

**Last Updated**: March 13, 2026

</div>

