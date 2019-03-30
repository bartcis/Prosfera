import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { theme } from '../components/utils/theme';
import SEO from '../components/seo';
import BlockHeader from '../components/blockHeader';
import Footer from '../components/footer';
import BlockWrapper from '../components/partials/blockWrapper';
import H1 from '../components/partials/H1';
import H3 from '../components/partials/H3';

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
