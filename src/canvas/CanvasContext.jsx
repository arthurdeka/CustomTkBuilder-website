import React, { createContext, useState } from "react";
import Button from "./button"; // Importe o componente Button

// No arquivo CanvasContext.js
export const CanvasContext = React.createContext();

export function CanvasProvider({ children }) {
  const [objetosCanvas, setObjetosCanvas] = React.useState([<Button />]);

  const addObjeto = (objeto) => {
    setObjetosCanvas((prevObjetos) => [...prevObjetos, objeto]);
  };

  return (
    <CanvasContext.Provider value={{ objetosCanvas, addObjeto }}>
      {children}
    </CanvasContext.Provider>
  );
}