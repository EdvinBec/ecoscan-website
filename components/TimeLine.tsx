import Image from "next/image";
import React from "react";
import plakatHor from "../assets/img/PlakatHor.jpg";
import plakatVer from "../assets/img/PlakatVer.jpg";
import figma from "../assets/img/Figma.png";
import appDesign from "../assets/img/AppDesign.png";
import appInventorDesign from "../assets/img/AppInventorDesign.png";
import appInventorBlocks from "../assets/img/AppInventorBlocks.png";
import webpageHeader from "../assets/img/WebpageHeader.png";
import webpageMid from "../assets/img/WebsiteMid.png";
import ReactPlayer from "react-player";

type Props = {};

const TimeLine = (props: Props) => {
  return (
    <div className="wrapper">
      <div className="timeLineContainer">
        <div className="timeLineIndicatorContainer">
          <div className="timeLineCircle"></div>
          <div className="timeLineIndicator"></div>
        </div>
        <div className="content">
          <div className="title">
            <h1 className="number">1</h1>
            <h1>
              Strategija
              <br />
              <span>Raziskovanje</span>
            </h1>
          </div>
          <div className="text">
            <h3>Razvoj strategije</h3>
            <p>
              Na prvi dan našega projekta smo se kot celotna ekipa zbrali, da bi
              razpravljali o tem, kakšno ime želimo uporabiti. Po dolgih
              premislekih smo se odločili za ime `Skenerji`, saj smo želeli, da
              je naše ime inovativno in ustrezno za našo izbrano temo
              recikliranja za pomoč okolju. Nato smo vsakemu članu ekipe
              dodelili vloge. Skupaj smo se pogovarjali o različnih idejah in
              izmed njih izbrali najboljšo. Nato smo jo podrobneje opisali njeno
              delovanje in namen na listu papirja ter tudi narisali kako bo
              aplikacija izgledala ob zagonu in kako ob vsakem koraku delovanja.
            </p>
          </div>
        </div>
        <div className="images">
          <Image className="plakatHor" alt="plakat" src={plakatHor} />
          <Image className="plakatVer" alt="plakat" src={plakatVer} />
        </div>
      </div>
      <div className="timeLineContainer">
        <div className="timeLineIndicatorContainer">
          <div className="timeLineCircle"></div>
          <div className="timeLineIndicator"></div>
        </div>
        <div className="content">
          <div className="title">
            <h1 className="number">2</h1>
            <h1>
              Dizajn
              <br />
              <span>Logotip</span>
            </h1>
          </div>
          <div className="text">
            <h3>Proces dizajniranja</h3>
            <p>
              Proces oblikovanja mobilne aplikacije v Figmi je bil zelo zanimiv.
              Najprej smo določili ciljne skupine in analizirali potrebe
              uporabnikov. Nato smo začeli z načrtovanjem strukture aplikacije
              in določili glavne funkcionalnosti. V naslednjem koraku smo
              izdelali wireframe-e, ki so nam služili kot osnova za oblikovanje
              aplikacije.
              <br />
              <br />
              Nato smo se lotili oblikovanja zaslona za zagon aplikacije, ki smo
              ga pozneje dopolnjevali z različnimi elementi, kot so gumbi,
              slike, besedila in drugo. Poudarili smo, da je aplikacija
              enostavna za uporabo in intuitivna, da bi uporabnikom omogočila
              hitro in učinkovito skeniranje predmetov in določanje načina
              recikliranja. <br />
              <br />V procesu oblikovanja smo poskrbeli tudi za estetsko podobo
              aplikacije, ki smo jo prilagodili naši temi recikliranja. Z
              uporabo barv, slik in drugih elementov smo želeli doseči, da bo
              aplikacija videti privlačna in zanimiva za uporabnike
            </p>
          </div>
        </div>
        <div className="images">
          <Image className="plakatHor" alt="plakat" src={figma} />
          <Image className="plakatVer" alt="plakat" src={appDesign} />
        </div>
      </div>
      <div className="timeLineContainer">
        <div className="timeLineIndicatorContainer">
          <div className="timeLineCircle"></div>
          <div className="timeLineIndicator"></div>
        </div>
        <div className="content">
          <div className="title">
            <h1 className="number">3</h1>
            <h1>
              Izdelava
              <br />
              <span>Aplikacije</span>
            </h1>
          </div>
          <div className="text">
            <h3>MIT App Inventor</h3>
            <p>
              Aplikacija je bila zgrajena z uporabo MIT App Inventorja, ki
              omogoča enostavno in intuitivno razvijanje mobilnih aplikacij.
              Prvi korak je bil izdelava vmesnika za uporabnika, ki omogoča
              skeniranje predmeta in prikaz rezultatov. Nato smo implementirali
              algoritme za prepoznavanje materiala predmeta in sugeriranje, v
              kateri koš za recikliranje ga je treba odložiti. Končno smo
              testirali aplikacijo in jo optimizirali za optimalno delovanje.
            </p>
          </div>
        </div>
        <div className="images">
          <Image className="plakatHor" alt="plakat" src={appInventorDesign} />
          <Image className="plakatVer" alt="plakat" src={appInventorBlocks} />
        </div>
      </div>
      <div className="timeLineContainer">
        <div className="timeLineIndicatorContainer">
          <div className="timeLineCircle"></div>
          <div className="timeLineIndicator"></div>
        </div>
        <div className="content">
          <div className="title">
            <h1 className="number">4</h1>
            <h1>
              Razvoj
              <br />
              <span>Spletne strani</span>
            </h1>
          </div>
          <div className="text">
            <h3>Programiranje</h3>
            <p>
              Začeli smo z vzpostavljanjem spletnega mesta, ki smo ga začeli z
              ustvarjanjem navigacijske vrstice v katero smo vključili logo ter
              povezave do podrobnosti o nas, domače strani in navodil za
              uporabo. Nadaljevali smo z gradnjo glavnega programa, ki smo ga
              okrasili z izbrano sliko in osnovnimi informacijami o EcoScan.
              Nato smo ustvarili razdelek `O nas, v katerega smo vključili
              predstavitev našega ekipa. Napisali smo tudi korake za uporabo
              aplikacije, da bi uporabniki lahko brez težav uporabljali
              aplikacijo in dodali povezavo za prenos aplikacije ter celoten
              proces razvoja projekta. Na koncu smo dodali še nogo.
            </p>
          </div>
        </div>
        <div className="images">
          <Image className="plakatHor" alt="plakat" src={webpageHeader} />
          <Image className="plakatVer" alt="plakat" src={webpageMid} />
        </div>
      </div>
      <div className="timeLineContainer">
        <div className="timeLineIndicatorContainer">
          <div className="timeLineCircle"></div>
          <div className="timeLineIndicator"></div>
        </div>
        <div className="content">
          <div className="title">
            <h1 className="number">5</h1>
            <h1>
              Snemanje
              <br />
              <span>Promocijskega videa</span>
            </h1>
          </div>
          <div className="text">
            <h3>Snemanje</h3>
            <p>
              V začetni fazi proizvodnje videa smo se odločili, da bomo za
              boljšo razumevanje naše aplikacije in spletne strani, predstavili
              praktičen primer uporabe. Za to smo posneli kratko demonstracijo,
              kjer smo pokazali kako naša aplikacija deluje v realnem okolju in
              kako lahko uporabnikom pomaga pri reševanju njihovih izzivov.{" "}
              <br /> <br /> V drugem delu videa smo se podrobneje posvetili
              delovanju naše aplikacije in spletne strani. Predstavili smo njene
              glavne funkcionalnosti in načine uporabe, tako da smo uporabnikom
              ponudili jasen in razumljiv vpogled v to, kaj naša aplikacija
              lahko stori za njih.
            </p>
          </div>
        </div>
        <div className="images">
          <ReactPlayer url="https://youtu.be/m18NXsal81E" />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
