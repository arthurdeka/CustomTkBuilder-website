/**
 * Componente Button
 * Este componente renderiza um botão que pode ser arrastado dentro de seu componente pai
 * E pode ser modificado pela sidebar Properties
 */
import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from "../CanvasContext";
import styled, { StyleSheetManager } from "styled-components";


// Estilizando o botão usando styled-components
const StyledButton = styled.div`
  position: absolute;
  cursor: grab;
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$fontColor};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: ${(props) => props.$fontSize};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: ${(props) => props.$border};
  border-color: ${(props) => props.$borderColor};
  border-radius: ${(props) => props.$borderRadius};
  &:hover {
    background-color: ${(props) => props.$hoverBackgroundColor};
  }
`;

// div para representar o background color além das rounded borders
const OutsideBackgroundColor = styled.div`
  position: absolute;
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  background-color: ${(props) => props.$outsideBackgroundColor};
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
    isActiveSelectedWidgetHoverBackgroundColor,
    setIsActiveSelectedWidgetHoverBackgroundColor,
    selectedWidgetFontColor,
    setSelectedWidgetFontColor,
    selectedWidgetBorderRadius,
    setSelectedWidgetBorderRadius,
    selectedWidgetOutsideBackgroundColor,
    setSelectedWidgetOutsideBackgroundColor,
    canvasBackgroundColor,
    selectionOutsideBackgroundColor_SameAsCanvas,
    setSelectionOutsideBackgroundColor_SameAsCanvas,
    setSelectedWidgetType,
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
  const [buttonHoverBackgroundColor, setButtonHoverBackgroundColor] = useState("#949494");

  // is active checkbox para opções opicionais
  const [isActiveHoverBackgroundColor, setIsActiveHoverBackgroundColor] = useState(true);
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
      setButtonFontSize(selectedWidgetFontSize);
      setButtonFontColor(selectedWidgetFontColor);
      // hover
      setButtonHoverBackgroundColor(selectedWidgetHoverBackgroundColor);
      // valores de checkbox de opções opcionais
      setIsActiveHoverBackgroundColor(isActiveSelectedWidgetHoverBackgroundColor);
      setButtonOutsideBackgroundColor_SameAsCanvas(selectionOutsideBackgroundColor_SameAsCanvas)
      
      // caso a cor do canvas mude, e a opção de manter a cor do botão igual a do canvas esteja ativa, a cor do outside background é atualizada
      if (buttonOutsideBackgroundColor_SameAsCanvas == true) {
        setButtonOutsideBackgroundColor(canvasBackgroundColor)
      } else {
        setButtonOutsideBackgroundColor(selectedWidgetOutsideBackgroundColor);
      }
        
      // armazenar o componente no localStorage
      storageSerializedComponent();
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
    isActiveSelectedWidgetHoverBackgroundColor,
    selectedWidgetBorderRadius,
    selectionOutsideBackgroundColor_SameAsCanvas,
    // caso qualquer um desses valores mude, o componente é armazenado no localStorage (código necessário para resolver bug)
    buttonPosition,
    buttonContent,
    buttonHeight,
    buttonWidth,
    buttonBorder,
    buttonBorderColor,
    buttonBorderRadius,
    buttonBackgroundColor,
    buttonOutsideBackgroundColor,
    buttonFontSize,
    buttonFontColor,
    buttonHoverBackgroundColor,
    isActiveHoverBackgroundColor,
    buttonOutsideBackgroundColor_SameAsCanvas,
  ]);

  useEffect(() => {
    // caso a cor do canvas mude, e a opção de manter a cor do botão igual a do canvas esteja ativa, a cor do outside background é atualizada
    if (buttonOutsideBackgroundColor_SameAsCanvas == true) {
      setButtonOutsideBackgroundColor(canvasBackgroundColor)
    }
    
    // armazenar o componente no localStorage
    storageSerializedComponent();
    
  }, [canvasBackgroundColor]);

  // Função para definir este botão como o botão selecionado
  const setAsSelectedButton = () => {
    setSelectedWidgetID(id);
    setSelectedWidgetType("button");
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
    // valores de checkbox de opções opcionais
    setIsActiveSelectedWidgetHoverBackgroundColor(isActiveHoverBackgroundColor);
    setSelectionOutsideBackgroundColor_SameAsCanvas(buttonOutsideBackgroundColor_SameAsCanvas)
  };

  // função para atualizar as coordenadas no contexto CanvasContext
  const updateButtonPosition = (e, data) => {
    setButtonPosition({ 
      x: Math.round(data.x / 10) * 10, 
      y: Math.round(data.y / 10) * 10 
    });
  };

  const storageSerializedComponent = () => {
    // Cria um objeto com todas as propriedades e seus valores atuais
    const buttonState = {
      id,
      widgetType: "button",
      buttonContent,
      buttonPosition,
      buttonHeight,
      buttonWidth,
      buttonBorderRadius,
      buttonBackgroundColor,
      buttonOutsideBackgroundColor: buttonOutsideBackgroundColor_SameAsCanvas ? canvasBackgroundColor : buttonOutsideBackgroundColor,
      buttonFontSize,
      buttonFontColor,
      buttonBorderColor,
      buttonBorder,
      buttonHoverBackgroundColor,
      isActiveHoverBackgroundColor,
      buttonOutsideBackgroundColor_SameAsCanvas,
    };

    // Converte o objeto de estado para uma string JSON
    const buttonStateString = JSON.stringify(buttonState);

    // Grava a string JSON no localStorage usando o ID do widget como chave
    localStorage.setItem(`WidgetState-${id}`, buttonStateString);

  }

  // Renderizando o botão
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <Draggable
        bounds="parent"
        position={buttonPosition}
        onStop={updateButtonPosition}
      >
          <OutsideBackgroundColor $outsideBackgroundColor={buttonOutsideBackgroundColor} $height={buttonHeight} $width={buttonWidth} >
            <StyledButton
              
              onClick={setAsSelectedButton}
              $height={buttonHeight}
              $width={buttonWidth}
              $backgroundColor={buttonBackgroundColor}
              $fontSize={buttonFontSize}
              $fontColor={buttonFontColor}
              $border={buttonBorder}
              $borderColor={buttonBorderColor}
              $borderRadius={buttonBorderRadius}
              // hover
              $hoverBackgroundColor={buttonHoverBackgroundColor}
            >
              {buttonContent}
            </StyledButton>
          </OutsideBackgroundColor>
      </Draggable>
    </StyleSheetManager>

  );
}

export default ButtonWidget;
