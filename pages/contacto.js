
function main(){
    const navToggle = document.querySelector("#nav-toggle")
    const navMenu = document.querySelector(".nav-menu")

    navToggle.addEventListener("click", ()=>{
        navMenu.classList.toggle("nav-menu_visible")
    });
 };
main()

function sendForm() {
    const btnSend = document.querySelector(".btn-send");
    btnSend.addEventListener("click", (send)=>{
        send.preventDefault();
        alert("mensaje enviado")
    })
    const form = document.querySelector(".form_container");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e);

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
                    
        const data = {
            to: "mmendez1720@gmail.com",
            message: `Mensaje de ${name}. Email: ${email}. El mensaje es ${message}`,
        };
    
        fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
        .then((r) => r.json()) 
        .catch((error) => console.error("Err!", error)) 
        .then(() => { console.log("Send OK")});
        
    });
};
sendForm();
