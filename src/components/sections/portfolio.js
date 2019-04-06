import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import montserrat2 from '../../fonts/montserrat-light-webfont.woff2';
import montserrat from '../../fonts/montserrat-light-webfont.woff';

import Wrapper from '../partials/wrapper';
import H1 from '../partials/h-one';
import H2 from '../partials/h-two';
import H3 from '../partials/h-three';
import Text from '../partials/text';
import ButtonLink from '../partials/button-link';

import sketchIcon from '../../images/sketch.svg';

const Description = styled.div`
  height: auto;
  max-width: 300px;
  text-align: center;
  @media (min-width: 600px) {
    max-width: 400px;
    margin: 2rem;
  }
  @media (min-width: 768px) {
    width: 300px;
    margin: 2rem;
  }
  @media (min-width: 1024px) {
    width: 200px;
  }
  @media (min-width: 1440px) {
    margin: 2rem 1rem;
  }
  @media (min-width: 1500px) {
    margin: 2rem;
  }
  @media (min-width: 1920px) {
    width: 350px;
  }
`;

const Item = styled(Link)`
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: 1rem;
  width: 260px;
  text-decoration: none;
  @media (min-width: 414px) {
    width: 300px;
  }
  @media (min-width: 1500px) {
    margin: 1rem 2.5rem;
  }
  .image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 260px;
    height: 150px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    @media (min-width: 414px) {
      width: 300px;
    }
    @media (min-width: 768px) {
      height: 200px;
    }
    @media (min-width: 1280px) {
      height: 150px;
    }
  }
  .description {
    height: 150px;
    width: 260px;
    padding: 2rem 0;
    @media (min-width: 414px) {
      width: 300px;
    }
    @media (min-width: 600px) {
      padding: 2rem;
    }
    @media (min-width: 768px) {
      height: 200px;
    }
    @media (min-width: 1280px) {
      padding: 2rem 1rem;
    }
  }
  .extra {
    @font-face {
      font-family: 'montserratlight';
      src: url(${montserrat2}) format('woff2'),
        url(${montserrat}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    font-family: 'montserratlight';
    width: 260px;
    height: 20px;
    background-color: ${({theme}) => theme.colors.blue};
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    color: ${({theme}) => theme.colors.white};
    font-weight: 100;
    @media (min-width: 414px) {
      width: 300px;
    }
    ::after {
      content: 'Szczegóły inwestycji';
      opacity: 0;
      transition: all .25s cubic-bezier(0.075, 0.82, 0.165, 1);
      font-size: .8rem;
      @media (min-width: 600px) {
        font-size: 1rem;
      }
    }
  }
  :hover {
    .image {
      transform: scale(1.05);
    }
    .extra {
    height: 30px;
    @media (min-width: 600px) {
      height: 60px;
    }
    ::after {
      opacity: 1;
    }
    }
  }
`;

const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    padding: 2rem 0;
  }
  :before {
    content: '';
    position: absolute;
    background-color: ${({theme}) => theme.colors.darkBlue};
    width: 100%;
    height: 100%;
    left: 0;
    z-index: -1;
    @media (min-width: 600px) {
      width: 600px;
    }
  }
`;

const Icon = styled.div`
  background-image: url(${sketchIcon});
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  margin: 3rem auto 0;
  @media (min-width: 600px) {
    margin: 6rem auto 0;
  }
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`;

const Portfolio = () => (
  <StaticQuery
    query = {graphql`
      query queryAll{
        allWordpressPost(limit: 3){
          totalCount
          edges{
            node{
              id
              title
              slug
              featured_media{
                localFile{
                  childImageSharp{
                    fluid(maxWidth: 350) {
                      src
                    }
                  }
                }
              }
              acf{
                krotki_opis
              }
            }
          }
        }
      }
    `}
  
  render = { data => (
    <>
      <Wrapper>
        <H3>Sprawdź</H3>
        <H1>Wybrane Realizacje</H1> 
      </Wrapper>
      <Container>
        <Description>
          <Icon></Icon>
          <Text isWhite>Sprawdź więcej</Text>
          <ButtonLink to="/realizacje" isWhite>Projektów</ButtonLink>
        </Description>
        {data.allWordpressPost.edges.map(({node}) => (
          <Item to={`/realizacje/${node.slug}`}>
            <div className="image" style={{ backgroundImage: `url(${node.featured_media.localFile.childImageSharp.fluid.src})` }}></div>
            <div className="description">
              <H2>{node.title}</H2>
              <Text isSmall isLeft>{node.acf.krotki_opis}</Text>   
            </div>
            <div className="extra"></div>
          </Item>
        ))}
      </Container>
    </>
    )
  }
  />
);

export default Portfolio;