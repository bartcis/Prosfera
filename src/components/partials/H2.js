import PlayFair from '../assets/playFair';
import styled from 'styled-components';

const H1 = styled(PlayFair)`
    font-size: 2rem;
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.darkBlue};
    font-weight: 400;
`;

export default H1;