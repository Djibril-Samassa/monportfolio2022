import React from "react";
import Style from "./colors.module.css";

export default function Animation() {
  return (
    <div style={{ padding: "1em"}}>
      <h3 className="expTitle">Une petite animation en CSS</h3>
      <div className={Style.bubblescontainer}>
        <div className={Style.bubbles}>
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 8 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 21 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 19 }}></span>
          <span style={{ "--i": 7 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 8 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 21 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 19 }}></span>
          <span style={{ "--i": 7 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 18 }}></span>
          
        </div>
      </div>
    </div>
  );
}
