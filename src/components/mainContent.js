import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Services from './sections/services';
import Portfolio from './sections/portfolio';
import About from './sections/about';
import Sky from './sections/sky';
import Contact from './sections/contact';

const mapStateToProps = (state) => ({ 
    scrollState: state.app.scrollState,
 });

const Scroller = styled.div`
    display: block;
    margin: 4rem 0;
    @media (min-width: 600px) {
        margin: 8rem 0;

    }
`;

class MainContent extends Component {

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
                <Scroller id="contact">
                    <Contact/>
                </Scroller>
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
        }
    }
}

export default connect(mapStateToProps)(MainContent);
