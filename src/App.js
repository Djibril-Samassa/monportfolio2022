import Welcome from "./composants/Welcome";
import Header from "./composants/Header";
import Accueil from "./pages/Accueil.js";
import Experiences from "./pages/Experiences";
import Competences from "./pages/Competences";
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
          {showWelcome ? null : <Header />}
          <Routes>
            <Route path="/" element={showWelcome ? <Welcome /> : <Accueil />} />
            <Route
              path="/experiences"
              element={showWelcome ? <Welcome /> : <Experiences />}
            />
            <Route
              path="/competences"
              element={showWelcome ? <Welcome /> : <Competences />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ModalContext.Provider>
  );
}

export default App;
