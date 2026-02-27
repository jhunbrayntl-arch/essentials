# Deployment Guide - Essentials

This guide will help you deploy your Essentials clothing line website to Vercel.

## Quick Deploy (Recommended)

### 1-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/essentials)

Click the button above and follow the Vercel setup wizard.

## Manual Deployment

### Option 1: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Using GitHub/GitLab/Bitbucket

1. **Push your code to a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Essentials website"
   git branch -M main
   git remote add origin https://github.com/yourusername/essentials.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch will automatically deploy to production
   - Pull request previews are automatically created

### Option 3: Using Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your repository from GitHub, GitLab, or Bitbucket
4. Configure project settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (leave as default)
5. Click "Deploy"

## Environment Variables

If you need to add environment variables:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add your variables:
   - `NEXT_PUBLIC_SITE_URL` - Your production URL
   - Any API keys or secrets

## Custom Domain

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Add your custom domain (e.g., `essentials.com`)
4. Update your DNS records as instructed

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify images are loading
- [ ] Test contact form (if connected to backend)
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Set up custom domain (optional)
- [ ] Configure environment variables (if needed)

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel dashboard
2. Run `npm run build` locally to reproduce the issue
3. Ensure all TypeScript errors are fixed

### Images Not Loading

- The template uses Unsplash images with `unoptimized` prop
- For production, consider hosting images locally or using a CDN
- Add domains to `next.config.ts` if using external images

### 404 Errors

- Ensure all routes are properly defined
- Check that the `app` directory structure is correct

## Support

For Vercel-specific issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

For template issues, contact the development team.

---

**Ready to deploy?** Run `vercel` and launch your clothing line! 🚀
