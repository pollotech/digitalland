        // Quando o usuário rola a página, execute a função myFunction
        window.onscroll = function () {
            myFunction();
          };
  
          // Obtenha o navbar
          var navbar = document.querySelector(".navbar");
  
          // Obtenha a posição offset do navbar
          var sticky = navbar.offsetTop;
  
          // Adicione a classe sticky ao navbar quando você alcançar sua posição de rolagem. Remova "sticky" quando você deixar a posição de rolagem
          function myFunction() {
            if (window.pageYOffset >= sticky) {
              navbar.classList.add("sticky");
            } else {
              navbar.classList.remove("sticky");
            }
          }