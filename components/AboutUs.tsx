import Image from "next/image";
import React from "react";
import aboutUsImage from "../assets/img/aboutImage.jpg";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="aboutContainer">
      <div className="horSpacing">
        <Image className="aboutUsImage" alt="aboutUsImage" src={aboutUsImage} />
        <div className="content">
          <h1>O nas</h1>
          <p>
            Smo ekipa navdušenih posameznikov, ki verjamemo v moč tehnologije za
            pozitiven vpliv na svet. Naš cilj je ustvariti inovativne rešitve,
            ki lahko resnično spremenijo ljudi življenja. Za nas je pomembno, da
            zagotavljamo visoko kakovostne izdelke in storitve, ki so enostavni
            za uporabo in dostopni vsakomur
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
