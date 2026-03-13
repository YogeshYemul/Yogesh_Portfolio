# Vercel Deployment Guide

## Project Status
✅ Your portfolio is fully optimized for Vercel deployment!

## Pre-Deployment Checklist

### 1. Environment Variables
Set these in your Vercel project settings:
- `VITE_API_URL` - Backend API URL (if needed)

To add environment variables:
1. Go to Vercel dashboard → Settings → Environment Variables
2. Add any required environment variables from your `.env.local` file

### 2. Build Configuration
✅ Verified settings:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `./dist`
- **Install Command**: `npm install`

### 3. Key Optimizations Applied

#### a) Vite Configuration (vite.config.ts)
- ✅ Production build minification enabled
- ✅ Code splitting configured (Radix UI, React, React Query)
- ✅ Source maps disabled for smaller bundle size
- ✅ Target: ES2020 for modern browsers

#### b) Vercel Configuration (vercel.json)
- ✅ SPA routing configured (all routes → index.html)
- ✅ Cache headers set for assets (31536000s = 1 year)
- ✅ Deployment enabled

#### c) Build Optimization (.vercelignore)
- ✅ Excludes unnecessary files from deployment
- ✅ Reduces build time and deployment size

## Local Testing Before Deployment

### Test Production Build Locally
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

### Verify Build Output
```bash
# Check build size and contents
ls -la dist/
```

## Deployment Steps

### Option 1: Vercel Dashboard
1. Push code to GitHub/GitLab/Bitbucket
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your repository
5. Framework: Vite (auto-detected)
6. Click "Deploy"

### Option 2: Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment

### Monitor Your Site
- **Vercel Analytics**: Available in Vercel dashboard
- **Build Logs**: Check for any warnings (should be minimal)
- **Lighthouse Score**: Aim for 90+ performance

### Performance Tips
1. **Images**: Optimize with Next.js Image or similar
2. **Fonts**: Use system fonts or optimized web fonts
3. **Code Splitting**: Already configured in vite.config.ts
4. **Lazy Loading**: Consider React.lazy() for route components

## Common Issues & Solutions

### Issue: Routes not working after deployment
**Solution**: Already configured in vercel.json with SPA rewrites

### Issue: Large bundle size
**Solution**: Check `npm run build` output for largest packages
```bash
npm install --save-dev vite-plugin-visualizer
```

### Issue: Environment variables not loading
**Solution**: Ensure variables are prefixed with `VITE_` and set in Vercel dashboard

## Build Output Information

### Expected Build Size
- Typical React + Vite project: 100-300KB (gzipped)
- With all Radix UI components: 150-250KB (gzipped)

### Scripts Available
```bash
npm run dev          # Development server
npm run build        # Production build
npm run build:dev    # Development build (for debugging)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Watch mode tests
```

## Verify Configuration Files

### Key Files for Vercel:
- ✅ `vercel.json` - Deployment configuration
- ✅ `.vercelignore` - Files to exclude
- ✅ `vite.config.ts` - Build configuration
- ✅ `package.json` - Dependencies and scripts
- ✅ `tsconfig.json` - TypeScript configuration

## Support

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- React Router Docs: https://reactrouter.com

---

**Last Updated**: March 13, 2026
**Status**: ✅ Ready for Deployment
