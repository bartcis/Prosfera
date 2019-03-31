import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { scrollTo as scrollToAction } from '../state/app';

import logo from '../images/prosfera_logo_white.svg';
import email from '../images/prosfera_head_email.svg';
import phone from '../images/prosfera_head_phone.svg';
import MobileMenu from './partials/mobile-menu';

const StyledWrapper = styled.header`
  background: transparent;
  height: auto;
  padding: 0 1rem;
  font-family: 'Montserrat';
  position: fixed;
  width: 100vw;
  z-index: 999;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  &.block {
    background: rgba(7, 57, 85, .7);
  }
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
  color: ${({theme}) => theme.colors.white};
  padding: 1rem 0;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  &.block {
    padding: 1rem 0 0;
  }
`;

const Method = styled.div`
  font-weight: 100;
  font-size: .8rem;
  padding: 0 .4rem;
  @media (min-width: 768px) {
    padding: 0 .5rem;
    display: flex;
    align-items: center;
  }
  :before {
    content: '';
    background-image: url(${phone});
    background-repeat: no-repeat;
    
    padding: 0 .9rem;
    display: none;
    @media (min-width: 768px) {
      display: block;
      width: 20px;
      height: 20px;
    }
  }

  &.isMail {
    ::before {
      background-image: url(${email});
    }
    ::after {
    content: '|';
    padding: 0 0 0 1rem;
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
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
  padding: 1rem 0;
  @media (min-width: 768px) {
    padding: 0 0 1rem;
  }
`;

const Logo = styled.div`
  width: 150px;
  height: 40px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 768px) {
    width: 200px;
    height: 60px;
  }
  @media (min-width: 1280px) {
    width: 300px;
    height: 80px;
  }
`;

const Menu = styled.div`
  font-weight: 100;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  padding: 1rem 0rem;
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
  span {
    padding: 1rem 1rem;
    cursor: pointer;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    color: ${({theme}) => theme.colors.white};
    position: relative;

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
  }
`;

    display: none;
  }
`;

class Header extends Component {
  constructor(props){
    super(props);
    this.modifyHeader = this.modifyHeader.bind(this);
    this.animateHeader = this.animateHeader.bind(this);
    this.state = {
      transparentMenu: false
    };

  }

  componentDidMount() {
    window.addEventListener('scroll', this.modifyHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.modifyHeader);
  }

  modifyHeader() {
    if (document.body.clientWidth < 768) {
      this.animateHeader(500);
    } else if (document.body.clientWidth < 1440 && document.body.clientWidth >= 768) {
      this.animateHeader(600);
    } else {
      this.animateHeader(700);
    }
  }

  animateHeader(treshold) {
    if (window.pageYOffset > treshold) {
      document.querySelector('#menu').classList.add('block');
      document.querySelector('#contact-menu').classList.add('block');      
    } else {
      document.querySelector('#menu').classList.remove('block');
      document.querySelector('#contact-menu').classList.remove('block');
    }
  }

  render() {
    return (
      <StyledWrapper id="menu">
        <Content>
          <Contact id="contact-menu">
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
              <span onClick={() => this.props.scrollTo('services')}>Usługi</span>
              <span onClick={() => this.props.scrollTo('portfolio')}>Realizacje</span>
              <span onClick={() => this.props.scrollTo('about')}>O Firmie</span>
              <span onClick={() => this.props.scrollTo('contact-form')}>Kontakt</span>
            </Menu>
            <Hamburger></Hamburger>
          </Navigation>
        </Content>
      </StyledWrapper>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default connect(
  state => ({ scrollState: state.app.scrollState }),
  dispatch => ({ scrollTo: section => dispatch(scrollToAction(section)) }),
)(Header);
