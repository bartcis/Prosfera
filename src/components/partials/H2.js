import PlayFair from '../assets/playFair';
import styled from 'styled-components';

const H2 = styled(PlayFair)`
    font-size: ${(props) => props.isSmall ? '1,5rem' : '2rem'};
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.darkBlue};
    font-weight: 400;
`;

export default H2;