import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme } from '../components/utils/theme';

import SEO from '../components/seo';
import Header from '../components/header';
import Hero from '../components/hero';
import MainContent from '../components/mainContent';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title='Home' keywords={[`prosfera`, `wentylacje`, `zabezpieczenia p poz`]} />
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <MainContent/>
    </> 
  </ThemeProvider>
)

export default IndexPage
