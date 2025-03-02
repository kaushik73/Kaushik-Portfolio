import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/404";
import { useEffect, useState, createContext } from "react";
import info_en from "./data/info_en";
import info_hi from "./data/info_hi";
import {
  SUPPORTED_LANGUAGES,
  SUPPORTED_THEME_OPTIONS,
} from "./data/helper_data";

export const AppContext = createContext();

const App = () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const savedLanguage = localStorage.getItem("language") || "en";

  const getInfoFromLanguage = (language) =>
    language === "en" ? info_en : info_hi;

  const [theme, setTheme] = useState(savedTheme);
  const [language, setLanguage] = useState(savedLanguage);
  const [userInfo, setUserInfo] = useState(getInfoFromLanguage(savedLanguage));

  useEffect(() => {
    document.documentElement.classList.remove(
      ...SUPPORTED_THEME_OPTIONS.map((t) => t.toLowerCase() + "-theme")
    );
    document.documentElement.classList.add(theme.toLowerCase() + "-theme");

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
    setUserInfo(getInfoFromLanguage(language));
  }, [language]);

  const switchTheme = (selectedTheme) => {
    if (SUPPORTED_THEME_OPTIONS.includes(selectedTheme)) {
      setTheme(selectedTheme);
    }
  };

  const switchLanguage = (selectedLanguage) => {
    if (
      SUPPORTED_LANGUAGES.map((language) => language.identifier).includes(
        selectedLanguage
      )
    ) {
      setLanguage(selectedLanguage);
    }
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        switchTheme,
        language,
        switchLanguage,
        userInfo,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
