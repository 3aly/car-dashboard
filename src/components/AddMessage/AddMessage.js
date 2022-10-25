import { Fragment, useContext, useState } from "react";
import PropTypes from "prop-types";
import { MessagesContex } from "../../context/messages.context";
import send from "../../Icons/send.png";
import pind from "../../Icons/pind.png";

const AddMessage = ({ user }) => {
  const { messages, onMessage } = useContext(MessagesContex);

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;

    setMessage(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();
    let stamp = Date.now();

    // Call the callback function that was passed to this component from ChatWindow
    onMessage(user.username, message, user.imageUrl, time);
    setMessage("");
  };

  const isDisabled = () => {
    return message === "";
  };

  return (
    <div className="messageadder">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          value={message}
          placeholder="Type Something..."
          onChange={handleInputChange}
          style={{ backgroundImage: `url(${pind})` }}
        ></input>
        <button
          className="submit-button"
          type="submit"
          style={{ backgroundImage: `url(${send})` }}
          disabled={isDisabled()}
        />
      </form>
    </div>
  );
};

export default AddMessage;
