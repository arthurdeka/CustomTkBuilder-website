import React, { useContext } from "react";
import { CanvasContext } from "../canvas/CanvasContext";
import ButtonWidget from "../canvas/widgets/buttonWidget";
import InputWidget from "../canvas/widgets/inputWidget";
import LabelWidget from "../canvas/widgets/labelWidget";

function Sidemenu() {
  const { objetosCanvas, addObjeto } = useContext(CanvasContext);

  // função para adicionar um objeto à lista de objetos
  const handleClick = (objeto) => {
    addObjeto(objeto);
  };

  return (
    <div className="bg-slate-800 w-2/12 h-screen">
      <div className="pl-2 pr-4 mt-8">

        <h2 className="text-md font-inter font-bold text-corprimaria">Tkinter</h2>
        <h2 className="text-md font-inter font-bold text-corprimaria">Widgets</h2>

        <button className="bg-red-500 mt-2 border-2 px-4 text-white w-full rounded-md border-black" onClick={() => handleClick(<ButtonWidget />)}>Button</button>
        <button className="bg-red-500 mt-2 border-2 px-4 text-white w-full rounded-md border-black" onClick={() => handleClick(<InputWidget />)}>Input</button>
        <button className="bg-red-500 mt-2 border-2 px-4 text-white w-full rounded-md border-black" onClick={() => handleClick(<LabelWidget />)}>Label</button>
      
      </div>
    </div>
  );
}

export { Sidemenu };
