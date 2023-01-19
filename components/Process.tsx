import React from "react";

type Props = {};

const Process = (props: Props) => {
  return (
    <div className="processContainer">
      <h1>Postopek izdelave</h1>
      <p>
        Celoten proces razvoja tega projekta, si lahko ogledate na spodnji
        povezavi
      </p>
      <a href="/projekt">Poglej dokument</a>
    </div>
  );
};

export default Process;
