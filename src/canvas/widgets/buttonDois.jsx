/**
 * Componente Button
 * Este componente renderiza um botão que pode ser arrastado dentro de seu componente pai
 * E pode ser modificado pela sidebar Properties
 */
import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from "../CanvasContext";
import styled from 'styled-components';

function Button({ id }) {
  // Usando o contexto para obter a função setSelectedButton
  const {
    selectedWidgetID,
    setSelectedWidgetID,
    selectedWidgetContent,
    setSelectedWidgetContent,
    selectedButton,
    setSelectedButton,
    selectedWidgetHeight,
    setSelectedWidgetHeight,
    selectedWidgetWidth,
    setSelectedWidgetWidth,
    selectedWidgetFontSize,
    setSelectedWidgetFontSize,
    selectedWidgetBorder,
    setSelectedWidgetBorder,
    selectedWidgetBorderColor,
    setSelectedWidgetBorderColor,
    selectedWidgetBackgroundColor,
    setSelectedWidgetBackgroundColor,
    selectedWidgetPosition,
    setSelectedWidgetPosition,
  } = useContext(CanvasContext);

  // Atualizando o conteúdo do botão quando o ID do botão selecionado tem match com o ID deste botão
  useEffect(() => {
    if (selectedWidgetID === id) {
      setButtonContent(selectedWidgetContent);
      setButtonHeight(selectedWidgetHeight);
      setButtonWidth(selectedWidgetWidth);
      setButtonBorder(selectedWidgetBorder);
      setButtonBorderColor(selectedWidgetBorderColor);
      setButtonBackgroundColor(selectedWidgetBackgroundColor);
      setButtonFontSize(selectedWidgetFontSize);

    }
  }, [selectedWidgetContent]);

  // Estado para estilos
  // coords
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  // tamanho
  const [buttonHeight, setButtonHeight] = useState("30px");
  const [buttonWidth, setButtonWidth] = useState("95px");
  // estilo
  const [buttonBorder, setButtonBorder] = useState("2px solid");
  const [buttonBorderColor, setButtonBorderColor] = useState("#000000");
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#F0F0F0");
  // texto
  const [buttonContent, setButtonContent] = useState("Button" + id);
  const [buttonFontSize, setButtonFontSize] = useState("14px");

  // Estado para o estilo do botão
  const [buttonStyle, setButtonStyle] = useState({
    position: "absolute",
    top: "0",
    left: "0",
    height: `${buttonHeight}`,
    width: `${buttonWidth}`,
    backgroundColor: `${buttonBackgroundColor}`,
    color: "black",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    fontSize: `${buttonFontSize}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: `${buttonBorder}`,
    borderColor: `${buttonBorderColor}`,
    borderRadius: "5px",
  });

  // Função para definir este botão como o botão selecionado
  const setAsSelectedButton = () => {
    console.log(`O ID deste botão é ${id}`);
    setSelectedButton({
      style: buttonStyle,
      setStyle: setButtonStyle,
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

  // Renderizando o botão
  return (
    <Draggable
      bounds="parent"
      position={buttonPosition}
      onStop={updateButtonPosition}
    >
      <div
        onClick={setAsSelectedButton}
        style={buttonStyle}
      >
        {buttonContent}
      </div>
    </Draggable>
  );
}

export default Button;
