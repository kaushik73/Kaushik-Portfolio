import info_en from "../data/info_en";
import info_hi from "../data/info_hi";
import { SUPPORTED_LANGUAGES } from "../data/helper_data";

export const getStoredLanguage = () => {
  return localStorage.getItem("language") || "en";
};

export const getInfoFromLanguage = (language) => {
  return language === "en" ? info_en : info_hi;
};

export const switchLanguage = (selectedLanguage, setLanguage, setUserInfo) => {
  if (
    SUPPORTED_LANGUAGES.some((lang) => lang.identifier === selectedLanguage)
  ) {
    setLanguage(selectedLanguage);
    setUserInfo(getInfoFromLanguage(selectedLanguage));
    localStorage.setItem("language", selectedLanguage);
  }
};
