import React, { useContext } from "react";
import { CanvasContext } from "../canvas/CanvasContext";
import Button from "../canvas/widgets/button";

function Properties() {
  // importa selectedButton do contexto
  const { selectedButton } = useContext(CanvasContext);

  return (
    <div className="h-screen bg-corsecundaria w-2/12">
      <div className="pl-2 pr-4 mt-8">
        <h2 className="text-md font-inter font-semibold text-white">Properties</h2>
        {selectedButton && (
          <div>
            {/* Display the properties of the selected button here */}
            <pre>{JSON.stringify(selectedButton, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export { Properties };