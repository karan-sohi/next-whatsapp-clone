import React from 'react'
import styled from 'styled-components'
import Sidebar from '@/components/Sidebar';
import Head from 'next/head';
import ChatContainer from '@/components/ChatContainer';
import { db } from '@/firebase';

function Chat({chat, messages}) {
  return (
    <Container>
        <Head>Chat</Head>
        <Sidebar/>
        <ChatContainer chat={chat} messages={messages}/>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  `;

export default Chat


export async function getServerSideProps(context) {
  const ref = db.collection("chats").doc(context.query.id);
  const messageRes = await ref
    .collection("messeges")
    .orderBy("timestamp", "asc")
    .get();

  const message = messageRes.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))
  .map(messages => ({
    ...messages, 
    timestamp: messages.timestamp.toDate().getTime(),
  }));

  
  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id, 
    ...chatRes.data()
  }
  console.log("message", message)
  console.log("chat", chat)

  return {
    props: {
      messages: JSON.stringify(message), 
      chat: chat
    }
  }
}
