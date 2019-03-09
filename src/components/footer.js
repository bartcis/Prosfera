import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from '../images/prosfera_logo_white.svg';
import Wrapper from '../components/partials/Wrapper';
import H4 from '../components/partials/H4';
import Text from '../components/partials/Text';

const Logo = styled.div`
    width: 150px;
    height: 40px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    @media (min-width: 600px) {
        width: 300px;
        height: 80px;
    }
`;

const Container = styled.div`
    background-color: ${({theme}) => theme.colors.darkBlue};
    color: ${({theme}) => theme.colors.white};
    box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
    font-family: 'Montserrat';
    padding: 1rem;
    @media (min-width: 600px) {
        padding: 1rem 0;
    }
`;

const WideColumn = styled.div`
    width: 100%;
    margin-bottom: 2rem;
    text-align: left;
    @media (min-width: 600px) {
        width: 40%;
    }
`;

const NarrowColumn = styled.div`
    width: 100%;
    text-align: left;
    margin-bottom: 2rem;
    @media (min-width: 600px) {
        width: 20%;
    }
`;

const FullColumn = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 3rem 0 0;
    text-align: left;
    @media (min-width: 600px) {
        flex-wrap: nowrap;
        width: 20%;
    }
`;

const FooterText = styled(Text)`
    margin: .1rem 0;
    font-size: .9rem;
    width: 100%;
`;

const FooterLink = styled(Link)`
    color: ${({theme}) => theme.colors.white};
`;

const About = () => (
    <Container>
        <Wrapper>
            <WideColumn>
                <Logo></Logo>
                <FooterText isWhite>Prosfera to firma budowlana specjalizująca się w 
                wentylacjach i zabezpieczeniach p. pozarowych budynków mieszkalnych i 
                komercyjnych
                </FooterText>
            </WideColumn>
            <NarrowColumn>
                <H4 isWhite>REALIZACJE</H4>
                <FooterText isWhite>Promenady</FooterText>
                <FooterText isWhite>ZITA</FooterText>
                <FooterText isWhite>Galeria Oława</FooterText>
            </NarrowColumn>
            <NarrowColumn>
                <H4 isWhite>DANE FIRMY</H4>
                <FooterText isWhite>Prosfera</FooterText>
                <FooterText isWhite>Kamil Kudyba</FooterText>
                <FooterText isWhite>ul. Komedy 1/36</FooterText>
                <FooterText isWhite>52-234 Wrocław</FooterText>
                <FooterText isWhite>NIP: 921 187 37 64</FooterText>
            </NarrowColumn>
            <NarrowColumn>
                <H4 isWhite>SZYBKI KONTAKT</H4>
                <FooterText isWhite>Właścicel:</FooterText>
                <FooterText isWhite>Kamil Kudyba</FooterText>
                <FooterText isWhite>+48 792 187 247</FooterText>
                <FooterText isWhite>kamil.kudyba@pro-sfera.pl</FooterText><br></br>
                <FooterText isWhite>Kierownik Robót:</FooterText>
                <FooterText isWhite>Łukasz Kudyba</FooterText>
                <FooterText isWhite>+48 791 791 765</FooterText>
                <FooterText isWhite>lukasz.kudyba@pro-sfera.pl</FooterText>
            </NarrowColumn>
            <FullColumn>
                <FooterText isWhite>Copyright</FooterText>
                <FooterText isWhite>
                    <FooterLink to="/polityka-prywatnosci">Polityka Prywatności</FooterLink>
                </FooterText>
            </FullColumn>
        </Wrapper>
    </Container> 
)

export default About
