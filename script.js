const tools = [
  { name: "Photoshop", icon: "Ps", color: "#31a8ff" },
  { name: "Illustrator", icon: "Ai", color: "#ff9a00" },
  { name: "Python", icon: "Py", color: "#ffd43b" },
  { name: "HTML / CSS", icon: "H5", color: "#ff5733" },
  { name: "JavaScript", icon: "JS", color: "#f7df1e" },
  { name: "Figma", icon: "Fg", color: "#a259ff" }
];

const certificates = [
  { title: "Web Development", platform: "Udemy" },
  { title: "Mobile Development", platform: "Udemy" },
  { title: "Supervised ML", platform: "Coursera" },
  { title: "Graphic Designing", platform: "Coursera" },
  { title: "Cyber Security", platform: "Udemy" },
  { title: "SPA Zeppelin", platform: "Udemy" }
];

const achievements = [
  { icon: "🏆", year: "2024", title: "Cyber Security Workshop Winner" },
  { icon: "🛡️", year: "2024", title: "Cyber Security Hackathon Regional Winner" },
  { icon: "🥇", year: "2023", title: "Computer Science Gold Medalist" }
];

const projects = {
  developer: [
    {
      title: "TaskFlow Pro",
      category: "Task Management App",
      tags: ["React", "Node.js"],
      live: "#",
      github: "#"
    },
    {
      title: "DevConnect",
      category: "Developer Social Platform",
      tags: ["Next.js", "MongoDB"],
      live: "#",
      github: "#"
    },
    {
      title: "CodeNote",
      category: "Collaborative Notes App",
      tags: ["React", "Firebase"],
      live: "#",
      github: "#"
    }
  ],

  design: [
    {
      title: "FinDash",
      category: "Finance Dashboard",
      tags: ["UI/UX", "Figma"],
      live: "#"
    },
    {
      title: "HealthCare+",
      category: "Medical Landing Page",
      tags: ["UI/UX", "Figma"],
      live: "#"
    },
    {
      title: "Brandle",
      category: "E-commerce Website",
      tags: ["UI/UX", "Figma"],
      live: "#"
    }
  ]
};

function renderTools() {
  const toolsWrapper = document.getElementById("toolsWrapper");
  if (!toolsWrapper) return;

  toolsWrapper.innerHTML = tools
    .map(
      (tool) => `
        <div class="tool-card">
          <div class="tool-icon" style="color: ${tool.color}; border-color: ${tool.color}55;">
            ${tool.icon}
          </div>
          <h3>${tool.name}</h3>
        </div>
      `
    )
    .join("");
}

function renderCertificates() {
  const certificatesWrapper = document.getElementById("certificatesWrapper");
  if (!certificatesWrapper) return;

  certificatesWrapper.innerHTML = certificates
    .map(
      (certificate) => `
        <div class="certificate-card">
          <div class="certificate-badge">★</div>
          <h3>${certificate.title}</h3>
          <p>Certification</p>
          <p>${certificate.platform}</p>
        </div>
      `
    )
    .join("");
}

function renderAchievements() {
  const achievementsWrapper = document.getElementById("achievementsWrapper");
  if (!achievementsWrapper) return;

  achievementsWrapper.innerHTML = achievements
    .map(
      (achievement) => `
        <div class="achievement-card">
          <div class="achievement-icon">${achievement.icon}</div>
          <div>
            <h3>${achievement.year}</h3>
            <p>${achievement.title}</p>
          </div>
        </div>
      `
    )
    .join("");
}

function renderProjects(type = "developer") {
  const projectsWrapper = document.getElementById("projectsWrapper");
  if (!projectsWrapper || !projects[type]) return;

  projectsWrapper.innerHTML = projects[type]
    .map((project) => {
      const tags = project.tags.map((tag) => `<span>${tag}</span>`).join("");
      const githubLink = project.github
        ? `<a href="${project.github}">GitHub ↗</a>`
        : "";

      return `
        <article class="project-card">
          <div class="project-image">${project.title} Preview</div>
          <h3>${project.title}</h3>
          <p>${project.category}</p>
          <div class="project-tags">${tags}</div>
          <div class="project-links">
            <a href="${project.live}">Live ↗</a>
            ${githubLink}
          </div>
        </article>
      `;
    })
    .join("");
}

function setupWorkTabs() {
  const workTabs = document.querySelectorAll(".work-tab");

  workTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      workTabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      renderProjects(tab.dataset.work);
    });
  });
}

function setupMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-links a");

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

function setupActiveNav() {
  const navItems = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section[id]");

  if (!navItems.length || !sections.length) return;

  window.addEventListener("scroll", () => {
    let current = "home";

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });

    navItems.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  });
}

renderTools();
renderCertificates();
renderAchievements();
renderProjects("developer");
setupWorkTabs();
setupMobileMenu();
setupActiveNav();
