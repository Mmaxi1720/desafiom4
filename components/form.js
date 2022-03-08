function formEl(el){
    const formComponent  = document.createElement("div");
    formComponent.querySelector(".form__contenedor")
    formComponent.innerHTML =
`<div class="form_container">
<h4 class="form__name">Nombre</h4>
<input id="name"class="form__input" type="text">
<label class="form__lbl" for="nombre"></label>
<h4 class="form__name">Email</h4>
<input id="email"class="form__input" for="Email">
<label class="form__lbl" for="email"></label>
<h4 class="form__name">Mensaje</h4>
<textarea id="message"class="form__textArea"></textarea>
<button class="btn-send">Enviar</button>
</div>`;
el.appendChild(formComponent);
};

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
