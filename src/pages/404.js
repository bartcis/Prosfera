import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { theme } from '../components/utils/theme';
import SEO from '../components/seo';
import BlockHeader from '../components/block-header';
import Footer from '../components/footer';
import BlockWrapper from '../components/partials/block-wrapper';
import H1 from '../components/partials/h1';
import H3 from '../components/partials/h3';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: ${({theme}) => theme.colors.blue};
  }
`;

const Wrapper404 = styled(BlockWrapper)`
  min-height: 30vh;
`;

class NotFoundPage extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <SEO title='Home' keywords={[`prosfera`, `wentylacje`, `zabezpieczenia p poz`]} />
          <GlobalStyle/>
          <BlockHeader/>
          <Wrapper404>
            <H3>Spróbuj czegoś innego.</H3>
            <H1>Wybrana strona nie istnieje!</H1>
          </Wrapper404>
          <Footer/>
        </> 
      </ThemeProvider>
    )
  }
}

export default NotFoundPage
