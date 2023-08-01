import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="author" content="William Surya Jaya" />
        <meta name="copyright" content="William Surya Jaya" />

        <meta
          name="Description"
          content="William is a highly skilled web developer with several years of expertise. Discover a portfolio of impressive projects and a collection of insightful blogs."
        />
        <meta
          content="William is a highly skilled web developer with several years of expertise. Discover a portfolio of impressive projects and a collection of insightful blogs."
          property="og:description"
        />
        <meta
          name="keywords"
          content="web developer, web design, website developer, programmer, coder, wisuja, william surya jaya"
        />
        <meta
          name="google-site-verification"
          content="1z51jCATexVpodDr7F3kMgAm24F7lhO0wolYM6b2Nb8"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
