

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.nav-desktop');
  if (window.pageYOffset > 45) {
      navbar.classList.add('sticky');
  } else {
      navbar.classList.remove('sticky');
  }
});


function servico() {
  var btns = document.querySelectorAll('.grup')
}



function adicionarClasse() {
  var meuElemento = document.getElementById("container-location");

  if (window.innerWidth < 768) { 
    meuElemento.classList.add("container-fluid");
    meuElemento.classList.remove("container");
  } else { 
    meuElemento.classList.add("container");
    meuElemento.classList.remove("container-fluid");
  }
}

window.addEventListener("load", adicionarClasse);
window.addEventListener("resize", adicionarClasse);
