import { useState } from 'react'
import Modal from 'react-minimal-modal'
import { translateWidgetsToCode } from "../utils/translateGUI";
import { default as TranslateIcon } from "../assets/Translate_icon.svg";

export default function Component() {
   const [isOpen, setIsOpen] = useState()

   return (
      <div>
         <button onClick={() => setIsOpen(true)} className="bg-emerald-500 px-2 mt-2 border-2 py-2 mx-auto text-white w-full rounded-md border-black">
          <div className="flex items-center justify-center ">
            <img className="w-6" src={TranslateIcon} />
            <h4 className="pl-1 font-semibold" >Translate to Code</h4>
          </div>
        </button>

         <Modal open={isOpen} onOpenChange={setIsOpen} title="Python Code">
            <div className="bg-slate-800 rounded-md w-full font-inter">
               <br />
               <div className="bg-amber-500 m-4 p-2 rounded-md">
                  <h2 className="font-semibold">Warning:</h2>
                  <div className="border-b-2 border-amber-700 my-1"></div>
                  <h2 className="pb-2">You need to install CustomTkinter to use the code.</h2>
                  <h2 className="font-mono bg-amber-800 rounded-md text-sm p-2">pip install customtkinter</h2>

               </div>
               
               <button className="text-white font-semibold m-4 p-2 bg-slate-500 w-40 rounded-md hover:bg-slate-600 active:bg-lime-400" onClick={() => navigator.clipboard.writeText(translateWidgetsToCode())} >Copy to Clipboard</button>

               <div style={{ whiteSpace: 'pre-wrap' }} className="bg-slate-900 text-gray-300 font-mono m-4 p-2 rounded-md">
                  {translateWidgetsToCode()}
               </div>

               <br /><br /><br /><br />

            </div>

         </Modal>
      </div>
   )
}