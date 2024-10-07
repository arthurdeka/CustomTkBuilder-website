import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Canvas from "./canvas/canvas";
import ReactGA from 'react-ga4';
import { Sidemenu } from "./components/Sidemenu";
import About from './components/About'; 
import { CanvasProvider } from "./canvas/CanvasContext";
import { Properties } from "./components/Properties";
import { useEffect } from "react";

function App() {
  ReactGA.initialize("G-N6T5V13HJ4");

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  return (
    <Router>
      <div className="App bg-gray-900 max-h-screen overflow-hidden ">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="flex flex-row items-start">
              <CanvasProvider>
                <Sidemenu />
                <Canvas />
                <Properties />
              </CanvasProvider>
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;