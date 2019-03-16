import PlayFair from '../assets/playFair';
import styled from 'styled-components';

const H1 = styled(PlayFair)`
    font-size: 2rem;
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.darkBlue};
    font-weight: 400;
    font-family: ${(props) => props.isHero ? 'Montserrat' : 'playfair_displaybold'};
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