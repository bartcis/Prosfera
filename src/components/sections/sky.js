import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import WarsawImage from '../assets/warsawImage';
import CloudImage1 from '../assets/cloudImage1';


const Container = styled.div`
    margin-top: 10rem;
    position: relative;
    perspective: 10px;
    height: 25vh;
    overflow-y: auto;
    @media (min-width: 600px) {
        height: 50vh;
    }
`;

class Sky extends Component {

    render() {
        return (
            <Container>
                <WarsawImage></WarsawImage>
                <CloudImage1 id="cloud1"></CloudImage1>
            </Container>
        )
    }
}

export default Sky
