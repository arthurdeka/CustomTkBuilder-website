import React, { useContext, useState, useEffect } from "react";
import { CanvasContext } from "../canvas/CanvasContext";

function Properties() {
  const {
    objetosCanvas,
    setObjetosCanvas,
    canvasBackgroundColor,
    selectedWidgetID,
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
    selectionOutsideBackgroundColor_SameAsCanvas,
    setSelectionOutsideBackgroundColor_SameAsCanvas,
    selectedWidgetType,
    setSelectedWidgetType,
    selectedWidgetPlaceholderFontColor,
    setSelectedWidgetPlaceholderFontColor,
    selectionBackgroundColor_SameAsCanvas,
    setSelectionBackgroundColor_SameAsCanvas,
    selectedWidgetFontFamily,
    setSelectedWidgetFontFamily,
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

    if (propriedade === "placeholderFontColor") {
      setSelectedWidgetPlaceholderFontColor(event.target.value);
    }

    if (propriedade === "hoverBackgroundColor") {
      setSelectedWidgetHoverBackgroundColor(event.target.value);
    }

    if (propriedade === "border-radius") {
      let value = event.target.value.toString();
      setSelectedWidgetBorderRadius(`${value}px`);
    }

    /* SELECTION - button outside background color  */
    if (propriedade === "outsideBackgroundColor_SameAsCanvas") {
      if (event.target.value === "sameAsCanvas") {
        setSelectionOutsideBackgroundColor_SameAsCanvas(true);
        setSelectedWidgetOutsideBackgroundColor(canvasBackgroundColor);
      }
      if (event.target.value === "customColor") {
        setSelectionOutsideBackgroundColor_SameAsCanvas(false);
      }
    }

    if (propriedade === "outsideBackgroundColor_CustomColor") {
      setSelectionOutsideBackgroundColor_SameAsCanvas(false);
      setSelectedWidgetOutsideBackgroundColor(event.target.value);
    }

    /* SELECTION - label background color*/
    if (propriedade === "BackgroundColor_SameAsCanvas") {
      if (event.target.value === "sameAsCanvas") {
        setSelectionBackgroundColor_SameAsCanvas(true);
        setSelectedWidgetBackgroundColor(canvasBackgroundColor);
      }
      if (event.target.value === "customColor") {
        setSelectionBackgroundColor_SameAsCanvas(false);
      }
    }

    if (propriedade === "BackgroundColor_CustomColor") {
      setSelectionBackgroundColor_SameAsCanvas(false);
      setSelectedWidgetBackgroundColor(event.target.value);
    }

    /* SELECTION - label font family */
    if (propriedade === "fontFamily") {
      if (event.target.value === "Arial") {
        setSelectedWidgetFontFamily("Arial");
      }
      if (event.target.value === "Comic Sans MS") {
        setSelectedWidgetFontFamily("Comic Sans MS");
      }
      if (event.target.value === "Courier New") {
        setSelectedWidgetFontFamily("Courier New");
      }
      if (event.target.value === "Impact") {
        setSelectedWidgetFontFamily("Impact");
      }
      if (event.target.value === "Georgia") {
        setSelectedWidgetFontFamily("Georgia");
      }
      if (event.target.value === "Lexend") {
        setSelectedWidgetFontFamily("Lexend");
      }
      if (event.target.value === "MS Gothic") {
        setSelectedWidgetFontFamily("MS Gothic");
      }
    }
  }; 

  // Função para deletar o widget selecionado
  const deleteSelectedWidget = () => {
    // Filtra a lista de objetos, removendo o objeto com o ID correspondente
    const novaLista = objetosCanvas.filter(objeto => objeto.props.id !== selectedWidgetID);
    setSelectedWidgetType(null);
    setObjetosCanvas(novaLista);
    // remove do localstorage com key WidgetState
    localStorage.removeItem(`WidgetState-${selectedWidgetID}`);
  };

  useEffect(() => {
    // caso o hover background color esteja desabilitado, a cor de hover é setada para none
    if (isActiveSelectedWidgetHoverBackgroundColor === false) {
      setSelectedWidgetHoverBackgroundColor("none");
    }

  }, [isActiveSelectedWidgetHoverBackgroundColor]);

  return (
    <div className="bg-slate-800 w-3/12  max-h-svh overflow-scroll">
      <div className="p-4 pb-20 pl-6 max-h-100 mt-8">
        <h2 className="text-3xl font-inter text-center text-corprimaria">Properties</h2>
        <br />

        <h4 className="text-properties-h1">Coords:</h4>
        <div className="flex flex-row items-end">
          <label className="text-corsecundaria text-lg font-inter font-bold pr-2">X:</label>
          <input className="input-properties bg-gray-300" type="number" min="0" name="x_coord" value={selectedWidgetPosition.x} disabled />
          <label className="text-properties-h3">Px</label>
          <br />
        </div>

        <div className="p-1" />

        <div className="flex flex-row items-end">
          <label className="text-corsecundaria text-lg font-inter font-bold pr-2">Y:</label>
          <input className="input-properties bg-gray-300" type="number" min="0" name="y_coord" value={selectedWidgetPosition.y} disabled />
          <label className="text-properties-h3">Px</label>
          <br />
        </div> 

        <br />

        {/* Delete widget */}
        {selectedWidgetType === "label" || selectedWidgetType === "input" || selectedWidgetType === "button" ? (
          <>
          <button onClick={deleteSelectedWidget} className="bg-red-600 text-sm w-full rounded-sm text-center">Delete widget</button>
          </>
        ) : null} 

        <div className="horizontal-line" />

        {/* ====================================== */}
        {/* AQUI COMEÇA OS PROPERTIES DO BUTTON */}
        {/* ====================================== */}
        {selectedWidgetType === "button" && (
          <>
            <h4 className="text-properties-h1">Size:</h4>
            <div className="flex flex-row items-end">
              <label className="text-properties-h2">Height:</label>
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
              <label className="text-properties-h2">Width:</label>
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

            <div className="horizontal-line" />

            <h4 className="text-properties-h1">Content:</h4>
            <div className="flex flex-col">
              <label className="text-properties-h2">Background Color:</label>
              <input
                className="input-properties-color"
                type="color"
                name="backgroundColor"
                value={selectedWidgetBackgroundColor}
                onChange={(event) => handleStyleChange(event, "backgroundColor")}
              />
              <div className="py-1" />
            </div>

            <div className="flex flex-col">
              <label className="text-properties-h2">Beyond Rounded Borders Background Color:</label>
              <select
                className="input-properties-select"
                value={selectionOutsideBackgroundColor_SameAsCanvas ? "sameAsCanvas" : "customColor"}
                onChange={(event) => handleStyleChange(event, "outsideBackgroundColor_SameAsCanvas")}
              >
                <option value="sameAsCanvas">Same as Canvas Color</option>
                <option value="customColor">Custom Color</option>
              </select>

              {!selectionOutsideBackgroundColor_SameAsCanvas && (
                <input
                  className="input-properties-color"
                  type="color"
                  name="outsideBackgroundColor"
                  value={selectedWidgetOutsideBackgroundColor}
                  onChange={(event) => handleStyleChange(event, "outsideBackgroundColor_CustomColor")}
                />
              )}
              <div className="py-1" />
            </div>

            <div className="flex flew-row items-end pt-4">
              <label className="text-properties-h2 whitespace-nowrap">Border width:</label>
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
              <label className="text-properties-h2 whitespace-nowrap">Border Radius:</label>
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
              <label className="text-properties-h2">Border Color:</label>
              <input
                className="input-properties-color"
                type="color"
                name="borderColor"
                value={selectedWidgetBorderColor}
                onChange={(event) => handleStyleChange(event, "borderColor")}
              />
              <div className="py-1" />
            </div>

            <div className="horizontal-line" />

            <h4 className="text-properties-h1">Text:</h4>
            <div className="flex flex-row items-end pb-4">
              <label className="text-properties-h2 whitespace-nowrap">Text content:</label>
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
              <label className="text-properties-h2 whitespace-nowrap">Font size:</label>
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
              <label className="text-properties-h2">Font Color:</label>
              <input
                className="input-properties-color"
                type="color"
                name="fontColor"
                value={selectedWidgetFontColor}
                onChange={(event) => handleStyleChange(event, "fontColor")}
              />
              <div className="py-1" />
            </div>

            <div className="horizontal-line" />
            <h4 className="text-properties-h1">Hover:</h4>

            {/* Enable Hover Background color checkbox */}
            <div>
              <div className="flex flex-row items-center mb-4">
                <input
                  type="checkbox"
                  checked={isActiveSelectedWidgetHoverBackgroundColor}
                  onChange={(e) => setIsActiveSelectedWidgetHoverBackgroundColor(e.target.checked)}
                  className="mr-2"
                />
                <label className="text-md font-inter font-semibold">Enable Hover - Background Color</label>
              </div>

              {/* somente aparece caso isActiveSelectedWidgetHoverBackgroundColor seja True */}
              {isActiveSelectedWidgetHoverBackgroundColor && (
                <div className="flex flex-col">
                  <label className="text-properties-h2">Hover - Background Color:</label>
                  <input
                    className="input-properties-color"
                    type="color"
                    name="hoverBackgroundColor"
                    value={selectedWidgetHoverBackgroundColor}
                    onChange={(event) => handleStyleChange(event, "hoverBackgroundColor")}
                  />
                  <div className="py-1" />
                </div>
              )}
            </div>
          </>
        )}

        {/* ====================================== */}
        {/* AQUI COMEÇA OS PROPERTIES DO INPUT */}
        {/* ====================================== */}
        {selectedWidgetType === "input" && (
          <>
            <h4 className="text-properties-h1">Size:</h4>
            <div className="flex flex-row items-end">
              <label className="text-properties-h2">Height:</label>
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
              <label className="text-properties-h2">Width:</label>
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

            <div className="horizontal-line" />

            <h4 className="text-properties-h1">Content:</h4>
            <div className="flex flex-col">
              <label className="text-properties-h2">Background Color:</label>
              <input
                className="input-properties-color"
                type="color"
                name="backgroundColor"
                value={selectedWidgetBackgroundColor}
                onChange={(event) => handleStyleChange(event, "backgroundColor")}
              />
              <div className="py-1" />
            </div>

            <div className="flex flex-col">
              <label className="text-properties-h2">Beyond Rounded Borders Background Color:</label>
              <select
                className="input-properties-select"
                value={selectionOutsideBackgroundColor_SameAsCanvas ? "sameAsCanvas" : "customColor"}
                onChange={(event) => handleStyleChange(event, "outsideBackgroundColor_SameAsCanvas")}
              >
                <option value="sameAsCanvas">Same as Canvas Color</option>
                <option value="customColor">Custom Color</option>
              </select>

              {!selectionOutsideBackgroundColor_SameAsCanvas && (
                <input
                  className="input-properties-color"
                  type="color"
                  name="outsideBackgroundColor"
                  value={selectedWidgetOutsideBackgroundColor}
                  onChange={(event) => handleStyleChange(event, "outsideBackgroundColor_CustomColor")}
                />
              )}
              <div className="py-1" />
            </div>

            <div className="flex flew-row items-end pt-4">
              <label className="text-properties-h2 whitespace-nowrap">Border width:</label>
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
              <label className="text-properties-h2 whitespace-nowrap">Border Radius:</label>
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
              <label className="text-properties-h2">Border Color:</label>
              <input
                className="input-properties-color"
                type="color"
                name="borderColor"
                value={selectedWidgetBorderColor}
                onChange={(event) => handleStyleChange(event, "borderColor")}
              />
              <div className="py-1" />
            </div>

            <div className="horizontal-line" />

            <h4 className="text-properties-h1">Text:</h4>
            <div className="flex flex-row items-end pb-4">
              <label className="text-properties-h2 whitespace-nowrap">Placeholder text:</label>
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
              <label className="text-properties-h2 whitespace-nowrap">Font size:</label>
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
              <label className="text-properties-h2">Placeholder Font Color:</label>
              <input
                className="input-properties-color"
                type="color"
                name="placeholderFontColor"
                value={selectedWidgetPlaceholderFontColor}
                onChange={(event) => handleStyleChange(event, "placeholderFontColor")}
              />
            </div>

            <div className="flex flex-col pt-6">
              <label className="text-properties-h2">Font Color:</label>
              <input
                className="input-properties-color"
                type="color"
                name="fontColor"
                value={selectedWidgetFontColor}
                onChange={(event) => handleStyleChange(event, "fontColor")}
              />
              <div className="py-1" />
            </div>
          </>
        )}

        {/* ====================================== */}
        {/* AQUI COMEÇA OS PROPERTIES DO LABEL */}
        {/* ====================================== */}
        {selectedWidgetType === "label" && (
          <>
            <h4 className="text-properties-h1">Size:</h4>
            <div className="flex flex-row items-end">
              <label className="text-properties-h2">Height:</label>
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
              <label className="text-properties-h2">Width:</label>
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

            <div className="horizontal-line" />

            <h4 className="text-properties-h1">Content:</h4>

            <div className="flex flex-col">
              <label className="text-properties-h2">Background Color:</label>
              <select
                className="input-properties-select"
                value={selectionBackgroundColor_SameAsCanvas ? "sameAsCanvas" : "customColor"}
                onChange={(event) => handleStyleChange(event, "BackgroundColor_SameAsCanvas")}
              >
                <option value="sameAsCanvas">Same as Canvas Color</option>
                <option value="customColor">Custom Color</option>
              </select>

              {!selectionBackgroundColor_SameAsCanvas && (
                <input
                  className="input-properties-color"
                  type="color"
                  name="selectedBackgroundColor"
                  value={selectedWidgetBackgroundColor}
                  onChange={(event) => handleStyleChange(event, "BackgroundColor_CustomColor")}
                />
              )}
              <div className="py-1" />
            </div>

            <div className="flex flex-col">
              <label className="text-properties-h2">Beyond Rounded Borders Background Color:</label>
              <select
                className="input-properties-select"
                value={selectionOutsideBackgroundColor_SameAsCanvas ? "sameAsCanvas" : "customColor"}
                onChange={(event) => handleStyleChange(event, "outsideBackgroundColor_SameAsCanvas")}
              >
                <option value="sameAsCanvas">Same as Canvas Color</option>
                <option value="customColor">Custom Color</option>
              </select>

              {!selectionOutsideBackgroundColor_SameAsCanvas && (
                <input
                  className="input-properties-color"
                  type="color"
                  name="outsideBackgroundColor"
                  value={selectedWidgetOutsideBackgroundColor}
                  onChange={(event) => handleStyleChange(event, "outsideBackgroundColor_CustomColor")}
                />
              )}
              <div className="py-1" />
            </div>

            <div className="flex flew-row items-end pt-4">
              <label className="text-properties-h2 whitespace-nowrap">Border Radius:</label>
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

            <div className="horizontal-line" />

            <h4 className="text-properties-h1">Text:</h4>

            <div className="flex flex-col">
              <label className="text-properties-h2">Font Family:</label>
              <select value={selectedWidgetFontFamily} className="input-properties-select" onChange={(event) => handleStyleChange(event, "fontFamily")}>
                <option value="Arial">Arial</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Courier New">Courier New</option>
                <option value="Impact">Impact</option>
                <option value="Georgia">Georgia</option>
                <option value="Lexend">Lexend</option>
                <option value="MS Gothic">MS Gothic</option>
              </select>
            </div>

            <div className="flex flex-row items-end pb-4">
              <label className="text-properties-h2 whitespace-nowrap">Text:</label>
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
              <label className="text-properties-h2 whitespace-nowrap">Font size:</label>
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
              <label className="text-properties-h2">Font Color:</label>
              <input
                className="input-properties-color"
                type="color"
                name="fontColor"
                value={selectedWidgetFontColor}
                onChange={(event) => handleStyleChange(event, "fontColor")}
              />
              <div className="py-1" />
            </div>
          </>
        )}

        <button className="bg-amber-500 text-sm w-full rounded-sm text-center" onClick={() => (console.log(objetosCanvas))}>Log Objetos Canvas</button>

      </div>
    </div>
  );
}

export default Properties;
export { Properties };
