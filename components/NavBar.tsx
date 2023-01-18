import Image from "next/image";
import React from "react";
import { Inter } from "@next/font/google";

type Props = {
  logo: any;
};

const inter = Inter({ subsets: ["latin"] });

const NavBar = ({ logo }: Props) => {
  return (
    <div className="navBar">
      <Image className="logo" alt="EcoScanLogo" src={logo} />
      <div className={`${inter.className} buttons`}>
        <button>Home</button>
        <button>About Us</button>
        <button>Recycle</button>
      </div>
    </div>
  );
};

export default NavBar;
