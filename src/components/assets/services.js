import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const ServicesImage = () => (
  <StaticQuery
    query = {graphql`
      query {
        placeholderImage: file(relativePath: { eq: "prosfera_services.jpg" }) {
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
            box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
        `}
        fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
)
export default ServicesImage
