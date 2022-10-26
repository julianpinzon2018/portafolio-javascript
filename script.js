const burn = document.querySelector("#burn");
const header = document.querySelector("#header");
const activeSaludoCaja = document.querySelector("#saludo-caja");
const saludo = document.querySelector("#saludo");
const saludoText = document.querySelector("#saludo-text");
const proyectosSection = document.querySelector("#projects");
const body = document.querySelector("#body");
const proyectosTitle = document.querySelector("#proyectos-title");
const projectTitl = document.querySelector(".project-titl");
const button = document.querySelector("#button");
const redes = document.querySelector("#redes");
const redesTItle = document.querySelector("#redes-title");

let isDark = true;
burn.onclick = () => {
  header.classList.toggle("active-header");
  activeSaludoCaja.classList.toggle("active-saludo-caja");
  saludo.classList.toggle("active-saludo");
  saludoText.classList.toggle("active-saludo-text");
  proyectosSection.classList.toggle("active-proyectos-section");
  body.classList.toggle("active-body");
  proyectosTitle.classList.toggle("active-proyectos-title");
  projectTitl.classList.toggle("active-project-titl");
  button.classList.toggle("active-button");
  redes.classList.toggle("active-redes");
  redesTItle.classList.toggle("active-redes-title");

  isDark = false;
};
