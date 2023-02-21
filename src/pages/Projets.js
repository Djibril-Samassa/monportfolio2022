import React from "react";
import Pays from "../composants/Pays";
import Ascenseur from "../composants/Ascenseur";
import { useState } from "react";
import ProjetComponent from "../composants/Projet";
import { Slide } from "react-reveal";
import ProjetsList from "../Projets.json";
import ColorAndForm from "../composants/ColorAndForm";
import { MenuContext } from "../App";
import { useContext } from "react";
import Animation from "../composants/Animation";
import { Icon } from "@iconify/react";

export default function Projets() {
  const menuState = useContext(MenuContext);
  menuState.setSelected("projets");
  const [selected, setSelected] = useState("pays");
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h1 className="expTitle">Mes Projets</h1>
      <h3 className="expTitle">
        Un aperçu ? Choisissez ce que vous voulez tester juste en dessous{" "}
      </h3>
      <Slide left>
        <ul className="skillcontainer">
          {selected === "pays" ? (
            <li className="selectedSkill">Pays</li>
          ) : (
            <li
              className="unselectedSkill"
              onClick={() => {
                setSelected("pays");
              }}
            >
              Pays
            </li>
          )}
          {selected === "ascenseur" ? (
            <li className="selectedSkill">Ascenseur</li>
          ) : (
            <li
              className="unselectedSkill"
              onClick={() => {
                setSelected("ascenseur");
              }}
            >
              Ascenseur
            </li>
          )}
          {selected === "animation" ? (
            <li className="selectedSkill">Animation</li>
          ) : (
            <li
              className="unselectedSkill"
              onClick={() => {
                setSelected("animation");
              }}
            >
              Animation
            </li>
          )}
          {selected === "colorandform" ? (
            <li className="selectedSkill">Couleur & forme</li>
          ) : (
            <li
              className="unselectedSkill"
              onClick={() => {
                setSelected("colorandform");
              }}
            >
              Couleur & forme
            </li>
          )}
          <li className="unselectedSkill link">
            <Icon style={{ marginRight: '5px' }} className='iconif' icon="material-symbols:open-in-new" />
            <a href="https://distributeur-by-djibril.netlify.app/" target="_blank">Distributeur</a>
          </li>
          <li className="unselectedSkill link">
            <Icon style={{ marginRight: '5px' }} className='iconif' icon="material-symbols:open-in-new" />
            <a href="https://quiz-by-djibril.netlify.app/" target="_blank">Quiz</a>
          </li>
        </ul>
      </Slide>
      <Slide top>
        <div className="skillShowContainer">
          {selected === "pays" ? (
            <Pays />
          ) : selected === "ascenseur" ? (
            <Ascenseur />
          ) : selected === "colorandform" ? (
            <ColorAndForm />
          ) : selected === "animation" ? (
            <Animation />
          ) : null}
        </div>
      </Slide>

      <h3 className="expTitle">Mes projets réalisés</h3>
      <Slide right>
        <div className="projetsrea">
          {ProjetsList.Projets.map((projets) => {
            return <ProjetComponent props={projets} />;
          })}
        </div>
      </Slide>
    </div>
  );
}
