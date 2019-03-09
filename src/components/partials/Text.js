import styled from 'styled-components';

const Text = styled.p`
    max-width: 500px;
    margin: ${(props) => props.isWhite ? '2rem auto' : ''};
    font-size: ${(props) => props.isSmall ? '.7rem' : '.9rem'};
    font-weight: 100;
    font-family: 'Montserrat';
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.darkBlue};
    z-index: 100;
    position: relative;
    padding: 0 1rem;
    @media (min-width: 600px) {
        font-size: ${(props) => props.isSmall ? '1rem' : '1.25rem'};
        padding: 0;
    }
`;

export default Text;