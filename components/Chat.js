import styled from "styled-components";
import React from "react";
import { Avatar } from "@mui/material";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "@/utils/getRecipientEmail";
import { useRouter } from 'next/router'
import { useCollection } from "react-firebase-hooks/firestore";

function Chat({ id, users }) {
  const router = useRouter()
  const [user] = useAuthState(auth);
  const [recipientSnapShot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(user, users))
  );

  const recipientEmail = getRecipientEmail(user, users);

  const recipient = recipientSnapShot?.docs?.[0]?.photoURL;

  const enterChat = () => {
    router.push(`/chat/${id}`)
  };

  return (
    <Container onClick={enterChat}>
      {
        recipient ? (
          <UserAvatar src={recipient?.photoURL}></UserAvatar>
        ):
        
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      }
      <p>{recipientEmail}</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  word-break: break-word;

  &:hover {
    background-color: whitesmoke;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
