import React from "react";
import "./MessagePiece.scss";

const MessagePiece = ({ message, index, user }) => {
  return (
    <div key={index} className="message">
      <div className="avatar">
        <img className="img-fluid rounded-circle" src={message.imageUrl} />
      </div>
      <div
        className={
          message.username === user.username ? " sender" : " recipient"
        }
      >
        <p>{`${message.text} `}</p>
        <span className="time">{`${message.time}`}</span>
      </div>
    </div>
  );
};

export default MessagePiece;
