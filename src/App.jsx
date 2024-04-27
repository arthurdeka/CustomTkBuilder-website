import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Canvas from "./canvas/canvas";
import { SideMenu } from "./components/SideMenu";
import { CanvasProvider } from "./canvas/CanvasContext";
import { Properties } from "./components/Properties";

function App() {
  return (
    <div className="App">

      <Header />
      <div className="flex">
        <CanvasProvider > {/* Envolver o aplicativo com o CanvasProvider */}

          <SideMenu />
          <Canvas />
          <Properties />
          
        </CanvasProvider>
      </div>

    </div>
  );
}


export default App;
