import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { theme } from '../components/utils/theme';
import montserrat2 from '../fonts/montserrat-light-webfont.woff2';
import montserrat from '../fonts/montserrat-light-webfont.woff';

import SEO from '../components/seo';
import BlockHeader from '../components/block-header';
import Footer from '../components/footer';
import H1 from '../components/partials/h-one';
import Text from '../components/partials/text';
import Wrapper from '../components/partials/wrapper';


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

const Post = styled.div`
  margin-top: 100px;

`;

const View = styled.div`
  height: 550px;
  position: relative;
  @media (min-width: 667px) {
    height: 500px;
  }
  @media (min-width: 1440px) {
    height: 600px;
  }
`;

const Image = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 80%;
  height: 300px;
  box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
  margin: 1rem 0;
  z-index: 900;
  @media (min-width: 1024px) {
    height: 500px;
    margin: 2rem 0;
  }
`;

const HeroImage = styled(Image)`
  width: 100%;
  height: 100% !important;
`;

const Cover = styled.div`
  position: absolute;
  background-color: rgba(	9, 29, 43, .7);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Info = styled.div`
  position: absolute;
  max-width: 950px;
  top: 0;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
  padding: 2rem 0 0;
  @media (min-width: 768px) {
    padding: 4rem 0 0;
  }
  @media (min-width: 1440px) {
    padding: 6rem 0 0;
  }
  p {
    @font-face {
      font-family: 'montserratlight';
      src: url(${montserrat2}) format('woff2'),
        url(${montserrat}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    position: relative;
    font-size: .9rem;
    font-family: 'montserratlight';
    line-height: 1.25;
    color: ${({theme}) => theme.colors.white};
    z-index: 900;
    @media (min-width: 414px) {
      font-size: .9rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.1rem;
    }
  }
`;

const ArtWrapper = styled(Wrapper)`
  margin: 0;
  @media (min-width: 1024px) {
    margin: 3rem auto;
  }
`;

const Column = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: left;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;

    return (
      <ThemeProvider theme={theme}>
        <>
          <SEO title='Home' keywords={[`prosfera`, `wentylacje`, `zabezpieczenia p poz`]} />
          <GlobalStyle/>
          <BlockHeader/>
          <Post>
            <View>
              <HeroImage style={{ backgroundImage: `url(${post.featured_media.localFile.childImageSharp.fluid.src})` }}></HeroImage>
              <Cover></Cover>
              <Info>
                <H1 isWhite isHero dangerouslySetInnerHTML={{__html: post.title}}/>
                <p dangerouslySetInnerHTML={{__html: post.acf.krotki_opis}}/>
                <ArtWrapper>
                  <Column>
                    <p>
                      <span>Miejsce Projektu: </span>
                      <span><b>{post.acf.miejsce_projektu}</b></span>
                    </p>
                    <p>
                      <span>Rok Realizacji: </span>
                      <span><b>{post.acf.rok_realizacji}</b></span>
                    </p>
                    <p>
                      <span>Typ Budynku: </span>
                      <span><b>{post.acf.typ_budynku}</b></span>
                    </p>
                    <p>
                      <span>Przeznaczenie Budynku: </span>
                      <span><b>{post.acf.przeznaczenie_budynku}</b></span>
                    </p>
                    <p>
                      <span>Długość Położonej Instalacji: </span>
                      <span><b>{post.acf.dlugosc_instalacji}</b></span>
                    </p>
                  </Column>
                  <Column>
                    <p dangerouslySetInnerHTML={{__html: post.acf.dlugi_opis}} />
                  </Column>
                </ArtWrapper>
              </Info>
            </View>
            <Wrapper>
              <Text isWide isLeft dangerouslySetInnerHTML={{__html: post.acf.foto_1_opis}} />
              <Image style={{ backgroundImage: `url(${post.acf.foto_1.localFile.childImageSharp.fluid.src})` }}></Image>
              <Text isWide isLeft dangerouslySetInnerHTML={{__html: post.acf.foto_2_opis}} />
              <Image style={{ backgroundImage: `url(${post.acf.foto_2.localFile.childImageSharp.fluid.src})` }}></Image>
              <Text isWide isLeft dangerouslySetInnerHTML={{__html: post.acf.foto_3_opis}} />
              <Image style={{ backgroundImage: `url(${post.acf.foto_3.localFile.childImageSharp.fluid.src})` }}></Image>
              <Text isWide isLeft dangerouslySetInnerHTML={{__html: post.acf.foto_4_opis}} />
              <Image style={{ backgroundImage: `url(${post.acf.foto_4.localFile.childImageSharp.fluid.src})` }}></Image>
            </Wrapper>
          </Post>
          <Footer/>
        </> 
      </ThemeProvider>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id  
      slug
      title
      featured_media{
        localFile{
          childImageSharp{
            fluid(maxWidth: 1920) {
              src
            }
          }
        }
      }
      acf{
        krotki_opis
        dlugi_opis
        miejsce_projektu
        rok_realizacji
        typ_budynku
        przeznaczenie_budynku
        dlugosc_instalacji
        foto_1_opis
        foto_1 {          
          localFile {
            childImageSharp {
              fluid(maxWidth: 950) {
                src
              }
            }
          }
        }
        foto_2_opis
        foto_2 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 950) {
                src
              }
            }
          }
        }
        foto_3_opis
        foto_3 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 950) {
                src
              }
            }
          }
        }
        foto_4_opis
        foto_4 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 950) {
                src
              }
            }
          }
        }
      }
    }
  }
`