const tools = [
  {
    name: "Photoshop",
    icon: "Ps",
    color: "#31a8ff"
  },
  {
    name: "Illustrator",
    icon: "Ai",
    color: "#ff9a00"
  },
  {
    name: "Python",
    icon: "Py",
    color: "#ffd43b"
  },
  {
    name: "HTML / CSS",
    icon: "H5",
    color: "#ff5733"
  },
  {
    name: "JavaScript",
    icon: "JS",
    color: "#f7df1e"
  },
  {
    name: "Figma",
    icon: "Fg",
    color: "#a259ff"
  }
];

const toolsWrapper = document.getElementById("toolsWrapper");

tools.forEach((tool) => {
  const toolCard = document.createElement("div");
  toolCard.classList.add("tool-card");

  toolCard.innerHTML = `
    <div class="tool-icon" style="color: ${tool.color}; border-color: ${tool.color}55;">
      ${tool.icon}
    </div>
    <h3>${tool.name}</h3>
  `;

  toolsWrapper.appendChild(toolCard);
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});