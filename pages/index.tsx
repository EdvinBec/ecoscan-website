import { Inter } from "@next/font/google";
import NavBar from "../components/NavBar";
import logo from "../assets/img/LogoGreenNoBG.png";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Steps from "../components/Steps";
import Download from "../components/Download";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar logo={logo} />
      <Header />
      <AboutUs />
      <Steps />
      <Download />
    </>
  );
}
