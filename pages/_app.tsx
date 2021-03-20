import type { AppProps } from "next/app";
import Theme from "theme";
import { DefaultSeo } from "next-seo";
import siteConfig from "utils/site-config";

function MyApp({ Component, pageProps }: AppProps) {
  const { seo } = siteConfig;
  return (
    <Theme>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />{" "}
    </Theme>
  );
}

export default MyApp;
