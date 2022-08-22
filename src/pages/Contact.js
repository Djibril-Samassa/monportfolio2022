import React from "react";
import { Icon } from "@iconify/react";
import Projets from "../Projets.json";

export default function Contact() {
  return (
    <div style={{ margin: "0 auto", width: "90%" }}>
      <h1 className="expTitle">Contactez moi</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <div className="contactLinkContainer">
          <h3>
            <Icon
              icon="akar-icons:linkedin-box-fill"
              width="50"
              style={{ margin: "1em 0em" }}
            />
            Sur LinkedIn
          </h3>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/djibril-samassa/"
          >
            Cliquez ici
          </a>
        </div>
        <div className="contactLinkContainer">
          <h3>
            <Icon
              icon="akar-icons:phone"
              width="50"
              style={{ margin: "1em 0em" }}
            />
            Par téléphone
          </h3>
          <a href="tel:06 37 03 56 41">06 37 03 56 41</a>
        </div>
        <div className="contactLinkContainer">
          <h3>
            <Icon icon="ci:mail" width="50" style={{ margin: "1em 0em" }} />
            Par mail
          </h3>
          <a href="mailto:dsamassa22@gmail.com">dsamassa22@gmail.com</a>
        </div>
      </div>
      <h1 className="expTitle">
        Vous souhaitez jetez un coup d'oeil sur mon Github ?{" "}
        <a
          target="_blank"
          href="https://github.com/Djibril-Samassa?tab=repositories"
          style={{ color: "#f1f1f1" }}
        >
          Par ici
        </a>
      </h1>
      <div style={{ display: "flex" }}>
        {" "}
        <h3 className="expTitle">
          Merci de votre visite, n'hesitez pas à m'envoyer un message si vous
          avez des suggestions ou que mon profil vous intéresse 😉
        </h3>
        <img src="images/hello.png" />
      </div>
    </div>
  );
}
