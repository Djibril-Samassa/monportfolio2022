import React, { useState } from "react";
import { useContext } from "react";
import { MenuContext } from "../App";
import { Link } from "react-router-dom";
import Style from "./Header.module.css";
import { motion } from "framer-motion";

export default function Header() {
  const variants = {
    logo: {
      cursor: "pointer",
      scale: 1.05,
      transition: { delay: 0, duration: 0.2 },
    },
  };
  const menuState = useContext(MenuContext);

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
      <motion.h3 variants={variants} whileHover={"logo"} className={Style.logo}>
        Djibril SAMASSA
      </motion.h3>
      <ul>
        <Link
          style={{ textDecoration: "none", color: "#f1f1f1" }}
          to="/"
          className={
            menuState.selected === "accueil"
              ? Style.selectedMenu
              : Style.notSelected
          }
          onClick={() => {
            menuState.setSelected("accueil");
          }}
        >
          A propos de moi
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#f1f1f1" }}
          to="/experiences"
          className={
            menuState.selected === "experiences"
              ? Style.selectedMenu
              : Style.notSelected
          }
          onClick={() => {
            menuState.setSelected("experiences");
          }}
        >
          Expériences
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#f1f1f1" }}
          to="/competences"
          className={
            menuState.selected === "competences"
              ? Style.selectedMenu
              : Style.notSelected
          }
          onClick={() => {
            menuState.setSelected("competences");
          }}
        >
          Compétences
        </Link>
        <li
          className={
            menuState.selected === "projets"
              ? Style.selectedMenu
              : Style.notSelected
          }
          onClick={() => {
            menuState.setSelected("projets");
          }}
        >
          Projets
        </li>
        <Link
          style={{ textDecoration: "none", color: "#f1f1f1" }}
          to="/contact"
          className={
            menuState.selected === "contact"
              ? Style.selectedMenu
              : Style.notSelected
          }
          onClick={() => {
            menuState.setSelected("contact");
          }}
        >
          Contact
        </Link>
      </ul>
    </motion.div>
  );
}
