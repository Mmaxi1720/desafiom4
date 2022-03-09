headerComponent(document.querySelector(".header__container"));
navToggle();

formEl(document.querySelector(".form__contenedor"));
footerEl(document.querySelector(".footer__cont"));

function navToggle() {
  const navToggle = document.querySelector("#nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
  });
}