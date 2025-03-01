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
      <div className="inline">
        <select
          className="transition-all duration-300 absolute top-5 right-24 rounded-md bg-secondary text-text border border-primary p-2"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((language) => (
            <option
              key={language.identifier}
              value={language.identifier}
              className="text-text"
            >
              {language.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ToggleLanguage;
