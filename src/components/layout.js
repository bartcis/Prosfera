/* eslint-disable */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { scrollTo as scrollToAction } from '../state/app';

import Services from './sections/services';
import Portfolio from './sections/portfolio';
import About from './sections/about';
import Sky from './sections/sky';
import Contact from './sections/contact';
import Cookies from './partials/cookies';

const mapStateToProps = (state) => ({ 
  scrollState: state.app.scrollState,
});

const Scroller = styled.div`
  display: block;
  margin: 4rem 0;
  position: relative;
  z-index: 900;
  @media (min-width: 600px) {
    margin: 8rem 0;
  }
`;

class Layout extends Component {

  render() {
    return (
      <>
        <Scroller id="services">
          <Services/>
        </Scroller>
        <Scroller id="portfolio">
          <Portfolio/>
        </Scroller>
        <Scroller id="about">
          <About/>
        </Scroller>
        <Scroller>
          <Sky/>
        </Scroller>
        <Scroller id="contact-form">
          <Contact/>
        </Scroller>
        <Cookies></Cookies>
      </>
    ) 
  }

  componentDidUpdate() {
    if(this.props.scrollState) {
      let section = document.querySelector(`div[id*="${this.props.scrollState}"]`);
      window.scroll(
        {
          top: section.offsetTop -100,
          behavior: 'smooth'
        }
      );
      this.props.scrollTo('');
    }
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({ scrollTo: section => dispatch(scrollToAction(section)) }),
)(Layout);
