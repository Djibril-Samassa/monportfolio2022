import React, { useEffect, useState } from "react";

export default function Pays() {
  const [country, setCountry] = useState();
  const [name, setName] = useState();
  const getCountry = () => {
    fetch(`https://restcountries.com/v2/name/${name}?fullText=true`)
      .then((response) => {
        if (response.status === 404) {
          alert(
            "Le pays entré n'a pas été trouvé 😞 assurez vous de l'avoir correctement écrit, par exemple pour Italie entrez: Italy, pour Maroc: Morocco"
          );
        }
        return response.json();
      })
      .then((responsejson) => {
        setCountry(responsejson[0]);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div
      className="paysProjetContainer"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="paysproj">
        <h3 className="expTitle paysprojecttitle">
          Entrez le nom d'un pays de votre choix
        </h3>
        <span className="paysbuttons">
          <input
            name="paysinput"
            className="paysinput"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="exemple: Morocco, Japan, Italia"
          />
          <input
            type="submit"
            onClick={() => {
              getCountry();
            }}
            value="Lancer la recherche !"
            className="paysubmit"
          />
        </span>
      </div>
      {country ? (
        <div
          className="paysresults"
        >
          <img
            style={{ width: "30%", margin: "0 2em" }}
            src={country.flags.png}
          />
          <div>
            <h3 className="expTitle">Continent : {country.region}</h3>
            <h3 className="expTitle">Pays : {country.name}</h3>
            <h3 className="expTitle">Capitale : {country.capital}</h3>
            <p className="expTitle">Population : {country.population}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
