import "../styles/globals.css";
import {ThemeProvider} from "@mui/material";
import {mainTheme} from "@/utils/themes";
import createEmotionCache from "../utils/createEmotionCache";
import {CacheProvider} from "@emotion/react";
import React from "react";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
                 Component,
                 emotionCache = clientSideEmotionCache,
                 pageProps,
               }) {
  return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={mainTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
  );
}

export default MyApp;