import { Inter } from "@next/font/google";
import NavBar from "../components/NavBar";
import logo from "../assets/img/LogoGreenNoBG.png";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar logo={logo} />
      <Header />
    </>
  );
}
