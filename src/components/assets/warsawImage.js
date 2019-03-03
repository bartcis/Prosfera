import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const WarsawImage = () => (
  <StaticQuery
    query = {graphql`
      query {
        placeholderImage: file(relativePath: { eq: "prosfera-warsaw.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render = {data => 
    
    <Img css={css`
        opacity: .5;
    `}
    fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
)
export default WarsawImage
