import React, { useContext, useEffect } from "react";
import { CanvasContext } from "../canvas/CanvasContext";

function Properties() {
  const {
    selectedButton,
    setSelectedWidgetHeight,
    selectedWidgetHeight,
    setSelectedWidgetWidth,
    selectedWidgetWidth,
    selectedWidgetFontSize,
    setSelectedWidgetFontSize,
    selectedWidgetBorder,
    setSelectedWidgetBorder,
    selectedWidgetBackgroundColor,
    setSelectedWidgetBackgroundColor,
    selectedWidgetPosition,
    setSelectedWidgetPosition,
  } = useContext(CanvasContext);

  const handleStyleChange = (event, propriedade) => {
    if (propriedade === "height") {
      let value = event.target.value.toString();
      setSelectedWidgetHeight(`${value}px`);
    }

    if (propriedade === "width") {
      let value = event.target.value.toString();
      setSelectedWidgetWidth(`${value}px`);
    }

    if (propriedade === "border-width") {
      let value = event.target.value.toString();
      setSelectedWidgetBorder(`${value}px solid`);
    }

    if (propriedade === "backgroundColor") {
      setSelectedWidgetBackgroundColor(event.target.value);
    }

    if (propriedade === "fontSize") {
      let value = event.target.value.toString();
      setSelectedWidgetFontSize(`${value}px`);
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
        border: selectedWidgetBorder,
      });
    }
  }, [
    selectedWidgetHeight,
    selectedWidgetWidth,
    selectedWidgetBackgroundColor,
    selectedWidgetFontSize,
    selectedButton,
    selectedWidgetBorder,
  ]);

  return (
    <div className="h-screen bg-slate-800 w-3/12">
      <div className="p-4 pl-6 mt-8">
        <h2 className="text-3xl font-inter text-center text-corprimaria">
          Properties
        </h2>
        <br />

        <h4 className="text-md font-inter font-semibold mb-2 text-center text-corprimaria">
          Coords:
        </h4>
        <div className="flex flex-row items-end">
          <label className="text-corsecundaria text-lg font-inter font-bold pr-2">
            X:
          </label>
          <input
            className="rounded-sm py-1 w-full pl-2 text-md bg-gray-300"
            type="number"
            name="x_coord"
            value={selectedWidgetPosition.x}
            disabled
          />
          <label className="text-corsecundaria pl-2 font-inter pr-2">Px</label>
          <br />
        </div>

        <div className="p-1" />

        <div className="flex flex-row items-end">
          <label className="text-corsecundaria text-lg font-inter font-bold pr-2">
            Y:
          </label>
          <input
            className="rounded-sm py-1 w-full pl-2 text-md bg-gray-300"
            type="number"
            name="y_coord"
            value={selectedWidgetPosition.y}
            disabled
          />
          <label className="text-corsecundaria pl-2 font-inter pr-2">Px</label>
          <br />
        </div>

        <div className="border-b border-corsecundaria my-6 mt-10" />

        <h4 className="text-md font-inter font-semibold mb-2 text-center text-corprimaria">
          Size:
        </h4>
        <div className="flex flex-row items-end">
          <label className="text-corsecundaria text-md font-inter font-semibold pr-2">
            Height:
          </label>
          <input
            className="rounded-sm py-1 w-full pl-2 text-md"
            type="number"
            name="height"
            value={parseInt(selectedWidgetHeight)}
            onChange={(event) => handleStyleChange(event, "height")}
          />
          <label className="text-corsecundaria pl-2 font-inter pr-2">Px</label>
          <br />
        </div>

        <div className="p-1" />

        <div className="flex flex-row items-end">
          <label className="text-corsecundaria text-md font-inter font-semibold pr-2">
            Width:
          </label>
          <input
            className="rounded-sm py-1 w-full pl-2 text-md"
            type="number"
            name="width"
            value={parseInt(selectedWidgetWidth)}
            onChange={(event) => handleStyleChange(event, "width")}
          />
          <label className="text-corsecundaria pl-2 font-inter pr-2">Px</label>
          <br />
        </div>

        <div className="border-b border-corsecundaria my-6 mt-10" />

        <h4 className="text-md font-inter font-semibold mb-2 text-center text-corprimaria">
          Content:
        </h4>
        <div className="flex flex-col">
          <label className="text-corsecundaria text-md font-inter font-semibold pr-2">
            Background Color:
          </label>
          <input
            className="w-full my-2"
            type="color"
            name="backgroundColor"
            value={selectedWidgetBackgroundColor}
            onChange={(event) => handleStyleChange(event, "backgroundColor")}
          />
          <div className="py-1" />
        </div>

        <div className="flex flew-row items-end">
          <label className="text-corsecundaria text-md font-inter font-semibold pr-2 whitespace-nowrap">
            Border width:
          </label>
          <input
            className="rounded-sm py-1 w-full pl-2 text-md"
            type="number"
            name="border-width"
            value={parseInt(selectedWidgetBorder)}
            onChange={(event) => handleStyleChange(event, "border-width")}
          />
          <label className="text-corsecundaria pl-2 font-inter pr-2">Px</label>
          <br />
        </div>

        <div className="border-b border-corsecundaria my-6 mt-10" />

        <h4 className="text-md font-inter font-semibold mb-2 text-center text-corprimaria">
          Text:
        </h4>
        <div className="flex flex-row items-end">
          <label className="text-corsecundaria text-md font-inter font-semibold pr-2 whitespace-nowrap">
            Font size:
          </label>
          <input
            className="rounded-sm py-1 w-full pl-2 text-md"
            type="number"
            name="fontSize"
            value={parseInt(selectedWidgetFontSize)}
            onChange={(event) => handleStyleChange(event, "fontSize")}
          />
          <label className="text-corsecundaria pl-2 font-inter pr-2">Px</label>
          <br />
        </div>

      </div>
    </div>
  );
}

export default Properties;
export { Properties };
