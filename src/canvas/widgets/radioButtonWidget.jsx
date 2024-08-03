import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from "../CanvasContext";
import styled, { StyleSheetManager } from "styled-components";

const RadioButtonContainer = styled.label`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;

  color: ${(props) => props.$fontColor};
`;

const RadioButtonInput = styled.input`
  display: none;

  &:checked + .radio-custom {
    background-color: ${(props) => props.$backgroundColor};
    border-color: ${(props) => props.$backgroundColor};
  }

  &:checked + .radio-custom::after {
    display: block;
  }
`;

const RadioButtonCustom = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%; 
  border: 2px solid ${(props) => props.$borderColor}; 
  background-color: ${(props) => props.$canvasBgColor};
  margin-right: 10px;
  position: relative;

  ::after {
    content: '';
    display: none;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function RadioButtonWidget({ id }) {
  const {
    selectedWidgetID,
    canvasBackgroundColor,
    setSelectedWidgetID,
    selectedWidgetContent,
    setSelectedWidgetContent,
    selectedWidgetBorderColor,
    setSelectedWidgetBorderColor,
    selectedWidgetBackgroundColor,
    setSelectedWidgetBackgroundColor,
    setSelectedWidgetPosition,
    selectedWidgetFontColor,
    setSelectedWidgetFontColor,
    setSelectedWidgetType,
  } = useContext(CanvasContext);

  const [radioPosition, setRadioPosition] = useState({ x: 0, y: 0 });
  const [radioContent, setRadioContent] = useState("RadioButton" + id);
  const [radioBackgroundColor, setRadioBackgroundColor] = useState("#808080");
  const [radioFontColor, setRadioFontColor] = useState("#000000");
  const [radioBorderColor, setRadioBorderColor] = useState("#000000");

  useEffect(() => {
    if (selectedWidgetID === id) {
      setRadioContent(selectedWidgetContent);
      setRadioBackgroundColor(selectedWidgetBackgroundColor);
      setRadioFontColor(selectedWidgetFontColor);
      setRadioBorderColor(selectedWidgetBorderColor);

      // armazenar o componente no localStorage
      storageSerializedComponent();
    }
  }, [
    selectedWidgetID,
    selectedWidgetContent,
    selectedWidgetBackgroundColor,
    selectedWidgetFontColor,
    selectedWidgetBorderColor,
    // caso qualquer um desses valores mude, o componente é armazenado no localStorage (código necessário para resolver bug)
    radioPosition,
    radioContent,
    radioBackgroundColor,
    radioFontColor,
    radioBorderColor,
  ]);

  const setAsSelectedWidget = () => {
    setSelectedWidgetType("radio");
    setSelectedWidgetID(id);
    setSelectedWidgetPosition(radioPosition);
    setSelectedWidgetContent(radioContent);
    setSelectedWidgetBackgroundColor(radioBackgroundColor);
    setSelectedWidgetFontColor(radioFontColor);
    setSelectedWidgetBorderColor(radioBorderColor);
  };

  const updateRadioPosition = (e, data) => {
    setRadioPosition({
      x: Math.round(data.x / 10) * 10,
      y: Math.round(data.y / 10) * 10,
    });
    // armazenar o componente no localStorage
    storageSerializedComponent();
  };

  const storageSerializedComponent = () => {
    const radioState = {
      id,
      widgetType: "radio",
      radioPosition,
      radioContent,
      radioBackgroundColor,
      radioFontColor,
      radioBorderColor,
    };

    const radioStateString = JSON.stringify(radioState);
    localStorage.setItem(`WidgetState-${id}`, radioStateString);
  };

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <Draggable bounds="parent" position={radioPosition} onStop={updateRadioPosition}>
        <RadioButtonContainer $fontColor={radioFontColor} onClick={setAsSelectedWidget}>
          <RadioButtonInput $backgroundColor={radioBackgroundColor} type="radio" name="group" className="radio-input" />
          <RadioButtonCustom $canvasBgColor={canvasBackgroundColor} $borderColor={radioBorderColor} className="radio-custom"></RadioButtonCustom>
          {radioContent}
        </RadioButtonContainer>
      </Draggable>
    </StyleSheetManager>
  );
}

export default RadioButtonWidget;