import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from "../CanvasContext";
import styled from 'styled-components';

// Estilizando o botão usando styled-components
const StyledButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  color: black;
  font-family: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
  font-size: ${props => props.fontSize};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: ${props => props.border};
  border-color: ${props => props.borderColor};
  border-radius: 5px;
  &:hover {
    background-color: ${props => props.hoverBackgroundColor};
  }
`;

function ButtonDois({ id }) {
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
    selectedWidgetHoverBackgroundColor,
    setSelectedWidgetHoverBackgroundColor,
  } = useContext(CanvasContext);

  // Estados para propriedades do botão
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [buttonHeight, setButtonHeight] = useState("30px");
  const [buttonWidth, setButtonWidth] = useState("95px");
  const [buttonBorder, setButtonBorder] = useState("2px solid");
  const [buttonBorderColor, setButtonBorderColor] = useState("#000000");
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#F0F0F0");
  const [buttonContent, setButtonContent] = useState("Button" + id);
  const [buttonFontSize, setButtonFontSize] = useState("14px");
  const [buttonHoverBackgroundColor, setButtonHoverBackgroundColor] = useState("#6e6e6e");


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
      setButtonHoverBackgroundColor(selectedWidgetHoverBackgroundColor)
    }
  }, [selectedWidgetID, selectedWidgetContent, selectedWidgetHeight, selectedWidgetWidth, selectedWidgetBorder, selectedWidgetBorderColor, selectedWidgetBackgroundColor, selectedWidgetFontSize, selectedWidgetHoverBackgroundColor]);

  // Função para definir este botão como o botão selecionado
  const setAsSelectedButton = () => {
    setSelectedWidgetID(id);
    setSelectedWidgetContent(buttonContent);
    setSelectedWidgetPosition(buttonPosition);
    setSelectedWidgetHeight(buttonHeight);
    setSelectedWidgetWidth(buttonWidth);
    setSelectedWidgetBackgroundColor(buttonBackgroundColor);
    setSelectedWidgetFontSize(buttonFontSize);
    setSelectedWidgetBorder(buttonBorder);
    setSelectedWidgetBorderColor(buttonBorderColor);
    setSelectedWidgetHoverBackgroundColor(buttonHoverBackgroundColor);
  };

  // função para atualizar as coordenadas no contexto CanvasContext
  const updateButtonPosition = (e, data) => {
    setButtonPosition({ x: data.x, y: data.y });
  };

  // Renderizando o botão
  return (
    <Draggable bounds="parent" position={buttonPosition} onStop={updateButtonPosition}>
      <StyledButton
        onClick={setAsSelectedButton}
        height={buttonHeight}
        width={buttonWidth}
        backgroundColor={buttonBackgroundColor}
        fontSize={buttonFontSize}
        border={buttonBorder}
        borderColor={buttonBorderColor}
        hoverBackgroundColor={buttonHoverBackgroundColor}
      >
        {buttonContent}
      </StyledButton>
    </Draggable>
  );
}

export default ButtonDois;
