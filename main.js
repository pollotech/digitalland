var title1 = "Gestão de estoque como você nunca viu.";
var title2 = "Emissão de nota fiscal <br> pode ser simples.";
var text1 = "A Digital Sistema simplifica: cadastro de fornecedores, relatórios de estoque,controle de compras, gestão de depósitos e mais! Otimize seu negócio conosco. Estamosaqui para tornar a gestão do seu negócio mais eficiente e descomplicada.";
var text2 = "Com a Digital Sistema, sua agilidade para emitir os três principais tipos de notasfiscais (NFe, NFSe e NFCe) é incomparável. Elimine a necessidade de inserir dados repetidamente, deixe que os impostos sejam calculados automaticamente e desfrute demuito mais praticidade! Descubra como podemos otimizar o seu processo. Clique agorano botão abaixo para saber mais.";

function changeText1() {
  document.getElementById("myH2").innerHTML = title1;
  document.getElementById("myP").innerHTML = text1;
  document.getElementById("btn1").classList.add("btnAtive");
  document.getElementById("btn2").classList.remove("btnAtive");
}

function changeText2() {
  document.getElementById("myH2").innerHTML = title2;
  document.getElementById("myP").innerHTML = text2;
  document.getElementById("btn1").classList.remove("btnAtive");
  document.getElementById("btn2").classList.add("btnAtive");
}