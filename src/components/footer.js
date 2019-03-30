import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import { css } from '@emotion/core';

import logo from '../images/prosfera_logo_white.svg';
import Wrapper from './partials/wrapper';
import H4 from './partials/h4';
import Text from './partials/text';

const Logo = styled.div`
  width: 150px;
  height: 40px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 768px) {
    width: 300px;
    height: 80px;
  }
`;

const Container = styled.div`
  background-color: ${({theme}) => theme.colors.darkBlue};
  color: ${({theme}) => theme.colors.white};
  box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
  font-family: 'Montserrat';
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 1rem 0;
  }
`;

const WideColumn = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  text-align: left;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
`;

const NarrowColumn = styled.div`
  width: 100%;
  text-align: left;
  margin: 0 0 2rem;
  @media (min-width: 768px) {
    width: 50%;
    margin: 1.5rem 0;
  }
  @media (min-width: 1024px) {
    width: 20%;
  }
`;

const FullColumn = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 3rem 0 0;
  text-align: left;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const FooterText = styled(Text)`
  margin: .1rem 0;
  font-size: .9rem;
  width: 100%;
  @media (min-width: 768px) {
    width: auto;
  }
  @media (min-width: 1024px) {
    font-size: .9rem;
  }

  a {
    color: ${({theme}) => theme.colors.white};
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    text-decoration: none;
    &:hover {
      color: ${({theme}) => theme.colors.blue};
    }
  }
`;

const FooterLink = styled(Link)`
  color: ${({theme}) => theme.colors.white};
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  text-decoration: none;
  font-weight: 100;
  &:hover {
    color: ${({theme}) => theme.colors.blue};
  }
`;

const Footer = () => (
  <StaticQuery
    query = {graphql`
      query queryFooter{
        allWordpressPost{
          edges{
            node{
              id
              title
              slug
            }
          }
        }
        allWordpressPage {
          edges {
            node {
              title
              acf{
                tekst_na_samym_dole
              }
            }
          }
        }
      }
    `}
  
  render = { data => (
    <Container>
      <Wrapper>
        <WideColumn>
          <Logo></Logo>
          <FooterText isWhite>{data.allWordpressPage.edges[2].node.acf.tekst_na_samym_dole}
          </FooterText>
        </WideColumn>
        <NarrowColumn>
          <H4 isWhite>REALIZACJE</H4>
          {data.allWordpressPost.edges.map(({node}) => (
            <div css={`
                padding-left: 1rem;
                @media (min-width: 768px) {
                  padding-left: 0;
                }
              `}>
              <FooterLink to={`/realizacje/${node.slug}`}>
                {node.title}
              </FooterLink>
            </div>
          ))}
        </NarrowColumn>
        <NarrowColumn>
          <H4 isWhite>DANE FIRMY</H4>
          <FooterText isWhite>Prosfera</FooterText>
          <FooterText isWhite>Kamil Kudyba</FooterText>
          <FooterText isWhite>ul. Komedy 1/36</FooterText>
          <FooterText isWhite>52-234 Wrocław</FooterText>
          <FooterText isWhite>NIP: 921 187 37 64</FooterText>
        </NarrowColumn>
        <NarrowColumn>
          <H4 isWhite>SZYBKI KONTAKT</H4>
          <FooterText isWhite>Właścicel:</FooterText>
          <FooterText isWhite>Kamil Kudyba</FooterText>
          <FooterText isWhite>+48 792 187 247</FooterText>
          <FooterText isWhite>kamil.kudyba@pro-sfera.pl</FooterText><br></br>
          <FooterText isWhite>Kierownik Robót:</FooterText>
          <FooterText isWhite>Łukasz Kudyba</FooterText>
          <FooterText isWhite>+48 791 791 765</FooterText>
          <FooterText isWhite>lukasz.kudyba@pro-sfera.pl</FooterText>
        </NarrowColumn>
        <FullColumn>
          <FooterText isWhite>
            <FooterLink to="/polityka-prywatnosci">Polityka Prywatności</FooterLink>
          </FooterText>
          <FooterText isWhite>ⓒ {(new Date().getFullYear())} Prosfera powered by 
            <a rel="noopener noreferrer" href="https://bedekodzic.pl" target="_blank"> bedekodzic.pl</a>
          </FooterText>
        </FullColumn>
      </Wrapper>
    </Container> 
    )
  }
  />
);

export default Footer;