import React from "react";
import Aos from "aos";
import Style from "./Experience.css";
export default function Experience(props) {
  const data = props.props;
  console.log(data);
  return (
    <div className="expContainer">
      <h1 className="expTitle">{data.title} </h1>
      <h3
        style={{
          color: "#f1f1f1",
          textTransform: "uppercase",
          textAlign: "center",
        }}
        className={data.website ? "websitelinktrue" : "websitelink"}
      >
        {data.website ? (
          <a href={data.website} target="_blank">
            {data.company}
          </a>
        ) : (
          <>{data.company}</>
        )}
      </h3>
      <p style={{ textAlign: "center" }}>{data.date}</p>
      <ul>
        {data.tasks.map((task) => {
          return <li>{task}</li>;
        })}
      </ul>
    </div>
  );
}
