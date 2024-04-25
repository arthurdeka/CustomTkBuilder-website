import "./canvas.css";

import React, { useState } from "react";
import Button from "./button.jsx";

function Canvas() {
  const [objetos, setObjetos] = useState([]); // Estado para armazenar os objetos

  // Função para criar um novo objeto e adicioná-lo ao estado
  const criarNovoObjeto = () => {
    const novoObjeto = <Button conteudo="Button1" corDeFundo="#393D49" />;
    setObjetos([...objetos, novoObjeto]);
  };

  return (
    <div className="pt-8 mt-8">
      <button onClick={criarNovoObjeto}>Criar Button</button>
      <div id="canvas">
        {objetos.map((objeto, index) => (
          <div key={index}>{objeto}</div>
        ))}
      </div>
    </div>
  );
}

export default Canvas;
