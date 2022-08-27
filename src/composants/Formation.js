import React, { useEffect, useState } from "react";
import Style from "./Experience.css";
import { Icon } from "@iconify/react";

export default function Formation(props) {
  const [showAll, setShowAll] = useState(false);
  const data = props.props;
  return (
    <div className={showAll ? "formationcontainer showall" : "formationcontainer notshowall"}>
      <div>
        <h1>{data.title}</h1>
        <p>{data.date}</p>
      </div>
      <p>{data.description}</p>
      <ul style={{ marginBottom: "2em" }}>
        {showAll
          ? data.competences.map((item) => {
              return <li>{item}</li>;
            })
          : data.competences.slice(0, 3).map((item) => {
              return <li>{item}</li>;
            })}
      </ul>
      <span
        style={{
          position: "absolute",
          bottom: "2em",
          right: "5em",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        <p style={{ margin: "0 0.5em" }}>
          {showAll ? "voir moins" : "voir plus"}
        </p>
        {showAll ? (
          <Icon icon="akar-icons:chevron-up" />
        ) : (
          <Icon icon="akar-icons:chevron-down" />
        )}
      </span>
    </div>
  );
}
