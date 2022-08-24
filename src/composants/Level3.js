import React, { useEffect, useState } from "react";
import Style from "./colors.module.css";

export default function Level3(props) {
  const setName = props.prenom;
  const validate = props.validate;
  const currentLevel = props.currentLevel;
  const [writeName, setWriteName] = useState("");
  const [value, setValue] = useState(props.choosen);
  useEffect(() => {
    props.choosen ? setWriteName(props.choosen) : setWriteName(null);
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p className="expTitle">Entrez du texte</p>
      <input
        value={value}
        className="paysinput2"
        type="text"
        onChange={(e) => {
          setWriteName(e.target.value);
          setValue(e.target.value);
        }}
      />
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <p
          className={Style.validate}
          onClick={() => {
            validate(currentLevel - 1);
            setName(writeName);
          }}
        >
          Précedent
        </p>
        {writeName ? (
          <p
            type="submit"
            className={Style.validate}
            onClick={(e) => {
              setName(writeName);
              validate(currentLevel + 1);
            }}
          >
            Voir le résultat
          </p>
        ) : null}
      </span>
    </div>
  );
}
