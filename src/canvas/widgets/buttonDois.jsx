import React, { useContext,  useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from '../CanvasContext';

function ButtonDois({ conteudo="Button" }) {
  const { setSelectedButton } = useContext(CanvasContext);

  

  const [buttonStyle, setButtonStyle] = useState({
    height: "30px",
    width: "95px",
    backgroundColor: "#FF5733",
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

  const handleClick = () => {
    setSelectedButton({ style: buttonStyle, setStyle: setButtonStyle });
  };

  return (
    <Draggable bounds="parent">
      <div
        onClick={handleClick}
        style={buttonStyle}
      >
        {conteudo}
      </div>
    </Draggable>
  );
}

export default ButtonDois;