import playFair2 from '../../fonts/playfairdisplay-bold-webfont.woff2';
import playFair from '../../fonts/playfairdisplay-bold-webfont.woff';

import styled from 'styled-components';

const PlayFair = styled.div`
    @font-face {
        font-family: 'playfair_displaybold';
        src: url(${playFair2}) format('woff2'),
            url(${playFair}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    font-family: 'playfair_displaybold';
    -webkit-font-smooth: antialiased;
    -moz-font-smooth: antialiased;

`;

export default PlayFair
