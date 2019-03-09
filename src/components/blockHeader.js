import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { scrollTo as scrollToAction } from '../state/app';

import logo from '../images/prosfera_logo_white.svg';
import email from '../images/prosfera_head_email.svg';
import phone from '../images/prosfera_head_phone.svg';

const StyledWrapper = styled.header`
  background-color: ${({theme}) => theme.colors.darkBlue};
  height: auto;
  padding: 0 1rem;
  font-family: 'Montserrat';
  position: fixed;
  top: 0;
  width: 100vw;
  box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
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
  padding: 1rem 0 0;
  color: ${({theme}) => theme.colors.white};
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
  a {
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      color: ${({theme}) => theme.colors.blue};
    }
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 1rem;
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
`;

const MenuLink = styled(Link)`
  padding: 1rem 1rem;
  cursor: pointer;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  color: ${({theme}) => theme.colors.white};
  position: relative;
  text-decoration: none;
  ::before {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: ${({theme}) => theme.colors.blue};
    bottom: -1px;
    right: 0%;
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    color: ${({theme}) => theme.colors.blue};
    ::before {
      width: 100%;
    }
  }
`
const BlockHeader = ({scrollTo}) => {
  return(
    <StyledWrapper>
      <Content>
        <Contact>
          <Method className="isMail">
            <a href="mailto:kamil.kudyba@pro-sfera.pl">kamil.kudyba@pro-sfera.pl</a>
          </Method>
          <Method>
            <a href="tel:+48-792-187-247">+48 792 187 247</a>
          </Method>
        </Contact>
        <Navigation>
          <Link to='/'>
            <Logo></Logo>
          </Link>
          <Menu>
            <MenuLink to="/#services">Usługi</MenuLink>
            <MenuLink to="/#services">Realizacje</MenuLink>
            <MenuLink to="/#about">O Firmie</MenuLink>
            <MenuLink to="/#contact">Kontakt</MenuLink>
          </Menu>
        </Navigation>
      </Content>
    </StyledWrapper>
  )
}

BlockHeader.propTypes = {
  siteTitle: PropTypes.string,
}

BlockHeader.defaultProps = {
  siteTitle: ``,
}

export default connect(
  state => ({ scrollState: state.app.scrollState }),
  dispatch => ({ scrollTo: section => dispatch(scrollToAction(section)) }),
)(BlockHeader);
