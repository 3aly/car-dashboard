import React, { useContext, useState } from "react";
import { MessagesContex } from "../../context/messages.context";
import ChatNav from "../ChatNav/ChatNav";
import ChatWindow from "../ChatWindow/ChatWindow";
import "./Messageswindow.scss";

export const MessagesWindow = ({ id, users }) => {
  const { messages, onMessage } = useContext(MessagesContex);

  return (
    <div className="messageswindow">
      {users.map((user, index) => {
        return (
          <div>
            <ChatNav user={users[index]} />
            <ChatWindow user={users[index]} onMessage={onMessage} />
          </div>
        );
      })}
    </div>
  );
};
