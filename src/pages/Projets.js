import React from "react";
import Pays from "../composants/Pays";
import { useState } from "react";
import ProjetComponent from "../composants/Projet";
import ProjetsList from "../Projets.json";

export default function Projets() {
  const [selected, setSelected] = useState("pays");
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h1 className="expTitle">Mes Projets</h1>
      <h3 className="expTitle">
        Un aperçu ? Choisissez ce que vous voulez tester juste en dessous{" "}
      </h3>
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
      </ul>
      <div className="skillShowContainer">{selected === "pays" ? <Pays /> : null}</div>

      <h3 className="expTitle">Mes projets réalisés</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {ProjetsList.Projets.map((projets) => {
          return <ProjetComponent props={projets} />;
        })}
      </div>
    </div>
  );
}
