import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { MenuContext } from "../App";
import Style from "./Accueil.module.css";
import { Slide } from "react-reveal";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AccueilPage() {
  const [displaySite, setDisplaySite] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //   div data-aos="fade-down"

  const menuState = useContext(MenuContext);
  menuState.setSelected("accueil");
  return (
    <div className={Style.container}>
      <div className={Style.about}>
        <Slide top>
          <div>
            <h2>A propos de moi</h2>
            <p>
              J'ai toujours été intéressé par la programmation et la logique
              qu'il y a derrière Après le Bac j'ai poursuivi dans ce domaine et
              de novembre 2021 à avril 2022 j'étais apprenant chez Konexio et
              j'ai développé une appétence pour la partie front. Je suis à la recherche
              d'un poste challengeant qui me permettra de prendre en compétence et aussi en expérience,
              mon adaptabilité et mon sens du travail d'équipe me garantie que je m'intégrerais rapidement
              au sein de ma nouvelle équipe.
            </p>
          </div>
        </Slide>
        <Slide bottom>
          <div>
            <h2>Mes points forts</h2>
            <p>
              J'ai des compétences en front, aussi bien dans la création de modules et de fonctionnalité que dans celle de composants visuels, je suis sensible au côté visible
              d'un site web et j'accorde énormément d'importance au fait qu'il
              soit agréable et soigné. Mon appétence pour le côté front fait de moi un développeur sensible à l'ux/ui.
              Je suis
              toujours à la recherche de nouveautées et à l'affût de nouvelles technologies.
            </p>
          </div>
        </Slide>
        <Slide top>
          <div>
            <h2>Mes objectifs</h2>
            <p>
              Je souhaite prendre le plus de compétences en front mais aussi en
              UX/UI afin de pouvoir être capable de produire mes propres design,
              bannières, illustrations. Et je souhaite devenir capable de
              superviser tout le côté design d'un grand projet dans l'optique de
              devenir designer UX/UI tout en me perfectionnant en frontend.
            </p>
          </div>
        </Slide>
      </div>
      <Slide right>
        <div className={Style.about2}>
          <div className={Style.apports}>
            <h2 className={Style.section_title}>Ce que je peux apporter</h2>
            <div className={Style.imageContainer}>
              <img className={Style.apport1} src="./apports/apport1.png" />
              <img className={Style.apport2} src="./apports/apport2.png" />
              <img className={Style.apport3} src="./apports/apport3.png" />
            </div>
            <p>
              Du soulagement à l'équipe, de la bonne entente, mes compétences et ma joie de vivre
            </p>
          </div>
          <div className={Style.attentes}>
            <h2 className={Style.section_title}>Ce que je souhaite</h2>
            <div className={Style.imageContainer}>
              <img className={Style.attente1} src="./attentes/attente1.png" />
              <img className={Style.attente2} src="./attentes/attente2.png" />
            </div>
            <p>
              Des missions qui me feront progresser , participer à
              l'amélioration du site et à l'évolution de l'entreprise
            </p>
          </div>
          <div className={Style.qualites}>
            <div>
              <h2 className={Style.section_title}>Qualités</h2>
              <div>
                <ul className={Style.qualities}>
                  <li>Sens du travail d'équipe</li>
                  <li>Sérieux et motivé</li>
                  <li>Productif</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className={Style.section_title}>Defauts</h2>
              <div>
                <ul className={Style.qualities}>
                  <li>Perfectionniste</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className={Style.section_title}>Mes hobbies</h2>
              <div className={Style.hobbiesContainer}>
                <img src="./hobbies/hobbie1.png" />
                <img src="./hobbies/hobbie2.png" />
                <img src="./hobbies/hobbie3.png" />
                <img src="./hobbies/hobbie4.png" />
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
