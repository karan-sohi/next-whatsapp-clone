import React from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import { Avatar } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import { useState, useRef } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import firebase from "firebase/compat/app";
import TimeAgo from "timeago-react";
import Message from "./Message";
import { useCollection } from "react-firebase-hooks/firestore";
import getRecipientEmail from "@/utils/getRecipientEmail";

function ChatContainer({ chat, messages }) {
  const router = useRouter();
  const params = useParams();
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const recipientEmail = getRecipientEmail(user, chat.users);
  const endMessageRef = useRef("");
  const [recipientSnapShot] = useCollection(
    db.collection("users").where("email", "==", recipientEmail)
  );
  const recipient = recipientSnapShot?.docs.map((doc) => doc.data())?.[0];

  const [messageSnapShot] = useCollection(
    db
      .collection("chats")
      .doc(params.id)
      .collection("messeges")
      .orderBy("timestamp", "asc")
  );

  const scrollToBottom = () => {
    endMessageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const submitChat = (e) => {
    e.preventDefault();

    db.collection("users").doc(user.uid).update({
      lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
    });

    db.collection("chats").doc(params.id).collection("messeges").add({
      message: input,
      user: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
    scrollToBottom();
  };

  const showMessages = () => {
    
    return JSON.parse(messages).map((message) => {
      return (
        <Message
          key={message.id}
          user={message.user}
          message={message}
        ></Message>
      );
    });
  };

  return (
    <Container>
      <ChatHeader>
        <UserInfo>
          {recipient?.photoURL ? (
            <Avatar src={recipient?.photoURL}></Avatar>
          ) : (
            <Avatar>{recipientEmail[0]}</Avatar>
          )}
          <UserName>
            <h3>{recipientEmail}</h3>
            {recipient?.lastSeen ? (
              <p>
                Last Seen:
                <TimeAgo datetime={recipient?.lastSeen.toDate()}></TimeAgo>
              </p>
            ) : (
              <p>Last Seen: Unavailable</p>
            )}
          </UserName>
        </UserInfo>
        <SideIcons>
          <AttachFileIcon></AttachFileIcon>
          <MoreVertIcon style={{ margin: "0 40px" }}></MoreVertIcon>
        </SideIcons>
      </ChatHeader>

      <MessageContainer>
        {showMessages()}
        <EndOfMessage ref={endMessageRef}></EndOfMessage>
      </MessageContainer>

      <InputContainer>
        <EmojiEmotionsIcon />
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <button hidden type="submit" disabled={!input} onClick={submitChat}>
          Send Message
        </button>
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
  overflow: scroll;
  z-index: 1;
`;

const EndOfMessage = styled.div`
  margin-bottom: 200px;
`;
const InputContainer = styled.form`
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
