import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme } from '../components/utils/theme';

import SEO from '../components/seo';
import Header from '../components/header';
import StyledHero from '../components/assets/heroImage';

import Layout from '../components/Layout';
import Footer from '../components/footer';

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
      <StyledHero/>
      <Layout/>
      <Footer/>
    </> 
  </ThemeProvider>
)

export default IndexPage
