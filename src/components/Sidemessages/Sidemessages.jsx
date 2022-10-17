import React, { useContext } from "react";
import { MessagesContex } from "../../context/messages.context";
import pen from "../../Icons/pen.png";
import search from "../../Icons/Vector.png";
import ChatHeads from "../Chatheads/Chatheads";
import "./Sidemessages.scss";

export const SideMessages = ({ users }) => {
  const { messages } = useContext(MessagesContex);

  console.log(users, "users");
  return (
    <div className="sidemessages">
      <div className="d-flex flex-row justify-content-between p-2">
        {" "}
        <h4 className="m-0">Messages</h4>
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
        {messages.map((row) => {
          return (
            <ChatHeads
              imgUrl={row.imgUrl}
              title={row.user}
              lastMessage={row.messages[row.messages.length - 1]}
            />
          );
        })}
      </div>
    </div>
  );
};