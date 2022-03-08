
function headerComponent(el){
    const componenetEl  = document.createElement("div");
    componenetEl.innerHTML =
`<header class="header">
<nav class="nav">
  <a href="./index.html" class="logo nav-link">Maxi</a>
  <input type="checkbox"id="nav-toggle">
  <label for="nav-toggle" class="lbl-menu">
    <span id="span1"></span>
    <span id="span2"></span>
    <span id="span3"></span>
  </label>
  <ul class="nav-menu">
      <li class="nav-menu-item"><a href="./portfolio.html" class="nav-menu-link nav-link">Portfolio</a></li>
    <li class="nav-menu-item"><a href="./servicios.html" class="nav-menu-link nav-link">Servicios</a></li>
    <li class="nav-menu-item"><a href="./contacto.html" class="nav-menu-link nav-link">Contacto</a></li>
  </ul>
</nav>
</header>`;

el.appendChild(componenetEl);
};
