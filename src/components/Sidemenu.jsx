import React, { useContext } from "react";
import { CanvasContext } from "../canvas/CanvasContext";
import ButtonWidget from "../canvas/widgets/buttonWidget";
import InputWidget from "../canvas/widgets/inputWidget";
import LabelWidget from "../canvas/widgets/labelWidget";
import { translateWidgetsToCode } from "../utils/translateGUI";
import { default as LabelIcon } from "../assets/Label_icon.svg";
import { default as ButtonIcon } from "../assets/Button_icon.svg";
import { default as InputIcon } from "../assets/Input_icon.svg";
import { default as TranslateIcon } from "../assets/Translate_icon.svg";

function Sidemenu() {
  const { objetosCanvas, addObjeto } = useContext(CanvasContext);

  // função para adicionar um objeto à lista de objetos
  const handleClick = (objeto) => {
    addObjeto(objeto);
  };

  return (
    <div className="bg-slate-800 w-2/12 h-screen font-inter">
      <div className="pl-2 pr-4 mt-8">

        <h2 className="text-md font-inter font-bold text-corprimaria">Tkinter</h2>
        <h2 className="text-md font-inter font-bold text-corprimaria">Widgets</h2>

        <button className="bg-red-500 mt-2 border-2 py-2 mx-auto text-white w-full rounded-md border-black" onClick={() => handleClick(<ButtonWidget />)}>
          <div className="flex items-center justify-center ">
            <img className="w-6" src={ButtonIcon} />
            <h4 className="pl-1 font-semibold" >Button</h4>
          </div>
        </button>

        <button className="bg-red-500 mt-2 border-2 py-2 mx-auto text-white w-full rounded-md border-black" onClick={() => handleClick(<InputWidget />)}>
          <div className="flex items-center justify-center ">
            <img className="w-6" src={InputIcon} />
            <h4 className="pl-1 font-semibold" >Entry</h4>
          </div>
        </button>

        <button className="bg-red-500 mt-2 border-2 py-2 mx-auto text-white w-full rounded-md border-black" onClick={() => handleClick(<LabelWidget />)}>
          <div className="flex items-center justify-center ">
            <img className="w-6" src={LabelIcon} />
            <h4 className="pl-1 font-semibold" >Label</h4>
          </div>
        </button>
        
        <br /><br /><br />

        <button className="bg-emerald-500 px-2 mt-2 border-2 py-2 mx-auto text-white w-full rounded-md border-black" onClick={() => translateWidgetsToCode()}>
          <div className="flex items-center justify-center ">
            <img className="w-6" src={TranslateIcon} />
            <h4 className="pl-1 font-semibold" >Translate to Code</h4>
          </div>
        </button>

      </div>
    </div>
  );
}

export { Sidemenu };
