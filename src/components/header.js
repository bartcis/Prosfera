import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components';

import logo from '../images/prosfera_logo_white.svg';
import email from '../images/prosfera_head_email.svg';
import phone from '../images/prosfera_head_phone.svg';

const blue = '#2880be';

const StyledWrapper = styled.header`
  background-color: transparent;
  height: auto;
  padding: 0 1rem;
  font-family: 'Montserrat';
  position: fixed;
  width: 100vw;
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
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
  color: #fff;
`;

const Method = styled.div`
  font-weight: 100;
  font-size: .8rem;
  padding: 0 .5rem;

  ::before {
    content: '';
    background-image: url(${phone});
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    padding: 0 .9rem;
  }

  &.isMail {
    ::before {
      background-image: url(${email});
    }
    ::after {
    content: '|';
    padding: 0 0 0 1rem;
    }
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Logo = styled.div`
  width: 300px;
  height: 80px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
`;

const Menu = styled.div`
  font-weight: 100;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  padding: 1rem 0rem;

  span {
    padding: 1rem 1rem;
    cursor: pointer;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    color: #fff;
    position: relative;

    ::before {
      content: '';
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: ${blue};
      bottom: -1px;
      right: 0%;
      transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    :hover {
      color: ${blue};
      ::before {
        width: 100%;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 1rem 1rem;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: ${blue};
    bottom: -1px;
    right: 0%;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    color: ${blue};
    ::before {
      width: 100%;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledWrapper>
    <Content>
      <Contact>
        <Method className="isMail">kamil.kudyba@pro-sfera.pl</Method>
        <Method>+48 792 187 247</Method>
      </Contact>
      <Navigation>
        <Link to='/'>
          <Logo></Logo>
        </Link>
        <Menu>
          <span>Usługi</span>
          <StyledLink to='/realizacje/'>Realizacje</StyledLink>
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
