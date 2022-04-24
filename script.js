const toggleMenu = document.querySelector(".toggleMenu");
const nav = document.querySelector("nav");
const navIcon = document.querySelectorAll(".navIcon");

toggleMenu.addEventListener("click", () => {
  nav.classList.toggle("open");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});
