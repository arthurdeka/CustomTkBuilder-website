import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Canvas from "./canvas/canvas";
import { Sidemenu } from "./components/Sidemenu";
import { CanvasProvider } from "./canvas/CanvasContext";
import { Properties } from "./components/Properties";

function App() {
  return (
    <div className="App bg-gray-900">

      <Header />
      <div className="flex">
        <CanvasProvider > {/* Envolver o aplicativo com o CanvasProvider */}

          <Sidemenu />
          <Canvas />
          <Properties />
          
        </CanvasProvider>
      </div>

    </div>
  );
}


export default App;
