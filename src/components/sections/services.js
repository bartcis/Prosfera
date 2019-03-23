import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Wrapper from '../partials/Wrapper';
import H1 from '../partials/H1';
import H3 from '../partials/H3';
import Text from '../partials/Text';
import ServicesImage from '../assets/services';

const Column = styled.div`
    width: 100%;
  padding: 1rem;
  text-align: left;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const WideColumn = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;
    
const Services = () => (
  <StaticQuery
    query = {graphql`
      query {
        allWordpressPage {
          edges {
            node {
              title
              acf{
                usluga_1
                usluga_2
                usluga_3
                usluga_4
                usluga_5
                usluga_6
              }
            }
          }
        }
      }
    `}
  
    render = { data => (
        <Wrapper>
          <WideColumn>
            <H3>Dowiedz się czym się zajmujemy</H3>
            <H1>Oferowane usługi</H1> 
          </WideColumn>
          <Column>       
            <Text>{data.allWordpressPage.edges[2].node.acf.usluga_1}</Text>
            <Text>{data.allWordpressPage.edges[2].node.acf.usluga_2}</Text>
            <Text>{data.allWordpressPage.edges[2].node.acf.usluga_3}</Text>
            <Text>{data.allWordpressPage.edges[2].node.acf.usluga_4}</Text>
            <Text>{data.allWordpressPage.edges[2].node.acf.usluga_5}</Text>
            <Text>{data.allWordpressPage.edges[2].node.acf.usluga_6}</Text>
          </Column>
          <Column>
            <ServicesImage></ServicesImage>
          </Column>
        </Wrapper>
      )
    }
  />
)

export default Services
