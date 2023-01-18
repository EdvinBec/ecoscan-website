import Image from "next/image";
import React from "react";

type Props = {
  logo: any;
};

const NavBar = ({ logo }: Props) => {
  return (
    <div className="navBar">
      <Image className="logo" alt="EcoScanLogo" src={logo} />
      <div className="buttons">
        <button>Home</button>
        <button>About Us</button>
        <button>Recycle</button>
      </div>
    </div>
  );
};

export default NavBar;
