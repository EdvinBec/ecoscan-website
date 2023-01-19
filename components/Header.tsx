import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="half">
        <div className="spacing">
          <h1>
            Eco <span>Scan</span>
          </h1>
          <p>
            Predstavljamo našo novo aplikacijo za recikliranje, ki omogoča
            enostavno in učinkovito recikliranje!
          </p>
          <p>
            Ne glede na to, ali je to papir, plastika ali steklo, naša
            aplikacija bo zagotavljala jasna navodila za recikliranje vsakega
            predmeta.
          </p>
          <button className="ctaButton">Preberite več</button>
        </div>
      </div>
      <div className="backgroundImage"></div>
    </div>
  );
};

export default Header;
