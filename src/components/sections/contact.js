import React, {Component} from 'react';
import styled from 'styled-components';

import Wrapper from '../partials/Wrapper';
import H1 from '../partials/H1';
import H3 from '../partials/H3';

const WideColumn = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

class Contact extends Component {

    render() {
        return (
            <Wrapper>
                <WideColumn>
                    <H3>Pytanie? Potrzebujesz wyceny?</H3>
                    <H1>Skontakutuj się z nami</H1> 
                    FORMULARZ
                </WideColumn>
            </Wrapper>
        )
    }
}

export default Contact
