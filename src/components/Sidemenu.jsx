const arrayDeObjetos = [];
const criarButtonBtn = document.getElementById("criar-button");

// Adicione um ouvinte de evento ao botão
criarButtonBtn.addEventListener("click", function () {
  // Crie uma instância da classe quando o botão for clicado
  let objetoASerCriado = new Button();
  arrayDeObjetos.push(objetoASerCriado);

});