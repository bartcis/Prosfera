import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';

import Wrapper from '../partials/wrapper';
import H1 from '../partials/h1';
import H2 from '../partials/h2';
import H3 from '../partials/h3';
import Text from '../partials/text';
import TestimonialsImage from '../assets/testimonialsImage';

const Column = styled.div`
  width: 100%;
  padding: 0 1rem 1rem;
  text-align: left;
  @media (min-width: 600px) {
    width: 50%;
    padding: 1rem;
  }
`;

const WideColumn = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const NarrowColumn = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: 0px 10px 30px 0px ${({theme}) => theme.colors.shadow};
  margin: 1rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.white};
  p {
    font-size: 1rem;
  }
  @media (min-width: 600px) {
    margin: 2rem 1rem;
    width: 45%;
    padding: 2rem;
  }
`;

const Container = styled.div`
  position: relative;
`;

const AboutImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
  min-height: 250px;
`;

const About = () => (
  <StaticQuery
  query = {graphql`
    query {
      allWordpressPage {
        edges {
          node {
            title
            acf{
              o_fimie
              o_fimie_2
              o_fimie_3
              prezes_foto {          
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      src
                    }
                  }
                }
              }
              referencja_1
              referencja_2
              referencja_3
              referencja_4
              referencja_1_autor
              referencja_2_autor
              referencja_3_autor
              referencja_4_autor
            }
          }
        }
      }
    }
  `}

  render = { data => (
    <Container>
      <TestimonialsImage></TestimonialsImage>
      <Wrapper>
        <WideColumn>
          <H3>Nieco więcej o firmie</H3>
          <H1>O nas</H1> 
        </WideColumn>
        <Column>
          <Text>{data.allWordpressPage.edges[2].node.acf.o_fimie}</Text>
          <Text>{data.allWordpressPage.edges[2].node.acf.o_fimie_2}</Text>
          <Text>{data.allWordpressPage.edges[2].node.acf.o_fimie_3}</Text>
        </Column>
        <Column>
           <AboutImage css={css`
            background-image: 
            url(${data.allWordpressPage.edges[2].node.acf.prezes_foto.localFile.childImageSharp.fluid.src});
          `}></AboutImage>
          <Text isSmall>Kamil Kudyba. Właściciel Prosfery.</Text>
        </Column>
      </Wrapper>
      <Wrapper>
        <WideColumn>
          <H3>Co mówią o nas</H3>
          <H1>Referencje</H1> 
        </WideColumn>
        <NarrowColumn>
          <Text isSmall>{data.allWordpressPage.edges[2].node.acf.referencja_1}</Text>
          <H2 isSmall>{data.allWordpressPage.edges[2].node.acf.referencja_1_autor}</H2>
        </NarrowColumn>
        <NarrowColumn>
          <Text isSmall>{data.allWordpressPage.edges[2].node.acf.referencja_2}</Text>
          <H2 isSmall>{data.allWordpressPage.edges[2].node.acf.referencja_2_autor}</H2>
        </NarrowColumn>
        <NarrowColumn>
          <Text isSmall>{data.allWordpressPage.edges[2].node.acf.referencja_3}</Text>
          <H2 isSmall>{data.allWordpressPage.edges[2].node.acf.referencja_3_autor}</H2>
        </NarrowColumn>
        <NarrowColumn>
          <Text isSmall>{data.allWordpressPage.edges[2].node.acf.referencja_4}</Text>
          <H2 isSmall>{data.allWordpressPage.edges[2].node.acf.referencja_4_autor}</H2>
        </NarrowColumn>
      </Wrapper>
    </Container>
    )}
  />
)

export default About
