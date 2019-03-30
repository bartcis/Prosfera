import React, {Component} from 'react';
import styled from 'styled-components';

import Wrapper from '../partials/wrapper';
import H1 from '../partials/h-one';
import H3 from '../partials/h-three';
import ContactForm from '../partials/contact-form';

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
