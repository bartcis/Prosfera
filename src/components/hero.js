import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"

import styled from 'styled-components';

import HeroImage from './heroImage';

const darkBlue = 'rgba(	9, 29, 43, .9)';
const white = '#fff';

const StyledWrapper = styled.div`
  font-family: 'Montserrat';
  display: flex;
  width: 100vw;
  height: 90vh;
  box-shadow: 0px 10px 60px 0px rgba(122,122,122,1);
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
    color: ${white};
    z-index: 10;
    transition: all 10s linear;
    opacity: 1;
    &.addOpacity {
        background-color: rgba(	9, 29, 43, .6);
    }
`;

const ContentWrapper = styled.div`
    max-width: 800px;
    text-align: center;
`;

const H1 = styled.h1`
    font-size: 3.5rem;
    color: ${white};
    text-transform: uppercase;
    font-weight: 400;
`;

const Text = styled.h3`
    max-width: 500px;
    margin: auto;
    font-size: 1.25rem;
    font-weight: 100;
    color: ${white};
`;

const Contact = styled.div`
    margin: auto;
    width: 150px;
    border: 1px solid ${white};
    padding: 1.5rem;
    cursor: pointer;
    margin-top: 3rem;
    font-weight: 100;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 0%;
        background-color: ${white};
        bottom: 0;
        left: 0;
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
        z-index: 0;
    }

    ::after {
        content: 'Kontakt';
        position: absolute;
        width: 100%;
        height: 0%;
        top: .8rem;
        left: 0;
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
        z-index: 10;
    }

    :hover {
        ::before {  
            height: 100%;
        } 
        ::after {  
            color: ${darkBlue};
        } 
    }
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
                            <H1>Wentylacje i Instalacje p. Pożarowe</H1>
                            <Text>Ponad 10 lat dbamy o Twoje powietrze. Budujemy instalacje dostosowane do Twoich potrzeb.</Text>
                            <Contact> </Contact>
                        </ContentWrapper>
                    </Content>
                </PictureWrapper>
            </StyledWrapper>
        ) 
    }
}

export default Hero
