import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { css } from '@emotion/core';

import { theme } from '../components/utils/theme';

import SEO from '../components/seo';
import BlockHeader from '../components/blockHeader';
import Footer from '../components/footer';
import BlockWrapper from '../components/partials/blockWrapper';
import Wrapper from '../components/partials/wrapper';
import H1 from '../components/partials/H1';
import H3 from '../components/partials/H3';
import Text from '../components/partials/Text';

import ServicesImage from '../images/prosfera_services.jpg';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: ${({theme}) => theme.colors.blue};
  }
`;

const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
  :before {
    content: '';
    width: 500px;
    height: 100%;
    background-color: ${({theme}) => theme.colors.darkBlue};
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Project = styled.div`
  display: flex;
`;

const ProjectImage = styled.div`
  width: 500px;
  &.image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 200px;
  }
`;


const ProjectPortfolio = () => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title='Home' keywords={[`prosfera`, `wentylacje`, `zabezpieczenia p poz`]} />
      <GlobalStyle/>
      <BlockHeader/>
      <BlockWrapper>
        <H3>Wykonaliśmy m. in. następujące</H3>
        <H1>Projekty Budowlane</H1>
      </BlockWrapper>
      <ProjectContainer>
        <Wrapper>
          <Project>
            <ProjectImage>
              <div className="image" 
                css={css`
                  background-image: url(${ServicesImage});
              `}></div>
            </ProjectImage>
          </Project>
        </Wrapper>
      </ProjectContainer>
      <Footer/>
    </> 
  </ThemeProvider>
)

export default ProjectPortfolio
