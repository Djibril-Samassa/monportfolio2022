import React from "react";
import { Link } from "react-router-dom";
import Style from "./Header.module.css";
import { motion } from "framer-motion";

export default function Header() {
  const variants = {
    logo: {
      cursor: "pointer",
      scale: 1.05,
      transition: { delay: 0, duration: 0.2 },
    }
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
        <motion.h3 
            variants={variants}
            whileHover={"logo"}
        >Djibril SAMASSA</motion.h3>
      </Link>
      <ul>
        <li>Accueil</li>
        <li>Expériences</li>
        <li>Compétences</li>
        <li>Projets</li>
        <li>Contact</li>
      </ul>
    </motion.div>
  );
}
