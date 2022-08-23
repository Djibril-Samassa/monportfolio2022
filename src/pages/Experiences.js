import React, { useEffect, useState } from "react";
import Formation from "../composants/Formation";
import Experience from "../composants/Experiences";
import data from "../Formation.json";
import { Slide } from "react-reveal";
import Aos from "aos";

export default function Experiences() {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h1 className="expTitle" style={{ width: "80%" }}>
        Mes Formations
      </h1>
      <Slide left>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2em auto 3em",
          }}
        >
          {data.formations.map((formation) => {
            return <Formation props={formation} />;
          })}
        </div>
      </Slide>
      <h1 className="expTitle">Mes Experiences</h1>
      <Slide right>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0em auto",
            flexWrap: "wrap",
          }}
        >
          {data.experience.map((experience) => {
            return <Experience props={experience} />;
          })}
        </div>
      </Slide>
    </div>
  );
}
