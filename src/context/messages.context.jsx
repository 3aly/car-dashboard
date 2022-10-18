import React, { createContext, useState } from "react";

export const MessagesContex = createContext([]);

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const onMessage = (username, message, imageUrl, time) => {
    const newMessage = {
      username: username,
      text: message,
      imageUrl: imageUrl,
      time: time,
    };

    setMessages(messages.concat([newMessage]));
    console.log(messages);
  };

  return (
    <MessagesContex.Provider value={{ messages, onMessage }}>
      {children}
    </MessagesContex.Provider>
  );
};
