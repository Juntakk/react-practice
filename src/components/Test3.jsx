import React from "react";

const Test3 = ({ setDarkMode, darkMode }) => {
  const handleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("isDarkMode", newDarkMode);
  };
  return (
    <div style={{ marginTop: "2rem" }}>
      <p>Test 3</p>
      <button onClick={handleDarkMode}>Toggle theme</button>
    </div>
  );
};

export default Test3;
