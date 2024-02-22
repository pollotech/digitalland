

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.nav-desktop');
  
  if (window.pageYOffset > 45) {
      navbar.classList.add('sticky');
  } else {
      navbar.classList.remove('sticky');
  }
});



function adicionarClasse() {
  var meuElemento = document.getElementById("container-location");
  var menu = document.getElementById('menu-tablet');
  var navbar = document.querySelector('.nav-desktop');

  if (window.innerWidth < 768) { 
    meuElemento.classList.add("container-fluid");
    meuElemento.classList.remove("container");
  } else { 
    meuElemento.classList.add("container");
    meuElemento.classList.remove("container-fluid");
  }

  if(window.innerWidth >= 992){
    menu.classList.remove('open');
    navbar.classList.remove('nav2');
  }

}

window.addEventListener("load", adicionarClasse);
window.addEventListener("resize", adicionarClasse);

document.addEventListener("DOMContentLoaded", function() {

  var btnMenuDesktop = document.getElementById('btn-menu-tablet');
  var menuDesktop = document.getElementById('menu-tablet');
  var navbarDesktop = document.querySelector('.nav-desktop');

  var btnMenuMobile = document.getElementById('btn-menu-mobile');
  var menuMobile = document.getElementById('menu-mobile');
  var navbarMobile = document.querySelector('.nav-mobile');


  var filhoBtnDesktop = btnMenuDesktop.querySelector('img');
  var filhoBtnMobile = btnMenuMobile.querySelector('img');



  function toggleMenu(btnMenu, menu, navbar){
    console.log('function 1')

    btnMenu.addEventListener('click', function() {
      menu.classList.toggle('open');

      if(navbar.classList.contains('nav-desktop')){
        navbar.classList.toggle('nav2');
      }

    });
  }

  function verificarEventoFora(btnMenu, filhoBtn, menu){
    // Fecha o menu se o usuário clicar fora dele
    document.addEventListener('click', function(event) {
      console.log('function 2')

      var isClickInsideMenu = menu.contains(event.target);
      var isClickOnMenuToggle = (event.target === btnMenu);
      
      if (!isClickInsideMenu && !isClickOnMenuToggle && !filhoBtn == event.target) {
        menu.classList.remove('open');
      }
    });
  }

  toggleMenu(btnMenuDesktop, menuDesktop, navbarDesktop);

  verificarEventoFora(btnMenuDesktop, filhoBtnDesktop, menuDesktop);

  toggleMenu(btnMenuMobile, menuMobile, navbarMobile);

  verificarEventoFora(btnMenuMobile, filhoBtnMobile, menuMobile);


});
