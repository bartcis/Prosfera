import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import { css } from '@emotion/core';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { scrollTo as scrollToAction } from '../../state/app';

import H1 from '../partials/h-one';
import Text from '../partials/text';
import Button from '../partials/button';

const Cover = styled.div`
  position: absolute;
  background-color: rgba(	9, 29, 43, .8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const StyledHero = ({scrollTo}) => (
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
        allWordpressPage {
          edges {
            node {
              title
              acf{
                tytul_glowny
                tekst_pod_tytulem
              }
            }
          }
        }
      }
    `}
    render = {(data) => {
      const imageData = data.desktop.childImageSharp.fluid
      const pageData = data.allWordpressPage.edges[2].node.acf;

      return (
        <BackgroundImage fluid={imageData}
          css={css`
            width: 100%;
            height: 500px;
            text-align: center;
            padding: 150px 10px 50px;
            box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
            @media (min-width: 414px) {
              padding: 150px 20px 50px;
            }
            @media (min-width: 768px) {
              padding: 200px 20px 50px;
              height: 600px;
            }
            @media (min-width: 1024px) {
              padding: 180px 20px 50px;
            }
            @media (min-width: 1440px) {
              height: 700px;
              padding: 250px 20px 50px;
            }
          `}
        >
          <Cover></Cover>
          <H1 isWhite isHero css={css`
            max-width: 750px;
            margin: auto;
          `} dangerouslySetInnerHTML={{__html: pageData.tytul_glowny}}/>
          <Text isWhite dangerouslySetInnerHTML={{__html: pageData.tekst_pod_tytulem}}/>
          <Button isWhite onClick={() => scrollTo('contact-form')}
           css={css`
            margin-top: 0px;
            `}
           >Kontakt</Button>
        </BackgroundImage>
      )
    }}
  />
)

export default connect(
  state => ({ scrollState: state.app.scrollState }),
  dispatch => ({ scrollTo: section => dispatch(scrollToAction(section)) }),
)(StyledHero);
