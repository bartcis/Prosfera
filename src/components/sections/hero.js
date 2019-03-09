import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';

import StyledHero from '../assets/heroImage';
import H1 from '../partials/H1';
import Button from '../partials/Button';
import Text from '../partials/Text';

const StyledWrapper = styled(StyledHero)`
  display: flex;
  width: 100vw;
  height: 450px;
  box-shadow: 0px 10px 60px 0px ${({theme}) => theme.colors.shadow};
`;

const PictureWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 200%;
`;

const Picture = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 100%;
    height: 100vh;
    transition: all 10s linear;
    @media (min-width: 1024px) {
    max-width: 950px;
  }
    &.zoomIn {
        width: 100%;
        height:  90vh;
    }
`;

// const StyledPicutre = 
// const HeroPic = styled.div`
//     background-image: url(${HeroImage});
// `

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
    // componentDidMount() {
    //     setTimeout(()=> {
    //         document.querySelector('#hero-image').classList.add('zoomIn');
    //         document.querySelector('#content').classList.add('addOpacity');
    //     }, 100)
    // }

    render() {
        return (
    
                            <StyledWrapper></StyledWrapper>

        ) 
    }
}

export default Hero

