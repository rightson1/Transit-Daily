import "../styles/globals.css";
import "../styles/client.css";
import Head from "next/head";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/createCache';
import PropTypes from 'prop-types';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "../utils/themeContext";
import { AnimatePresence } from "framer-motion";
import 'react-slideshow-image/dist/styles.css'
import Navbar from "../components/Navbar";

import Footer from "../components/Footer"
import "swiper/swiper-bundle.css";
function MyApp(props) {

  const clientSideEmotionCache = createEmotionCache();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <Head>
        <title>Transit Daily - Bicycle Repair, Renting, and Cycling Events in Nairobi, Kenya</title>
        <meta name="description" content="Transit Daily offers affordable bicycle repair, renting, and cycling events in Nairobi and Kajiado. Join us for a fun and active experience!" />
        <meta name="keywords" content="Transit Daily, bicycle, repair, renting, cycling, events, Nairobi, Kenya, affordable" />
        <meta name="author" content="Transit Daily" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta property="og:url" content="https://transit-daily.vercel.app/logo.png" /> */}
        <meta property="og:image" content=" https://transit-daily.vercel.app/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <CacheProvider value={emotionCache}>


        <AnimatePresence>
          {Component.nolayout ? (<ThemeProvider>
            <div className="w-[100vw] overflow-x-hidden">
              <Navbar />
              <div className=" ">
                <Component {...pageProps} />

              </div>
            </div>
          </ThemeProvider>) : (
            <ThemeProvider>
              <div className="w-[100vw] ">

                <div className="">
                  <Navbar />
                  <Component {...pageProps} />

                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          )}
        </AnimatePresence>

      </CacheProvider>
    </>
  );

}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
