document.addEventListener("DOMContentLoaded", () => {
  // ------------------------- PROJECT DATA -------------------------
  const projectsData = [
    { 
      title: "FinVise AI", 
      category: "fullstack", 
      img: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600", 
      desc: "AI-powered financial analysis platform providing real-time stock insights, intelligent market analysis, interactive visualisations, and AI-generated company summaries.",
      demoLink: "https://finvise-ai-one.vercel.app",
      githubLink: "https://github.com/sujalvk888/finvise-ai"
    },
    { 
      title: "Project Flow", 
      category: "fullstack", 
      img: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600", 
      desc: "Modern project management platform with task boards, collaboration, authentication, project organisation, and progress tracking.",
      demoLink: "https://project-manager-progress.vercel.app",
      githubLink: "https://github.com/sujalvk888/project-manager-app"
    },
    { 
      title: "Smart Budget Tracker", 
      category: "fullstack", 
      img: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600", 
      desc: "Personal finance management application with budgeting, expense tracking, analytics dashboards, and financial insights.",
      demoLink: "https://smart-budget-tracker-for-money-control.vercel.app",
      githubLink: "https://github.com/sujalvk888/smart-budget-tracker"
    },
    { 
      title: "DocScope AI", 
      category: "backend", 
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600", 
      desc: "AI-powered document assistant enabling intelligent document interaction, secure authentication, and productivity-focused workflows.",
      demoLink: "https://infi-docs-ai.vercel.app",
      githubLink: "https://github.com/sujalvk888/infidocs-ai"
    }
  ];

  const projectGrid = document.getElementById('projectGrid');
  
  // Render Projects Function
  function renderProjects(filter = 'all') {
    const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);
    
    projectGrid.innerHTML = filtered.map(proj => `
      <div class="project-card" data-category="${proj.category}">
        <div class="project-img-wrapper">
            <img src="${proj.img}" alt="${proj.title}" loading="lazy">
            <div class="project-overlay">
                <a href="${proj.demoLink}" target="_blank" rel="noopener noreferrer" class="overlay-btn demo-btn" onclick="event.stopPropagation()">Demo</a>
                <a href="${proj.githubLink}" target="_blank" rel="noopener noreferrer" class="overlay-btn github-btn" onclick="event.stopPropagation()"><i class="fab fa-github"></i> GitHub</a>
            </div>
        </div>
        <div class="project-info">
          ${proj.title}
          <p>${proj.desc}</p>
        </div>
      </div>
    `).join('');
    
    // Add Lightbox Effect
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const imgSrc = card.querySelector('img').src;
        const modalDiv = document.createElement('div');
        
        modalDiv.style.position = 'fixed'; 
        modalDiv.style.top = '0'; 
        modalDiv.style.left = '0'; 
        modalDiv.style.width = '100%'; 
        modalDiv.style.height = '100%';
        modalDiv.style.backgroundColor = 'rgba(0,0,0,0.9)'; 
        modalDiv.style.display = 'flex'; 
        modalDiv.style.alignItems = 'center'; 
        modalDiv.style.justifyContent = 'center';
        modalDiv.style.zIndex = '1000'; 
        modalDiv.style.cursor = 'pointer';
        
        modalDiv.innerHTML = `
            <img src="${imgSrc}" style="max-width:90%; max-height:90%; border-radius:15px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <span style="position:absolute; top:30px; right:40px; color:white; font-size:40px; font-weight:bold;">&times;</span>
        `;
        
        document.body.appendChild(modalDiv);
        modalDiv.onclick = () => modalDiv.remove();
      });
    });
  }
  
  // Initialize Portfolio
  renderProjects('all');

  // ---------- RESUME DOWNLOAD ANIMATION ----------
  const downloadBtn = document.getElementById('downloadResumeBtn');
  if (downloadBtn) {
      downloadBtn.addEventListener('click', (e) => {
          e.preventDefault();
          if (downloadBtn.classList.contains('downloading')) return;
          
          downloadBtn.classList.add('downloading');
          const progressBar = downloadBtn.querySelector('.progress-bar');
          const btnText = downloadBtn.querySelector('.btn-text');
          const originalText = btnText.innerHTML;
          
          btnText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
          
          let width = 0;
          const interval = setInterval(() => {
              width += 5;
              progressBar.style.width = width + '%';
              
              if (width >= 100) {
                  clearInterval(interval);
                  btnText.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
                  
                  // Trigger file download
                  const a = document.createElement('a');
                  a.href = 'Resume/Sujal_Resume.pdf'; // Setup your folder and PDF document here
                  a.download = 'Sujal_Resume.pdf';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  
                  setTimeout(() => {
                      progressBar.style.width = '0%';
                      btnText.innerHTML = originalText;
                      downloadBtn.classList.remove('downloading');
                  }, 2500);
              }
          }, 50); // 1 second total to complete animation (20 * 50ms)
      });
  }

  // ---------- CERTIFICATE CAROUSEL (Horizontal Motion) ----------
  const certificatesData = [
    { title: "No-code Machine Learning and Generative AI on AWS (2026)", org: "Amazon Web Services (AWS)", imgPath: "Certificates/Certificate 5.png", redirectUrl: "https://drive.google.com/file/d/1BVXpoM_MxFhWzUZ72Am5vymT9z8qj0Oc/view?usp=drivesdk" },
    { title: "AI for Students: Build Your Own Generative AI Model (2025)", org: "NxtWave", imgPath: "Certificates/Certificate 3.png", redirectUrl: "https://drive.google.com/file/d/1EjatPBEHc9wAT5l5jwlj-jg8lKZDi-Zu/view?usp=drivesdk" },
    { title: "Introduction to MongoDB (For Students)", org: "MongoDB", imgPath: "Certificates/Certificate 2.png", redirectUrl: "https://drive.google.com/file/d/1Ko43qLJEJ3uVzctqbRGJUVA6ku6D5W_O/view?usp=drivesdk" },
    { title: "Introduction to SQL", org: "Simplilearn SkillUp", imgPath: "Certificates/Certificate 1.png", redirectUrl: "https://drive.google.com/file/d/1Gf_a5_4-6yWdNpPFhkFjM5TSLwnmlWiZ/view?usp=drivesdk" },
    { title: "Git Training", org: "Spoken Tutorial (IIT Bombay)", imgPath: "Certificates/Certificate 4.png", redirectUrl: "https://drive.google.com/file/d/1HAGiQIB1oOsn-Lzbyua_i_qzJ8nvc4bh/view?usp=drivesdk" }
  ];
  
  let currentCertIndex = 0;
  const carouselContainer = document.getElementById('certificateCarousel');
  
  function renderCertificateCarousel(animationClass = 'slide-next') {
    const cert = certificatesData[currentCertIndex];
    
    carouselContainer.innerHTML = `
      <div class="carousel-wrapper">
        <button class="carousel-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>
        <div class="carousel-card ${animationClass}">
          <img src="${cert.imgPath}" alt="${cert.title}" class="cert-image" onerror="this.src='https://placehold.co/600x400?text=Certificate+Image'">
          <div class="cert-details">
            <h4>${cert.title}</h4>
            <p>${cert.org}</p>
            <a href="${cert.redirectUrl}" target="_blank" class="cert-redirect-btn"><i class="fas fa-external-link-alt"></i> View Certificate</a>
          </div>
        </div>
        <button class="carousel-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>
      </div>
      <div class="carousel-indicator">${currentCertIndex + 1} / ${certificatesData.length}</div>
    `;
    
    // Bind click events to arrows
    document.querySelector('.prev-arrow')?.addEventListener('click', () => {
      currentCertIndex = (currentCertIndex - 1 + certificatesData.length) % certificatesData.length;
      renderCertificateCarousel('slide-prev');
    });
    
    document.querySelector('.next-arrow')?.addEventListener('click', () => {
      currentCertIndex = (currentCertIndex + 1) % certificatesData.length;
      renderCertificateCarousel('slide-next');
    });
  }
  
  // Initial render
  renderCertificateCarousel('slide-next');

  // ---------- SCROLL SPY & SMOOTH SCROLLING ----------
  const sections = document.querySelectorAll('.section-card');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Highlight active link based on scroll position
  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').substring(1);
      if (href === current) link.classList.add('active');
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav(); // Call once on load

  // Smooth scrolling for navigation and inner links
  document.querySelectorAll('.nav-link, .btn-yellow[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if(targetId && targetId !== '#') {
        e.preventDefault();
        const targetElem = document.querySelector(targetId);
        if(targetElem) {
            targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ---------- MOBILE NAVIGATION MENU TOGGLE ----------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const leftSidebar = document.querySelector('.left-sidebar');
  if (mobileMenuBtn && leftSidebar) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      leftSidebar.classList.toggle('mobile-open');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (leftSidebar.classList.contains('mobile-open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close mobile menu when clicking any nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (leftSidebar.classList.contains('mobile-open')) {
          leftSidebar.classList.remove('mobile-open');
          const icon = mobileMenuBtn.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (leftSidebar.classList.contains('mobile-open') && !leftSidebar.contains(e.target)) {
        leftSidebar.classList.remove('mobile-open');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });

    // ---------- MOBILE COMPACT SCROLL BEHAVIOR ----------
    const homeSection = document.getElementById('home');
    function handleMobileNavScroll() {
      if (!homeSection || !leftSidebar) return;
      if (window.innerWidth <= 992) {
        const threshold = (homeSection.offsetTop + homeSection.offsetHeight) - 100;
        if (window.scrollY > threshold) {
          leftSidebar.classList.add('scrolled-compact');
        } else {
          leftSidebar.classList.remove('scrolled-compact');
        }
      } else {
        leftSidebar.classList.remove('scrolled-compact');
      }
    }

    window.addEventListener('scroll', handleMobileNavScroll, { passive: true });
    window.addEventListener('resize', handleMobileNavScroll);
    handleMobileNavScroll();
  }

  // ---------- EMAILJS ENVIRONMENT CONFIGURATION ----------
  // Credentials are loaded dynamically from environment variables or Vercel Serverless API (/api/config)
  async function getEmailJSConfig() {
    // 1. Check window.ENV (for local dev via optional gitignored env.js)
    if (typeof window !== 'undefined' && window.ENV && window.ENV.EMAILJS_PUBLIC_KEY) {
      return {
        PUBLIC_KEY: window.ENV.EMAILJS_PUBLIC_KEY,
        SERVICE_ID: window.ENV.EMAILJS_SERVICE_ID,
        TEMPLATE_ID: window.ENV.EMAILJS_TEMPLATE_ID
      };
    }

    // 2. Check process.env / import.meta.env (if bundled or build-injected)
    if (typeof process !== 'undefined' && process.env && (process.env.EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY)) {
      return {
        PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY,
        SERVICE_ID: process.env.EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID,
        TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID
      };
    }

    // 3. Try fetching from Vercel Serverless API endpoint (/api/config)
    try {
      const res = await fetch('/api/config');
      if (res.ok) {
        const config = await res.json();
        if (config && config.PUBLIC_KEY) {
          return config;
        }
      }
    } catch (err) {
      // Silently fallback if /api/config is not available locally
    }

    return {
      PUBLIC_KEY: '',
      SERVICE_ID: '',
      TEMPLATE_ID: ''
    };
  }

  // Pre-initialize EmailJS if public key is available immediately
  if (typeof emailjs !== 'undefined') {
    getEmailJSConfig().then((config) => {
      if (config.PUBLIC_KEY) {
        try {
          emailjs.init({ publicKey: config.PUBLIC_KEY });
        } catch (e) {
          console.warn('EmailJS SDK initialization check:', e);
        }
      }
    });
  }

  // ---------- TOAST NOTIFICATION SYSTEM ----------
  function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.setAttribute('role', type === 'error' ? 'alert' : 'status');
    toast.setAttribute('aria-live', 'polite');

    const iconClass = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    const titleText = type === 'success' ? 'Success!' : 'Notice';

    toast.innerHTML = `
      <i class="fas ${iconClass} toast-icon" aria-hidden="true"></i>
      <div class="toast-content">
        <div class="toast-title">${titleText}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button type="button" class="toast-close" aria-label="Close notification">&times;</button>
    `;

    toastContainer.appendChild(toast);

    // Force reflow for animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    const closeBtn = toast.querySelector('.toast-close');
    const dismiss = () => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 400);
    };

    closeBtn.addEventListener('click', dismiss);
    setTimeout(dismiss, 6000);
  }

  // ---------- CONTACT FORM VALIDATION & EMAILJS INTEGRATION ----------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const botCheckInput = document.getElementById('botCheck');
    const submitBtn = document.getElementById('submitBtn');

    let isSubmitting = false;

    // Helper: Sanitize input to prevent HTML/JS injection and unexpected formatting
    function sanitizeInput(text) {
      if (!text || typeof text !== 'string') return '';
      return text
        .replace(/[\x00-\x1F\x7F-\x9F]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
    }

    // Helper: Detect obvious keyboard mashing patterns
    function isKeyboardPattern(text) {
      if (!text || typeof text !== 'string') return false;
      const lower = text.trim().toLowerCase();
      const keyboardPatterns = [
        'asdf', 'qwerty', 'zxcv', 'qwer', 'asdfgh', 'jkl;', 'uiop',
        'ghjk', 'vbnm', '12345', '123456', '0000', '1111'
      ];
      return keyboardPatterns.some(pat => lower === pat || lower === pat + pat || lower.includes(pat + pat));
    }

    // Helper: Detect repeated single characters (e.g., 'aaaaaaaaaa', '@@@@@@', '111111')
    function hasRepeatedCharacters(text) {
      if (!text || typeof text !== 'string') return false;
      const trimmed = text.trim().toLowerCase();
      // Check for 5+ identical consecutive characters (e.g. 'aaaaa', '@@@@@', '11111')
      if (/(.)\1{4,}/.test(trimmed)) return true;
      // Check for single-character dominance in short/medium strings (e.g., 'aaaaaaa')
      const noSpace = trimmed.replace(/\s/g, '');
      if (noSpace.length >= 5) {
        const charCounts = {};
        for (let char of noSpace) {
          charCounts[char] = (charCounts[char] || 0) + 1;
        }
        const maxCount = Math.max(...Object.values(charCounts));
        if (maxCount / noSpace.length > 0.70) return true;
      }
      return false;
    }

    // Helper: Detect repeated words (e.g., 'test test test')
    function hasRepeatedWords(text) {
      if (!text || typeof text !== 'string') return false;
      const words = text.trim().toLowerCase().split(/\s+/).filter(Boolean);
      return words.length >= 3 && new Set(words).size === 1;
    }

    // Cooldown Timer for Spam Prevention
    const COOLDOWN_SECONDS = 45;
    const LAST_SUBMIT_KEY = 'EMAILJS_LAST_SUBMIT_TIME';

    function isCooldownActive() {
      const lastSubmit = sessionStorage.getItem(LAST_SUBMIT_KEY);
      if (!lastSubmit) return false;
      const elapsed = (Date.now() - parseInt(lastSubmit, 10)) / 1000;
      return elapsed < COOLDOWN_SECONDS;
    }

    function startCooldown() {
      sessionStorage.setItem(LAST_SUBMIT_KEY, Date.now().toString());
    }

    // Helper to set or clear a field's error state
    function setFieldError(inputEl, errorId, errorText) {
      if (!inputEl) return;
      const errorEl = document.getElementById(errorId);
      if (errorText) {
        inputEl.classList.add('input-error');
        inputEl.setAttribute('aria-invalid', 'true');
        if (errorEl) errorEl.textContent = errorText;
      } else {
        inputEl.classList.remove('input-error');
        inputEl.setAttribute('aria-invalid', 'false');
        if (errorEl) errorEl.textContent = '';
      }
    }

    // Real-time: re-validate while the user corrects a field already marked invalid
    const fields = [
      { input: nameInput,    errId: 'nameError' },
      { input: emailInput,   errId: 'emailError' },
      { input: subjectInput, errId: 'subjectError' },
      { input: messageInput, errId: 'messageError' }
    ];

    fields.forEach(({ input, errId }) => {
      if (!input) return;
      input.addEventListener('input', () => {
        if (input.classList.contains('input-error')) validateField(input, errId);
      });
      input.addEventListener('blur', () => validateField(input, errId));
    });

    // Lightweight, explicit validation — no semantic/AI checks
    function validateField(inputEl, errorId) {
      if (!inputEl) return false;
      // Normalise: trim edges + collapse internal whitespace
      const val = inputEl.value.trim().replace(/\s+/g, ' ');
      const attr = inputEl.getAttribute('name');

      // ── NAME ────────────────────────────────────────────────────────────
      if (attr === 'name') {
        if (!val || val.length < 2) {
          setFieldError(inputEl, errorId, 'Please enter your full name.');
          return false;
        }
        if (val.length > 50) {
          setFieldError(inputEl, errorId, 'Name cannot exceed 50 characters.');
          return false;
        }
        if (/\d/.test(val)) {
          setFieldError(inputEl, errorId, 'Name cannot contain numbers.');
          return false;
        }
        if (!/^[a-zA-Z\s\-']+$/.test(val)) {
          setFieldError(inputEl, errorId, 'Name can only contain letters, spaces, hyphens, and apostrophes.');
          return false;
        }
        if (isKeyboardPattern(val) || hasRepeatedCharacters(val)) {
          setFieldError(inputEl, errorId, 'Please avoid random or repeated characters.');
          return false;
        }
        setFieldError(inputEl, errorId, '');
        return true;
      }

      // ── EMAIL ───────────────────────────────────────────────────────────
      if (attr === 'email') {
        if (!val) {
          setFieldError(inputEl, errorId, 'Please enter your email address.');
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          setFieldError(inputEl, errorId, 'Please enter a valid email address.');
          return false;
        }
        setFieldError(inputEl, errorId, '');
        return true;
      }

      // ── SUBJECT ─────────────────────────────────────────────────────────
      if (attr === 'subject') {
        if (!val || val.length < 5) {
          setFieldError(inputEl, errorId, 'Subject must be at least 5 characters.');
          return false;
        }
        if (val.length > 100) {
          setFieldError(inputEl, errorId, 'Subject cannot exceed 100 characters.');
          return false;
        }
        if (/^\d+$/.test(val)) {
          setFieldError(inputEl, errorId, 'Subject cannot contain only numbers.');
          return false;
        }
        if (/^[^\w\s]+$/.test(val)) {
          setFieldError(inputEl, errorId, 'Subject cannot contain only symbols.');
          return false;
        }
        if (isKeyboardPattern(val) || hasRepeatedCharacters(val) || hasRepeatedWords(val)) {
          setFieldError(inputEl, errorId, 'Please avoid random or repeated characters.');
          return false;
        }
        setFieldError(inputEl, errorId, '');
        return true;
      }

      // ── MESSAGE ─────────────────────────────────────────────────────────
      if (attr === 'message') {
        if (!val || val.length < 20) {
          setFieldError(inputEl, errorId, 'Message must be at least 20 characters.');
          return false;
        }
        if (val.length > 1000) {
          setFieldError(inputEl, errorId, 'Message cannot exceed 1000 characters.');
          return false;
        }
        if (/^\d+$/.test(val)) {
          setFieldError(inputEl, errorId, 'Message cannot contain only numbers.');
          return false;
        }
        if (/^[^\w\s]+$/.test(val)) {
          setFieldError(inputEl, errorId, 'Message cannot contain only symbols.');
          return false;
        }
        if (isKeyboardPattern(val) || hasRepeatedCharacters(val) || hasRepeatedWords(val)) {
          setFieldError(inputEl, errorId, 'Please avoid random or repeated characters.');
          return false;
        }
        setFieldError(inputEl, errorId, '');
        return true;
      }

      return true;
    }

    function validateForm() {
      const isNameValid = validateField(nameInput, 'nameError');
      const isEmailValid = validateField(emailInput, 'emailError');
      const isSubjectValid = validateField(subjectInput, 'subjectError');
      const isMessageValid = validateField(messageInput, 'messageError');

      // Auto-focus first invalid field while preserving all entered values
      const firstInvalid = [
        { el: nameInput, valid: isNameValid },
        { el: emailInput, valid: isEmailValid },
        { el: subjectInput, valid: isSubjectValid },
        { el: messageInput, valid: isMessageValid }
      ].find(item => !item.valid);

      if (firstInvalid && firstInvalid.el && typeof firstInvalid.el.focus === 'function') {
        firstInvalid.el.focus();
      }

      return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
    }

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // 1. Spam protection honeypot check
      if (botCheckInput && botCheckInput.value.trim() !== '') {
        // Silently ignore submission if honeypot is filled
        return;
      }

      // 2. Client-side cooldown timer check (30-60 seconds)
      if (isCooldownActive()) {
        showToast(`Please wait ${COOLDOWN_SECONDS} seconds before sending another message to prevent spam.`, 'error');
        return;
      }

      // 3. Client-side field validation
      if (!validateForm()) {
        return;
      }

      // 4. Prevent duplicate submissions
      if (isSubmitting) return;
      isSubmitting = true;

      // 5. Show loading state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> SENDING...';

      // 6. Sanitize user inputs to prevent HTML/JS injection or formatting issues
      const cleanName    = sanitizeInput(nameInput    ? nameInput.value    : '');
      const cleanEmail   = sanitizeInput(emailInput   ? emailInput.value   : '');
      const cleanSubject = sanitizeInput(subjectInput ? subjectInput.value : '');
      const cleanMessage = sanitizeInput(messageInput ? messageInput.value : '');

      // 7. Derive avatar initial from first character of the name (e.g. "Sarah Johnson" → "S")
      const initial = cleanName.trim().charAt(0).toUpperCase() || '?';

      // 8. Build parameters supporting standard EmailJS template variable names
      const templateParams = {
        name:       cleanName,
        from_name:  cleanName,
        email:      cleanEmail,
        from_email: cleanEmail,
        subject:    cleanSubject,
        message:    cleanMessage,
        initial:    initial
      };

      try {
        if (typeof emailjs === 'undefined') {
          throw new Error('EmailJS SDK not loaded.');
        }

        const config = await getEmailJSConfig();
        if (!config.SERVICE_ID || !config.TEMPLATE_ID || !config.PUBLIC_KEY) {
          throw new Error('Please configure your EmailJS environment variables (EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID).');
        }

        await emailjs.send(
          config.SERVICE_ID,
          config.TEMPLATE_ID,
          templateParams,
          config.PUBLIC_KEY
        );

        // Start spam cooldown timer
        startCooldown();

        // Success handling
        showToast('Message sent successfully! Thank you for reaching out. I\'ll get back to you as soon as possible.', 'success');
        contactForm.reset();
        fields.forEach(({ input, errId }) => setFieldError(input, errId, ''));
      } catch (err) {
        console.error('EmailJS Send Error:', err);
        const errorMsg = 'Failed to send message. Please try again later or email me directly at sujal.vk888@gmail.com.';
        showToast(errorMsg, 'error');
      } finally {
        isSubmitting = false;
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  }
});