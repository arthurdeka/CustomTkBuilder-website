import React, { useContext, useState, useEffect } from "react";
import { CanvasContext } from "../canvas/CanvasContext";

function Properties() {
  const {
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
    setIsActiveSelectedWidgetHoverBorderColor
  } = useContext(CanvasContext);

  const handleStyleChange = (event, propriedade) => {
    if (propriedade === "content") {
      setSelectedWidgetContent(event.target.value);
    }

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

    if (propriedade === "borderColor") {
      setSelectedWidgetBorderColor(event.target.value);
    }

    if (propriedade === "backgroundColor") {
      setSelectedWidgetBackgroundColor(event.target.value);
    }

    if (propriedade === "fontSize") {
      let value = event.target.value.toString();
      setSelectedWidgetFontSize(`${value}px`);
    }

    if (propriedade === "hoverBackgroundColor") {
      setSelectedWidgetHoverBackgroundColor(event.target.value);
    }

    if (propriedade === "hoverBorderColor") {
      setSelectedWidgetHoverBorderColor(event.target.value);
    }
  };

  useEffect(() => {
    // caso o hover background color esteja desabilitado, a cor de hover é setada para none
    if (isActiveSelectedWidgetHoverBackgroundColor === false) {
      setSelectedWidgetHoverBackgroundColor('none');
      console.log("isActiveSelectedWidgetHoverBackgroundColor");
    }

    // caso o hover border color esteja desabilitado, a cor de hover é setada para none
    if (isActiveSelectedWidgetHoverBorderColor === false) {
      setSelectedWidgetHoverBorderColor(selectedWidgetBorderColor);
      console.log("isActiveSelectedWidgetHoverBorderColor");
    }

  }, [isActiveSelectedWidgetHoverBackgroundColor, isActiveSelectedWidgetHoverBorderColor]);
 
  return (
    <div className="bg-slate-800 w-3/12  max-h-svh overflow-scroll">
      <div className="p-4 pb-20 pl-6 max-h-100 mt-8">
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

        <div className="flex flew-row items-end pt-4">
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

        <div className="flex flex-col pt-6">
          <label className="text-corsecundaria text-md font-inter font-semibold pr-2">
            Border Color:
          </label>
          <input
            className="w-full my-2"
            type="color"
            name="borderColor"
            value={selectedWidgetBorderColor}
            onChange={(event) => handleStyleChange(event, "borderColor")}
          />
          <div className="py-1" />
        </div>

        <div className="border-b border-corsecundaria my-6 mt-10" />

        <h4 className="text-md font-inter font-semibold mb-2 text-center text-corprimaria">
          Text:
        </h4>
        <div className="flex flex-row items-end pb-4">
          <label className="text-corsecundaria text-md font-inter font-semibold pr-2 whitespace-nowrap">
            Text content:
          </label>
          <input
            className="rounded-sm py-1 w-full pl-2 text-md"
            type="text"
            name="fontSize"
            value={selectedWidgetContent}
            onChange={(event) => handleStyleChange(event, "content")}
          />
          <br />
        </div>

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

        <div className="border-b border-corsecundaria my-6 mt-10" />
        <h4 className="text-md font-inter font-semibold mb-2 text-center text-corprimaria">
          Hover:
        </h4>

        {/* Enable Hover Background color checkbox */}
        <div>
          <div className="flex flex-row items-center mb-4">
            <input
              type="checkbox"
              checked={isActiveSelectedWidgetHoverBackgroundColor}
              onChange={(e) => setIsActiveSelectedWidgetHoverBackgroundColor(e.target.checked)}
              className="mr-2"
            />
            <label className="text-md font-inter font-semibold">
              Enable Hover - Background Color
            </label>
          </div>

          {/* somente aparece caso showHoverBackgroundColor seja True */}
          {isActiveSelectedWidgetHoverBackgroundColor && (
            <div className="flex flex-col">
              <label className="text-corsecundaria text-md font-inter font-semibold pr-2">
                Hover - Background Color:
              </label>
              <input
                className="rounded-sm py-1 w-full pl-2 text-md bg-gray-300"
                type="color"
                name="hoverBackgroundColor"
                value={selectedWidgetHoverBackgroundColor}
                onChange={(event) =>
                  handleStyleChange(event, "hoverBackgroundColor")
                }
              />
              <div className="py-1" />
            </div>
          )}
        </div>

        {/* Enable Hover Border Color checkbox */}
        <div>
          <div className="flex flex-row items-center mb-4">
            <input
              type="checkbox"
              checked={isActiveSelectedWidgetHoverBorderColor}
              onChange={(e) => setIsActiveSelectedWidgetHoverBorderColor(e.target.checked)}
              className="mr-2"
            />
            <label className="text-md font-inter font-semibold">
              Enable Hover - Border Color
            </label>
          </div>

          {/* somente aparece caso showHoverBackgroundColor seja True */}
          {isActiveSelectedWidgetHoverBorderColor && (
            <div className="flex flex-col">
              <label className="text-corsecundaria text-md font-inter font-semibold pr-2">
                Hover - Border Color:
              </label>
              <input
                className="rounded-sm py-1 w-full pl-2 text-md bg-gray-300"
                type="color"
                name="hoverBorderColor"
                value={selectedWidgetHoverBorderColor}
                onChange={(event) =>
                  handleStyleChange(event, "hoverBorderColor")
                }
              />
              <div className="py-1" />
            </div>
          )}
        </div>




      </div>
    </div>
  );
}

export default Properties;
export { Properties };
