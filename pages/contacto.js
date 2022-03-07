function main(){
  const navToggle = document.querySelector("#nav-toggle")
  const navMenu = document.querySelector(".nav-menu")

  navToggle.addEventListener("click", ()=>{
      navMenu.classList.toggle("nav-menu_visible")
  });
};
main()

function formComponent(elem) {
    const formElem = document.createElement("div");
    formElem.className = "null_contact";
    formElem.querySelector(".form__container");
    formElem.innerHTML = `<div class="form">
    <div class="form__title">Escribime</div>
    <div class="form_container">
    <h4 class="form__name">Nombre</h4>
    <input class="form__input" type="text">
    <label class="form__lbl" for="Nombre"></label>
    <h4 class="form__name">Email</h4>
    <input class="form__input" type="Email">
    <label class="form__lbl" for="Email"></label>
    <h4 class="form__name">Mensaje</h4>
    <textarea class="form__textArea"></textarea>
    <button class="btn-send">Enviar</button>
  </div>
  </div>
   `;
  
    elem.appendChild(formElem);
    formEvent();
  }
  
  function formEvent() {
    const formElem = document.querySelector(".form__container");
    formElem.addEventListener("submit", function (event) {
      event.preventDefault();
  
      let data = new FormData(event.target);
  
      const object = Object.fromEntries(data.entries());
        
      const mensaje = ` 
      user:  ${object.name} 
      email:  ${object.email}       
      mensaje: ${object.message} 
      
      `;
  
      fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
  
        headers: { "content-type": "application/json" },
  
        body: JSON.stringify({
          to: "mmendez1720@gmail.com",
  
          message: mensaje,
        }),
      })
        .then(() => {
          console.log("soy el mensaje",mensaje)
          alert("Mensaje enviado");
        })
        .catch(() => {
          alert("Ha ocurrido un error");
        });
    });
    };
