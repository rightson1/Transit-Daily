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
        <title>SPORTS VIEW TALENTS</title>
        <meta name="description" content="Sportsview Talents Academy formerly Sportsview Skaters Club (SVS) was formed in February 2019 as an in-line skating training program. Now entering our third year, SVS has evolved into a full-scale, roller skating, bike riding , floor ball and a very successful Chess club offering year-round tailored trainings to kids from the age of 3 . We record most of our training activities and upload them on YouTube and Facebook pages to enhance quality control." />
        {/* <meta name="keywords" content="Transit Daily, bicycle, repair, renting, cycling, events, Nairobi, Kenya, affordable" /> */}
        <meta name="author" content="Eli Jesse" />
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
