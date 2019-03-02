import styled from 'styled-components';

const H3 = styled.h3`
    font-family: 'Montserrat';
    font-size: 1rem;
    text-transform: uppercase;
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.blue};
    font-weight: 100;
    margin: 0;
`;

export default H3;