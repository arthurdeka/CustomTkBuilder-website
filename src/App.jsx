import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Canvas from "./canvas/canvas";
import { Sidemenu } from "./components/Sidemenu";
import { CanvasProvider } from "./canvas/CanvasContext";
import { Properties } from "./components/Properties";

function App() {

  return (
    <div className="App bg-gray-900 max-h-screen overflow-hidden ">
      
      <Header />
      <div className="flex flex-row items-start">
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
