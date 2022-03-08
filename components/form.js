function formEl(el){
    const formComponent  = document.createElement("div");
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
