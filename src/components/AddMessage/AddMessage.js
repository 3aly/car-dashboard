import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { MessagesContex } from "../../context/messages.context";

const AddMessage = ({ username }) => {
  const { messages, onMessage } = useContext(MessagesContex);

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;

    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the callback function that was passed to this component from ChatWindow
    onMessage(username, message);
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
          <button className="btn submit-button" disabled={isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

AddMessage.propTypes = {
  onMessage: PropTypes.func.isRequired,
};

export default AddMessage;
