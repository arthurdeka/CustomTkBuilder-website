import "./canvas.css";
import React, { useContext, useState, Fragment, useEffect } from "react";
import { CanvasContext } from "./CanvasContext";
import { clearStorage } from "../utils/clearStorage";

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

  // Atualiza o JSON com as informações da janela
  const storageCanvas = () => {
    const canvasJSON = {
      WindowName,
      canvasWidth,
      canvasHeight,
      canvasLocalBackgroundColor,
    };
    // Grava a string JSON no localStorage usando o ID Canvas como chave
    localStorage.setItem("Canvas", JSON.stringify(canvasJSON));
  };

  useEffect(() => {
    // caso o a cor do canvas mude, a nova cor é enviada ao CanvasContext
    setCanvasBackgroundColor(canvasLocalBackgroundColor);
  }, [canvasLocalBackgroundColor]);

  // Limpa o localStorage quando o componente é montado
  clearStorage();

  // armazena as informações do componente no localStorage e atualiza quando necessário
  storageCanvas();
  useEffect(() => {
    storageCanvas();

  }, [WindowName, canvasWidth, canvasHeight, canvasLocalBackgroundColor]);

  return (
    <div id="canvas-env">
      <div id="canvas" style={{ width: `${canvasWidth}px`, height: `${canvasHeight}px`, backgroundColor: `${canvasLocalBackgroundColor}` }}>
        {objetosCanvas.map((objeto) => (
          <Fragment key={objeto.props.id}>{objeto}</Fragment>
        ))}
      </div>

      <div id="window-configs">
        <button id="window-configs-button" onClick={() => setShowConfigs(!showConfigs)}>
          {showConfigs ? "Hide Configs" : "Show Window Configs"}
        </button>

        {showConfigs && (
          <div id="configs-da-janela" className="flex font-inter">
            <div className="mx-2 flex flex-col">
              <div className="pt-4">
                <h1>Window Name:</h1>
                <input className="rounded-md px-2 w-full" type="text" value={WindowName} onChange={(e) => setWindowName(e.target.value)} />
              </div>

              <div>
                <h5 >Background Color:</h5>
                <input className="rounded-md px-2 w-full" type="color" value={canvasLocalBackgroundColor} onChange={(e) => setCanvasLocalBackgroundColor(e.target.value)} />
              </div>

            </div>

            <div className="mx-2">

              <h1>Window Size:</h1>
              <div>
                <h5 className="text-sm">Width:</h5>
                <input className="rounded-md px-2 w-full" type="number" min="5" value={canvasWidth} onChange={(e) => setCanvasWidth(e.target.value)} />
              </div>
              
              <div>
                <h5 className="text-sm">Height:</h5>
                <input className="rounded-md px-2 w-full" type="number" min="5" value={canvasHeight} onChange={(e) => setCanvasHeight(e.target.value)} />
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Canvas;
