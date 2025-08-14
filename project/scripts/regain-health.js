const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;

const hamMenu = document.querySelector("#ham-menu");
const closeIcon = document.querySelector("#close-icon");
const nav = document.querySelector("nav");

hamMenu.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamMenu.classList.toggle("close");
  closeIcon.classList.toggle("show");
});

closeIcon.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamMenu.classList.toggle("close");
  closeIcon.classList.toggle("show");
});
