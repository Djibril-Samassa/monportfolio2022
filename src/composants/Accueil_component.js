import React from "react";
import Style from "./Accueil_component.module.css";
import { useState} from "react";

export default function Accueil(){
    const [showModal, setShowModal] = useState(true)
    const [animation, setAnimation] = useState(false)

    return(<>
    {showModal ? 
    <>
        <div className={Style.accueil_container}>
            <div className={Style.accueil_content}>
                <div>
                    <h1 className={Style.accueil_h1}>
                        Bonjour,<br/>
                        Je suis Djibril SAMASSA
                    </h1>
                    <p>Intégrateur Web  | 
                    Webdesigner |
                        Designer UX/UI
                    </p>
                </div>
            <img src="images/logo.png" className={Style.logo}/>
            </div>
        </div>

        {animation ?
        <div className={Style.animation_container}>
                <div className={Style.wave_animation}>
                    <div className={Style.wave2_animation}>
                    </div>
                </div>
                <div className={Style.animation_content}></div>
        </div>
    : <div className={Style.wave}>
    <div className={Style.wave2}>
        <div 
            className={Style.button}
            onClick={() =>{
                setAnimation(true)
                console.log(showModal);
                setTimeout(() => {
                    setShowModal(false);
                  }, "2000")
            }}
        >
            <p>Voir mon Portfolio</p>
        </div>
    </div>
</div>
}
    </>    
 : <p>Accueil</p> }
    </>)
}