import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AccountCircle } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as EmailValidator from "email-validator";
import {auth} from "../firebase"

function Sidebar() {
  const createChat = () => {
    const input = prompt("Please enter your email address");
    if (!input) return null;

    if (EmailValidator.validate(input)) {
      // We need to add the chat into DB 'chat' collection
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar
          onClick={() => {
            console.log(auth)
            auth
              .signOut()
              
              .then(() => {
                console.log("Signed out");
              })
              .catch((error) => {
                console.log(error);
              })
          }}
        />
        <IconsContainer>
          <IconButton>
            <ChatBubbleIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in Chats"></SearchInput>
      </Search>

      <SidebarButton onClick={createChat}>START A NEW CHAT</SidebarButton>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const SidebarButton = styled(Button)`
  width: 100%;
  color: black;
  :hover {
    background-color: red;
  }

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

const Search = styled.div`
  display: flex;
  border: 1px solid whitesmoke;
  border-radius: 2px;
  align-items: center;
  padding: 20px;
  align-items: center;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(AccountCircleIcon)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;