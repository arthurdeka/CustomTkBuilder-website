import React, { createContext, useState } from "react";
import Button from "./widgets/button"; // Importe o componente Button

// No arquivo CanvasContext.js
export const CanvasContext = React.createContext();

export function CanvasProvider({ children }) {
  const [objetosCanvas, setObjetosCanvas] = React.useState([<Button />]);
  const [selectedButton, setSelectedButton] = useState(null);

  const addObjeto = (objeto) => {
    setObjetosCanvas((prevObjetos) => [...prevObjetos, objeto]);
  };

  return (
    <CanvasContext.Provider value={{ objetosCanvas, addObjeto, selectedButton, setSelectedButton }}>
      {children}
    </CanvasContext.Provider>
  );
}