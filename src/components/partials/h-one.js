import PlayFair from '../assets/playFair';
import styled from 'styled-components';
import montserratBold2 from '../../fonts/montserrat-bold-webfont.woff2';
import montserratBold from '../../fonts/montserrat-bold-webfont.woff';

const H1 = styled(PlayFair)`
    @font-face {
        font-family: 'montserratbold';
        src: url(${montserratBold2}) format('woff2'),
            url(${montserratBold}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-size: 2rem;
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.darkBlue};
    font-weight: 400;
    font-family: ${(props) => props.isHero ? 'montserratbold' : 'playfair_displaybold'};
    font-weight: ${(props) => props.isHero ? '600' : '400'};
    z-index: 100;
    position: relative;
    padding: 0 1rem;
    width: 100%;
    @media (min-width: 600px) {
        font-size: ${(props) => props.isSmall ? '2rem' : '2.5rem'};
        padding: 0;
    }
    @media (min-width: 1024px) {
        font-size: ${(props) => props.isSmall ? '2.25rem' : '3.5rem'};
    }
`;

export default H1;