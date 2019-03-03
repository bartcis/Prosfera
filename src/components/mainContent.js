import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Services from './services';
import Portfolio from './portfolio';
import About from './about';
import Sky from './sky';

const mapStateToProps = (state) => ({ 
    scrollState: state.app.scrollState,
 });

const Scroller = styled.div`
    display: block;
    margin: 8rem 0;
`;

class MainContent extends Component {

    render() {
        return (
            <>
                <Scroller className="services">
                    <Services/>
                </Scroller>
                <Scroller className="portfolio">
                    <Portfolio/>
                </Scroller>
                <Scroller className="about">
                    <About/>
                </Scroller>
                <Scroller>
                    <Sky/>
                </Scroller>
           </>
        ) 
    }

    componentDidUpdate() {
        console.log(this.props.scrollState);
        if(this.props.scrollState) {
            let section = document.querySelector(`div[class*="${this.props.scrollState}"]`);
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
