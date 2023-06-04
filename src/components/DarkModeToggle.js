import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark')==='true');

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    if(isDark != undefined){localStorage.setItem('isDark', isDark)}
  }, [isDark]); 

  return (
    <div style={{position: "relative", left: "150px", top: "-90px"}}>
      <Toggle      
        checked={isDark}
        onChange={({ target }) => setIsDark(target.checked)}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode toggle"
      />
    </div>
    
  );
};