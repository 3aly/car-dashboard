import React from "react";
import Styles from "./ChatNav.scss";
import phone from "../../Icons/chatnav1.png";
import camera from "../../Icons/chatnav2.png";
import more from "../../Icons/chatnav3.png";

const ChatNav = ({ user }) => {
  return (
    <div className="chatnav">
      <div className="d-flex flex-row">
        {" "}
        <img className="img-fluid  rounded-circle" src={user.imageUrl} />{" "}
        <div className="text-start">
          <h6>{user.username}</h6>
        </div>
      </div>
      <div>
        <img src={camera} />
        <img src={phone} />
        <img src={more} />
      </div>
    </div>
  );
};

export default ChatNav;
