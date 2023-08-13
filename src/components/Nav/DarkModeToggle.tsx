import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);
  return (
    <div className="flex flex-row gap-2 items-center">
      <button
        className="bg-gray-300 dark:bg-gray-700 w-12 h-6 rounded-full p-1 flex items-center transition-colors"
        onClick={() => setIsDarkMode((prevMode) => !prevMode)}
      >
        <span
          className={`bg-white dark:bg-gray-300 w-4 h-4 rounded-full shadow-md transform transition-transform ${
            isDarkMode ? "translate-x-6" : "translate-x-1"
          }`}
        ></span>
      </button>
      <span className={`truncate ${isDarkMode && "text-white"}`}>
        Dark Mode
      </span>
    </div>
  );
};

export default DarkModeToggle;
