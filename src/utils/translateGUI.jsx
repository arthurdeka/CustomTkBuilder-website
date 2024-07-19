
export function funcaoClique() {
  console.log("teste");
}

// essa função recolhe os widgets armazenados no local Storage e os transforma em código python
export function translateWidgetsToCode() {
    // Inicializa um array para armazenar os estados dos widgets
    const widgetStates = [];
  
    // Itera sobre todos os itens no localStorage e armazena no array os itens que começam com "WidgetState"
    for (let i = 0; i < localStorage.length; i++) {
      // Obtém a chave do item atual
      const key = localStorage.key(i);
      // Verifica se a chave começa com "WidgetState"
      if (key.startsWith("WidgetState")) {
        // Recolhe o valor associado à chave e o armazena no array
        const value = localStorage.getItem(key);
        widgetStates.push(value);
      }
    }

    // converte todos os itens no array widgetStates de volta para objetos
    const widgetStatesObjects = widgetStates.map((widgetState) => JSON.parse(widgetState));
    
    // para cada objeto em widgetStatesObjects, é feita a tradução para código python
    const widgetPythonCodelist = [];
    widgetStatesObjects.forEach((widgetState) => {
        let pythonCode = "";
        if (widgetState.widgetType === "button") {
            pythonCode =
`Button_id${widgetState.id} = customtkinter.CTkButton(
    master=window,
    text="${widgetState.buttonContent}",
    font=("${widgetState.buttonFontFamily}", ${widgetState.buttonFontSize.match(/\d+/)}),
    text_color="${widgetState.buttonFontColor}",
    ${widgetState.isActiveHoverBackgroundColor ? "hover=True," : ""}
    ${widgetState.isActiveHoverBackgroundColor ? `hover_color="${widgetState.buttonHoverBackgroundColor}",` : ""}
    height=${widgetState.buttonHeight.match(/\d+/)},
    width=${widgetState.buttonWidth.match(/\d+/)},
    border_width=${widgetState.buttonBorder.match(/\d+/)},
    corner_radius=${widgetState.buttonBorderRadius.match(/\d+/)},
    border_color="${widgetState.buttonBorderColor}",
    bg_color="${widgetState.buttonOutsideBackgroundColor}",
    fg_color="${widgetState.buttonBackgroundColor}",
    )
Button_id${widgetState.id}.place(x=${widgetState.buttonPosition.x}, y=${widgetState.buttonPosition.y})`;

        }


        if (widgetState.widgetType === "label") {
            pythonCode =
`Label_id${widgetState.id} = customtkinter.CTkLabel(
    master=window,
    text="${widgetState.labelContent}",
    font=("${widgetState.labelFontFamily}", ${widgetState.labelFontSize.match(/\d+/)}),
    text_color="${widgetState.labelFontColor}",
    height=${widgetState.labelHeight.match(/\d+/)},
    width=${widgetState.labelWidth.match(/\d+/)},
    corner_radius=${widgetState.labelBorderRadius.match(/\d+/)},
    bg_color="${widgetState.labelOutsideBackgroundColor}",
    fg_color="${widgetState.labelBackgroundColor}",
    )
Label_id${widgetState.id}.place(x=${widgetState.labelPosition.x}, y=${widgetState.labelPosition.y})`;
        }


        if (widgetState.widgetType === "input") {
            pythonCode =
`Entry_id${widgetState.id} = customtkinter.CTkEntry(
    master=window,
    placeholder_text="${widgetState.inputPlaceholder}",
    font=("Arial", ${widgetState.inputFontSize.match(/\d+/)}),
    text_color="${widgetState.inputFontColor}",
    height=${widgetState.inputHeight.match(/\d+/)},
    width=${widgetState.inputWidth.match(/\d+/)},
    border_width=${widgetState.inputBorder.match(/\d+/)},
    corner_radius=${widgetState.inputBorderRadius.match(/\d+/)},
    border_color="${widgetState.inputBorderColor}",
    bg_color="${widgetState.inputOutsideBackgroundColor}",
    fg_color="${widgetState.inputBackgroundColor}",
    )
Entry_id${widgetState.id}.place(x=${widgetState.inputPosition.x}, y=${widgetState.inputPosition.y})`;
        }


        widgetPythonCodelist.push(pythonCode);
    });
    
    // junta todos os códigos python armazenados na lista em uma string
    const pythonCodeString = widgetPythonCodelist.join("\n"); 

    // exibe o código python na console
    console.log(pythonCodeString);

  
    return 1;
  }

// Função para desserializar o estado do componente e reconstruí-lo
export function desserializarEstadoComponente(estadoSerializado) {
  return "Deserializado";
}

export default { funcaoClique, translateWidgetsToCode, desserializarEstadoComponente };
