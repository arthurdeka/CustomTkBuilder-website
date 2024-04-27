import React, { useContext } from "react";
import { CanvasContext } from "../canvas/CanvasContext";
import Button from "../canvas/button";



function SideMenu() {
  const { objetosCanvas, addObjeto } = useContext(CanvasContext);

  // função para adicionar um objeto à lista de objetos
  const handleClick = () => {
    addObjeto(<Button />);
  };

  return (
    <div className="h-screen bg-corsecundaria w-2/12">
      <div className="pl-2 pr-4 mt-8">

        <h2 className="text-md font-inter font-semibold text-white">Tkinter Widgets</h2>

        <button className="bg-gray-200 mt-2 border-2 px-4  w-full rounded-md border-black " onClick={handleClick}>Button</button>

      </div>


    </div>
  );
}

export { SideMenu };
