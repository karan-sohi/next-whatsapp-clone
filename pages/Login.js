import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "@/firebase";


function Login() {
  const signIn = () => { 
    auth.signInWithPopup(provider).catch(alert);
  }
  return (
    <Container>
      <Head>
        <title>Login Page</title>
      </Head>

      <LoginContainer>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
        <Button onClick={signIn} variant="outlined">Sign In With Google</Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: whitesmoke;
  `;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 100px;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #DB4437;
  border-radius: 10px;
  color: white;
  border: 1px solid grey;
  cursor: pointer;
`;
