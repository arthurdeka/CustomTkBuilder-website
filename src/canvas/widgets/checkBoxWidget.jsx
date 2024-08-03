import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from "../CanvasContext";
import styled, { StyleSheetManager } from "styled-components";

const CheckboxContainer = styled.label`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;

  color: ${(props) => props.$fontColor};
`;

const CheckboxInput = styled.input`
  display: none;

  &:checked + .checkbox-custom {
    background-color: ${(props) => props.$backgroundColor};
    border-color: ${(props) => props.$backgroundColor};
  }

  &:checked + .checkbox-custom::after {
    display: block;
  }
`;

const CheckboxCustom = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 5px; 
  border: 2px solid ${(props) => props.$borderColor};; 
  background-color: ${(props) => props.$canvasBgColor};
  margin-right: 10px;
  position: relative;

  ::after {
    content: '';
    display: none;
    width: 10px;
    height: 10px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    clip-path: polygon(0 0, 50% 100%, 100% 0);
  }
`;

function CheckboxWidget({ id }) {
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

  const [checkboxPosition, setCheckboxPosition] = useState({ x: 0, y: 0 });
  const [checkboxContent, setCheckboxContent] = useState("Checkbox" + id);
  const [checkboxBackgroundColor, setCheckboxBackgroundColor] = useState("#808080");
  const [checkboxFontColor, setCheckboxFontColor] = useState("#000000");
  const [checkboxBorderColor, setCheckboxBorderColor] = useState("#000000");

  useEffect(() => {
    if (selectedWidgetID === id) {
      setCheckboxContent(selectedWidgetContent);
      setCheckboxBackgroundColor(selectedWidgetBackgroundColor);
      setCheckboxFontColor(selectedWidgetFontColor);
      setCheckboxBorderColor(selectedWidgetBorderColor);

      // armazenar o componente no localStorage
      storageSerializedComponent();
    }
  }, [
    selectedWidgetID,
    selectedWidgetContent,
    selectedWidgetBackgroundColor,
    selectedWidgetFontColor,
    selectedWidgetBorderColor,
  ]);

  const setAsSelectedWidget = () => {
    setSelectedWidgetType("checkbox");
    setSelectedWidgetID(id);
    setSelectedWidgetPosition(checkboxPosition);
    setSelectedWidgetContent(checkboxContent);
    setSelectedWidgetBackgroundColor(checkboxBackgroundColor);
    setSelectedWidgetFontColor(checkboxFontColor);
    setSelectedWidgetBorderColor(checkboxBorderColor);
  };

  const updateCheckboxPosition = (e, data) => {
    setCheckboxPosition({
      x: Math.round(data.x / 10) * 10,
      y: Math.round(data.y / 10) * 10,
    });
  };

  const storageSerializedComponent = () => {
    const checkboxState = {
      id,
      widgetType: "checkbox",
      checkboxPosition,
      checkboxContent,
      checkboxBackgroundColor,
      checkboxFontColor,
      checkboxBorderColor,
    };

    const checkboxStateString = JSON.stringify(checkboxState);
    localStorage.setItem(`WidgetState-${id}`, checkboxStateString);
  };

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <Draggable bounds="parent" position={checkboxPosition} onStop={updateCheckboxPosition}>
        <CheckboxContainer $fontColor={checkboxFontColor} onClick={setAsSelectedWidget}>
          <CheckboxInput $backgroundColor={checkboxBackgroundColor} type="checkbox" className="checkbox-input" />
          <CheckboxCustom $canvasBgColor={canvasBackgroundColor} $borderColor={checkboxBorderColor} className="checkbox-custom"></CheckboxCustom>
          {checkboxContent}
        </CheckboxContainer>
      </Draggable>
    </StyleSheetManager>
  );
}

export default CheckboxWidget;
