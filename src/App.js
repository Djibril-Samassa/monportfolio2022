import Welcome from "./composants/Welcome";
import Header from "./composants/Header";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, createContext } from "react";

export const ModalContext = createContext();

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const value = {
    showWelcome: showWelcome,
    setShowWelcome: setShowWelcome,
  };
  return (
    <ModalContext.Provider value={value}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={showWelcome ? <Welcome /> : <Header/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ModalContext.Provider>
  );
}

export default App;
