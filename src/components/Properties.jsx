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
    setIsActiveSelectedWidgetHoverBorderColor,
    selectedWidgetFontColor,
    setSelectedWidgetFontColor,
    selectedWidgetHoverFontColor,
    setSelectedWidgetHoverFontColor,
    isActiveSelectedWidgetHoverFontColor,
    setIsActiveSelectedWidgetHoverFontColor,
    selectedWidgetBorderRadius,
    setSelectedWidgetBorderRadius,
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

    if (propriedade === "fontColor") {
      setSelectedWidgetFontColor(event.target.value);
    }

    if (propriedade === "hoverBackgroundColor") {
      setSelectedWidgetHoverBackgroundColor(event.target.value);
    }

    if (propriedade === "hoverBorderColor") {
      setSelectedWidgetHoverBorderColor(event.target.value);
    }

    if (propriedade === "hoverFontColor") {
      setSelectedWidgetHoverFontColor(event.target.value);
    }

    if (propriedade === "border-radius") {
      let value = event.target.value.toString();
      setSelectedWidgetBorderRadius(`${value}px`);
    }

  };

  useEffect(() => {
    // caso o hover background color esteja desabilitado, a cor de hover é setada para none
    if (isActiveSelectedWidgetHoverBackgroundColor === false) {
      setSelectedWidgetHoverBackgroundColor("none");
    }

    // caso o hover border color esteja desabilitado, a cor de hover é setada para none
    if (isActiveSelectedWidgetHoverBorderColor === false) {
      setSelectedWidgetHoverBorderColor("none");
    }

    if (isActiveSelectedWidgetHoverFontColor === false) {
      setSelectedWidgetHoverFontColor("none");
    }
  }, [
    isActiveSelectedWidgetHoverBackgroundColor,
    isActiveSelectedWidgetHoverBorderColor,
    isActiveSelectedWidgetHoverFontColor,
  ]);

  return (
    <div className="bg-slate-800 w-3/12  max-h-svh overflow-scroll">
      <div className="p-4 pb-20 pl-6 max-h-100 mt-8">
        <h2 className="text-3xl font-inter text-center text-corprimaria">
          Properties
        </h2>
        <br />

        <h4 className="text-properties-h1">
          Coords:
        </h4>
        <div className="flex flex-row items-end">
          <label className="text-corsecundaria text-lg font-inter font-bold pr-2">
            X:
          </label>
          <input
            className="input-properties bg-gray-300"
            type="number"
            min="0"
            name="x_coord"
            value={selectedWidgetPosition.x}
            disabled
          />
          <label className="text-properties-h3">Px</label>
          <br />
        </div>

        <div className="p-1" />

        <div className="flex flex-row items-end">
          <label className="text-corsecundaria text-lg font-inter font-bold pr-2">
            Y:
          </label>
          <input
            className="input-properties bg-gray-300"
            type="number"
            min="0"
            name="y_coord"
            value={selectedWidgetPosition.y}
            disabled
          />
          <label className="text-properties-h3">Px</label>
          <br />
        </div>

        <div className="border-b border-corsecundaria my-6 mt-10" />

        <h4 className="text-properties-h1">
          Size:
        </h4>
        <div className="flex flex-row items-end">
          <label className="text-properties-h2">
            Height:
          </label>
          <input
            className="input-properties"
            type="number"
            min="5"
            name="height"
            value={parseInt(selectedWidgetHeight)}
            onChange={(event) => handleStyleChange(event, "height")}
          />
          <label className="text-properties-h3">Px</label>
          <br />
        </div>

        <div className="p-1" />

        <div className="flex flex-row items-end">
          <label className="text-properties-h2">
            Width:
          </label>
          <input
            className="input-properties"
            type="number"
            min="5"
            name="width"
            value={parseInt(selectedWidgetWidth)}
            onChange={(event) => handleStyleChange(event, "width")}
          />
          <label className="text-properties-h3">Px</label>
          <br />
        </div>

        <div className="border-b border-corsecundaria my-6 mt-10" />

        <h4 className="text-properties-h1">
          Content:
        </h4>
        <div className="flex flex-col">
          <label className="text-properties-h2">
            Background Color:
          </label>
          <input
            className="input-properties-color"
            type="color"
            name="backgroundColor"
            value={selectedWidgetBackgroundColor}
            onChange={(event) => handleStyleChange(event, "backgroundColor")}
          />
          <div className="py-1" />
        </div>

        <div className="flex flew-row items-end pt-4">
          <label className="text-properties-h2 whitespace-nowrap">
            Border width:
          </label>
          <input
            className="input-properties"
            type="number"
            min="1"
            name="border-width"
            value={parseInt(selectedWidgetBorder)}
            onChange={(event) => handleStyleChange(event, "border-width")}
          />
          <label className="text-properties-h3">Px</label>
          <br />
        </div>

        <div className="flex flew-row items-end pt-4">
          <label className="text-properties-h2 whitespace-nowrap">
            Border Radius:
          </label>
          <input
            className="input-properties"
            type="number"
            min="1"
            name="border-radius"
            value={parseInt(selectedWidgetBorderRadius)}
            onChange={(event) => handleStyleChange(event, "border-radius")}
          />
          <label className="text-properties-h3">Px</label>
          <br />
        </div>

        <div className="flex flex-col pt-6">
          <label className="text-properties-h2">
            Border Color:
          </label>
          <input
            className="input-properties-color"
            type="color"
            name="borderColor"
            value={selectedWidgetBorderColor}
            onChange={(event) => handleStyleChange(event, "borderColor")}
          />
          <div className="py-1" />
        </div>

        <div className="border-b border-corsecundaria my-6 mt-10" />

        <h4 className="text-properties-h1">
          Text:
        </h4>
        <div className="flex flex-row items-end pb-4">
          <label className="text-properties-h2 whitespace-nowrap">
            Text content:
          </label>
          <input
            className="input-properties"
            type="text"
            name="fontSize"
            value={selectedWidgetContent}
            onChange={(event) => handleStyleChange(event, "content")}
          />
          <br />
        </div>

        <div className="flex flex-row items-end">
          <label className="text-properties-h2 whitespace-nowrap">
            Font size:
          </label>
          <input
            className="input-properties"
            type="number"
            min="1"
            name="fontSize"
            value={parseInt(selectedWidgetFontSize)}
            onChange={(event) => handleStyleChange(event, "fontSize")}
          />
          <label className="text-properties-h3">Px</label>
          <br />
        </div>

        <div className="flex flex-col pt-6">
          <label className="text-properties-h2">
            Font Color:
          </label>
          <input
            className="input-properties-color"
            type="color"
            name="fontColor"
            value={selectedWidgetFontColor}
            onChange={(event) => handleStyleChange(event, "fontColor")}
          />
          <div className="py-1" />
        </div>

        <div className="border-b border-corsecundaria my-6 mt-10" />
        <h4 className="text-properties-h1">
          Hover:
        </h4>

        {/* Enable Hover Background color checkbox */}
        <div>
          <div className="flex flex-row items-center mb-4">
            <input
              type="checkbox"
              checked={isActiveSelectedWidgetHoverBackgroundColor}
              onChange={(e) =>
                setIsActiveSelectedWidgetHoverBackgroundColor(e.target.checked)
              }
              className="mr-2"
            />
            <label className="text-md font-inter font-semibold">
              Enable Hover - Background Color
            </label>
          </div>

          {/* somente aparece caso isActiveSelectedWidgetHoverBackgroundColor seja True */}
          {isActiveSelectedWidgetHoverBackgroundColor && (
            <div className="flex flex-col">
              <label className="text-properties-h2">
                Hover - Background Color:
              </label>
              <input
                className="input-properties-color"
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
              onChange={(e) =>
                setIsActiveSelectedWidgetHoverBorderColor(e.target.checked)
              }
              className="mr-2"
            />
            <label className="text-md font-inter font-semibold">
              Enable Hover - Border Color
            </label>
          </div>

          {/* somente aparece caso isActiveSelectedWidgetHoverBorderColor seja True */}
          {isActiveSelectedWidgetHoverBorderColor && (
            <div className="flex flex-col">
              <label className="text-properties-h2">
                Hover - Border Color:
              </label>
              <input
                className="input-properties-color"
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

        {/* Enable Hover Font Color checkbox */}
        <div>
          <div className="flex flex-row items-center mb-4">
            <input
              type="checkbox"
              checked={isActiveSelectedWidgetHoverFontColor}
              onChange={(e) =>
                setIsActiveSelectedWidgetHoverFontColor(e.target.checked)
              }
              className="mr-2"
            />
            <label className="text-md font-inter font-semibold">
              Enable Hover - Font Color
            </label>
          </div>

          {/* somente aparece caso isActiveSelectedWidgetHoverFontColor seja True */}
          {isActiveSelectedWidgetHoverFontColor && (
            <div className="flex flex-col">
              <label className="text-properties-h2">
                Hover - Font Color:
              </label>
              <input
                className="input-properties-color"
                type="color"
                name="hoverFontColor"
                value={selectedWidgetHoverFontColor}
                onChange={(event) =>
                  handleStyleChange(event, "hoverFontColor")
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
