import React from "react";
import Style from "./colors.module.css";
import { useState } from "react";

export default function Level2(props) {
  const setColor = props.couleur;
  const validate = props.validate;
  const currentLevel = props.currentLevel;
  const [choosenColor, setChoosenColor] = useState(props.choosen);
  return (
    <div>
      <p className="expTitle">Choisissez une couleur</p>
      <ul className={Style.colorContainer}>
        <li
          onClick={() => {
            setChoosenColor("red");
          }}
          className={
            choosenColor === "red"
              ? `${Style.selected}  ${Style.red}`
              : Style.red
          }
        ></li>
        <li
          onClick={() => {
            setChoosenColor("blue");
          }}
          className={
            choosenColor === "blue"
              ? `${Style.selected}  ${Style.blue}`
              : Style.blue
          }
        ></li>
        <li
          onClick={() => {
            setChoosenColor("green");
          }}
          className={
            choosenColor === "green"
              ? `${Style.selected}  ${Style.green}`
              : Style.green
          }
        ></li>
        <li
          onClick={() => {
            setChoosenColor("yellow");
          }}
          className={
            choosenColor === "yellow"
              ? `${Style.selected}  ${Style.yellow}`
              : Style.yellow
          }
        ></li>
        <li
          onClick={() => {
            setChoosenColor("purple");
          }}
          className={
            choosenColor === "purple"
              ? `${Style.selected}  ${Style.purple}`
              : Style.purple
          }
        ></li>
        <li
          onClick={() => {
            setChoosenColor("brown");
          }}
          className={
            choosenColor === "brown"
              ? `${Style.selected}  ${Style.brown}`
              : Style.brown
          }
        ></li>
        <li
          onClick={() => {
            setChoosenColor("orange");
          }}
          className={
            choosenColor === "orange"
              ? `${Style.selected}  ${Style.orange}`
              : Style.orange
          }
        ></li>
        <li
          onClick={() => {
            setChoosenColor("pink");
          }}
          className={
            choosenColor === "pink"
              ? `${Style.selected}  ${Style.pink}`
              : Style.pink
          }
        ></li>
        <li
          onClick={() => {
            setChoosenColor("white");
          }}
          className={
            choosenColor === "white"
              ? `${Style.selected}  ${Style.white}`
              : Style.white
          }
        ></li>
      </ul>
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <p
          className={Style.validate}
          onClick={() => {
            setColor(choosenColor);
            validate(currentLevel - 1);
          }}
        >
          Précedent
        </p>
        {choosenColor ? (
          <p
            className={Style.validate}
            onClick={() => {
              setColor(choosenColor);
              validate(currentLevel + 1);
            }}
          >
            Suivant
          </p>
        ) : null}
      </span>
    </div>
  );
}
