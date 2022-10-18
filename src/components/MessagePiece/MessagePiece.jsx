import React from "react";
import "./MessagePiece.scss";

const MessagePiece = ({ message, index, user }) => {
  return (
    <div
      key={index}
      className={message.username === user.username ? " sender" : " recipient"}
    >
      {" "}
      <div className="avatar">
        <img className="img-fluid rounded-circle" src={message.imageUrl} />
      </div>
      <p>{`${message.text} `}</p>
      <span className="time">{`${message.time}`}</span>
    </div>
  );
};

export default MessagePiece;
