import Image from "next/image";
import React from "react";
import qrCode from "../assets/img/qr-code.png";

type Props = {};

const Download = (props: Props) => {
  return (
    <div className="downloadContainer">
      <h1>Prenesi aplikacijo</h1>
      <p>
        {" "}
        Aplikacijo lahko prenesete tako, da skenirate spodnjo QR kodo ali pa jo
        prenesete z direktno povezavo.
      </p>
      <div className="inline">
        <Image className="qrCode" alt="qrCode" src={qrCode} />
        <a href="https://serssi-my.sharepoint.com/:u:/g/personal/edvin_becic_sers_si/EXTWt7JY13tGi5bFnTz7H5IB0FWwC2XexO0eroIo2bcQGg?e=Oa8orN">
          Prenesi
        </a>
      </div>
    </div>
  );
};

export default Download;
