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
        <img className="img-fluid  rounded-circle" src={user.imgUrl} />{" "}
        <div className="text-start">
          <h6>{user.user}</h6>
          <span>{user.state}</span>
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
