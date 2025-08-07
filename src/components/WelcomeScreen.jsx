import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function WelcomeScreen(props) {
    const { clickGhost } = props;
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    

    const checkPassword = () => {
        const isRightPassword = password === "123" // &BXW@=|a,^Q9

        if (isRightPassword) {
            clickGhost();
        } else {
            setPasswordError(true);
        }
    };

    return (
        <Wrapper>
          <Title>Добро пожаловать в Интернат, видящий!</Title>
          <FormWrapper>
              <InputWrapper>
                  <Input
                      type='text'
                      placeholder='Введи пароль'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setPasswordError(false)}
                  />
                  <Button 
                      type="button"
                      onClick={checkPassword}
                  >
                      <img src='./images/ghost.svg' width="45px" height="45px"/>
                  </Button>
                  </InputWrapper>
              {passwordError && (
                  <ErrorContainer>В пароле ошибка, попробуй еще раз</ErrorContainer>
              )}
          </FormWrapper>
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

const Input = styled.input`
    color: #2b251d;
	font-size: .75em;
    font-family: "Roboto Condensed", sans-serif;
	padding: .5em;
	border: 1px solid #544028;
	background: #bebb97;
	border-radius: 8px;

    &:focus {
        outline: none;
    }
`;

const FormWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    overflow: hidden;
    margin: 1rem;
`

const ErrorContainer = styled.p`
    position: absolute;
    display: block;
    color: #1c1207;
    bottom: 50%;
    left: 60%;
    background: #e4d5c3;
    padding: 1rem;
    border: 1px solid #1c1207;
    border-radius: 16px;
`

export default WelcomeScreen;
