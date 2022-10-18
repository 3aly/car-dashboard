import React from "react";
import "./ChatNav.scss";
import phone from "../../Icons/chatnav1.png";
import camera from "../../Icons/chatnav2.png";
import more from "../../Icons/chatnav3.png";

const ChatNav = ({ user }) => {
  return (
    <div className="chatnav">
      <div className="title">
        {" "}
        <img className="img-fluid  rounded-circle" src={user.imageUrl} />{" "}
        <span>{user.username}</span>
      </div>
      <div className="icons">
        <img src={camera} />
        <img src={phone} />
        <img src={more} />
      </div>
    </div>
  );
};

export default ChatNav;
