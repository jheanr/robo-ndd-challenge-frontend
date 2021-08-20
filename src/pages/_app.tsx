import 'regenerator-runtime/runtime';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="[R.O.B.O] is a NDD challenge for web developers."
        />

        <title>[R.O.B.O] - Robô Operacional Binariamente Orientado.</title>
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
