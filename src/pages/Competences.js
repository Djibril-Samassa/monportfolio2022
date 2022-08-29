import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../App";
import { motion } from "framer-motion";

export default function Competences() {
  const menuState = useContext(MenuContext);
  menuState.setSelected("competences");
  return (
    <>
      <motion.img
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
        src="competencesBannieres.png"
        style={{ width: "70%", margin: "0 auto", display: "flex" }}
      />
      <div
        style={{
          margin: "2em 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          to="/contact"
          className="contactme"
          onClick={() => {
            menuState.setSelected("contact");
          }}
        >
          Contactez moi Maintenant
        </Link>
      </div>
    </>
  );
}
