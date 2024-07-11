/**
 * Componente Button
 * Este componente renderiza um botão que pode ser arrastado dentro de seu componente pai
 * E pode ser modificado pela sidebar Properties
 */
import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from "../CanvasContext";
import styled from "styled-components";

// Estilizando o botão usando styled-components
const StyledButton = styled.div`
  position: absolute;
  cursor: grab;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: ${(props) => props.fontSize};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: ${(props) => props.border};
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius};
  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    border-color: ${(props) => props.hoverBorderColor};
    color: ${(props) => props.hoverFontColor};
  }
`;

// div para representar o background color além das rounded borders
const OutsideBackgroundColor = styled.div`
  position: absolute;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.outsideBackgroundColor};
`;

function ButtonWidget({ id }) {
  // Usando o contexto para obter as funções e estados necessários
  const {
    selectedWidgetID,
    setSelectedWidgetID,
    selectedWidgetContent,
    setSelectedWidgetContent,
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
    selectedWidgetHoverBorderColor,
    setSelectedWidgetHoverBorderColor,
    isActiveSelectedWidgetHoverBackgroundColor,
    setIsActiveSelectedWidgetHoverBackgroundColor,
    isActiveSelectedWidgetHoverBorderColor,
    setIsActiveSelectedWidgetHoverBorderColor,
    selectedWidgetFontColor,
    setSelectedWidgetFontColor,
    selectedWidgetHoverFontColor,
    setSelectedWidgetHoverFontColor,
    isActiveSelectedWidgetHoverFontColor,
    setIsActiveSelectedWidgetHoverFontColor,
    selectedWidgetBorderRadius,
    setSelectedWidgetBorderRadius,
    selectedWidgetOutsideBackgroundColor,
    setSelectedWidgetOutsideBackgroundColor,
    canvasBackgroundColor,
    selectionOutsideBackgroundColor_SameAsCanvas,
    setSelectionOutsideBackgroundColor_SameAsCanvas,
  } = useContext(CanvasContext);

  // Estados para propriedades do botão
  const [buttonContent, setButtonContent] = useState("Button" + id);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [buttonHeight, setButtonHeight] = useState("30px");
  const [buttonWidth, setButtonWidth] = useState("95px");
  const [buttonBorder, setButtonBorder] = useState("2px solid");
  const [buttonBorderColor, setButtonBorderColor] = useState("#000000");
  const [buttonBorderRadius, setButtonBorderRadius] = useState("6px");
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#F0F0F0");
  const [buttonOutsideBackgroundColor, setButtonOutsideBackgroundColor] = useState(canvasBackgroundColor);
  const [buttonFontSize, setButtonFontSize] = useState("14px");
  const [buttonFontColor, setButtonFontColor] = useState("#000000");

  // hover
  const [buttonHoverBackgroundColor, setButtonHoverBackgroundColor] = useState("#79A0FF");
  const [buttonHoverBorderColor, setButtonHoverBorderColor] = useState("#004AFF");
  const [buttonHoverFontColor, setButtonHoverFontColor] = useState("#004AFF");

  // is active checkbox para opções opicionais
  const [isActiveHoverBackgroundColor, setIsActiveHoverBackgroundColor] = useState(true);
  const [isActiveHoverBorderColor, setIsActiveHoverBorderColor] = useState(true);
  const [isActiveHoverFontColor, setIsActiveHoverFontColor] = useState(true);
  const [buttonOutsideBackgroundColor_SameAsCanvas, setButtonOutsideBackgroundColor_SameAsCanvas] = useState(true);


  // Atualizando o conteúdo do botão quando o ID do botão selecionado tem match com o ID deste botão
  useEffect(() => {
    if (selectedWidgetID === id) {
      setButtonContent(selectedWidgetContent);
      setButtonHeight(selectedWidgetHeight);
      setButtonWidth(selectedWidgetWidth);
      setButtonBorder(selectedWidgetBorder);
      setButtonBorderColor(selectedWidgetBorderColor);
      setButtonBorderRadius(selectedWidgetBorderRadius);
      setButtonBackgroundColor(selectedWidgetBackgroundColor);
      setButtonOutsideBackgroundColor(selectedWidgetOutsideBackgroundColor);
      setButtonFontSize(selectedWidgetFontSize);
      setButtonFontColor(selectedWidgetFontColor);
      // hover
      setButtonHoverBackgroundColor(selectedWidgetHoverBackgroundColor);
      setButtonHoverBorderColor(selectedWidgetHoverBorderColor);
      setButtonHoverFontColor(selectedWidgetHoverFontColor);
      // valores de checkbox de opções opcionais
      setIsActiveHoverBackgroundColor(isActiveSelectedWidgetHoverBackgroundColor);
      setIsActiveHoverBorderColor(isActiveSelectedWidgetHoverBorderColor);
      setIsActiveHoverFontColor(isActiveSelectedWidgetHoverFontColor);
      setButtonOutsideBackgroundColor_SameAsCanvas(selectionOutsideBackgroundColor_SameAsCanvas)
    }
  }, [
    selectedWidgetID,
    selectedWidgetContent,
    selectedWidgetHeight,
    selectedWidgetWidth,
    selectedWidgetBorder,
    selectedWidgetBorderColor,
    selectedWidgetBackgroundColor,
    selectedWidgetOutsideBackgroundColor,
    selectedWidgetFontSize,
    selectedWidgetFontColor,
    selectedWidgetHoverBackgroundColor,
    selectedWidgetHoverBorderColor,
    isActiveSelectedWidgetHoverBackgroundColor,
    isActiveSelectedWidgetHoverBorderColor,
    selectedWidgetHoverFontColor,
    isActiveSelectedWidgetHoverFontColor,
    selectedWidgetBorderRadius,
    selectionOutsideBackgroundColor_SameAsCanvas,
  ]);

  useEffect(() => {
    // caso a cor do canvas mude, e a opção de manter a cor do botão igual a do canvas esteja ativa, a cor do outside background é atualizada
    if (buttonOutsideBackgroundColor_SameAsCanvas == true) {
      setButtonOutsideBackgroundColor(canvasBackgroundColor)
    }
    
  }, [canvasBackgroundColor]);

  // Função para definir este botão como o botão selecionado
  const setAsSelectedButton = () => {
    setSelectedWidgetID(id);
    setSelectedWidgetContent(buttonContent);
    setSelectedWidgetPosition(buttonPosition);
    setSelectedWidgetHeight(buttonHeight);
    setSelectedWidgetWidth(buttonWidth);
    setSelectedWidgetBackgroundColor(buttonBackgroundColor);
    setSelectedWidgetOutsideBackgroundColor(buttonOutsideBackgroundColor);
    setSelectedWidgetFontSize(buttonFontSize);
    setSelectedWidgetFontColor(buttonFontColor);
    setSelectedWidgetBorder(buttonBorder);
    setSelectedWidgetBorderColor(buttonBorderColor);
    setSelectedWidgetBorderRadius(buttonBorderRadius);
    // hover
    setSelectedWidgetHoverBackgroundColor(buttonHoverBackgroundColor);
    setSelectedWidgetHoverBorderColor(buttonHoverBorderColor);
    setSelectedWidgetHoverFontColor(buttonHoverFontColor);
    // valores de checkbox de opções opcionais
    setIsActiveSelectedWidgetHoverBackgroundColor(isActiveHoverBackgroundColor);
    setIsActiveSelectedWidgetHoverBorderColor(isActiveHoverBorderColor);
    setIsActiveSelectedWidgetHoverFontColor(isActiveHoverFontColor);
    setSelectionOutsideBackgroundColor_SameAsCanvas(buttonOutsideBackgroundColor_SameAsCanvas)
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
      <OutsideBackgroundColor outsideBackgroundColor={buttonOutsideBackgroundColor} height={buttonHeight} width={buttonWidth} >
        <StyledButton
          onClick={setAsSelectedButton}
          height={buttonHeight}
          width={buttonWidth}
          backgroundColor={buttonBackgroundColor}
          fontSize={buttonFontSize}
          fontColor={buttonFontColor}
          border={buttonBorder}
          borderColor={buttonBorderColor}
          borderRadius={buttonBorderRadius}
          // hover
          hoverBackgroundColor={buttonHoverBackgroundColor}
          hoverBorderColor={buttonHoverBorderColor}
          hoverFontColor={buttonHoverFontColor}
        >
          {buttonContent}
        </StyledButton>
      </OutsideBackgroundColor>

    </Draggable>
  );
}

export default ButtonWidget;
