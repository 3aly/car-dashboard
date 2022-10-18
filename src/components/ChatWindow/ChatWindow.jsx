import React, { useContext } from "react";
import { MessagesContex } from "../../context/messages.context";
import AddMessage from "../AddMessage/AddMessage";
import MessagePiece from "../MessagePiece/MessagePiece";
import "./ChatWindow.scss";

const ChatWindow = ({ user }) => {
  const { messages } = useContext(MessagesContex);
  console.log(user.username, "user");
  console.log(messages, "messages");

  return (
    <div className="chatwindow">
      {messages.map((message, index) => (
        <MessagePiece message={message} index={index} user={user} />
      ))}

      <AddMessage user={user} />
    </div>
  );
};

export default ChatWindow;
