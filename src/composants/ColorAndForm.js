import React, { useEffect, useState } from "react";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Style from "./colors.module.css";
import Level3 from "./Level3";

export default function ColorAndForm() {
  const [level, setLevel] = useState(1);
  const [forme, setForme] = useState("");
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  return (
    <div>
      <h3 className="expTitle">Créez !</h3>
      {level === 1 ? (
        <Level1
          forme={setForme}
          validate={setLevel}
          currentLevel={level}
          choosen={forme}
        />
      ) : level === 2 ? (
        <Level2
          couleur={setColor}
          validate={setLevel}
          currentLevel={level}
          choosen={color}
        />
      ) : level === 3 ? (
        <Level3
          prenom={setName}
          validate={setLevel}
          currentLevel={level}
          choosen={name}
        />
      ) : level === 4 ? (
        <div
          className={forme}
          style={{
            backgroundColor: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "#f1f1f1",
          }}
        >
          <p style={{ backgroundColor: "rgba(85, 26, 37, 1)", padding:'6px 15px', borderRadius:'5px'}}>{name}</p>
        </div>
      ) : null}
      {level === 4 ? (
        <p
          onClick={() => {
            setLevel(1);
            setForme(null);
            setColor(null);
            setName(null);
          }}
          className={Style.validate}
        >
          Recommencer
        </p>
      ) : null}
    </div>
  );
}
