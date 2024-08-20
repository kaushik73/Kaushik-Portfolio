import { useEffect, useState } from "react";
import { SUPPORTED_LANGUAGES } from "../data/helper_data";

const ToggleLanguage = ({ switchLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setSelectedLanguage(selectedLanguage);
    switchLanguage(selectedLanguage);
  };

  return (
    <div className="relative">
      {/* =========== Localization =========== */}
      <div className="inline">
        <select
          className="transition-all duration-300 absolute top-5 right-20 rounded-md "
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((language) => (
            <option key={language.identifier} value={language.identifier}>
              {language.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ToggleLanguage;
