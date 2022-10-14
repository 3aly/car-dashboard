import React, { createContext, useState } from "react";

export const LikeContex = createContext("");

export const LikeProvider = ({ children }) => {
  const toggleLike = () => {
    setLike((curr) => (curr === true ? false : true));
  };

  const [like, setLike] = useState(true);

  return (
    <LikeContex.Provider value={{ like, toggleLike }}>
      {children}
    </LikeContex.Provider>
  );
};
