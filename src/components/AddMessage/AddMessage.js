import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { MessagesContex } from "../../context/messages.context";
import send from "../../Icons/send.png";
const AddMessage = ({ user }) => {
  const getTimeFromDate = (timestamp) => {
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var time = new Date();
    return time.setHours(hours, minutes, seconds);
  };
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

    // Call the callback function that was passed to this component from ChatWindow
    onMessage(user.username, message, user.imageUrl, time);
    setMessage("");
  };

  const isDisabled = () => {
    return message === "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          value={message}
          placeholder="Enter your message..."
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button
            className="btn submit-button"
            disabled={isDisabled()}
          ></button>
        </div>
      </form>
    </div>
  );
};

export default AddMessage;
