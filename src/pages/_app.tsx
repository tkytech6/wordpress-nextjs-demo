import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width,initial-scale=1.0" name="viewport" />
        <link href="/css/base.css" id="base-css-css" media="all" rel="stylesheet" type="text/css" />
        {/* <link href="/css/font-awesome.min.css" id="font-awesome-css" media="all" rel="stylesheet" type="text/css" /> */}
        <link href="/css/style.css" id="main-css-css" media="all" rel="stylesheet" type="text/css" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
