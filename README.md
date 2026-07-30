# Sujal's Professional Portfolio Website

A modern, responsive, glassmorphic portfolio website showcasing skills, projects, certificates, and a secure client-side contact form powered by **EmailJS**.

## Features

- **Dynamic UI & Animations**: Built with vanilla HTML5, CSS3, and JavaScript featuring smooth animations, responsive mobile navigation, and interactive glassmorphic styling.
- **Production-Ready Contact Form**: 
  - Direct delivery to Gmail via **EmailJS** without requiring any custom backend server.
  - Intelligent low-quality & spam content detection.
  - Client-side input sanitization against HTML/JS injection.
  - Multi-layer spam prevention with honeypot field and 45-second submission cooldown.
  - Responsive glassmorphic toast notification system.

---

## Security & Deployment Setup

This project is structured for secure deployment to **Vercel** without exposing any API keys or credentials in the source code.

> [!IMPORTANT]
> **Zero Hardcoded Credentials**: All EmailJS credentials are loaded dynamically via environment variables or Vercel Serverless API (`/api/config`).

For complete instructions on configuring your environment variables (`EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`) on Vercel and local development, see **[SETUP.md](file:///c:/Users/sujal/OneDrive/Desktop/MyProjects/MyPortfolio/SETUP.md)**.

---

## License

All rights reserved.
