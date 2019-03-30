import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { theme } from '../components/utils/theme';

import SEO from '../components/seo';
import BlockHeader from '../components/blockHeader';
import Footer from '../components/footer';

import BlockWrapper from '../components/partials/block-wrapper';
import H1 from '../components/partials/H1';

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

const PageStyle = styled.div`
    max-width: 100%;
    text-align: left;
    margin-top: 2rem;
    h3 {
      font-family: 'Montserrat';
      font-size: .8rem;
      text-transform: uppercase;
      color: ${(props) => props.isWhite ?
          ({theme}) => theme.colors.white :
          ({theme}) => theme.colors.blue};
      font-weight: 100;
      margin: 0;
      padding: 0 1rem;
      width: 100%;
      @media (min-width: 600px) {
          padding: 0;
          font-size: 1rem;
      }
    }

    p {
      font-size: ${(props) => props.isSmall ? '.75rem' : '.9rem'};
      font-weight: 100;
      font-family: 'Montserrat';
      color: ${(props) => props.isWhite ?
          ({theme}) => theme.colors.white :
          ({theme}) => theme.colors.darkBlue};
      position: relative;
      padding: 0 1rem;
      @media (min-width: 768px) {
          font-size: ${(props) => props.isSmall ? '.8rem' : '1rem'};
          padding: 0;
      }
      @media (min-width: 1024px) {
          font-size: ${(props) => props.isSmall ? '1rem' : '1.25rem'};
          padding: 0;
      }
    }
`;

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <ThemeProvider theme={theme}>
        <>
          <SEO title='Home' keywords={[`prosfera`, `wentylacje`, `zabezpieczenia p poz`]} />
          <GlobalStyle/>
          <BlockHeader/>
          <BlockWrapper>
              <H1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
              <PageStyle dangerouslySetInnerHTML={{__html: currentPage.content}}/>
   
          </BlockWrapper>
          <Footer/>
        </> 
      </ThemeProvider>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`