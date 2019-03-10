import styled from 'styled-components';

const Text = styled.p`
    max-width: 500px;
    margin: ${(props) => props.isWhite ? '2rem auto' : ''};
    font-size: ${(props) => props.isSmall ? '.75rem' : '.9rem'};
    font-weight: 100;
    font-family: 'Montserrat';
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.darkBlue};
    z-index: 100;
    position: relative;
    padding: 0 1rem;
    @media (min-width: 768px) {
        font-size: ${(props) => props.isSmall ? '.8rem' : '1rem'};
        padding: 0;
    }
    @media (min-width: 1024px) {
        font-size: ${(props) => props.isSmall ? '1rem' : '1.25rem'};
        padding: 0;
    }
`;

export default Text;