import styled from 'styled-components';

const H3 = styled.h3`
    font-family: 'Montserrat';
    font-size: .8rem;
    text-transform: uppercase;
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.blue};
    font-weight: 100;
    margin: 0;
    padding: 0 1rem;
    width: 100%;
    @media (min-width: 600px) {
        padding: 0;
        font-size: 1rem;
    }
`;

export default H3;