import montserrat2 from '../../fonts/montserrat-light-webfont.woff2';
import montserrat from '../../fonts/montserrat-light-webfont.woff';

import styled from 'styled-components';

const Montserrat = styled.p`
  @font-face {
    font-family: 'montserratlight';
    src: url(${montserrat2}) format('woff2'),
      url(${montserrat}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  font-family: 'montserratlight';
  -webkit-font-smooth: antialiased;
  -moz-font-smooth: antialiased;
`;

export default Montserrat
