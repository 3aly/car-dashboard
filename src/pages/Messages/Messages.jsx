import React, { useContext } from "react";
import "./messages.scss";
import { SideMessages } from "../../components/Sidemessages/Sidemessages";
import { MessagesWindow } from "../../components/Messageswindow/Messageswindow";
import { MessagesContex } from "../../context/messages.context";

const Messages = () => {
  const { messages } = useContext(MessagesContex);
  const users = messages.map((row) => {
    return row.user;
  });

  console.log(messages);

  return (
    <div className="messages">
      <SideMessages users={users} />
      <MessagesWindow users={messages.user} />
    </div>
  );
};

export default Messages;
