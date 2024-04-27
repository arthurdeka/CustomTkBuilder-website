import React, { useContext } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from '../CanvasContext';

function Button({ conteudo="Button", corDeFundo="#F0F0F0" }) {
  // importa a função setSelectedButton do contexto
  const { setSelectedButton } = useContext(CanvasContext);

  const buttonStyle = {
    height: "30px",
    width: "95px",
    backgroundColor: corDeFundo,
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
  };

  return (
    <Draggable bounds="parent">
      <div
        onClick={() => setSelectedButton(buttonStyle)}
        style={buttonStyle}
      >
        {conteudo}
      </div>
    </Draggable>
  );
}

export default Button;