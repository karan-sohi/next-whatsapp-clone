import React from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import { Avatar } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from '@mui/icons-material/Mic';
import { useState } from "react";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import firebase from 'firebase/compat/app';


function ChatContainer() {
  const router = useRouter();
  const params = useParams()  
  const [user] = useAuthState(auth);
  const [input, setInput] = useState('');

  const submitChat = (e) => {
    e.preventDefault();

    db.collection('chats').doc(params.id).collection('messeges').add({
      message: input,
      user: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    } );
    
    setInput('');
  }

  return (
    <Container>
      <ChatHeader>
        <UserInfo>
          <Avatar></Avatar>
          <UserName>
            <h3>{user.email}</h3>
            <p>Last Active: Unavailable</p>
          </UserName>
        </UserInfo>
        <SideIcons>
          <AttachFileIcon></AttachFileIcon>
          <MoreVertIcon style={{ margin: "0 40px" }}></MoreVertIcon>
        </SideIcons>
      </ChatHeader>

      <MessageContainer>
        <EndOfMessage></EndOfMessage>
      </MessageContainer>

      <InputContainer>
        <EmojiEmotionsIcon />
        <Input value={input} onChange={e => setInput(e.target.value)}></Input>
        <button type="submit" disabled={!input} onClick={submitChat}></button>
        <MicIcon />
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const ChatHeader = styled.div`
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  height: 80px;
  padding: 11px;
  border-bottom: 1px solid whitesmoke;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  margin-left: 10px;
  > p {
    font-size: 14px;
    color: gray;
  }
`;

const SideIcons = styled.div`
  display: flex;
  align-items: center;
`;

const MessageContainer = styled.div`
height: 90vh;
background-color: #e5ded8;
padding: 30px;
`;


const EndOfMessage = styled.div``;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 0;
  background-color: white;
  padding: 10px;
  z-index: 100;
`;
const Input = styled.input`
  background-color: whitesmoke; 
  padding: 20px;  
  border: none;
  border-radius: 10px;
  outline: 0;
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
`;

export default ChatContainer;
