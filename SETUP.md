# Security & Deployment Setup Guide

This portfolio project is configured to keep your EmailJS account credentials secure using environment variables, ensuring zero hardcoded secrets in the source code.

---

## 1. Required Environment Variables

The application requires three environment variables to send emails through EmailJS:

| Variable Name | Description | Example Format |
| :--- | :--- | :--- |
| `EMAILJS_PUBLIC_KEY` | Your EmailJS Account Public Key | `a1b2c3d4e5f6g7h8i` |
| `EMAILJS_SERVICE_ID` | Your connected Email Service ID | `service_xxxxxxx` |
| `EMAILJS_TEMPLATE_ID` | Your Email Template ID | `template_xxxxxxx` |

> Reference [.env.example](file:///c:/Users/sujal/OneDrive/Desktop/MyProjects/MyPortfolio/.env.example) for a clean template.

---

## 2. Where & How to Configure Credentials

### Production (Vercel Deployment)
When deployed to Vercel, the site automatically uses the built-in Vercel Serverless Function ([api/config.js](file:///c:/Users/sujal/OneDrive/Desktop/MyProjects/MyPortfolio/api/config.js)) to securely load credentials from Vercel Project Settings.

**Steps to configure in Vercel:**
1. Open your project on the [Vercel Dashboard](https://vercel.com/dashboard).
2. Go to **Settings** → **Environment Variables**.
3. Add the following variables for **Production**, **Preview**, and **Development** environments:
   - `EMAILJS_PUBLIC_KEY`
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
4. Click **Redeploy** on your latest deployment.
5. Zero source code changes are needed after deployment—your contact form will immediately start sending emails to your Gmail inbox!

### Local Development
To run the site locally without committing secrets:
1. Create a `.env.local` file in the root directory (this file is ignored by Git via `.gitignore`):
   ```env
   EMAILJS_PUBLIC_KEY=your_public_key_here
   EMAILJS_SERVICE_ID=your_service_id_here
   EMAILJS_TEMPLATE_ID=your_template_id_here
   ```
2. If using Vercel CLI locally, run `vercel dev`—it will automatically load your `.env.local` variables and serve `/api/config`.
3. Alternatively, for simple local browser previewing without a server, create an `env.js` file (which is also protected in `.gitignore`) and add:
   ```javascript
   window.ENV = {
     EMAILJS_PUBLIC_KEY: 'your_public_key_here',
     EMAILJS_SERVICE_ID: 'your_service_id_here',
     EMAILJS_TEMPLATE_ID: 'your_template_id_here'
   };
   ```
   And include `<script src="env.js"></script>` in `index.html` during local development.

---

## 3. Cloning & Setup Instructions

Whenever you or a collaborator clone this repository in the future:
1. Clone the repo:
   ```bash
   git clone https://github.com/sujalvk888/portfolio-website.git
   cd portfolio-website
   ```
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Add your actual credentials inside `.env.local`.
4. Deploy to Vercel with zero code modifications!
