/**
 * Componente Button
 * Este componente renderiza um botão que pode ser arrastado dentro de seu componente pai
 * E pode ser modificado pela sidebar Properties
 */
import React, { useContext,  useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from '../CanvasContext';

function Button({ conteudo="Button" }) {
  // Usando o contexto para obter a função setSelectedButton
  const { setSelectedButton } = useContext(CanvasContext);

  // Estado para o conteúdo do botão
  const [buttonContent, setButtonContent] = useState('Button');

  // Estado para o estilo do botão
  const [buttonStyle, setButtonStyle] = useState({
    height: "30px",
    width: "95px",
    backgroundColor: "#F0F0F0",
    color: "black",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "2px solid",
    borderTopColor: "#545454",
    borderLeftColor: "#545454",
    borderRightColor: "#000000",
    borderBottomColor: "#000000",
    borderRadius: "5px",
  });

  // Função para definir este botão como o botão selecionado
  const setAsSelectedButton = () => {
    setSelectedButton({ 
      style: buttonStyle, 
      setStyle: setButtonStyle, 
      conteudo: buttonContent, 
      setConteudo: setButtonContent 
    });
  };

  // Renderizando o botão
  return (
    <Draggable bounds="parent">
      <div
        onClick={setAsSelectedButton}
        style={buttonStyle}
      >
        {buttonContent}
      </div>
    </Draggable>
  );
}

export default Button;