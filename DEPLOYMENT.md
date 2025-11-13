# 🚀 Portfolio Deployment Guide

## Quick Start - Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free - sign up at vercel.com)

---

## Method 1: Deploy with Vercel (Easiest - 5 minutes)

### Step 1: Push to GitHub

1. **Create a new repository on GitHub**
   - Go to: https://github.com/new
   - Repository name: `portfolio`
   - Description: "My professional portfolio built with Next.js"
   - Keep it **Public** (for free hosting)
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Connect local repo to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Deploy on Vercel

1. **Sign up/Login to Vercel**
   - Go to: https://vercel.com
   - Click "Sign Up" → Continue with GitHub
   - Authorize Vercel to access your repositories

2. **Import Project**
   - Click "Add New..." → "Project"
   - Find your `portfolio` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)

4. **Environment Variables** (IMPORTANT!)
   Click "Environment Variables" and add:
   
   ```
   RESEND_API_KEY=re_NWEq4a5f_6uWYKj1WGXSC6kHbEQoaUHN3
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://your-portfolio-xyz.vercel.app`

### Step 3: Custom Domain (Optional)

1. **Buy a domain** (optional)
   - Recommended: Namecheap, GoDaddy, or Google Domains
   - Cost: $10-15/year for .com

2. **Add domain in Vercel**
   - Go to your project → Settings → Domains
   - Add your domain (e.g., `yoganathan.dev`)
   - Follow Vercel's instructions to update DNS records

3. **Free subdomain alternative**
   - Use Vercel's free subdomain: `your-name.vercel.app`
   - Or request custom subdomain in Vercel settings

---

## Method 2: Netlify (Alternative)

### Deploy to Netlify

1. **Sign up at Netlify**
   - Go to: https://www.netlify.com
   - Sign up with GitHub

2. **Import from GitHub**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub → Select your portfolio repo

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Environment Variables**
   Add in Site settings → Build & Deploy → Environment:
   ```
   RESEND_API_KEY=re_NWEq4a5f_6uWYKj1WGXSC6kHbEQoaUHN3
   ```

5. **Deploy**
   - Click "Deploy site"
   - Your site will be live at: `random-name.netlify.app`

---

## Method 3: Manual Deployment (VPS/Traditional Hosting)

### Requirements
- VPS (DigitalOcean, AWS, Linode) or shared hosting with Node.js support
- SSH access

### Steps

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Upload files via SSH/FTP**
   Upload these folders/files:
   - `.next/` folder
   - `public/` folder
   - `package.json`
   - `package-lock.json`
   - `next.config.ts`

3. **Install dependencies on server**
   ```bash
   npm install --production
   ```

4. **Set environment variables**
   Create `.env.production`:
   ```
   RESEND_API_KEY=re_NWEq4a5f_6uWYKj1WGXSC6kHbEQoaUHN3
   ```

5. **Start the server**
   ```bash
   npm run start
   ```

6. **Use PM2 for process management** (recommended)
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

---

## Post-Deployment Checklist

### ✅ Essential Checks

- [ ] **Test all pages**
  - Home page loads correctly
  - About page displays properly
  - Projects page works
  - Skills page shows icons
  - Contact form sends emails
  - Resume page displays

- [ ] **Test contact form**
  - Submit a test message
  - Check if email arrives at `iamyoganathanc@gmail.com`
  - Verify auto-reply is sent

- [ ] **Check mobile responsiveness**
  - Open site on phone
  - Test navigation menu
  - Verify images load

- [ ] **Verify SEO**
  - Check page titles in browser tab
  - View page source - verify meta tags
  - Test social media preview (LinkedIn, Twitter)

- [ ] **Performance check**
  - Run Lighthouse audit in Chrome DevTools
  - Target: 90+ score in all categories

### 🔧 Configuration Updates

**Update these URLs in your code:**

1. **app/layout.tsx** - Line 17
   ```typescript
   metadataBase: new URL("https://your-actual-domain.vercel.app"),
   ```

2. **app/layout.tsx** - Line 57
   ```typescript
   url: "https://your-actual-domain.vercel.app",
   ```

3. **Social media links**
   Update all placeholder links:
   - Instagram: Line in ContactPageWrapper.tsx
   - Freelancer: Line in ContactPageWrapper.tsx
   - Calendar booking: Update cal.com link if you have one

---

## Continuous Deployment (Auto-Deploy)

Once connected to Vercel/Netlify:

1. **Make changes locally**
   ```bash
   git add .
   git commit -m "Update project description"
   git push origin main
   ```

2. **Automatic deployment**
   - Vercel/Netlify detects the push
   - Automatically builds and deploys
   - Live site updates in 2-3 minutes

---

## Troubleshooting

### Build Fails on Vercel

**Problem**: Build fails with module errors

**Solution**:
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# Commit and push
git add .
git commit -m "Fix dependencies"
git push
```

### Contact Form Not Working

**Problem**: Form submits but no email received

**Solutions**:
1. Verify `RESEND_API_KEY` is set in Vercel environment variables
2. Check Resend dashboard for delivery status
3. Check spam folder
4. Verify email address in `app/api/contact/route.ts` line 161

### Images Not Loading

**Problem**: Profile picture or icons missing

**Solutions**:
1. Verify images exist in `public/` folder
2. Check image paths are absolute (start with `/`)
3. Verify image filenames match exactly (case-sensitive)

### Slow Loading

**Problem**: Site loads slowly

**Solutions**:
1. Optimize images (convert to WebP)
2. Enable Vercel Edge Network (automatic)
3. Check Vercel Analytics for bottlenecks

---

## Performance Optimization

### After Deployment

1. **Enable Vercel Analytics** (Free)
   - Go to project → Analytics tab
   - Click "Enable Analytics"
   - Monitor real user performance

2. **Set up monitoring**
   - Install Sentry for error tracking (optional)
   - Use Vercel Speed Insights

3. **Optimize images**
   ```bash
   npm install sharp
   ```
   This enables automatic image optimization

---

## Custom Domain Setup

### Using Namecheap (Example)

1. **Buy domain at Namecheap**
   - Search for available domain
   - Purchase (around $10-15/year)

2. **Add domain in Vercel**
   - Project → Settings → Domains
   - Click "Add"
   - Enter your domain: `yourdomain.com`

3. **Update DNS in Namecheap**
   - Go to Domain List → Manage → Advanced DNS
   - Add these records:
   
   ```
   Type    Host    Value                   TTL
   A       @       76.76.21.21            Automatic
   CNAME   www     cname.vercel-dns.com   Automatic
   ```

4. **Wait for DNS propagation** (5 minutes - 48 hours)
   - Check status in Vercel dashboard
   - Usually works within 10-30 minutes

---

## Backup Strategy

### Regular Backups

1. **Keep code in GitHub** (automatic)
2. **Export contact submissions**
   - Download `contact-submissions.json` regularly
   - Or set up database for permanent storage

3. **Backup environment variables**
   - Keep `.env.example` updated
   - Store actual keys in password manager

---

## Analytics Setup (Optional)

### Google Analytics

1. **Create GA4 property**
   - Go to: https://analytics.google.com
   - Create new property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to portfolio**
   Update `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Install package**
   ```bash
   npm install @next/third-parties
   ```

4. **Add to layout.tsx**
   ```typescript
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   // In body:
   <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
   ```

---

## Support

### Helpful Links

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Resend Documentation**: https://resend.com/docs
- **Vercel Discord**: https://vercel.com/discord

### Contact

If you need help with deployment:
- Check Vercel/Netlify logs for error messages
- Search error messages in Google
- Ask in Vercel Discord community

---

## Cost Breakdown

### Free Tier (Recommended for Portfolio)

**Vercel Free Plan:**
- ✅ Unlimited projects
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Analytics included
- ✅ Perfect for portfolios

**Resend Free Plan:**
- ✅ 100 emails/day
- ✅ 3,000 emails/month
- ✅ More than enough for contact form

**Total Cost: $0/month**

### Optional Upgrades

- **Custom domain**: $10-15/year (one-time annual)
- **Vercel Pro**: $20/month (if you need more bandwidth)
- **Resend Pro**: $20/month (if you need >3k emails)

---

## Going Live Announcement

### Share Your Portfolio

Once deployed, share on:

1. **LinkedIn**
   ```
   🚀 Excited to share my new portfolio!
   
   Check out my latest projects featuring:
   • Flutter Messenger App with real-time chat
   • AI-powered Language Learning App
   • Expense Tracker with Firebase
   
   Built with Next.js, TypeScript, and Tailwind CSS
   
   🔗 https://your-domain.vercel.app
   
   #Flutter #NextJS #WebDevelopment #Portfolio
   ```

2. **GitHub README**
   Add badges and live link

3. **Resume**
   Add portfolio URL

4. **Email signature**
   Link to portfolio

---

## Next Steps After Deployment

- [ ] Share portfolio link on social media
- [ ] Add to resume/CV
- [ ] Submit to job applications
- [ ] Add to LinkedIn profile
- [ ] Set up Google Analytics
- [ ] Monitor Vercel Analytics
- [ ] Collect feedback
- [ ] Keep adding new projects

---

**Your portfolio is ready to impress! 🎉**
