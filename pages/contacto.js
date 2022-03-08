
function navToggle(){
    const navToggle = document.querySelector("#nav-toggle")
    const navMenu = document.querySelector(".nav-menu")

    navToggle.addEventListener("click", ()=>{
        navMenu.classList.toggle("nav-menu_visible")
    });
 };
navToggle();

function formEvent() {
const formEL = document.querySelector(".form_container");

    formEL.addEventListener( "submit", function (ev) {
        ev.preventDefault();
        
        const data = {
            to: "mmendez1720@gmail.com",
            message: `$(Nombre) quiere comunicarse con nosotros, deja el siguiente mensaje: $(Mensaje)`.
            };
        fetch ("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify(data),
        }). then((res) => res.json()).catch((error) => console.error ("Ocurrio un error!", error)).then(()=> {
            console.log("salio todo Ok");
        });
    });
};
