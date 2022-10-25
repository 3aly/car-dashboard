import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MessagesContex } from "../../context/messages.context";
import pen from "../../Icons/pen.png";
import search from "../../Icons/Vector.png";
import ChatHeads from "../Chatheads/Chatheads";
import "./Sidemessages.scss";

export const SideMessages = ({ users }) => {
  const { messages, onMessage } = useContext(MessagesContex);

  // const lastM = (messages.length == 0 ? "" : messages[messages.length - 1].text);

  console.log(messages);

  return (
    <div className="sidemessages">
      <div className="d-flex flex-row justify-content-between align-items-center">
        {" "}
        <h2 className="m-0">Messages</h2>
        <div>
          {" "}
          <img className="img-fluid" src={pen} />
        </div>
      </div>
      <div className="search-container">
        {" "}
        <input
          type="text"
          placeholder="Search or type"
          style={{ backgroundImage: `url(${search})` }}
        ></input>
      </div>
      <div className="chatheads">
        {users.map((user) => {
          return (
            <ChatHeads
              id={user.id}
              imgUrl={user.imageUrl}
              title={user.username}
              lastMessage={messages.map((message) => {
                if (
                  message.username !== user.username &&
                  messages.length != 0
                ) {
                  return message.text;
                }
              })}
              time={messages.map((message) => {
                if (
                  message.username !== user.username &&
                  messages.length != 0
                ) {
                  return message.time;
                }
              })}
            />
          );
        })}
      </div>
    </div>
  );
};
