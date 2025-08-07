import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import WelcomeScreen from '../src/components/WelcomeScreen';
import Story from '../src/components/Story';

function App() {
    const [isShowWelcome, setIsShowWelcome] = useState(true);
    const [isShowVideo, setIsShowVideo] = useState(false);
    const [isShowStory, setIsShowStory] = useState(false);
    
    const showVideo = () => {
        setIsShowWelcome(false)
        setIsShowVideo(true);
        setTimeout(() => {
          setIsShowVideo(false);
          setIsShowStory(true);
        }, 4000);
    };

    return (
      <>
        <GlobalStyle />
        {isShowWelcome && (
            <WelcomeScreen 
                clickGhost={showVideo}
            />
        )}
        {isShowVideo && (
            <Video 
                  autoPlay={true}
                  poster="../images/internat.png"
                  muted
                  loop
                >
                    <source src="../images/inernat-video.mp4" type="video/mp4" />
            </Video>
        )}
        {isShowStory && (
            <Story />
        )}
      </>
    );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto Condensed", sans-serif;
  }
`;

const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default App;
