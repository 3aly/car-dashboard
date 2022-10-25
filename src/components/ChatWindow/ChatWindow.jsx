import React, { useContext } from "react";
import { MessagesContex } from "../../context/messages.context";
import AddMessage from "../AddMessage/AddMessage";
import MessagePiece from "../MessagePiece/MessagePiece";
import phone from "../../Icons/chatnav1.png";
import camera from "../../Icons/chatnav2.png";
import more from "../../Icons/chatnav3.png";
import phoned from "../../Icons/chatnav1d.png";
import camerad from "../../Icons/chatnav2d.png";
import mored from "../../Icons/chatnav3d.png";
import "./ChatWindow.scss";
import { ThemeContex } from "../../context/theme.contex";

const ChatWindow = ({ user }) => {
  const { messages } = useContext(MessagesContex);
  const { theme } = useContext(ThemeContex);

  console.log(user.username, "user");
  console.log(messages, "messages");

  return (
    <div className="messageswindow">
      <div className="chatnavi">
        <div className="title">
          {" "}
          <img className="img-fluid  rounded-circle" src={user.imageUrl} />{" "}
          <span>{user.username}</span>
        </div>
        <div className="icons">
          <img src={theme === "dark" ? camerad : camera} />
          <img src={theme === "dark" ? phoned : phone} />
          <img src={theme === "dark" ? mored : more} />
        </div>
      </div>
      <div className="chatwindow">
        {messages.map((message, index) => (
          <MessagePiece message={message} index={index} user={user} />
        ))}
        <AddMessage user={user} />
      </div>
    </div>
  );
};

export default ChatWindow;
