import styled from 'styled-components';

const Text = styled.p`
    max-width: 500px;
    margin: ${(props) => props.isWhite ? '2rem auto' : ''};
    font-size: 1.25rem;
    font-weight: 100;
    font-family: 'Montserrat';
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.darkBlue};
`;

export default Text;