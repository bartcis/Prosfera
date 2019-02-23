import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HeroImage = () => (
  <StaticQuery
    query = {graphql`
      query {
        placeholderImage: file(relativePath: { eq: "prosfera-hero-min.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render = {data => 
    
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
)
export default HeroImage
