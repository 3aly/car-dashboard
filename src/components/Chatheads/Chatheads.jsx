import React from "react";
import Styles from "./Chathead.scss";

const ChatHeads = ({ imgUrl, title, lastMessage }) => {
  return (
    <div className="chathead">
      <img className="img-fluid  rounded-circle" src={imgUrl} />{" "}
      <div className="text-start">
        <h6>{title}</h6>
        <span>{lastMessage}</span>
      </div>
    </div>
  );
};

export default ChatHeads;
