import Image from "next/image";
import React from "react";
import { Inter } from "@next/font/google";
import logo from "../assets/img/LogoGreenNoBG.png";

type Props = {};

const inter = Inter({ subsets: ["latin"] });

const NavBar = (props: Props) => {
  return (
    <div className="navBar">
      <Image className="logo" alt="EcoScanLogo" src={logo} />
      <div className={`${inter.className} buttons`}>
        <a href="./">
          <button>Domov</button>
        </a>
        <button>O nas</button>
        <button>Uporaba</button>
        <button>Prenesi</button>
        <a href="/projekt">
          <button>Projekt</button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
