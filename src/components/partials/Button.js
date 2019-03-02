import styled from 'styled-components';

const Button = styled.div`
    margin: auto;
    width: 150px;
    border: 1px solid ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.darkBlue};
    padding: 1rem 1.5rem;
    font-family: 'Montserrat';
    cursor: pointer;
    margin-top: 2rem;
    font-weight: 100;
    position: relative;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    color: ${(props) => props.isWhite ?
        ({theme}) => theme.colors.white :
        ({theme}) => theme.colors.darkBlue};

    ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 0%;
        background-color: ${(props) => props.isWhite ?
            ({theme}) => theme.colors.white :
            ({theme}) => theme.colors.darkBlue};
        bottom: 0;
        left: 0;
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
        z-index: -1;
    }

    :hover {
        color: ${(props) => props.isWhite ?
            ({theme}) => theme.colors.darkBlue :
            ({theme}) => theme.colors.white};
        ::before {  
            height: 100%;
        } 
    }
`;

export default Button;