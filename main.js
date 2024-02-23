
function showSlide(slideId, index){

  var btnSlides = document.querySelectorAll('.btn-slide');

  var carousel = document.querySelector('.comments-carousel');

  var comentarios = document.querySelectorAll('.comment');

  var btnDestaque = document.querySelector('.btn-slide-active')
  var comentarioDestaque = document.querySelector('.card-comment-emphasis')
  
  var idSlideAtivo = comentarioDestaque.id;

  var idSlide = slideId.substring(5,6);

  idSlideAtivo = idSlideAtivo.substring(5,6)

  if(idSlideAtivo != idSlide){

    btnSlides[index-1].classList.add('btn-slide-active')
    btnDestaque.classList.remove('btn-slide-active')

    comentarios[index-1].classList.remove('card-comment')
    comentarios[index-1].classList.add('card-comment-emphasis')

    comentarioDestaque.classList.remove('card-comment-emphasis')
    comentarioDestaque.classList.add('card-comment')

    comentarios[index].computedStyleMap.order = 2;

  }

}




// ativar o menu fixo quando ocorre um evento scroll
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.nav-desktop');
  
  if (window.pageYOffset > 45) {
      navbar.classList.add('sticky');
  } else {
      navbar.classList.remove('sticky');
  }
});

var servicoAtual = 1;
var intervaloTempo = 20000;
var intervaloAtivo = false;

function mostrarServico(servico) {

  document.getElementById('servico1').classList.add('d-xl-none')
  document.getElementById('servico2').classList.add('d-xl-none')

  document.getElementById('botaoServico1').classList.remove('x2');
  document.getElementById('botaoServico2').classList.remove('x2');

  document.getElementById('servico' + servico).classList.remove('d-xl-none')

  document.getElementById('botaoServico' + servico).classList.add('x2');

  servicoAtual = servico;

 console.log('aqui')

}

function alternarServicos() {
  if (servicoAtual === 1) {
    mostrarServico(2);
  } else {
    mostrarServico(1);
  }
}

var intervalo =  setInterval(alternarServicos, intervaloTempo);

function pararAlternancia() {
  clearInterval(intervalo);
  intervaloAtivo = false;
}

function reiniciarAlternancia() {
  if (!intervaloAtivo) {
    intervalo = setInterval(alternarServicos, intervaloTempo);
    intervaloAtivo = true;
}
}


// alterar classes de alguns elementos conforme alguma condição
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

  // vai para alternancia para tela menores quer 1200px 
  if(window.innerWidth < 1200){
    console.log('parou '+intervalo);
    pararAlternancia();
  }else{
    reiniciarAlternancia();
    console.log('reiniciou '+intervalo);
  }

  

}

window.addEventListener("load", adicionarClasse);
window.addEventListener("resize", adicionarClasse);


// menu responsivo 
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
