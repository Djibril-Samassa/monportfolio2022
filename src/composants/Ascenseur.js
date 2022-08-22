import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function Ascenseur() {
  const [selectedEtage, setSelectedEtage] = useState();
  const [currentEtage, setCurrentEtage] = useState(1);
  const [openDoor, setOpenDoor] = useState(true);
  const navigate = () => {
    if (selectedEtage) {
      if (currentEtage !== selectedEtage) {
        setOpenDoor(false);
        setTimeout(() => {
          if (selectedEtage > currentEtage) {
            setCurrentEtage(currentEtage + 1);
          } else {
            setCurrentEtage(currentEtage - 1);
          }
        }, 1000);
      } else {
        setOpenDoor(true);
      }
    } else {
      return null;
    }
  };
  useEffect(() => {
    setTimeout(() => {
      navigate();
    }, 1000);
  }, [currentEtage, selectedEtage]);
  return (
    <div>
      <h3 className="expTitle">Parcourez les étages de mon building 😎</h3>
      <ul className=" etagesButtonContainer">
        <li
          className={currentEtage === 1 ? "current" : "notcurrent"}
          onClick={() => {
            setSelectedEtage(1);
          }}
        >
          1
        </li>
        <li
          className={currentEtage === 2 ? "current" : "notcurrent"}
          onClick={() => {
            setSelectedEtage(2);
          }}
        >
          2
        </li>
        <li
          className={currentEtage === 3 ? "current" : "notcurrent"}
          onClick={() => {
            setSelectedEtage(3);
          }}
        >
          3
        </li>
        <li
          className={currentEtage === 4 ? "current" : "notcurrent"}
          onClick={() => {
            setSelectedEtage(4);
          }}
        >
          4
        </li>
        <li
          className={currentEtage === 5 ? "current" : "notcurrent"}
          onClick={() => {
            setSelectedEtage(5);
          }}
        >
          5
        </li>
      </ul>
      <h2
        style={{
          backgroundColor: "#f1f1f1",
          color: openDoor ? "green" : "red",
          display: "inline-block",
          padding: "0.5em",
          borderRadius: "5px",
        }}
      >
        {openDoor ? "Porte Ouverte" : "Porte fermée"}
      </h2>
    </div>
  );
}
