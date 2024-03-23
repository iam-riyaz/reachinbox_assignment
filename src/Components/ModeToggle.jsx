import React, { useEffect, useState } from "react";

const ModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 bg-blue-400 rounded-lg dark:bg-dark-background"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ModeToggle;
