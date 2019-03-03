import React from 'react';
import styled from 'styled-components';

import Wrapper from './partials/Wrapper';
import H1 from './partials/H1';
import H2 from './partials/H2';
import H3 from './partials/H3';
import Text from './partials/Text';
import AboutImage from './assets/aboutImage';
import TestimonialsImage from './assets/testimonialsImage';

const Column = styled.div`
  width: 50%;
  padding: 1rem;
  text-align: left;
`;

const WideColumn = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

const NarrowColumn = styled.div`
    width: 40%;
    height: 200px;
    box-shadow: 0px 10px 30px 0px ${({theme}) => theme.colors.shadow};
    margin: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.white};
`;

const Container = styled.div`
    position: relative;
`;

const About = () => (
    <Container>
        <TestimonialsImage></TestimonialsImage>
        <Wrapper>
            <WideColumn>
                <H3>Nieco więcej o firmie</H3>
                <H1>O nas</H1> 
            </WideColumn>
            <Column>
            <Text>Prosfera jest rodzinną firmą. Pracujemy z instalacjami sanitarnymi juz od 10 lat.</Text>
            <Text>Pierwsze doświadczenia zdobywaliśmy przy budowie SkyTower we Wrocławiu. 
                Ta wielka inwestycja pozowiła nam od samego początku zbudowac profesjonalne podejście 
                do realizacji projektów.</Text>
            <Text>Od tamtego czasu ciągle doskonalimy swoje usługi i naszym priorytetem jest
                satysfakcja naszych klientów.
            </Text>
            <Text>Budowa długofalowych relacji jest dla Nas priorytetem.</Text>
            </Column>
            <Column>
                <AboutImage></AboutImage>
                <Text isSmall>Kamil Kudyba. Właściciel Prosfery.</Text>
            </Column>
        </Wrapper>
        <Wrapper>
            <WideColumn>
                <H3>Co mówią o nas</H3>
                <H1>Referencje</H1> 
            </WideColumn>
            <NarrowColumn>
                <Text isSmall>Pracowałem z Kamilem juz wielokorotnie. 
                    Zawsze terminowy i mogłem na niego liczyc.</Text>
                <H2 isSmall>Jan Nowak, Probud</H2>
            </NarrowColumn>
            <NarrowColumn>
                <Text isSmall>Gdyby nie Prosfera moja inwestycja nie 
                    byłaby oddana w terminie. Uratowali mi wentylację</Text>
                <H2 isSmall>Michał Wiśniewski, Warbud</H2>
            </NarrowColumn>
            <NarrowColumn>
                <Text isSmall>Super chłopaki. Polecam kazdemu.</Text>
                <H2 isSmall>Mateusz Kowal, Niebud</H2>
            </NarrowColumn>
            <NarrowColumn>
                <Text isSmall>Szybko. Profesjonalnie. Na czas i w budzecie.
                Czy mozna wymagac czegoś więcej?</Text>
                <H2 isSmall>Grzegorz Jasny, WyBud</H2>
            </NarrowColumn>
        </Wrapper>
    </Container>
)

export default About
