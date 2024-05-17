/**
 * Componente Button
 * Este componente renderiza um botão que pode ser arrastado dentro de seu componente pai
 * E pode ser modificado pela sidebar Properties
 */
import React, { useContext, useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from "../CanvasContext";

function Button({ conteudo = "Button" }) {
  // Usando o contexto para obter a função setSelectedButton
  const {
    setSelectedButton,
    setSelectedWidgetHeight,
    setSelectedWidgetWidth,
    setSelectedWidgetFontSize,
    setSelectedWidgetBorder,
    setSelectedWidgetBackgroundColor,
    selectedWidgetPosition,
    setSelectedWidgetPosition,
  } = useContext(CanvasContext);

  // Estado para o conteúdo do botão
  const [buttonContent, setButtonContent] = useState("Button");

  // Estado para a posição do botão
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  
  // Estado para o estilo do botão
  const [buttonStyle, setButtonStyle] = useState({
    position: "absolute",
    top: "0",
    left: "0",
    height: "30px",
    width: "95px",
    backgroundColor: "#F0F0F0",
    color: "black",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "2px solid",
    borderColor: "#000000",
    borderRadius: "5px",
  });

  // Função para definir este botão como o botão selecionado
  const setAsSelectedButton = () => {
    setSelectedButton({
      style: buttonStyle,
      setStyle: setButtonStyle,
      conteudo: buttonContent,
      setConteudo: setButtonContent,
    });
    setSelectedWidgetPosition(buttonPosition);
    setSelectedWidgetHeight(buttonStyle.height);
    setSelectedWidgetWidth(buttonStyle.width);
    setSelectedWidgetBackgroundColor(buttonStyle.backgroundColor);
    setSelectedWidgetFontSize(buttonStyle.fontSize);
    setSelectedWidgetBorder(buttonStyle.border);
  };

  // função para atualizar as coordenadas no contexto CanvasContext
  const updateButtonPosition = (e, data) => {
    setButtonPosition({ x: data.x, y: data.y });
  }

  // Renderizando o botão
  return (
    <Draggable
      bounds="parent"
      position={buttonPosition}
      onStop={updateButtonPosition}
    >
      <div onClick={setAsSelectedButton} style={buttonStyle}>
        {buttonContent}
      </div>
    </Draggable>
  );
}

export default Button;
