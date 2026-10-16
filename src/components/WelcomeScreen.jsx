import React from 'react';
import styled from 'styled-components';

function WelcomeScreen() {

    return (
        <Wrapper>
          <Title>Дорогие читатели! Рассказ переехал на мой личный сайт! Нажмите на призрачка, чтобы перейти к нему.</Title>
          <MessageWrapper>
              <Message>
                  <Button 
                      title='Нажми меня'
                      href='https://stasya-mel.ru/ukazi-mne-put/bonus-story'
                  >
                      <img src='./images/ghost.svg' width="45px" height="45px"/>
                  </Button>
                  </Message>
          </MessageWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("./images/internat.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: #9c6424;
    margin: .5rem;
    text-align: center;
`;

const MessageWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Message = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.a`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    overflow: hidden;
    margin: 1rem;
`

export default WelcomeScreen;
