import type { AppProps } from "next/app";

import Layout from "@Components/Layout";

import "@Styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
