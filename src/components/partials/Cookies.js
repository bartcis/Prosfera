import { Link } from 'gatsby'
import React, { Component } from 'react'
import styled from 'styled-components';
import posed from 'react-pose';
import Text from './text';
import Button from './button';

const PosedContainer = posed.div({
  visible: {
    bottom: '0px'
  },
  hidden: {
    bottom: '-300px'
  },
});

const Container = styled(PosedContainer)`
  background: ${({theme}) => theme.colors.darkBlueOpacity};
  width: 100vw;
  position: fixed;
  bottom: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  font-family: 'Montserrat';
  flex-wrap: wrap;
`;

const CookieLink = styled(Link)`
  color: ${({theme}) => theme.colors.white};
  margin-left: .5rem;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: ${({theme}) => theme.colors.blue};
  }
`;

const CookieButton = styled(Button)`
  margin: 0;
  @media (min-width: 600px) {
    margin-left: 2rem;
  }
`;

class Cookies extends Component {
  state = {
    showCookies: true
  };

  componentDidMount() {
    const cookies = decodeURIComponent(document.cookie).split(';');
    let policy;

    for(let i = 0; i <cookies.length; i++) {
      var c = cookies[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf('cookies=') === 0) { 
        policy = c.substring(8, c.length);
      }
    }

    if(policy) {
      this.setState(({
        showCookies: false,
      }));
    }
  }

  hideMessage = () => {
    const date = new Date();
    let expires;

    date.setTime(date.getTime() + (30*24*60*60*1000));
    expires = 'expires='+ date.toUTCString();
    document.cookie = 'cookies=accepted' + ";" + expires + ";path=/";

    this.setState({
      showCookies: false
    });
  }

  render() {
    return (
      <Container pose={this.state.showCookies ? 'visible' : 'hidden'} >
        <Text isWhite isWide isSmall>Ta strona korzysta z plików cookies. Używanie serwisu oznacza zgodę na ich użycie. Aby poznać więcej szczegółów sprawdź 
          <CookieLink to="polityka-prywatnosci">Politykę Prywatności</CookieLink>.
        </Text>
        <CookieButton isWhite onClick={this.hideMessage}>Zgadzam się.</CookieButton>
      </Container>
    )
  }
}

export default Cookies
