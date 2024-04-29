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

  // Função para adicionar um novo objeto ao canvas
  const addObjeto = (objeto) => {
    setObjetosCanvas((prevObjetos) => [...prevObjetos, objeto]);
  };

  // Retorna o provedor do contexto CanvasContext, que fornece os valores para os componentes filhos
  return (
    <CanvasContext.Provider value={{ objetosCanvas, addObjeto, selectedButton, setSelectedButton }}>
      {children}
    </CanvasContext.Provider>
  );
}
