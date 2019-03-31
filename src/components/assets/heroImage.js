import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import { css } from '@emotion/core';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { scrollTo as scrollToAction } from '../../state/app';

import H1 from '../partials/h-one';

const Cover = styled.div`
  position: absolute;
  background-color: rgba(	9, 29, 43, .8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Text = styled.p`
    max-width: ${(props) => props.isWide ? '100%' : '500px'};
    margin: ${(props) => props.isWhite ? '2rem auto' : ''};
    font-size: ${(props) => props.isSmall ? '.75rem' : '.9rem'};
    font-weight: 200;
    font-family: 'Montserrat';
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.darkBlue};
    z-index: 100;
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
`;

const Button = styled.button`
  margin: auto;
  width: 200px;
  background-color: transparent;
  border: 1px solid ${(props) => props.isWhite ?
    ({theme}) => theme.colors.white :
    ({theme}) => theme.colors.darkBlue};
  padding: 1rem 2rem;
  font-family: 'Montserrat';
  cursor: pointer;
  margin-top: 2rem;
  font-weight: 100;
  font-size: 1rem;
  position: relative;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  color: ${(props) => props.isWhite ?
    ({theme}) => theme.colors.white :
    ({theme}) => theme.colors.darkBlue};
  z-index: 100;
  
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0%;
    background-color: ${(props) => props.isWhite ?
      ({theme}) => theme.colors.white :
      ({theme}) => theme.colors.darkBlue};
    bottom: 0;
    left: 0;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: -1;
  }

  :hover {
    color: ${(props) => props.isWhite ?
      ({theme}) => theme.colors.darkBlue :
      ({theme}) => theme.colors.white};
    ::before {  
      height: 100%;
    } 
  }
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
            padding: 125px 10px 50px;
            box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
            @media (min-width: 414px) {
              padding: 200px 20px 50px;
            }
            @media (min-width: 768px) {
              height: 600px;
            }
            @media (min-width: 1440px) {
              height: 700px;
              padding: 250px 20px 50px;
            }
          `}
        >
          <Cover></Cover>
          <H1 isWhite isHero css={css`
            max-width: 650px;
            margin: auto;
          `} dangerouslySetInnerHTML={{__html: pageData.tytul_glowny}}/>
          <Text isWhite dangerouslySetInnerHTML={{__html: pageData.tekst_pod_tytulem}}/>
          <Button isWhite onClick={() => scrollTo('contact-form')}>Kontakt</Button>
        </BackgroundImage>
      )
    }}
  />
)

export default connect(
  state => ({ scrollState: state.app.scrollState }),
  dispatch => ({ scrollTo: section => dispatch(scrollToAction(section)) }),
)(StyledHero);
