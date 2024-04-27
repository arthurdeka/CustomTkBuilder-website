import "./canvas.css";
import React, { useContext, Fragment } from "react";
import { CanvasContext } from './CanvasContext';

import Button from "./button"; // Importe o componente Button


function Canvas() {
  // importa a lista de objetosCanvas do contexto
  const { objetosCanvas } = useContext(CanvasContext);

  return (
    <div id="canvas-env">
      <div id="canvas">
        {/* // renderiza os objetos armazenados na lista objetosCanvas  */}
        {objetosCanvas.map((objeto, index) => (
          <Fragment key={index}>{objeto}</Fragment>
        ))}
      </div>
    </div>
  );
}

export default Canvas;