import React, { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Header.module.css";
import { motion } from "framer-motion";

export default function Header() {
  const [selected, setSelected] = useState("accueil");
  const variants = {
    logo: {
      cursor: "pointer",
      scale: 1.05,
      transition: { delay: 0, duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial={{
        y: -50,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
      }}
      className={Style.container}
    >
      <Link to="/" className={Style.logo}>
        <motion.h3 variants={variants} whileHover={"logo"}>
          Djibril SAMASSA
        </motion.h3>
      </Link>
      <ul>
        <Link
          style={{ textDecoration: "none", color: "#f1f1f1" }}
          to="/"
          className={
            selected === "accueil" ? Style.selectedMenu : Style.notSelected
          }
          onClick={() => {
            setSelected("accueil");
          }}
        >
          A propos de moi
        </Link>
        <li
          className={
            selected === "experiences" ? Style.selectedMenu : Style.notSelected
          }
          onClick={() => {
            setSelected("experiences");
          }}
        >
          Expériences
        </li>
        <li
          className={
            selected === "competences" ? Style.selectedMenu : Style.notSelected
          }
          onClick={() => {
            setSelected("competences");
          }}
        >
          Compétences
        </li>
        <li
          className={
            selected === "projets" ? Style.selectedMenu : Style.notSelected
          }
          onClick={() => {
            setSelected("projets");
          }}
        >
          Projets
        </li>
        <li
          className={
            selected === "contact" ? Style.selectedMenu : Style.notSelected
          }
          onClick={() => {
            setSelected("contact");
          }}
        >
          Contact
        </li>
      </ul>
    </motion.div>
  );
}
