

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