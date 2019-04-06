import styled from 'styled-components';
import Montserrat from '../assets/montserrat';

const H3 = styled(Montserrat)`
    font-size: 1rem;
    text-transform: uppercase;
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.blue};
    color: ${(props) => props.isRed ?
    ({theme}) => theme.colors.red :
    ({theme}) => theme.colors.blue};
    margin: 0;
    padding: 0 1rem;
    width: 100%;
    @media (min-width: 600px) {
        padding: 0;
    }
`;

export default H3;