import { useState } from "react";
import { IoIosColorFilter } from "react-icons/io";
import { SUPPORTED_THEME_OPTIONS } from "../data/helper_data";
const ToggleTheme = ({ switchTheme }) => {
  // ["light", "dark", "red", "green", "blue"]
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleThemeChange = (themeOption) => {
    const newTheme = themeOption;
    setTheme(newTheme);
    switchTheme(newTheme);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      {/* =========== Theme Mode =========== */}
      <div className="hs-tooltip [--placement:bottom] inline">
        <button
          onClick={toggleDropdown}
          className="hs-tooltip-toggle text-2xl text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 absolute top-5 right-5"
          aria-label="Theme Mode Button"
        >
          <IoIosColorFilter />
        </button>

        {/* =========== TOOLTIP TEXT =========== */}
        <span
          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm"
          role="tooltip"
        >
          Color Theme
        </span>
      </div>

      {/* =========== Theme Selection =========== */}
      {dropdownOpen && (
        <div className="absolute top-12 right-5 flex flex-col space-y-2 bg-white dark:bg-zinc-950 p-2 rounded shadow-lg">
          {SUPPORTED_THEME_OPTIONS.map((themeOption) => (
            <button
              key={themeOption}
              onClick={() => handleThemeChange(themeOption)}
              className={`text-xs font-medium py-1 px-2 rounded ${
                theme === themeOption
                  ? // ? "bg-gray-300 text-black dark:bg-gray-700 dark:text-white"
                    ""
                  : ""
              }`}
            >
              {themeOption}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToggleTheme;
