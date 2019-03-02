import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';

import HeroImage from './assets/heroImage';
import H1 from './partials/H1';
import Button from './partials/Button';
import Text from './partials/Text';

const StyledWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
  box-shadow: 0px 10px 60px 0px ${({theme}) => theme.colors.shadow};
`;

const PictureWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
`;

const Picture = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 120%;
    height: 120%;
    transition: all 10s linear;
    &.zoomIn {
        width: 100%;
        height: 100%;
    }
`;

const Content = styled.div`
    position: absolute;
    background-color: rgba(	9, 29, 43, .9);
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    z-index: 10;
    transition: all 10s linear;
    opacity: 1;
    &.addOpacity {
        background-color: rgba(	9, 29, 43, .6);
    }
`;

const ContentWrapper = styled.div`
    max-width: 600px;
    text-align: center;
`;

class Hero extends Component {
    componentDidMount() {
        setTimeout(()=> {
            document.querySelector('#hero-image').classList.add('zoomIn');
            document.querySelector('#content').classList.add('addOpacity');
        }, 100)
    }

    render() {
        return (
            <StyledWrapper>
                <PictureWrapper>
                    <Picture id="hero-image">
                        <HeroImage/>
                    </Picture>
                    <Content id="content">
                        <ContentWrapper>
                            <H1 isWhite>Wentylacje i Instalacje p. Pożarowe</H1>
                            <Text isWhite>Ponad 10 lat dbamy o Twoje powietrze. Budujemy instalacje dostosowane do Twoich potrzeb.</Text>
                            <Button isWhite>Kontakt</Button>
                        </ContentWrapper>
                    </Content>
                </PictureWrapper>
            </StyledWrapper>
        ) 
    }
}

export default Hero
