import React from 'react'
import styled from 'styled-components'

import Wrapper from './partials/Wrapper'
import H1 from './partials/H1'
import H3 from './partials/H3'
import Text from './partials/Text'
import ServicesImage from './assets/services'

const FlexWrapper = styled(Wrapper)`
    margin: 6% auto;
    display: flex;
    flex-wrap: wrap;
`;
const Column = styled.div`
  width: 50%;
  padding: 1rem;
  text-align: left;
`;
const WideColumn = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

const Services = () => (
    <FlexWrapper>
        <WideColumn>
            <H3>Dowiedz się czym się zajmujemy</H3>
            <H1>Oferowane usługi</H1> 
        </WideColumn>
        <Column>
           <Text>Projektowanie Sytemów Wentylacji</Text>
           <Text>Budowa Wentylacji wedłóg specyfikacji technicznej</Text>
           <Text>Serwis Systemów Wentylacji</Text>
           <Text>Budowa Instalacji p Pozarowch</Text>
           <Text>Rekuperacja</Text>
        </Column>
        <Column>
            <ServicesImage></ServicesImage>
        </Column>
    </FlexWrapper>
)

export default Services
