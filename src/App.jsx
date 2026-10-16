import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import WelcomeScreen from '../src/components/WelcomeScreen';

function App() {
  return (
    <>
      <GlobalStyle />
        <WelcomeScreen 
        />
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

export default App;
