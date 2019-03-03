import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const CloudImage1 = () => (
  <StaticQuery
    query = {graphql`
      query {
        placeholderImage: file(relativePath: { eq: "prosfera_cloud_1.png" }) {
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
        opacity: .8;
        position: absolute !important;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    `}
    fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
)
export default CloudImage1
