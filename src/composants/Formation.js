import React, { useEffect, useState } from "react";
import Style from "./Experience.css";
import { Icon } from "@iconify/react";

export default function Formation(props) {
  console.log(props);
  const data = props.props;
  return (
    <div className="container">
      <div>
        <h1>{data.title}</h1>
        <p>{data.date}</p>
      </div>
      <p>{data.description}</p>
      <ul>
        {data.competences.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
