import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme } from '../components/utils/theme';

import Layout from '../components/layout';
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

      <Layout>
        {/* <h1>Hi people 2</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to='/page-2/'>Go to page 2</Link> */}
      </Layout>
    </> 
  </ThemeProvider>
)

export default IndexPage
