import React, { useEffect } from "react";
import { useState } from "react";
import Style from "./Accueil.module.css";
import { Zoom } from "react-reveal";
import Aos from "aos";
import "aos/dist/aos.css"

export default function AccueilPage() {
  const [displaySite, setDisplaySite] = useState(false);
  useEffect(() =>{
    Aos.init({ duration: 2000});
  }, [])
//   div data-aos="fade-down"
  return (
      <div>
        
      </div>
  );
}
