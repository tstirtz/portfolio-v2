import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="mytheme">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
