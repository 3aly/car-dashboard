import React, { useContext } from "react";
import { MessagesContex } from "../../context/messages.context";
import AddMessage from "../AddMessage/AddMessage";
import Styles from "./ChatWindow.module.scss";

const ChatWindow = ({ user, onMessage }) => {
  const { messages } = useContext(MessagesContex);
  console.log(user.username, "user");
  return (
    <div>
      <ul className="message-list">
        {messages.map((message, index) => (
          <span
            key={index}
            className={
              message.username === user.username
                ? "message sender"
                : "message recipient"
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </span>
        ))}
      </ul>
      <AddMessage username={user.username} />
    </div>
  );
};

export default ChatWindow;
