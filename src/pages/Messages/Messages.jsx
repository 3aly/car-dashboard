import React, { useContext } from "react";
import "./messages.scss";
import { SideMessages } from "../../components/Sidemessages/Sidemessages";
import { MessagesWindow } from "../../components/Messageswindow/Messageswindow";
import { MessagesContex } from "../../context/messages.context";

import user1 from "../../Icons/user1.png";
import user2 from "../../Icons/user2.png";

const Messages = () => {
  const users = [
    { username: "Amy", imageUrl: user1, id: 0 },
    { username: "John", imageUrl: user2, id: 1 },
  ];

  return (
    <div className="messages">
      {/* <SideMessages users={users} /> */}
      <MessagesWindow users={users} />
    </div>
  );
};

export default Messages;
