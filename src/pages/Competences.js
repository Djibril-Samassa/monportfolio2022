import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../App";

export default function Competences() {
  const menuState = useContext(MenuContext);
  return (
    <>
      <img
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
