import type { AppProps } from "next/app";
import Theme from "theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      {" "}
      <Component {...pageProps} />{" "}
    </Theme>
  );
}

export default MyApp;
