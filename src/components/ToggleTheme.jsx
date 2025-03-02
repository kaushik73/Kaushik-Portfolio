import { useState, useRef, useEffect } from "react";
import { IoIosColorFilter } from "react-icons/io";
import ColorPicker from "react-pick-color";

const ToggleTheme = ({ switchTheme, theme }) => {
  const [colorPicker, setColorPicker] = useState(false);
  const pickerRef = useRef(null);

  const handleColorChange = (hexColor) => {
    switchTheme(hexColor);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setColorPicker(false);
      }
    };

    if (colorPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [colorPicker]);

  return (
    <div className="" ref={pickerRef}>
      <div className="flex flex-col items-center">
        <button
          onClick={() => setColorPicker((prev) => !prev)}
          className="relative text-2xl text-primary hover:text-secondary "
          aria-label="Theme Mode Button"
        >
          <IoIosColorFilter className="text-primary text-4xl" />
        </button>

        <span className="text-xs mt-1 ">Theme</span>
      </div>

      {colorPicker && (
        <div className="absolute z-10 top-14 right-0 flex flex-col space-y-2 bg-secondary text-text p-2 rounded shadow-lg">
          <ColorPicker
            color={theme}
            onChange={(color) => handleColorChange(color.hex)}
          />
        </div>
      )}
    </div>
  );
};

export default ToggleTheme;
