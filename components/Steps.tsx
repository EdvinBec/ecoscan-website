import Image from "next/image";
import React from "react";
import one from "../assets/img/one.png";
import two from "../assets/img/two.png";
import three from "../assets/img/three.png";
import sortingBuckets from "../assets/img/SortingBuckets.png";
import scanImage from "../assets/img/scanImage.png";
import recycleLogo from "../assets/img/RecycleLogo.png";

type Props = {};

const Steps = (props: Props) => {
  return (
    <div className="stepsContainer">
      <div className="verSpacing">
        <h1 className="stepsForUse">Koraki za uporabo</h1>
        <div className="stepOne">
          <div className="left">
            <div className="inline">
              <Image className="one" alt="one" src={one} />
              <h1>Skeniraj predmete</h1>
            </div>
            <p>
              Preden predmete oddate za recikliranje, jih je potrebno skenirati.
              Skeniranje omogoča identifikacijo vrste materiala, ki ga predmet
              vsebuje, kar je potrebno za pravilno recikliranje. Tako bo predmet
              lahko pravilno odstranjen in uporabljen v novi obliki.
            </p>
          </div>
          <div className="right">
            <Image alt="scanning" src={scanImage} />
          </div>
        </div>
        <div className="stepTwo stepOne">
          <div className="left">
            <Image alt="sorting" src={sortingBuckets} />
          </div>
          <div className="right">
            <div className="inline">
              <Image className="one" alt="two" src={two} />
              <h1>Sortiranje</h1>
            </div>
            <p>
              Ko ste predmet skenirali, se bo aplikacija avtomatsko odzvala in
              ga razvrstila v ustrezno kategorijo. To bo omogočilo, da se
              predmet pravilno sortira in ga nameni za ponovno uporabo.
              Kategorizacija vključuje različne vrste materialov, kot so
              plastika, kovine, steklo in papir.
            </p>
          </div>
        </div>
        <div className="stepOne">
          <div className="left">
            <div className="inline">
              <Image className="one" alt="three" src={three} />
              <h1>Recikliraj</h1>
            </div>
            <p>
              Po tem, ko ste predmet skenirali in ga aplikacija pravilno
              razvrstila, ga je potrebno pravilno odvržiti v ustrezne smetnjake.
              Pravilna sortiranja predmetov je ključnega pomena za uspešno
              recikliranje. Reciklažni center bo nato lahko materiale, ki jih
              potrebuje, lažje ločil in jih namenil za ponovno uporabo.
            </p>
          </div>
          <div className="right">
            <Image alt="recycleLogo" src={recycleLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
