import React, { useContext, useEffect } from "react";
import { CanvasContext } from "../canvas/CanvasContext";

function Properties() {
  const { selectedButton, setSelectedWidgetHeight, selectedWidgetHeight, setSelectedWidgetWidth ,selectedWidgetWidth, selectedWidgetFontSize, setSelectedWidgetFontSize, selectedWidgetBackgroundColor, setSelectedWidgetBackgroundColor } = useContext(CanvasContext);

  const handleStyleChange = (event, propriedade) => {
    if (propriedade === "height") {
      setSelectedWidgetHeight(event.target.value);
    }

    if (propriedade === "width") {
      setSelectedWidgetWidth(event.target.value);
    }

    if (propriedade === "backgroundColor") {
      setSelectedWidgetBackgroundColor(event.target.value);
    }

    if (propriedade === "fontSize") {
      setSelectedWidgetFontSize(event.target.value);
    }

  };

  useEffect(() => {
    if (selectedButton) {
      selectedButton.setStyle({
        ...selectedButton.style,
        height: selectedWidgetHeight,
        width: selectedWidgetWidth,
        backgroundColor: selectedWidgetBackgroundColor,
        fontSize: selectedWidgetFontSize,
      });
    }
  }, [selectedWidgetHeight, selectedWidgetWidth, selectedWidgetBackgroundColor, selectedWidgetFontSize, selectedButton]);

  return (
    <div className="h-screen bg-corsecundaria w-2/12">
      <div className="pl-2 pr-4 mt-8">
        <h2 className="text-2xl font-inter font-semibold text-white">
          Properties
        </h2>
        <h4 className="text-md font-inter font-semibold text-white">
          Size:
        </h4>
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={selectedWidgetHeight}
            onChange={(event) => handleStyleChange(event, "height")}
          />
        </label>
        <label>
          Width:
          <input
            type="text"
            name="width"
            value={selectedWidgetWidth}
            onChange={(event) => handleStyleChange(event, "width")}
          />
        </label>
        <h4 className="text-md font-inter font-semibold text-white">
          Content:
        </h4>
        <label>
          Background Color:
          <input
            type="color"
            name="backgroundColor"
            value={selectedWidgetBackgroundColor}
            onChange={(event) => handleStyleChange(event, "backgroundColor")}
          />
        </label>
        <h4 className="text-md font-inter font-semibold text-white">
          Text:
        </h4>
        <label>
          Font size:
          <input
            type="text"
            name="fontSize"
            value={selectedWidgetFontSize}
            onChange={(event) => handleStyleChange(event, "fontSize")}
          />
        </label>

      </div>
    </div>
  );
}

export default Properties;
export { Properties };