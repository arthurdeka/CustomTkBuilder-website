/**
 * Componente Button
 * Este componente renderiza um botão que pode ser arrastado dentro de seu componente pai
 * E pode ser modificado pela sidebar Properties
 */
import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from "../CanvasContext";

function Button({ id }) {
  // Usando o contexto para obter a função setSelectedButton
  const {
    setSelectedButton,
    selectedWidgetID,
    setSelectedWidgetID,
    selectedWidgetContent,
    setSelectedWidgetContent,
    setSelectedWidgetHeight,
    setSelectedWidgetWidth,
    setSelectedWidgetFontSize,
    setSelectedWidgetBorder,
    setSelectedWidgetBorderColor,
    setSelectedWidgetBackgroundColor,
    setSelectedWidgetPosition,
  } = useContext(CanvasContext);

  // Atualizando o conteúdo do botão quando o ID do botão selecionado tem match com o ID deste botão
  useEffect(() => {
    if (selectedWidgetID === id) {
      setButtonContent(selectedWidgetContent);
    }
  }, [selectedWidgetContent]);

  // Estado para o conteúdo do botão
  const [buttonContent, setButtonContent] = useState("Button" + id);

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
    setSelectedWidgetID(id);
    setSelectedWidgetContent(buttonContent);
    setSelectedWidgetPosition(buttonPosition);
    setSelectedWidgetHeight(buttonStyle.height);
    setSelectedWidgetWidth(buttonStyle.width);
    setSelectedWidgetBackgroundColor(buttonStyle.backgroundColor);
    setSelectedWidgetFontSize(buttonStyle.fontSize);
    setSelectedWidgetBorder(buttonStyle.border);
    setSelectedWidgetBorderColor(buttonStyle.borderColor);
  };

  // função para atualizar as coordenadas no contexto CanvasContext
  const updateButtonPosition = (e, data) => {
    setButtonPosition({ x: data.x, y: data.y });
  };

  // Função para logar o ID do botão
  const logId = () => {
    console.log(`O ID deste botão é ${id}`);
  };

  // Renderizando o botão
  return (
    <Draggable
      bounds="parent"
      position={buttonPosition}
      onStop={updateButtonPosition}
    >
      <div
        onClick={() => {
          setAsSelectedButton();
          logId();
        }}
        style={buttonStyle}
      >
        {buttonContent}
      </div>
    </Draggable>
  );
}

export default Button;
