import React from 'react'
import styled from 'styled-components'
import Sidebar from '@/components/Sidebar';
import Head from 'next/head';
import ChatContainer from '@/components/ChatContainer';

function Chat() {
  return (
    <Container>
        <Head>Chat</Head>
        <Sidebar/>
        <ChatContainer/>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  `;

export default Chat