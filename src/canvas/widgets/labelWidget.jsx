import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from "../CanvasContext";
import styled, { StyleSheetManager } from "styled-components";


const StyledLabel = styled.div`
  border: 2px dotted #929292;
  position: absolute;
  cursor: grab;
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$fontColor};
  font-family: ${(props) => props.$fontFamily};
  font-size: ${(props) => props.$fontSize};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  border-radius: ${(props) => props.$borderRadius};
  white-space: nowrap;
  overflow: hidden;
  z-index: 2;
`;

// div para representar o background color além das rounded borders
const OutsideBackgroundColor = styled.div`
  position: absolute;
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  background-color: ${(props) => props.$outsideBackgroundColor};
  z-index: 2;
`;

function LabelWidget({ id }) {
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
    selectedWidgetBackgroundColor,
    setSelectedWidgetBackgroundColor,
    setSelectedWidgetPosition,
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
    selectionBackgroundColor_SameAsCanvas,
    setSelectionBackgroundColor_SameAsCanvas,
    selectedWidgetFontFamily,
    setSelectedWidgetFontFamily,
  } = useContext(CanvasContext);

  const [labelContent, setLabelContent] = useState("Label" + id);
  const [labelPosition, setLabelPosition] = useState({ x: 0, y: 0 });
  const [labelHeight, setLabelHeight] = useState("30px");
  const [labelWidth, setLabelWidth] = useState("95px");
  const [labelBorderRadius, setLabelBorderRadius] = useState("0px");
  const [labelBackgroundColor, setLabelBackgroundColor] = useState(canvasBackgroundColor);
  const [labelOutsideBackgroundColor, setLabelOutsideBackgroundColor] = useState(canvasBackgroundColor);
  const [labelFontSize, setLabelFontSize] = useState("14px");
  const [labelFontFamily, setLabelFontFamily] = useState("Arial");
  const [labelFontColor, setLabelFontColor] = useState("#000000");

  // is active para opções opicionais
  const [labelBackgroundColor_SameAsCanvas, setLabelBackgroundColor_SameAsCanvas] = useState(true);
  const [labelOutsideBackgroundColor_SameAsCanvas, setLabelOutsideBackgroundColor_SameAsCanvas] = useState(true);

  // Atualizando o conteúdo do input quando o ID do widget selecionado tem match com o ID deste input
  useEffect(() => {
    if (selectedWidgetID === id) {
      setLabelContent(selectedWidgetContent);
      setLabelHeight(selectedWidgetHeight);
      setLabelWidth(selectedWidgetWidth);
      setLabelBorderRadius(selectedWidgetBorderRadius);
      setLabelFontSize(selectedWidgetFontSize);
      setLabelFontFamily(selectedWidgetFontFamily);
      setLabelFontColor(selectedWidgetFontColor);
      setLabelOutsideBackgroundColor_SameAsCanvas(selectionOutsideBackgroundColor_SameAsCanvas);
      setLabelBackgroundColor_SameAsCanvas(selectionBackgroundColor_SameAsCanvas);
      
      // caso a cor do canvas mude, e a opção de manter a cor do label igual a do canvas esteja ativa, a cor do outside background é atualizada
      if (labelBackgroundColor_SameAsCanvas == true) {
        setLabelBackgroundColor(canvasBackgroundColor);
      } else {
        setLabelBackgroundColor(selectedWidgetBackgroundColor);
      }

      if (labelOutsideBackgroundColor_SameAsCanvas == true) {
        setLabelOutsideBackgroundColor(canvasBackgroundColor);
      } else {
        setLabelOutsideBackgroundColor(selectedWidgetOutsideBackgroundColor);
      }
      
      // armazenar o componente no localStorage
      storageSerializedComponent();
    }
  }, [
    selectedWidgetID,
    selectedWidgetContent,
    selectedWidgetHeight,
    selectedWidgetWidth,
    selectedWidgetBackgroundColor,
    selectedWidgetOutsideBackgroundColor,
    selectedWidgetFontSize,
    selectedWidgetFontFamily,
    selectedWidgetFontColor,
    selectedWidgetBorderRadius,
    selectionOutsideBackgroundColor_SameAsCanvas,
    selectionBackgroundColor_SameAsCanvas,
    // caso qualquer um desses valores mude, o componente é armazenado no localStorage (código necessário para resolver bug)
    labelPosition,
    labelContent,
    labelHeight,
    labelWidth,
    labelBorderRadius,
    labelBackgroundColor,
    labelOutsideBackgroundColor,
    labelFontSize,
    labelFontFamily,
    labelFontColor,
    labelBackgroundColor_SameAsCanvas,
    labelOutsideBackgroundColor_SameAsCanvas,
  ]);

  // caso a cor do canvas mude, e a opção de manter a cor do botão igual a do canvas esteja ativa, a cor do outside background é atualizada
  useEffect(() => {
    if (labelBackgroundColor_SameAsCanvas == true) {
      setLabelBackgroundColor(canvasBackgroundColor);
    }
    if (labelOutsideBackgroundColor_SameAsCanvas == true) {
      setLabelOutsideBackgroundColor(canvasBackgroundColor);
    }

    // armazenar o componente no localStorage
    storageSerializedComponent();
    
  }, [canvasBackgroundColor, labelBackgroundColor]);

  // Função para definir este botão como o botão selecionado
  const setAsSelectedWidget = () => {
    setSelectedWidgetID(id);
    setSelectedWidgetType("label");
    setSelectedWidgetContent(labelContent);
    setSelectedWidgetPosition(labelPosition);
    setSelectedWidgetHeight(labelHeight);
    setSelectedWidgetWidth(labelWidth);
    setSelectedWidgetBackgroundColor(labelBackgroundColor);
    setSelectedWidgetOutsideBackgroundColor(labelOutsideBackgroundColor);
    setSelectedWidgetFontSize(labelFontSize);
    setSelectedWidgetFontFamily(labelFontFamily);
    setSelectedWidgetFontColor(labelFontColor);
    setSelectedWidgetBorderRadius(labelBorderRadius);
    setSelectionOutsideBackgroundColor_SameAsCanvas(labelOutsideBackgroundColor_SameAsCanvas);
    setSelectionBackgroundColor_SameAsCanvas(labelBackgroundColor_SameAsCanvas);
  };

  // função para atualizar as coordenadas no contexto CanvasContext
  const updateLabelPosition = (e, data) => {
    setLabelPosition({ 
      x: Math.round(data.x / 10) * 10, 
      y: Math.round(data.y / 10) * 10 
    });
  };

  const storageSerializedComponent = () => {
    // Cria um objeto com todas as propriedades e seus valores atuais
    const labelState = {
      id,
      widgetType : "label",
      labelContent,
      labelPosition,
      labelHeight,
      labelWidth,
      labelBorderRadius,
      labelBackgroundColor: labelBackgroundColor_SameAsCanvas ? canvasBackgroundColor : labelBackgroundColor,
      labelOutsideBackgroundColor: labelOutsideBackgroundColor_SameAsCanvas ? canvasBackgroundColor : labelOutsideBackgroundColor,
      labelFontSize,
      labelFontFamily,
      labelFontColor,
      labelBackgroundColor_SameAsCanvas,
      labelOutsideBackgroundColor_SameAsCanvas,
    };

    // Converte o objeto de estado para uma string JSON
    const labelStateString = JSON.stringify(labelState);

    // Grava a string JSON no localStorage usando o ID do widget como chave
    localStorage.setItem(`WidgetState-${id}`, labelStateString);

  }

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <Draggable bounds="parent" position={labelPosition} onStop={updateLabelPosition}>
        <OutsideBackgroundColor $outsideBackgroundColor={labelOutsideBackgroundColor} $height={labelHeight} $width={labelWidth}>
          <StyledLabel
            $height={labelHeight}
            $width={labelWidth}
            $fontSize={labelFontSize}
            $fontColor={labelFontColor}
            $fontFamily={labelFontFamily}
            $borderRadius={labelBorderRadius}
            $backgroundColor={labelBackgroundColor}
            onClick={setAsSelectedWidget}
          >
            {labelContent}
          </StyledLabel>
        </OutsideBackgroundColor>
      </Draggable>
    </StyleSheetManager>
  );
}

export default LabelWidget;
