import React from "react";
import Draggable from "react-draggable";

function Button({ conteudo="Button", corDeFundo="#F0F0F0" }) {
  return (
    <Draggable bounds="parent">
      <div
        style={{
          height: "30px",
          width: "95px",
          backgroundColor: corDeFundo,
          color: "black",
          fontFamily:
            "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
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
        }}
      >
        {conteudo}
      </div>
    </Draggable>
  );
}

export default Button;
