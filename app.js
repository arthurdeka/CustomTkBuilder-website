class Widget {
  constructor() {
    // Crie uma <div> quando um objeto é criado
    this.divElement = document.createElement("div");
    // Adicione a <div> ao corpo do documento
    document.body.appendChild(this.divElement);
  }

  // Método para atualizar o conteúdo da <div>
  setDivConteudo(conteudo) {
    this.divElement.textContent = conteudo;
  }

  // Método para alterar a altura da <div>
  alterarAltura(altura) {
    this.divElement.style.height = `${altura}px`;
  }

  // Método para alterar a largura da <div>
  alterarLargura(largura) {
    this.divElement.style.width = `${largura}px`;
  }
}

class Button extends Widget {
  constructor() {
    super();

    // setando altura e largura de um botão
    this.divElement.style.height = `30px`;
    this.divElement.style.width = `95px`;

    //background
    this.divElement.style.backgroundColor = "#393D49";

    //texto
    this.divElement.textContent = "Button1";
    this.divElement.style.color = "white";

    //extras =====
    // centralizar e mudar a fonte do texto
    this.divElement.style.display = "flex";
    this.divElement.style.fontFamily =
      "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
    this.divElement.style.alignItems = "center";
    this.divElement.style.justifyContent = "center";
    this.divElement.style.textAlign = "center";
    // Mudar o tamanho e cor das bordas
    this.divElement.style.border = "2px solid";
    this.divElement.style.borderTopColor = "#545454";
    this.divElement.style.borderLeftColor = "#545454";
    this.divElement.style.borderRightColor = "#000000";
    this.divElement.style.borderBottomColor = "#000000";
  }

  // Método para alterar a cor de fundo do Objeto
  alterarCorDeFundo(cor) {
    this.divElement.style.backgroundColor = cor;
  }

  // Método para alterar a borderRadius do Objeto
  alterarBorderRadius(borderRadius) {
    this.divElement.style.borderRadius = `${borderRadius}px`;
  }
}
