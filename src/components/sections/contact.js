import React, {Component} from 'react';
import styled from 'styled-components';

import H1 from '../partials/h-one';
import H3 from '../partials/h-three';
import ContactForm from '../partials/contact-form';

const WideColumn = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

const Wrapper = styled.p`
  max-width: ${(props) => props.isWide ? '1200px' : '950px'};
  margin: auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem auto;
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  @media (min-width: 1024px) {
    margin: 4rem auto;
    padding: 0;
  }
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
