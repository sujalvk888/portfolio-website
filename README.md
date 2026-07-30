<div align="center">

# Sujal V Kanchan — Portfolio Website

### AI Specialist & Full Stack Developer

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-sujal-portfolio-sigmaverse.vercel.app-black?style=for-the-badge&logo=vercel&logoColor=white)](https://sujal-portfolio-sigmaverse.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sujal-v-kanchan)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sujalvk888)
[![Email](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sujal.vk888@gmail.com)

---

*A modern, responsive, glassmorphic portfolio website showcasing skills, projects, certifications, and a production-ready secure contact form powered by EmailJS.*

</div>

---

## ✨ Live Preview

> **🔗 [https://sujalvk.vercel.app](https://sujal-portfolio-sigmaverse.vercel.app)**

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🎨 **Premium Design** | Glassmorphic UI with smooth animations, hover effects, and micro-interactions |
| 📱 **Fully Responsive** | Mobile-first layout with an animated slide-in sidebar navigation |
| 📧 **Secure Contact Form** | EmailJS integration — sends directly to Gmail, zero backend required |
| 🛡️ **Spam Protection** | Honeypot field, 45-second submission cooldown, and intelligent content filtering |
| ✅ **Smart Validation** | Real-time field validation with keyboard pattern detection and helpful error messages |
| 🔒 **No Hardcoded Secrets** | All credentials loaded dynamically via environment variables |
| ⚡ **Vercel-Ready** | One-click deployment with zero configuration changes needed |
| 🔍 **SEO Optimised** | Open Graph, Twitter Cards, JSON-LD structured data, and semantic HTML5 |
| ♿ **Accessible** | ARIA labels, live regions, keyboard navigation, and screen reader support |
| 📜 **Certificate Carousel** | Auto-advancing interactive certificate showcase with touch support |
| 🗂️ **Project Gallery** | Filterable project grid rendered dynamically from JavaScript |
| 📄 **Resume Download** | Animated progress bar download button for the resume PDF |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Structure** | HTML5, Semantic Elements |
| **Styling** | Vanilla CSS3, CSS Variables, Glassmorphism, Flexbox, Grid |
| **Logic** | Vanilla JavaScript (ES2022+), Async/Await |
| **Email Service** | [EmailJS](https://www.emailjs.com/) — client-side email sending |
| **Deployment** | [Vercel](https://vercel.com/) + Vercel Serverless Functions (`/api/config`) |
| **Icons** | Font Awesome 6 |
| **Fonts** | Google Fonts — Barlow Condensed, Montserrat |

---

## 📁 Project Structure

```
portfolio-website/
│
├── index.html              # Main HTML — all sections (Home, About, Skills, Portfolio, Certificates, Contact)
├── style.css               # Complete stylesheet — glassmorphism, animations, responsive layout
├── script.js               # All interactivity — navigation, validation, EmailJS, carousel, project grid
│
├── api/
│   └── config.js           # Vercel Serverless Function — securely serves EmailJS credentials
│
├── images/                 # Profile images and illustrations
├── illustration/           # SVG & graphic assets
├── Certificates/           # Certificate images for the carousel
├── Resume/                 # Downloadable resume PDF
│
├── .env.example            # Template for required environment variables
├── .gitignore              # Protects .env, env.js, and other secret files from Git
├── SETUP.md                # Detailed deployment and environment configuration guide
└── README.md               # This file
```

---

## 📬 Contact Form — How It Works

The contact section uses a fully **client-side EmailJS** integration with no backend server required.

```
Visitor fills form → Client-side validation → EmailJS SDK → Gmail inbox
```

**Security layers implemented:**
- 🍯 **Honeypot field** — silently blocks automated bots
- ⏱️ **45-second cooldown** — prevents duplicate/rapid submissions
- 🔡 **Keyboard pattern detection** — rejects `asdf`, `qwerty`, `123456`, etc.
- 🔁 **Repeated character detection** — rejects `aaaaaaa`, `@@@@@`, `111111`
- 📝 **Smart content filters** — blocks numbers-only, symbols-only, or emoji-only input
- 🧹 **Input sanitisation** — strips control characters, collapses spaces, escapes HTML
- 🎯 **Auto-focus** — cursor jumps to the first invalid field automatically

---

## ⚙️ Environment Variables

All credentials are stored in environment variables — **never hardcoded**.

| Variable | Description |
|---|---|
| `EMAILJS_PUBLIC_KEY` | Your EmailJS account public key |
| `EMAILJS_SERVICE_ID` | Your connected email service ID |
| `EMAILJS_TEMPLATE_ID` | Your email template ID |

> Copy `.env.example` to `.env.local` and fill in your values for local development.

---

## 🚀 Deployment (Vercel)

Deploying takes under 5 minutes:

1. **Fork or clone** this repository
2. **Import** the project into [Vercel](https://vercel.com/new)
3. In **Settings → Environment Variables**, add:
   ```
   EMAILJS_PUBLIC_KEY   = your_public_key
   EMAILJS_SERVICE_ID   = your_service_id
   EMAILJS_TEMPLATE_ID  = your_template_id
   ```
4. Click **Redeploy** — done! ✅

> No source code changes are required after deployment. The same codebase works in both local development and production.

For detailed instructions, see **[SETUP.md](./SETUP.md)**.

---

## 💻 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/sujalvk888/portfolio-website.git
cd portfolio-website

# 2. Create your local environment file
cp .env.example .env.local
# Add your actual EmailJS credentials to .env.local

# 3. Serve locally (using VS Code Live Server, or any static file server)
# Open index.html in your browser — OR use Vercel CLI for full API support:
npx vercel dev
```

---

## 📞 Contact

Feel free to reach out — I'm open to full-time roles, freelance projects, research collaborations, and internship opportunities.

| Channel | Link |
|---|---|
| 🌐 Portfolio | [sujalvk.vercel.app](https://sujalvk.vercel.app) |
| 📧 Email | [sujal.vk888@gmail.com](mailto:sujal.vk888@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/sujal-v-kanchan](https://www.linkedin.com/in/sujal-v-kanchan) |
| 🐙 GitHub | [github.com/sujalvk888](https://github.com/sujalvk888) |
| 📍 Location | Karnataka, India |

---

<div align="center">

**© 2026 Sujal V Kanchan · All Rights Reserved**

*Built with ❤️ using HTML5, CSS3, and Vanilla JavaScript*

</div>
