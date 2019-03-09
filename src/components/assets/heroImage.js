import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import { css } from '@emotion/core';
import styled from 'styled-components';

import H1 from '../partials/H1';
import Button from '../partials/Button';
import Text from '../partials/Text';

const Cover = styled.div`
  position: absolute;
  background-color: rgba(	9, 29, 43, .8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const StyledHero = () => (
  <StaticQuery
    query = {graphql`
      query {
        desktop: file(relativePath: { eq: "prosfera-hero-min.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render = {data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage fluid={imageData}
          css={css`
            width: 100%;
            height: auto;
            text-align: center;
            padding: 125px 10px 50px;
            @media (min-width: 600px) {
              padding: 15%;
            }
          `}
        >
          <Cover></Cover>
          <H1 isWhite css={css`
            max-width: 600px;
            margin: auto;
          `}>Wentylacje i Instalacje p. Pożarowe</H1>
          <Text isWhite>
            Ponad 10 lat dbamy o Twoje powietrze. Budujemy instalacje dostosowane do Twoich potrzeb.
          </Text>
          <Button isWhite>Kontakt</Button>
        </BackgroundImage>
      )
    }}
  />
)

export default StyledHero
