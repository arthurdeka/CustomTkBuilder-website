// Importando as dependências necessárias
import React, { createContext, useState } from "react";
// Importando o componente Button
import Button from "./widgets/button";

// Criação do contexto CanvasContext
export const CanvasContext = React.createContext();

// Função que fornece os valores para o CanvasContext
export function CanvasProvider({ children }) {
  // Estado para armazenar os objetos no canvas. Inicialmente, contém um Button
  const [objetosCanvas, setObjetosCanvas] = React.useState([<Button />]);

  // Estado para armazenar o botão selecionado. Inicialmente, é nulo
  const [selectedButton, setSelectedButton] = useState(null);

  // Estado para estilos
  // coords
  const [selectedWidgetPosition, setSelectedWidgetPosition] = useState({ x: 0, y: 0 });
  // tamanho
  const [selectedWidgetHeight, setSelectedWidgetHeight] = useState(null);
  const [selectedWidgetWidth, setSelectedWidgetWidth] = useState(null);
  // estilo
  const [selectedWidgetBorder, setSelectedWidgetBorder] = useState(null);
  const [selectedWidgetBackgroundColor, setSelectedWidgetBackgroundColor] = useState(null);
  // texto
  const [selectedWidgetFontSize, setSelectedWidgetFontSize] = useState(null);

  // Função para adicionar um novo objeto ao canvas
  const addObjeto = (objeto) => {
    setObjetosCanvas((prevObjetos) => [...prevObjetos, objeto]);
  };

  // Retorna o provedor do contexto CanvasContext, que fornece os valores para os componentes filhos
  return (
    <CanvasContext.Provider
      value={{
        objetosCanvas,
        addObjeto,
        selectedButton,
        setSelectedButton,
        selectedWidgetHeight,
        setSelectedWidgetHeight,
        selectedWidgetWidth,
        setSelectedWidgetWidth,
        selectedWidgetFontSize,
        setSelectedWidgetFontSize,
        selectedWidgetBorder,
        setSelectedWidgetBorder,
        selectedWidgetBackgroundColor,
        setSelectedWidgetBackgroundColor,
        selectedWidgetPosition,
        setSelectedWidgetPosition,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
}
