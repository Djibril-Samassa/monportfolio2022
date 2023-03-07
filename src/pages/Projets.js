import React from "react";
import Pays from "../composants/Pays";
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
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h1 className="expTitle">Mes Projets</h1>
      <Slide left>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="pn">Projets en ligne</h3>
          <ul className="skillcontainer">
            <li className="unselectedSkill link">
              <Icon style={{ marginRight: '5px' }} className='iconif' icon="material-symbols:open-in-new" />
              <a href="https://distributeur-by-djibril.netlify.app/" target="_blank">Distributeur</a>
            </li>

            <li className="unselectedSkill link">
              <Icon style={{ marginRight: '5px' }} className='iconif' icon="material-symbols:open-in-new" />
              <a href="https://quiz-by-djibril.netlify.app/" target="_blank">Quiz</a>
            </li>
            <li className="unselectedSkill link">
              <Icon style={{ marginRight: '5px' }} className='iconif' icon="material-symbols:open-in-new" />
              <a href="https://ascenseur-by-djibril.netlify.app/" target="_blank">Ascenseur</a>
            </li>
            <li className="unselectedSkill link">
              <Icon style={{ marginRight: '5px' }} className='iconif' icon="material-symbols:open-in-new" />
              <a href="https://meteo-by-djibril.netlify.app/" target="_blank">Météo</a>
            </li>
            <li className="unselectedSkill link">
              <Icon style={{ marginRight: '5px' }} className='iconif' icon="material-symbols:open-in-new" />
              <a href="https://e-books-by-djibril.netlify.app/" target="_blank">E-books</a>
            </li>
            <li className="unselectedSkill link">
              <Icon style={{ marginRight: '5px' }} className='iconif' icon="material-symbols:open-in-new" />
              <a href="https://my-auth-by-djibril.netlify.app/" target="_blank">myOAuth</a>
            </li>
          </ul>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="pn">Extensions</h3>
          <ul className="skillcontainer">
            <li className="unselectedSkill link">
              <Icon style={{ marginRight: '5px' }} className='iconif' icon="material-symbols:open-in-new" />
              <a href="https://easylink-by-djibril.netlify.app/" target="_blank">EasyLink</a>
            </li>
            <li className="unselectedSkill link">
              <Icon style={{ marginRight: '5px' }} className='iconif' icon="material-symbols:open-in-new" />
              <a href="https://error-gpt-by-djibril.netlify.app/" target="_blank">Error Gpt</a>
            </li>
          </ul>
        </div>
      </Slide >

      <h3 className="expTitle">Mes projets réalisés</h3>
      <Slide right>
        <div className="projetsrea">
          {ProjetsList.Projets.map((projets) => {
            return <ProjetComponent props={projets} />;
          })}
        </div>
      </Slide>
    </div >
  );
}
