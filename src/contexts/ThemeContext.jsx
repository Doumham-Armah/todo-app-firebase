import React, { createContext, useContext } from "react";
import { useState } from "react";

// create context
const ThemeContext = createContext();

// use context
export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  // function that toggles the theme
  const toggleTheme = () => {
    setToggle(!toggle);
  };

  const value = {
    toggle,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
