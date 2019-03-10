import PlayFair from '../assets/playFair';
import styled from 'styled-components';

const H1 = styled(PlayFair)`
    font-size: 2rem;
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.darkBlue};
    font-weight: 400;
    z-index: 100;
    position: relative;
    padding: 0 1rem;
    width: 100%;
    @media (min-width: 600px) {
        font-size: 3.5rem;
        padding: 0;
    }
`;

export default H1;