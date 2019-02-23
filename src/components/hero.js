import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components';

import heroVideo from '../images/prosfera-hero.mp4';

const StyledWrapper = styled.div`
  font-family: 'Montserrat';
  display: flex;
  width: 100vw;
  height: 90vh;
  position: relative;
`;

const VideoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
`;

const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

const Content = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, .6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

function Hero() {

    // const video = document.querySelector('video');
    // video.autoplay = true;
    // video.playbackRate = 0.6;

    return (
        <StyledWrapper>
            <VideoWrapper>
                <Video autoplay muted loop playsinline>
                    <source src={heroVideo} type="video/mp4"/>
                </Video>
                <Content>ABC</Content>
            </VideoWrapper>
        </StyledWrapper>
    ) 
}

export default Hero
