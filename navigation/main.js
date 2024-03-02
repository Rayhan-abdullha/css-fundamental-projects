const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const nav = document.querySelector("nav");

openNav.addEventListener("click", function () {
  nav.classList.toggle("openNav");
});
closeNav.addEventListener("click", function () {
  nav.classList.toggle("openNav");
});
