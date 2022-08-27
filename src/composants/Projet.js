import React, { useState } from "react";

export default function ProjetComponent(props) {
  const data = props.props;
  const [showImage, setShowImage] = useState(false);
  return (
    <>
      {showImage ? (
        <div className="projetContainer">
          <img style={{ width: "100%" }} src={data.imgLink} />
          <span className="projetsBtn">
            <p
              className="projetButton"
              onClick={() => {
                setShowImage(!showImage);
              }}
            >
              Voir les informations
            </p>
          </span>
        </div>
      ) : (
        <div className="projetContainer">
          <h3 className="expTitle">{data.Titte}</h3>
          <p className="projetDescription">{data.Decription}</p>
          <p>Projet réalisé en : </p>
          <ul>
            {data.Langages.map((langage) => {
              return <li>{langage}</li>;
            })}
          </ul>
          {data.Link ? (
            <span className="projetsBtn">
              <a target="_blank" href={data.Link} className="projetButton">
                Voir sur Github
              </a>
            </span>
          ) : (
            <span style={{ display: "flex", justifyContent: "center" }}>
              <p
                className="projetButton"
                onClick={() => {
                  setShowImage(!showImage);
                }}
              >
                Voir le rendu
              </p>
            </span>
          )}
        </div>
      )}
    </>
  );
}
