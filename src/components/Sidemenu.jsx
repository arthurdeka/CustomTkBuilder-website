import React, { useContext } from "react";
import { CanvasContext } from "../canvas/CanvasContext";
import ButtonWidget from "../canvas/widgets/buttonWidget";
import InputWidget from "../canvas/widgets/inputWidget";
import LabelWidget from "../canvas/widgets/labelWidget";
import CheckBoxWidget from "../canvas/widgets/checkBoxWidget";
import RadioButtonWidget from "../canvas/widgets/radioButtonWidget";

import { default as LabelIcon } from "../assets/Label_icon.svg";
import { default as ButtonIcon } from "../assets/Button_icon.svg";
import { default as InputIcon } from "../assets/Input_icon.svg";
import { default as CheckBoxIcon } from "../assets/Checkbox_icon.svg";
import { default as RadioButtonIcon } from "../assets/RadioButton_icon.svg";

import TranslateCodeModal from "./TranslateCodeModal";
import VerticalAd from "../utils/verticalAd";

function Sidemenu() {
  const { objetosCanvas, addObjeto } = useContext(CanvasContext);

  // função para adicionar um objeto à lista de objetos
  const handleClick = (objeto) => {
    addObjeto(objeto);
  };

  return (
    <div className="bg-slate-800 w-2/12 h-screen font-inter flex flex-col justify-between">
      <div className="pl-2 pr-4 mt-8">

        <h2 className="text-md font-inter font-bold text-corprimaria">Tkinter</h2>
        <h2 className="text-md font-inter font-bold text-corprimaria">Widgets</h2>

        <button className="bg-red-500 mt-2 border-2 py-2 mx-auto text-white w-full rounded-md border-black" onClick={() => handleClick(<ButtonWidget />)}>
          <div className="flex items-center justify-center ">
            <img width={24} height={24} src={ButtonIcon} alt="Tkinter Button Icon" />
            <h4 className="pl-1 font-semibold" >Button</h4>
          </div>
        </button>

        <button className="bg-red-500 mt-2 border-2 py-2 mx-auto text-white w-full rounded-md border-black" onClick={() => handleClick(<InputWidget />)}>
          <div className="flex items-center justify-center ">
            <img width={24} height={24} src={InputIcon} alt="Tkinter Input Icon" />
            <h4 className="pl-1 font-semibold" >Entry</h4>
          </div>
        </button>

        <button className="bg-red-500 mt-2 border-2 py-2 mx-auto text-white w-full rounded-md border-black" onClick={() => handleClick(<LabelWidget />)}>
          <div className="flex items-center justify-center ">
            <img width={24} height={24} src={LabelIcon} alt="Tkinter Label Icon" />
            <h4 className="pl-1 font-semibold" >Label</h4>
          </div>
        </button>

        <button className="bg-red-500 mt-2 border-2 py-2 mx-auto text-white w-full rounded-md border-black" onClick={() => handleClick(<CheckBoxWidget />)}>
          <div className="flex items-center justify-center ">
            <img width={24} height={24} src={CheckBoxIcon} alt="Tkinter CheckBox Icon" />
            <h4 className="pl-1 font-semibold" >CheckBox</h4>
          </div>
        </button>

        <button className="bg-red-500 mt-2 border-2 py-2 mx-auto text-white w-full rounded-md border-black" onClick={() => handleClick(<RadioButtonWidget />)}>
          <div className="flex items-center justify-center ">
            <img width={24} height={24} src={RadioButtonIcon} alt="Tkinter Radio Button Icon" />
            <h4 className="pl-1 font-semibold" >Radio Button</h4>
          </div>
        </button>
        
        <br /><br /><br />

        <TranslateCodeModal />

        <VerticalAd />


      </div>
      <div className="pt-2 mx-auto pb-24">
        <h5 className="font-inter font-bold text-corsecundaria">Contact:</h5>
        <h5 className="font-inter text-corsecundaria">deka.matrix@gmail.com</h5>
      </div>
    </div>
  );
}

export { Sidemenu };
