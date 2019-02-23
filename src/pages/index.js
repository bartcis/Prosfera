import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Hero from '../components/hero'

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const IndexPage = () => (
  <>
    <SEO title='Home' keywords={[`prosfera`, `wentylacje`, `zabezpieczenia p poz`]} />
    <GlobalStyle/>
    <Header siteTitle={'ABC'}/>
    <Hero/>

    <Layout>
      {/* <h1>Hi people 2</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to='/page-2/'>Go to page 2</Link> */}
    </Layout>
  </> 
)

export default IndexPage


// import React, {Component} from "react"

// const darkBlue = 'rgba(	9, 29, 43, .8)';
// const white = '#fff';


// const StyledWrapper = styled.div`
//   font-family: 'Montserrat';
//   display: flex;
//   width: 100vw;
//   height: 90vh;
//   position: relative;
// `;

// class Hero extends Component {
//     componentDidMount() {
//         const playVideo = () => {
//             const video = document.querySelector('video');
//             video.autoplay = true;
//             video.playbackRate = 0.6;
//         };
    
//         playVideo();
//     }

//     render() {
//         return (
//             <StyledWrapper>
//                 <VideoWrapper>
//                     <Video autoplay muted loop playsinline>
//                         <source src={heroVideo} type="video/mp4"/>
//                     </Video>
//                     <Content>
//                         <ContentWrapper>
//                             <H1>Wentylacje i Instalacje p. Pożarowe</H1>
//                             <Text>Ponad 10 lat dbamy o Twoje powietrze. Budujemy instalacje dostosowane do Twoich potrzeb.</Text>
//                             <Contact> </Contact>
//                         </ContentWrapper>
//                     </Content>
//                 </VideoWrapper>
//             </StyledWrapper>
//         ) 
//     }
// }

// export default Hero
