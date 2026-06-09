document.addEventListener("DOMContentLoaded", () => {
  // ------------------------- PROJECT DATA -------------------------
  const projectsData = [
    { 
      title: "Project Management Platform", 
      category: "fullstack", 
      img: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600", 
      desc: "lightweight project management tool similar to Trello or Jira where users can create projects, manage tasks, assign priorities, track progress, and collaborate.",
      demoLink: "https://project-manager-progress.vercel.app/",
      githubLink: "https://github.com/sujalvk888/ProjectManager.git"
    },
    { 
      title: "Task Management App", 
      category: "fullstack", 
      img: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600", 
      desc: "React & Firebase powered Kanban board.",
      demoLink: "https://fake-demo-link-2.com",
      githubLink: "https://github.com/fake-repo-2"
    },
    { 
      title: "Voice-enabled B2B Platform", 
      category: "backend", 
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600", 
      desc: "Python NLP & MongoDB Backend.",
      demoLink: "https://fake-demo-link-3.com",
      githubLink: "https://github.com/fake-repo-3"
    },
    { 
      title: "Portfolio Website", 
      category: "frontend", 
      img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600", 
      desc: "HTML, CSS, JavaScript Responsive UI.",
      demoLink: "https://fake-demo-link-4.com",
      githubLink: "https://github.com/fake-repo-4"
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
                <a href="${proj.demoLink}" target="_blank" class="overlay-btn demo-btn" onclick="event.stopPropagation()">Demo</a>
                <a href="${proj.githubLink}" target="_blank" class="overlay-btn github-btn" onclick="event.stopPropagation()"><i class="fab fa-github"></i> GitHub</a>
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
    { title: "AWS Certified Solutions Architect", org: "Amazon Web Services", imgPath: "Certificates/Certificate 1.png", redirectUrl: "https://drive.google.com/file/d/1Gf_a5_4-6yWdNpPFhkFjM5TSLwnmlWiZ/view?usp=drivesdk" },
    { title: "Advanced React Patterns", org: "Frontend Masters", imgPath: "Certificates/Certificate 2.png", redirectUrl: "https://drive.google.com/file/d/1Ko43qLJEJ3uVzctqbRGJUVA6ku6D5W_O/view?usp=drivesdk" },
    { title: "Python for Data Science", org: "Coursera", imgPath: "Certificates/Certificate 3.png", redirectUrl: "https://drive.google.com/file/d/1EjatPBEHc9wAT5l5jwlj-jg8lKZDi-Zu/view?usp=drivesdk" },
    { title: "Advanced React Patterns", org: "Frontend Masters", imgPath: "Certificates/Certificate 4.png", redirectUrl: "https://drive.google.com/file/d/1HAGiQIB1oOsn-Lzbyua_i_qzJ8nvc4bh/view?usp=drivesdk" },
    { title: "Advanced React Patterns", org: "Frontend Masters", imgPath: "Certificates/Certificate 5.png", redirectUrl: "https://drive.google.com/file/d/1BVXpoM_MxFhWzUZ72Am5vymT9z8qj0Oc/view?usp=drivesdk" }
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