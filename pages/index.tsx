import { Inter } from "@next/font/google";
import NavBar from "../components/NavBar";
import logo from "../assets/img/LogoGreenNoBG.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar logo={logo} />
    </>
  );
}
