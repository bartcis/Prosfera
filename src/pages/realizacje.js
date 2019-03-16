import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { theme } from '../components/utils/theme';
import SEO from '../components/seo';
import BlockHeader from '../components/blockHeader';
import Footer from '../components/footer';
import BlockWrapper from '../components/partials/blockWrapper';
import Wrapper from '../components/partials/wrapper';
import H1 from '../components/partials/H1';
import H3 from '../components/partials/H3';
import Text from '../components/partials/Text';

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

const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
  :before {
    content: '';
    width: 500px;
    height: 100%;
    background-color: ${({theme}) => theme.colors.darkBlue};
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
    @media (min-width: 1280px) {
      width: 600px;
    }
  }
`;

const Project = styled.div`
  display: flex;
  margin: 1rem;
  z-index: 900;
  width: 100%;
  @media (min-width: 414px) {
    margin: 1rem 2rem;
  }
  @media (min-width: 600px) {
    margin: 0rem 0 3rem;
  }
  @media (min-width: 1024px) {
    margin: 3rem 0;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 600px) {
    width: 600px;
  }
  @media (min-width: 1280px) {
    min-height: 400px;
  }
`;

const Number = styled.h1`
  font-size: 2rem;
    color: ${(props) => props.isWhite ?
      ({theme}) => theme.colors.white :
      ({theme}) => theme.colors.darkBlue};
    font-weight: 600;
    z-index: 100;
    padding: 0 1rem;
    align-self: center;
    display: none;
    @media (min-width: 1024px) {
      font-size: 8rem;
      margin: 4rem;
      display: block;
    }
`;

const Box = styled(Link)`
  text-align: left;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  cursor: pointer;
  text-decoration: none;
  min-height: auto;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (min-width: 600px) {
    min-height: 400px;
    margin: auto;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

const Description = styled.div`
  padding: 1rem;
  @media (min-width: 600px) {
    min-width: 500px;
    padding: 2rem;
  }
  @media (min-width: 1280px) {
    min-width: 300px;
    max-width: 400px;
    padding: 2rem;
  }
`;

class ProjectPortfolio extends Component {
  render() {
    const data = this.props.data;
    return (
      <ThemeProvider theme={theme}>
        <>
          <SEO title='Home' keywords={[`prosfera`, `wentylacje`, `zabezpieczenia p poz`]} />
          <GlobalStyle/>
          <BlockHeader/>
          <BlockWrapper>
            <H3>Wykonaliśmy m. in. następujące</H3>
            <H1>Projekty Budowlane</H1>
          </BlockWrapper>
          <ProjectContainer>
            <Wrapper isWide>
            {data.allWordpressPost.edges.map(({node}, index ) => (
              <Project>
                <Number isWhite>{(index < 10 ? '0' : '') + (index + 1)}</Number>
                <Box to={`/realizacje/${node.slug}`}>
                  <Description>
                    <H1 isSmall>{node.title}</H1>
                    <Text isSmall>{node.acf.dlugi_opis}</Text>
                  </Description>
                  <ProjectImage css={css`
                        background-image: url(${node.featured_media.localFile.childImageSharp.fluid.src});
                    `}>
                  </ProjectImage>
                </Box>
              </Project>
            ))}
            </Wrapper>
          </ProjectContainer>
          <Footer/>
        </> 
      </ThemeProvider>
    )
  }
}

ProjectPortfolio.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default ProjectPortfolio

export const pageQuery = graphql`
  query postsQuery{
    allWordpressPost{
      edges{
        node{
          id
          title
          slug
          featured_media{
            localFile{
              childImageSharp{
                fluid(maxWidth: 800) {
                  src
                }
              }
            }
          }
          acf{
            dlugi_opis
          }
        }
      }
    }
  }
`