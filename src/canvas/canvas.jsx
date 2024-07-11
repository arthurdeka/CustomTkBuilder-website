import "./canvas.css";
import React, { useContext, useState, Fragment, useEffect } from "react";
import { CanvasContext } from "./CanvasContext";

function Canvas() {
  // importa a lista de objetosCanvas do contexto
  const { objetosCanvas, setCanvasBackgroundColor } = useContext(CanvasContext);

  // Adiciona estados para width, height e visibilidade da configuração
  const [canvasWidth, setCanvasWidth] = useState(800); // Valor inicial para width
  const [canvasHeight, setCanvasHeight] = useState(350); // Valor inicial para height
  const [canvasLocalBackgroundColor, setCanvasLocalBackgroundColor] = useState("#FFFFFF");
  const [WindowName, setWindowName] = useState("Tkinter"); // Valor inicial para height

  // estado para mostrar a janela de configurações
  const [showConfigs, setShowConfigs] = useState(false); 

  useEffect(() => {
    // caso o a cor do canvas mude, a nova cor é enviada ao CanvasContext
    setCanvasBackgroundColor(canvasLocalBackgroundColor)

  }, [canvasLocalBackgroundColor]);

  return (
    <div id="canvas-env">
      <div
        id="canvas"
        style={{ width: `${canvasWidth}px`, height: `${canvasHeight}px`, backgroundColor: `${canvasLocalBackgroundColor}`}}
      >
        {/* renderiza os objetos armazenados na lista objetosCanvas */}
        {objetosCanvas.map((objeto, index) => (
          <Fragment key={index}>{objeto}</Fragment>
        ))}
      </div>

      <div id="window-configs">
        <button
          id="window-configs-button"
          onClick={() => setShowConfigs(!showConfigs)}
        >
          {showConfigs ? "Hide Configs" : "Show Window Configs"}
        </button>

        {showConfigs && (
          <div id="configs-da-janela">
            <h1>Window Name:</h1>
            <input
              type="text"
              value={WindowName}
              onChange={(e) => setWindowName(e.target.value)}
            />

            <h5>Background Color:</h5>
            <input
              type="color"
              value={canvasLocalBackgroundColor}
              onChange={(e) => setCanvasLocalBackgroundColor(e.target.value)}
            />

            <h1>Window Size:</h1>
            <h5>width:</h5>
            <input
              type="number"
              min="5"
              value={canvasWidth}
              onChange={(e) => setCanvasWidth(e.target.value)}
            />
            <h5>height:</h5>
            <input
              type="number"
              min="5"
              value={canvasHeight}
              onChange={(e) => setCanvasHeight(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Canvas;
