import React from "react";
import CircularProgress from '@mui/material-next/CircularProgress';
import styled from "styled-components";

function Loading() {
  return (
    <LoadingContainer>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
      <CircularProgress style={{marginBottom: "350px "}} color="success" />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  display: grid;
  place-items: center;
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-top: 50px;
  margin-bottom: 50px;
`;


export default Loading;
