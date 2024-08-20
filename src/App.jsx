import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/404";
import { useEffect, useState } from "react";
import { createContext } from "react";
import "preline/preline";
import info_en from "./data/info_en";
import info_hi from "./data/info_hi";
import info_hinglish from "./data/info_hinglish";
import { SUPPORTED_LANGUAGES } from "./data/helper_data";
export const AppContext = createContext();

const App = () => {
  const savedTheme = localStorage.getItem("theme");
  const savedLanguage = localStorage.getItem("language");
  const [theme, setTheme] = useState(savedTheme || "dark");
  const [language, setLanguage] = useState(savedLanguage || "en");

  useEffect(() => {
    document.documentElement.className = `bg-esther`;

    localStorage.setItem("theme", theme);
    console.log(theme, "selected THEME from APP component");
    localStorage.setItem("language", language);
  }, [theme, language]);

  const switchTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const switchLanguage = (language) => {
    setLanguage(language);
  };

  const getInfoFromLanguage = (language) => {
    if (language === "en") {
      return info_en;
    } else if (language === "hi") {
      return info_hi;
    } else if (language === "hinglish") {
      return info_hinglish;
    }
  };

  let userInfo = getInfoFromLanguage(language);

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
