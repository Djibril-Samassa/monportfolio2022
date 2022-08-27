/* eslint-disable no-unused-expressions */
import Welcome from "./composants/Welcome";
import Header from "./composants/Header";
import Accueil from "./pages/Accueil.js";
import Experiences from "./pages/Experiences";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, createContext, useEffect } from "react";

export const ModalContext = createContext();
export const MenuContext = createContext();

function App() {
  const [selected, setSelected] = useState();
  const [showWelcome, setShowWelcome] = useState(true);

  const value = {
    showWelcome: showWelcome,
    setShowWelcome: setShowWelcome,
  };
  const value2 = {
    selected: selected,
    setSelected: setSelected,
  };

  useEffect(()=>{
    !selected ? !localStorage.page ? setSelected('accueil') : setSelected(localStorage.page) : null
  },[])

  return (
    <ModalContext.Provider value={value}>
      <MenuContext.Provider value={value2}>
        <BrowserRouter>
          {selected ? (
            <div className="App">
              {showWelcome ? null : <Header />}
              <Routes>
                <Route
                  path="/"
                  element={
                    showWelcome ? <Welcome /> : <Accueil props={selected} />
                  }
                />
                <Route
                  path="/experiences"
                  element={
                    showWelcome ? <Welcome /> : <Experiences props={selected} />
                  }
                />
                <Route
                  path="/competences"
                  element={
                    showWelcome ? <Welcome /> : <Competences props={selected} />
                  }
                />
                <Route
                  path="/contact"
                  element={
                    showWelcome ? <Welcome /> : <Contact props={selected} />
                  }
                />
                <Route
                  path="/projets"
                  element={
                    showWelcome ? <Welcome /> : <Projets props={selected} />
                  }
                />
              </Routes>
            </div>
          ) : null}
        </BrowserRouter>
      </MenuContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
