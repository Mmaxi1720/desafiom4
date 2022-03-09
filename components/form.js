function formEl(el){
    const formComponent  = document.createElement("div");
    formComponent.querySelector(".form__contenedor")
    formComponent.innerHTML =
`<form class="form_container">
<h4 class="form__name">Nombre</h4>
<input id="name"class="form__input" type="text">
<label class="form__lbl" for="nombre"></label>
<h4 class="form__name">Email</h4>
<input id="email"class="form__input" for="Email">
<label class="form__lbl" for="email"></label>
<h4 class="form__name">Mensaje</h4>
<textarea id="message"class="form__textArea"></textarea>
<button class="btn-send">Enviar</button>
</form>`;
el.appendChild(formComponent);

};

function formEvent(){
    const newComponenteForm = document.querySelector(".form__contenedor");
    newComponenteForm.addEventListener("submit", function(event) {
       event.preventDefault();
    
       const data = new FormData(event.target);
       const object = Object.fromEntries(data.entries());
         
      const mensaje = `
        user: ${object.nombre}
        email: ${object.email}
        mensaje: ${object.message}
      `;
    
      fetch("https://apx-api.vercel.app/api/utils/dwf", {
          method: "POST",
    
          headers: {"content-type": "application/json"},
          body: JSON.stringify({
              to: "mmendez1720@gmail.com",
              message: `${object.nombre} quiere comuncarse con nosotros, dejo el siguiente mensaje: ${object.message}`,
          })
      })
    .then(()=> {
        console.log("mensaje")
        alert("Mensaje enviado");
    })
    .catch(() => {
      alert("Ha ocurrido un error");
    });
    });
    }
    formEvent()