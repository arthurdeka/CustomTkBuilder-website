// Importando as dependências necessárias
import React, { createContext, useState } from "react";
// Importando o componente Button
import Button from "./widgets/button";

// Criação do contexto CanvasContext
export const CanvasContext = React.createContext();

// Função que fornece os valores para o CanvasContext
export function CanvasProvider({ children }) {
  // Estado para armazenar os objetos no canvas. Inicialmente, contém um Button
  const [objetosCanvas, setObjetosCanvas] = useState([]);

  // Estado para armazenar o ID do widget selecionado
  const [selectedWidgetID, setSelectedWidgetID] = useState(null);

  // Estado para armazenar o próximo ID disponível
  const [nextId, setNextId] = useState(1);

  // Estado para armazenar o estilo do widget selecionado. Inicialmente, é nulo
  const [selectedButton, setSelectedButton] = useState(null);

  // Estado para estilos
  // coords
  const [selectedWidgetPosition, setSelectedWidgetPosition] = useState({ x: 0, y: 0 });
  // tamanho
  const [selectedWidgetHeight, setSelectedWidgetHeight] = useState(null);
  const [selectedWidgetWidth, setSelectedWidgetWidth] = useState(null);
  // estilo
  const [selectedWidgetBorder, setSelectedWidgetBorder] = useState(null);
  const [selectedWidgetBorderColor, setSelectedWidgetBorderColor] = useState(null);
  const [selectedWidgetBackgroundColor, setSelectedWidgetBackgroundColor] = useState(null);
  // texto
  const [selectedWidgetContent, setSelectedWidgetContent] = useState(null);
  const [selectedWidgetFontSize, setSelectedWidgetFontSize] = useState(null);

  // Função para adicionar um novo objeto ao canvas
  const addObjeto = (objeto) => {
    const newObject = React.cloneElement(objeto, { id: nextId });
    setObjetosCanvas((prevObjetos) => [...prevObjetos, newObject]);
    setNextId(nextId + 1);
  };


  // Retorna o provedor do contexto CanvasContext, que fornece os valores para os componentes filhos
  return (
    <CanvasContext.Provider
      value={{
        objetosCanvas,
        addObjeto,
        selectedWidgetID,
        setSelectedWidgetID,
        selectedWidgetContent,
        setSelectedWidgetContent,
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
        selectedWidgetBorderColor,
        setSelectedWidgetBorderColor,
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
