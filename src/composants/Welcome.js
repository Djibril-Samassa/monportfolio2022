import React from "react";
import Style from "./Welcome_component.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import Wave from "react-wavify";
import { motion } from "framer-motion";
import { ModalContext } from "../App";

export default function Accueil() {
  const modalState = useContext(ModalContext)
  const navigate = useNavigate();
  const variants = {
    hovering: {
      cursor: "pointer",
      scale: 1.1,
      transition: { delay: 0, duration: 0.2 },
    }
  };

  return (<>
          <div className={Style.accueil_container}>
            <Fade left>
              <div className={Style.accueil_content}>
                <div className={Style.accueil_text}>
                  <h1>
                    Bonjour,
                    <br />
                    Je suis Djibril SAMASSA
                  </h1>
                  <p>Intégrateur Web | Développeur Frontend | Apprenti Designer UX/UI (React JS)</p>
                </div>
                <img src="images/hello.png" className={Style.logo}/>
              </div>
            </Fade>
            <motion.p
            onClick={ () =>{modalState.setShowWelcome(false)}}
              style={{
                backgroundColor: "#f1f1f1",
                padding: "6px 15px",
                borderRadius: "5px",
                fontFamily: "Poppins",
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
            >
              Voir mon Portfolio
            </motion.p>
            <Wave
              className={Style.wavecontainer}
              fill="#FF5757"
              paused={false}
              options={{
                height: 50,
                amplitude: 100,
                points: 5,
              }}
            />
            <Wave
              className={Style.wavecontainer}
              fill="#FF5757"
              paused={false}
              opacity="0.50"
              options={{
                speed: 0.2,
                height: 50,
                amplitude: 100,
                points: 3,
              }}
            />
          </div>
          </>)
}
