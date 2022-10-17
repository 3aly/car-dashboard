import React, { createContext, useState } from "react";
import user1 from "../Icons/user1.png";
import user2 from "../Icons/user2.png";

const mdata = [
  {
    user: "Killan James",
    id: 0,
    messages: ["Hi, I hope you are doing well"],
    imgUrl: user1,
    state: "active now",
  },

  {
    user: "Novita",
    id: 1,
    messages: ["yea I’m well, Thank you,", "enta tamam?"],
    imgUrl: user2,
    state: "away",
  },
];
export const MessagesContex = createContext([]);

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState(mdata);

  return (
    <MessagesContex.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContex.Provider>
  );
};
