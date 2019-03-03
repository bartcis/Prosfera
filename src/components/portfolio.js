import React from 'react';
import styled from 'styled-components';
import { css } from '@emotion/core';

import Wrapper from './partials/Wrapper';
import H1 from './partials/H1';
import H2 from './partials/H2';
import H3 from './partials/H3';
import Text from './partials/Text';
import Button from './partials/Button';

import sketchIcon from '../images/sketch.svg';
import ServicesImage from '../images/prosfera_services.jpg';

const Description = styled.div`
    height: 400px;
    width: 350px;
    margin: 2rem;
    text-align: center;
`;

const Item = styled(Description)`
    text-align: left;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
    cursor: pointer;
    position: relative;
    overflow: hidden;
    .image {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 200px;
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .description {
        height: 200px;
        padding: 2rem;
    }
    .extra {
        width: 100%;
        height: 20px;
        background-color: ${({theme}) => theme.colors.blue};
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        color: ${({theme}) => theme.colors.white};
        font-family: 'Montserrat';
        font-weight: 100;
        ::after {
            content: 'Szczegóły inwestycji';
            opacity: 0;
            transition: all .25s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
    }
    :hover {
        .image {
            transform: scale(1.05);
        }
        .description {
        }
        .extra {
        height: 60px;
        ::after {
            opacity: 1;
        }
    }
    }
`;

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

const Icon = styled.div`
    background-image: url(${sketchIcon});
    background-repeat: no-repeat;
    width: 60px;
    height: 60px;
    margin: 6rem auto 0;
`;

const WideColumn = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

const Portfolio = () => (
    <>
        <Wrapper>
            <WideColumn>
                <H3>Sprawdź</H3>
                <H1>Wybrane Realizacje</H1> 
            </WideColumn>
        </Wrapper>
        <Container>
            <Description>
                <Icon></Icon>
                <Text isWhite>Sprawdź więcej</Text>
                <Button isWhite>Projektów</Button>
            </Description>
            <Item>
                <div className="image" 
                    css={css`
                        background-image: url(${ServicesImage});
                `}></div>
                <div className="description">
                    <H2>Galeria Oława</H2>
                    <Text isSmall>Nowe miejsce na mapie miasta</Text>   
                </div>
                <div className="extra"></div>
            </Item>
            <Item>
                <div className="image" 
                    css={css`
                    background-image: url(${ServicesImage});
                    `}></div>
                <div className="description">
                    <H2>Promenady</H2>
                    <Text isSmall>Osiedle tętniące zyciem</Text>   
                </div>
                <div className="extra"></div>
            </Item>
            <Item>
                <div className="image" 
                    css={css`
                    background-image: url(${ServicesImage});
                    `}></div>
                <div className="description">
                    <H2>Zaklęte Rewiry</H2>
                    <Text isSmall>Miejsce dla nocnych Marków</Text>   
                </div>
                <div className="extra"></div>
            </Item>
        </Container>
    </>
)

export default Portfolio
