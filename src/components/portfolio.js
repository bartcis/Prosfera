import React from 'react';
import styled from 'styled-components';

import Wrapper from './partials/Wrapper';
import H1 from './partials/H1';
import H3 from './partials/H3';
import Text from './partials/Text';
import Button from './partials/Button';

import sketchIcon from '../images/sketch.svg';

const Container = styled.div`
    position: relative;
    height: 550px;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin: 2rem 0;

    :before {
        content: '';
        position: absolute;
        background-color: ${({theme}) => theme.colors.darkBlue};
        width: 600px;
        height: 100%;
        left: 0;
        z-index: -1;
    }
`;

const Description = styled.div`
    height: 400px;
    width: 350px;
    margin: 2rem;
    text-align: center;
`;

const Item = styled(Description)`
    text-align: left;
    background-color: red;
    box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
`;

const Icon = styled.div`
    background-image: url(${sketchIcon});
    background-repeat: no-repeat;
    width: 60px;
    height: 60px;
    margin: 6rem auto 0;
`;



const Portfolio = () => (
    <>
        <Wrapper>
            <H3>Zobacz na własne oczy</H3>
            <H1>Wybrane Realizacje</H1> 
        </Wrapper>
        <Container>
            <Description>
                <Icon></Icon>
                <Text isWhite>Sprawdź więcej</Text>
                <Button isWhite>Projektów</Button>
            </Description>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </Container>
    </>
)

export default Portfolio
