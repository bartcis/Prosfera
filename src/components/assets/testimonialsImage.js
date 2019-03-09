import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import Img from 'gatsby-image';

const TestimonialsImage = () => (
  <StaticQuery
    query = {graphql`
      query {
        placeholderImage: file(relativePath: { eq: "prosfera_testimonials.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render = {data => 
    
    <Img css={css`
        width: 100%;
        max-width: 400px;
        height: 500px;
        bottom: -50px;
        left: 0px;
        position: absolute !important;
        z-index: -1;
        opacity: .4;
    `}
    fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
)
export default TestimonialsImage
