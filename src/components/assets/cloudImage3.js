import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const CloudImage3 = () => (
  <StaticQuery
    query = {graphql`
      query {
        placeholderImage: file(relativePath: { eq: "prosfera_cloud_3.png" }) {
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
    `}
    fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
)
export default CloudImage3
