// Importando as dependências necessárias
import React, { createContext, useState } from "react";

// Criação do contexto CanvasContext
export const CanvasContext = React.createContext();

// Função que fornece os valores para o CanvasContext
export function CanvasProvider({ children }) {
  // Estado para armazenar os objetos no canvas.
  const [objetosCanvas, setObjetosCanvas] = useState([]);

  // Estado para armazenar a cor atual do canvas
  const [canvasBackgroundColor, setCanvasBackgroundColor] = useState("#FFFFFF");

  // Estado para armazenar o ID do widget selecionado
  const [selectedWidgetID, setSelectedWidgetID] = useState(null);
  // Estado para armazenar o tipo do widget selecionado
  const [selectedWidgetType, setSelectedWidgetType] = useState(null);

  // Estado para armazenar o próximo ID disponível
  const [nextId, setNextId] = useState(1);

  // Estado para estilos
  // coords
  const [selectedWidgetPosition, setSelectedWidgetPosition] = useState({ x: 0, y: 0 });
  // tamanho
  const [selectedWidgetHeight, setSelectedWidgetHeight] = useState(null);
  const [selectedWidgetWidth, setSelectedWidgetWidth] = useState(null);
  // estilo
  const [selectedWidgetBorder, setSelectedWidgetBorder] = useState(null);
  const [selectedWidgetBorderColor, setSelectedWidgetBorderColor] = useState(null);
  const [selectedWidgetBorderRadius, setSelectedWidgetBorderRadius] = useState(null);
  const [selectedWidgetBackgroundColor, setSelectedWidgetBackgroundColor] = useState(null);
  const [selectedWidgetOutsideBackgroundColor, setSelectedWidgetOutsideBackgroundColor] = useState(null);
  // texto
  const [selectedWidgetContent, setSelectedWidgetContent] = useState(null);
  const [selectedWidgetFontSize, setSelectedWidgetFontSize] = useState(null);
  const [selectedWidgetFontColor, setSelectedWidgetFontColor] = useState(null);
  //input
  const [selectedWidgetPlaceholderFontColor, setSelectedWidgetPlaceholderFontColor] = useState(null);
  // label
  const [selectedWidgetFontFamily, setSelectedWidgetFontFamily] = useState(null);

  //hover
  const [selectedWidgetHoverBorderColor, setSelectedWidgetHoverBorderColor] = useState(null);
  const [selectedWidgetHoverBackgroundColor, setSelectedWidgetHoverBackgroundColor] = useState(null);
  const [selectedWidgetHoverFontColor, setSelectedWidgetHoverFontColor] = useState(null);

  // Estados para opções opcionais
  const [isActiveSelectedWidgetHoverBorderColor, setIsActiveSelectedWidgetHoverBorderColor] = useState(true);
  const [isActiveSelectedWidgetHoverBackgroundColor, setIsActiveSelectedWidgetHoverBackgroundColor] = useState(true);
  const [isActiveSelectedWidgetHoverFontColor, setIsActiveSelectedWidgetHoverFontColor] = useState(true);
  const [selectionOutsideBackgroundColor_SameAsCanvas, setSelectionOutsideBackgroundColor_SameAsCanvas] = useState(true);
  const [selectionBackgroundColor_SameAsCanvas, setSelectionBackgroundColor_SameAsCanvas] = useState(true);

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
        canvasBackgroundColor,
        setCanvasBackgroundColor,
        selectedWidgetID,
        setSelectedWidgetID,
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
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
}
