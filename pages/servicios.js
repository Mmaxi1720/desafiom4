function navToggle(){
    const navToggle = document.querySelector("#nav-toggle")
    const navMenu = document.querySelector(".nav-menu")

    navToggle.addEventListener("click", ()=>{
        navMenu.classList.toggle("nav-menu_visible")
    })
}

function addWorkCard(params = {} ) {
    const template = document.querySelector("#servicios-template")
    const container = document.querySelector(".servicios-content")
   
    template.content.querySelector(".servicios-titulo").textContent = params.title;
    template.content.querySelector(".servicios-text").textContent = params.description;
    template.content.querySelector(".servicios-img").src = params.image;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}
function getWorks(){
return fetch("https://cdn.contentful.com/spaces/18pmbjvkdo5q/environments/master/entries?access_token=QLCiiiuS-xi_3pJmFu0s_XpO8aFPvCesQTrP_6LIR1M&content_type=work").then(res=>{
    return res.json()}).then((data)=>{
            const fieldsCollections = data.items.map((item)=>{
                const imagen = findAsset(item.fields.imagen.sys.id, data)
                return {
                title: item.fields.titulo,
                description: item.fields.descripcion,
                image: imagen.fields.file.url,
            }
        })
        return fieldsCollections;
    });
    function findAsset(id, data) {
        console.log(id, data.includes.Asset);
        const arrayEncontrado = data.includes.Asset.find((asset) => {
          return asset.sys.id == id;
        });
        return arrayEncontrado;
      }
    }

function main(){
    getWorks().then(function(works){
        for(const w of works){
        addWorkCard(w);               
     };
    });
     headerComponent(document.querySelector(".header__container"));
     footerEl(document.querySelector(".footer__cont"));

     navToggle()
}
main();