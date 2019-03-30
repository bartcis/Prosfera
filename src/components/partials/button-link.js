import styled from 'styled-components';
import { Link } from 'gatsby';

const ButtonLink = styled(Link)`
  margin: auto;
  width: 200px;
  text-align: center;
  border: 1px solid ${(props) => props.isWhite ?
    ({theme}) => theme.colors.white :
    ({theme}) => theme.colors.darkBlue};
  padding: 1rem 2rem;
  font-family: 'Montserrat';
  text-decoration: none;
  cursor: pointer;
  margin-top: 2rem;
  font-weight: 100;
  position: relative;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  color: ${(props) => props.isWhite ?
    ({theme}) => theme.colors.white :
    ({theme}) => theme.colors.darkBlue};
  z-index: 100;
  
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

export default ButtonLink;