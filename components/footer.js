function footerEl(el){
    const footerComponent  = document.createElement("div");
    footerComponent.innerHTML =
`<div class="footer">
<div class="footer__logo">Maxi</div>
<div class="footer__containter">
  <a href="https://www.instagram.com/mendezmaxi91/" class="footer__redes">Instagram
    <img class="footer__img" src="./pages/images/instagram.png" alt="">
  </a>
  <a href="#" class="footer__redes">Linkedin
    <img class="footer__img"src="./pages/images/linkedin.png" alt="">
  </a>
  <a href="https://github.com/Mmaxi1720" class="footer__redes">Github
    <img class="footer__img" src="./pages/images/github.png" alt="">
  </a>
</div>
</div>`;
el.appendChild(footerComponent);
};

