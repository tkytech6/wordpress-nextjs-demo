import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width,initial-scale=1.0" name="viewport" />
        <link
          href={`${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-content/themes/xeory_base/base.css?ver=5.7.1`}
          id="base-css-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href={`${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-content/themes/xeory_base/lib/fonts/font-awesome-4.5.0/css/font-awesome.min.css?ver=5.7.1`}
          id="font-awesome-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href={`${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-includes/css/dist/block-library/style.min.css?ver=5.7.1`}
          id="wp-block-library-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href={`${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-content/themes/xeory_base/style.css?ver=5.7.1`}
          id="main-css-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
