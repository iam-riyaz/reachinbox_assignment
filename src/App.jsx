import { useEffect, useState } from "react";

import { AllRoutes } from "./routes/AllRoutes";
import ModeToggle from "./Components/ModeToggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <div className="dark:bg-black dark:text-white">
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
