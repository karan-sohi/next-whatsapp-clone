import React from "react";
import styled from "styled-components";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from "moment";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user == userLoggedIn ? Receiver : Sender;
  console.log(user);
  console.log(message);

  return (
    <Container>
      <TypeOfMessage>
        {message.message}{" "}
        <Timestamp>
        {message.timestamp
          ? moment(message.timestamp.toDate()).format("LT")
          : "..."}
        </Timestamp>
      </TypeOfMessage>
    </Container>
  );
}

const Container = styled.div`
  z-index: 100;
`;

const MessageElement = styled.div`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 15px;
  position: relative;
  text-align: right;
`;  

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;

const Receiver = styled(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`;

const Timestamp = styled.div`
  font-size: 10px;
  color: grey;
  margin-top: 2px;
  `

export default Message;
