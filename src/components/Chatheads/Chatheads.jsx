import React from "react";
import "./Chathead.scss";

const ChatHeads = ({ imgUrl, title, lastMessage }) => {
  return (
    <div className="chathead">
      <img className="img-fluid  rounded-circle" src={imgUrl} />
      <div>
        <h5>{title}</h5>
        <div className="lastmessage">
          {" "}
          <span>{lastMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatHeads;
