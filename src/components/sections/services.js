import React from 'react';
import styled from 'styled-components';

import Wrapper from '../partials/Wrapper';
import H1 from '../partials/H1';
import H3 from '../partials/H3';
import Text from '../partials/Text';
import ServicesImage from '../assets/services';

const Column = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: left;
    @media (min-width: 600px) {
        width: 50%;
    }
`;

const WideColumn = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

const Services = () => (
    <Wrapper>
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
    </Wrapper>
)

export default Services
