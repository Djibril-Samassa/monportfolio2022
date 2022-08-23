import React, { useEffect, useState } from "react";
import Style from "./colors.module.css";

export default function Level1(props) {
  const setForme = props.forme;
  const validate = props.validate;
  const currentLevel = props.currentLevel;
  const checkforme = props.choosen;
  const [choosenForme, setChoosenForme] = useState();

  useEffect(() => {
    checkforme ? setChoosenForme(checkforme) : setChoosenForme(null);
  }, []);

  useEffect(() => {
    setForme(null);
  }, [choosenForme]);
  return (
    <div>
      <p className="expTitle">Choisissez une forme</p>
      <ul className={Style.formeContainer}>
        <div className={Style.chooseContainer}>
          <input
            checked={
              checkforme ? (checkforme === "carre" ? true : false) : null
            }
            type="radio"
            name="forme"
            onClick={() => {
              setChoosenForme("carre");
            }}
          />
          <div className="carre">Carré</div>
        </div>
        <div className={Style.chooseContainer}>
          <input
            checked={checkforme ? (checkforme === "rond" ? true : false) : null}
            type="radio"
            name="forme"
            onClick={() => {
              setChoosenForme("rond");
            }}
          />
          <div className="rond">Cercle</div>
        </div>  
        <div className={Style.chooseContainer}>
          <input
            checked={
              checkforme ? (checkforme === "triangle" ? true : false) : null
            }
            type="radio"
            name="forme"
            onClick={() => {
              setChoosenForme("triangle");
            }}
          />
          <div className="triangle">Reactangle</div>
        </div>
      </ul>
      {!choosenForme ? null : (
        <p
          className={Style.validate}
          onClick={() => {
            setForme(choosenForme);
            validate(currentLevel + 1);
          }}
        >
          Suivant
        </p>
      )}
    </div>
  );
}
