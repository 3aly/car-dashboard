import React, { useContext } from "react";
import "./messages.scss";
import { SideMessages } from "../../components/Sidemessages/Sidemessages";
import { MessagesWindow } from "../../components/Messageswindow/Messageswindow";
import { MessagesContex } from "../../context/messages.context";

import user1 from "../../Icons/user1.png";
import user2 from "../../Icons/user2.png";
import { ThemeContex } from "../../context/theme.contex";

const Messages = ({ users }) => {
  const { theme } = useContext(ThemeContex);

  return (
    <div className="messages" id={theme}>
      <SideMessages users={users} />

      <MessagesWindow users={users} />
    </div>
  );
};

export default Messages;
