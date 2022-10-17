import React, { useContext } from "react";
import { MessagesContex } from "../../context/messages.context";
import ChatNav from "../ChatNav/ChatNav";
import ChatWindow from "../ChatWindow/ChatWindow";
import "./Messageswindow.scss";

export const MessagesWindow = () => {
  const { messages } = useContext(MessagesContex);
  return (
    <div className="messageswindow">
      <ChatNav user={messages[0]} />
      <ChatWindow user={messages[0].id} />;
    </div>
  );
};
