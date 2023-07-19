import type { AppProps } from "next/app";
import { globalStyle } from "../styles/global";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";

globalStyle();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
