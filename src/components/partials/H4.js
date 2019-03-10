import styled from 'styled-components';

const H4 = styled.h4`
    font-family: 'Montserrat';
    font-size: 1rem;
    text-transform: uppercase;
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.blue};
    font-weight: 400;
    margin: 0 0 1rem;
    padding: 0 1rem;
    width: 100%;
    @media (min-width: 600px) {
        font-size: .8rem;
        padding: 0;
    }
`;

export default H4;