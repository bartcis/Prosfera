import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

import { theme } from '../components/utils/theme';
import SEO from '../components/seo';
import BlockHeader from '../components/block-header';
import Footer from '../components/footer';
import H1 from '../components/partials/h1';
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
  margin-top: 120px;

`;

const View = styled.div`
  height: 60vh;
  position: relative;
  width: 100%;
  margin: 2rem 0;
`;

const Image = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
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
  padding: 5rem 0 0;
  p {
    position: relative;
    font-size: 1.1rem;
    font-weight: 100;
    font-family: 'Montserrat';
    color: ${({theme}) => theme.colors.white};
    z-index: 900;
  }
  .bold {
    font-weight: 400;
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

    console.log(post);

    return (
      <ThemeProvider theme={theme}>
        <>
          <SEO title='Home' keywords={[`prosfera`, `wentylacje`, `zabezpieczenia p poz`]} />
          <GlobalStyle/>
          <BlockHeader/>
          <Post>
            <View>
              <Image css={css`
                background-image: url(${post.featured_media.localFile.childImageSharp.fluid.src});
              `}></Image>
              <Cover></Cover>
              <Info>
                <H1 isWhite isHero dangerouslySetInnerHTML={{__html: post.title}}/>
                <p dangerouslySetInnerHTML={{__html: post.acf.krotki_opis}}/>
                <Wrapper>
                  <Column>
                    <p>
                      <span className="bold">Miejsce Projektu: </span>
                      {post.acf.miejsce_projektu}
                    </p>
                    <p>
                      <span className="bold">Rok Realizacji: </span>
                      {post.acf.rok_realizacji}
                    </p>
                    <p>
                      <span className="bold">Typ Budynku: </span>
                      {post.acf.typ_budynku}
                    </p>
                    <p>
                      <span className="bold">Przeznaczenie Budynku: </span>
                      {post.acf.przeznaczenie_budynku}
                    </p>
                    <p>
                      <span className="bold">Długość Położonej Instalacji: </span>
                      {post.acf.dlugosc_instalacji}
                    </p>
                  </Column>
                  <Column dangerouslySetInnerHTML={{__html: post.acf.dlugi_opis}}/>
                </Wrapper>
              </Info>
            </View>
            <Wrapper>
              <Text isWide dangerouslySetInnerHTML={{__html: post.acf.foto_1_opis}} />
              <View>
                <Image css={css`
                  background-image: url(${post.acf.foto_1.localFile.childImageSharp.fluid.src});
                `}></Image>
              </View>
              <Text isWide dangerouslySetInnerHTML={{__html: post.acf.foto_2_opis}} />
              <View>
                <Image css={css`
                  background-image: url(${post.acf.foto_2.localFile.childImageSharp.fluid.src});
                `}></Image>
              </View>
              <Text isWide dangerouslySetInnerHTML={{__html: post.acf.foto_3_opis}} />
              <View>
                <Image css={css`
                  background-image: url(${post.acf.foto_3.localFile.childImageSharp.fluid.src});
                `}></Image>
              </View>
              <Text isWide dangerouslySetInnerHTML={{__html: post.acf.foto_4_opis}} />
              <View>
                <Image css={css`
                  background-image: url(${post.acf.foto_4.localFile.childImageSharp.fluid.src});
                `}></Image>
              </View>
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