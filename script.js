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

  // ---------- CONTACT FORM ----------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✨ Thanks for reaching out! Your message has been sent successfully.');
        contactForm.reset();
      });
  }
});