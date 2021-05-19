/* eslint-disable import/no-extraneous-dependencies */
import { AppProps } from 'next/app';
import { useState } from 'react';
import { Global } from '@emotion/core';
import GlobalStyle from '@/styles/global.style';
import { whiteTheme, darkTheme } from '@/styles/theme.style';
import { ThemeProvider } from 'emotion-theming';

const App = ({ Component, pageProps }: AppProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : whiteTheme}>
      <Global styles={GlobalStyle()} />
      <button
        className="switch-dark-theme"
        type="button"
        onClick={() => { setIsDarkTheme(!isDarkTheme); }}
      >
        <input type="checkbox" defaultChecked={isDarkTheme} />
        <span className="slider round" />
      </button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
