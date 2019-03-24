import React, {Component} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { Link } from 'gatsby';

const Container = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 0 1rem;
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
`;

const BarFull = styled.div`
  width: 40px;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: #fff;
  height: 6px;
  width: ${(props) => props.isMiddle ? '37.5px' : '50px'};
  transform: ${(props) => props.isMiddle ? 'translateX(12.5px)' : ''};
`;

const BarEmpty = styled.div`
  width: 40px;
  background-color: transparent;
  height: 10px;
`;

const BarRotated = styled.div`
  position: absolute;
  top: 1rem;
  width: 50px;
  background-color: #fff;
  height: 8px;
  transform: ${(props) => props.isRight ? 'rotate(-45deg)' : 'rotate(45deg)'};
`;

const PosedMenu = posed.div({
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: '100%',
    opacity: 0,
  },
});

const Menu = styled(PosedMenu)`
  height: auto;
  background-color: rgba(255, 255, 255, .9);
  position: absolute;
  top: 100px;
  padding: 2rem;
  width: 100vw;
  left: 0;
  transition: all .25s cubic-bezier(0.47, 0, 0.75, 0.72);
`;

const MobileLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${({theme}) => theme.colors.darkBlue};
  text-align: center;
  text-transform: uppercase;
  padding: .5rem;
  font-size: 1.25rem;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    color: ${({theme}) => theme.colors.blue};
  }
`;

class MobileMenu extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      showHamburger: true,
      showCross: false,
      showMenu: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      showHamburger: !prevState.showHamburger,
      showCross: !prevState.showCross,
      showMenu: !prevState.showMenu,
    }));
  }

  render() {
    const hamburger = (
      <>
        <BarFull></BarFull>
        <BarEmpty></BarEmpty>
        <BarFull isMiddle></BarFull>
        <BarEmpty></BarEmpty>
        <BarFull></BarFull>
      </>
    );

    const cross = (
      <>
        <BarRotated></BarRotated>
        <BarRotated isRight></BarRotated>
      </>
    );

    return (
      <>
        <Container onClick={this.toggle}>
          {this.state.showHamburger ? hamburger : ''}
          {this.state.showCross ? cross : ''} 
        </Container>
        <Menu pose={this.state.showMenu ? 'visible' : 'hidden'} >
          <MobileLink to="/#services" onClick={this.toggle}>Usługi</MobileLink>
          <MobileLink to="/realizacje" onClick={this.toggle}>Realizacje</MobileLink>
          <MobileLink to="/#about" onClick={this.toggle}>O Firmie</MobileLink>
          <MobileLink to="/#contact" onClick={this.toggle}>Kontakt</MobileLink>
        </Menu>
      </>
    )
  }
}

export default MobileMenu;