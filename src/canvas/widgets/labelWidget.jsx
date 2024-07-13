import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from "../CanvasContext";
import styled from "styled-components";

const StyledInput = styled.div`
  position: absolute;
  cursor: grab;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: ${(props) => props.borderRadius};
`;

// div para representar o background color além das rounded borders
const OutsideBackgroundColor = styled.div`
  position: absolute;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.outsideBackgroundColor};
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
      setLabelBackgroundColor(selectedWidgetBackgroundColor);
      setLabelOutsideBackgroundColor(selectedWidgetOutsideBackgroundColor);
      setLabelFontSize(selectedWidgetFontSize);
      setLabelFontFamily(selectedWidgetFontFamily);
      setLabelFontColor(selectedWidgetFontColor);
      setLabelOutsideBackgroundColor_SameAsCanvas(selectionOutsideBackgroundColor_SameAsCanvas);
      setLabelBackgroundColor_SameAsCanvas(selectionBackgroundColor_SameAsCanvas);
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
  ]);

  // caso a cor do canvas mude, e a opção de manter a cor do botão igual a do canvas esteja ativa, a cor do outside background é atualizada
  useEffect(() => {
    if (labelBackgroundColor_SameAsCanvas == true) {
      setLabelBackgroundColor(canvasBackgroundColor);
    }
    if (labelOutsideBackgroundColor_SameAsCanvas == true) {
      setLabelOutsideBackgroundColor(canvasBackgroundColor);
    }
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
    setLabelPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable bounds="parent" position={labelPosition} onStop={updateLabelPosition}>
      <OutsideBackgroundColor outsideBackgroundColor={labelOutsideBackgroundColor} height={labelHeight} width={labelWidth}>
        <StyledInput
          height={labelHeight}
          width={labelWidth}
          fontSize={labelFontSize}
          fontColor={labelFontColor}
          fontFamily={labelFontFamily}
          borderRadius={labelBorderRadius}
          backgroundColor={labelBackgroundColor}
          onClick={setAsSelectedWidget}
        >
          {labelContent}
        </StyledInput>
      </OutsideBackgroundColor>
    </Draggable>
  );
}

export default LabelWidget;
