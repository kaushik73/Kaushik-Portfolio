import { useState } from "react";
import { IoIosColorFilter } from "react-icons/io";
import { SUPPORTED_THEME_OPTIONS } from "../data/helper_data";
import ColorPicker from "react-pick-color";

const ToggleTheme = ({ switchTheme, theme }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [color, setColor] = useState("#fff");

  const handleThemeChange = (themeOption) => {
    switchTheme(themeOption);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <div className="hs-tooltip [--placement:bottom] inline">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="hs-tooltip-toggle text-2xl text-primary hover:text-secondary transition-all duration-300 absolute top-5 right-5"
          aria-label="Theme Mode Button"
        >
          <IoIosColorFilter className="text-text text-4xl" />
        </button>

        {/* Tooltip Text NOT WORKING*/}
        <span
          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white dark:bg-zinc-950 text-xs font-medium text-primary dark:text-white rounded shadow-md border dark:border-secondary"
          role="tooltip"
        >
          Color Theme
        </span>
      </div>

      {/* Theme Dropdown Menu */}
      {dropdownOpen && (
        <>
          <div className="absolute hidden z-10 top-20 right-5 flex flex-col space-y-2 bg-secondary text-text p-2 rounded shadow-lg">
            {" "}
            <ColorPicker
              color={color}
              onChange={(color) => setColor(color.hex)}
            />
          </div>
          <div className="absolute  top-16 right-5 flex flex-col space-y-2 bg-secondary text-text p-2 rounded shadow-lg">
            {SUPPORTED_THEME_OPTIONS.map((themeOption) => (
              <button
                key={themeOption}
                onClick={() => handleThemeChange(themeOption)}
                className={`text-xs font-medium py-1 px-2 rounded transition-all duration-200 hover:bg-primary ${
                  theme === themeOption ? "bg-primary" : ""
                }`}
              >
                {themeOption}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ToggleTheme;
