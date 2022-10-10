import React, { createContext, useState } from "react";

export const ThemeContex = createContext("");

export const ThemeProvider = ({ children }) => {
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContex.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContex.Provider>
  );
};
