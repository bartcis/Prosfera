import PlayFair from '../assets/playFair';
import styled from 'styled-components';

const H2 = styled(PlayFair)`
    font-size: ${(props) => props.isSmall ? '1.25rem' : '1.75rem'};
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.darkBlue};
    font-weight: 400;
    padding: 0 1rem;
    width: 100%;
    @media (min-width: 600px) {
        padding: 0;
    }
    @media (min-width: 1440px) {
        font-size: ${(props) => props.isSmall ? '1.5rem' : '2rem'};
    }
`;

export default H2;