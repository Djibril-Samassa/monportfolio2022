import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ delay: 0 }}
          className="contactLinkContainer"
        >
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
        </motion.div>
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.05 }}
          className="contactLinkContainer"
        >
          <h3>
            <Icon
              icon="akar-icons:phone"
              width="50"
              style={{ margin: "1em 0em" }}
            />
            Par téléphone
          </h3>
          <a href="tel:06 37 03 56 41">06 37 03 56 41</a>
        </motion.div>
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="contactLinkContainer"
        >
          <h3>
            <Icon icon="ci:mail" width="50" style={{ margin: "1em 0em" }} />
            Par mail
          </h3>
          <a href="mailto:dsamassa22@gmail.com">dsamassa22@gmail.com</a>
        </motion.div>
      </div>
      <h2 className="expTitle">Préférences</h2>
      <ul style={{ marginBottom: "5em" }} className="expTitle">
        <li>
          <h3 className="expTitle">Disponibilité immédiate</h3>
        </li>
        <li>
          <h3 className="expTitle">Présentiel / Distanciel</h3>
        </li>
        <li>
          <h3 className="expTitle">Temps partiel de préférence</h3>
        </li>
        <li>
          <h3 className="expTitle">Mission souhaitée : Front et Design </h3>
        </li>
        <li>
          <h3 className="expTitle">Prétention salariale : à discuter</h3>
        </li>
      </ul>
      <h2 className="expTitle">
        Vous souhaitez jetez un coup d'oeil à mon Github ?{" "}
        <a
          target="_blank"
          href="https://github.com/Djibril-Samassa?tab=repositories"
          style={{ color: "#f1f1f1" }}
        >
          Par ici
        </a>
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {" "}
        <h3 className="expTitle">
          Merci de votre visite, n'hesitez pas à me contacter si vous
          avez des suggestions ou que mon profil vous intéresse 😉
        </h3>
        {/* <img style={{ width: "20vw" }} src="images/hello.png" /> */}
      </div>
    </div>
  );
}
