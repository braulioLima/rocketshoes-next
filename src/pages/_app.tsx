import { FC } from 'react';

import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/Global';
import * as themes from '@styles/themes';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={themes.darkTheme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
