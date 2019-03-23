import React, {Component} from 'react';
import styled from 'styled-components';

import Wrapper from '../partials/Wrapper';
import H1 from '../partials/H1';
import H3 from '../partials/H3';
import ContactForm from '../partials/ContactForm';

const WideColumn = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

class Contact extends Component {

    render() {
        return (
            <Wrapper>
                <WideColumn>
                    <H3>Pytania? Potrzebujesz wyceny?</H3>
                    <H1>Skontaktuj się z nami</H1> 
                    <ContactForm></ContactForm>
                </WideColumn>
            </Wrapper>
        )
    }
}

export default Contact
