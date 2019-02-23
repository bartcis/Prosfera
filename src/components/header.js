import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components';

import logo from '../images/prosfera_logo_white.svg';


const StyledWrapper = styled.header`
  background-color: transparent;
  height: auto;
  padding: 0 1rem;
  font-family: 'Montserrat';
  position: fixed;
  width: 100vw;
  color: #fff;
  z-index: 100;
`;

const Content = styled.div`
  max-width: 100%;
  margin: auto;
  @media (min-width: 1024px) {
    max-width: 950px;
  }
`;

const Contact = styled.div`

`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;


const Logo = styled.div`
  width: 300px;
  height: 100px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
`;

const Menu = styled.div`
  width: calc(100% - 300px);
`;

const Header = ({ siteTitle }) => (
  <StyledWrapper>
    <Content>
      <Contact>
        ABC
      </Contact>
      <Navigation>
        <Link to='/'>
          <Logo></Logo>
        </Link>
        <Menu>
          <span>Usługi</span>
          <Link to='/realizcaje/'>Realizacje</Link>
          <span>O Firmie</span>
          <span>Kontakt</span>
        </Menu>
      </Navigation>
    </Content>
  </StyledWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
