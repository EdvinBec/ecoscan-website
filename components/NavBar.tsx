import Image from "next/image";
import React from "react";
import { Inter } from "@next/font/google";
import logo from "../assets/img/LogoGreenNoBG.png";
import Link from "next/link";

type Props = {};

const inter = Inter({ subsets: ["latin"] });

const NavBar = (props: Props) => {
  return (
    <div className="navBar">
      <Image className="logo" alt="EcoScanLogo" src={logo} />
      <div className={`${inter.className} buttons`}>
        <Link href="/">
          <button>Domov</button>
        </Link>
        <button>O nas</button>
        <button>Uporaba</button>
        <button>Prenesi</button>
        <Link href="/projekt">
          <button>Projekt</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
