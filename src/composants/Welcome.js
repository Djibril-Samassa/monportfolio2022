import React from "react";
import Style from "./Welcome_component.module.css";
import { useContext } from "react";
import { MenuContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import Wave from "react-wavify";
import { motion } from "framer-motion";
import { ModalContext } from "../App";

export default function Accueil() {
  const modalState = useContext(ModalContext);
  const navigate = useNavigate();
  const variants = {
    hovering: {
      cursor: "pointer",
      scale: 1.1,
      transition: { delay: 0, duration: 0.2 },
    },
  };
  const menuState = useContext(MenuContext);

  return (
    <>
      <div className={Style.accueil_container}>
        <Fade left>
          <div className={Style.accueil_content}>
            <div className={Style.accueil_text}>
              <h1>
                Bonjour,
                <br />
                Je suis Djibril SAMASSA
              </h1>
              <p>
                Développeur frontend en React Js
              </p>
            </div>
            <img src="images/hello.png" className={Style.logo} />
          </div>
        </Fade>
        <motion.p
          onClick={() => {
            modalState.setShowWelcome(false);
          }}
          variants={variants}
          initial={{
            y: 500,
            overflow: "hidden",
          }}
          animate={{
            y: 0,
          }}
          transition={{
            delay: 1,
            type: "spring",
            stiffness: 80,
            duration: 2.5,
          }}
          whileHover={"hovering"}
          className={Style.buttonWelcome}
        >
          Voir mon Portfolio
        </motion.p>
      </div>
    </>
  );
}
