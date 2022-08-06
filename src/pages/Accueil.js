import React, { useEffect } from "react";
import { useState } from "react";
import Style from "./Accueil.module.css";
import { Zoom } from "react-reveal";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AccueilPage() {
  const [displaySite, setDisplaySite] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //   div data-aos="fade-down"
  return (
    <div className={Style.container}>
      <div className={Style.about}>
        <div>
          <h2>A propos de moi</h2>
          <p>
            Titulaire d'un Baccalauréat Professionnel en systèmes numériques,
            j'ai toujours été intéressé par la programmation et la logique qu'il
            y a derrière Après le Bac j'ai poursuivi dans ce domaine et de
            novembre 2021 à avril 2022 j'étais apprenant chez Konexio et j'ai
            développé une appétence pour la partie front, notamment le design et
            l'expérience utilisateur Actuellement je suis développeur frontend
            chez Linkinnov
          </p>
        </div>
        <div>
          <h2>Pourquoi le design</h2>
          <p>
            J'ai toujours été sensible au côté visible d'un site web, je donne
            énormément d'importance au fait qu'il soit agréable et soigné Je me
            ressources constamment en regardant et en reproduisant des design,
            en créant les miens et je suis toujours à la recherche de
            nouveautées
          </p>
        </div>
        <div>
          <h2>Mes objectifs</h2>
          <p>
            J'ai toujours été sensible au côté visible d'un site web, je donne
            énormément d'importance au fait qu'il soit agréable et soigné Je me
            ressources constamment en regardant et en reproduisant des design,
            en créant les miens et je suis toujours à la recherche de
            nouveautées
          </p>
        </div>
      </div>
      <div className={Style.link}>
        <p>Linkinnov ?</p>
        <p>Konexio ?</p>
      </div>
      <div className={Style.about2}>
        <div className={Style.apports}>
          <h2 className={Style.section_title}>Ce que je peux apporter</h2>
          <div className={Style.imageContainer}>
            <img className={Style.apport1} src="./apports/apport1.png" />
            <img className={Style.apport2} src="./apports/apport2.png" />
            <img className={Style.apport3} src="./apports/apport3.png" />
          </div>
          <p>
            De la créativité, idée de design, L'expérience acquise lors de mon
            parcours
          </p>
        </div>
        <div className={Style.attentes}>
          <h2 className={Style.section_title}>Ce que je souhaite</h2>
          <div className={Style.imageContainer}>
            <img className={Style.attente1} src="./attentes/attente1.png" />
            <img className={Style.attente2} src="./attentes/attente2.png" />
          </div>
          <p>
            Des missions en design qui me feront progresser, évolution au sein
            d'une équipe sympa
          </p>
        </div>
        <div className={Style.qualites}>
          <div>
            <h2 className={Style.section_title}>Qualités</h2>
          </div>
          <div>
            <h2 className={Style.section_title}>Defauts</h2>
          </div>
          <div>
            <h2 className={Style.section_title}>Mes hobbies</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
