import React, { useContext } from "react";
import { CanvasContext } from "../canvas/CanvasContext";

function Properties() {
  const { selectedButton } = useContext(CanvasContext);

  const handleStyleChange = (event) => {
    if (selectedButton) {
      selectedButton.setStyle({ ...selectedButton.style, [event.target.name]: event.target.value });
    }
  };

  return (
    <div className="h-screen bg-corsecundaria w-2/12">
      <div className="pl-2 pr-4 mt-8">
        <h2 className="text-md font-inter font-semibold text-white">Properties</h2>
        {selectedButton && (
          <div>
            {/* Display the properties of the selected button here */}
            <pre>{JSON.stringify(selectedButton.style, null, 2)}</pre>
            {/* Add a form to edit the style properties */}
            <form>
              <label>
                Background Color:
                <input type="color" name="backgroundColor" value={selectedButton.style.backgroundColor} onChange={handleStyleChange} />
              </label>
              {/* Add more inputs for other style properties as needed */}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export { Properties };