import React, { Fragment, useContext, useState } from "react";
import { MessagesContex } from "../../context/messages.context";
import ChatNav from "../ChatNav/ChatNav";
import ChatWindow from "../ChatWindow/ChatWindow";
import { Outlet } from "react-router-dom";

import "./Messageswindow.scss";

export const MessagesWindow = ({ id, users }) => {
  const { messages, onMessage } = useContext(MessagesContex);

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};
