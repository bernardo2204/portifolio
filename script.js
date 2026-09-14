(function(){
  "use strict";

  /* menu hamburguer no mobile */
  var botaoMenu = document.getElementById("botao-menu");
  var menu = document.getElementById("menu-navegacao");

  botaoMenu.addEventListener("click", function(){
    var aberto = menu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  menu.addEventListener("click", function(evento){
    if(evento.target.tagName === "A") {
      menu.classList.remove("aberto");
      botaoMenu.setAttribute("aria-expanded", "false");
    }
  });
})();
