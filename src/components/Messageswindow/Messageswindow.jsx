import React, { useContext, useState } from "react";
import { MessagesContex } from "../../context/messages.context";
import ChatNav from "../ChatNav/ChatNav";
import ChatWindow from "../ChatWindow/ChatWindow";
import "./Messageswindow.scss";

export const MessagesWindow = ({ id, users }) => {
  const { messages, onMessage } = useContext(MessagesContex);

  return (
    <div className="messageswindow">
      <ChatNav user={users[0]} />
      <ChatWindow user={users[0]} onMessage={onMessage} />
      {/* {users.map((user, index) => {
        return <div className="messageswindow"></div>;
      })} */}
    </div>
  );
};
