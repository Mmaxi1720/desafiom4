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

function formEvent(){
  const formComponent = document.querySelector(".form__contenedor");
  formComponent.addEventListener("submit", function(event) {
     event.preventDefault();
      
     const data = {
      to: "mmendez1720@gmail.com",
      message: `${Nombre} quiere comuncarse con nosotros, dejo el siguiente mensaje: ${Mensaje}`};
fetch("https://apx-api.vercel.app/api/utils/dwf", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
}).then((res) => res.json()).catch((error) => console.error("Ocurrio un error!", error)).then(() => { console.log("salió todo ok")});});}; 
formEvent()