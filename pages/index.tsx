import { Inter } from "@next/font/google";
import NavBar from "../components/NavBar";
import logo from "../assets/img/LogoGreenNoBG.png";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Steps from "../components/Steps";
import Download from "../components/Download";
import Process from "../components/Process";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutUs />
      <Steps />
      <Download />
      <Process />
      <Footer />
    </>
  );
}
