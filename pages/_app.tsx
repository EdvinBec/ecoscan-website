import "../styles/globals.css";
import "../styles/NavBar.scss";
import "../styles/Header.scss";
import "../styles/AboutUs.scss";
import "../styles/Steps.scss";
import "../styles/Download.scss";
import "../styles/Process.scss";
import "../styles/Footer.scss";
import "../styles/TimeLine.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
