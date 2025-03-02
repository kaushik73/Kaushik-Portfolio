import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/404";
import { useEffect, useState, createContext } from "react";
import { getStoredTheme, applyTheme, switchTheme } from "./utils/theme";
import {
  getStoredLanguage,
  switchLanguage,
  getInfoFromLanguage,
} from "./utils/language";

export const AppContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(getStoredTheme());
  const [language, setLanguage] = useState(getStoredLanguage());
  const [userInfo, setUserInfo] = useState(getInfoFromLanguage(language));

  useEffect(() => {
    applyTheme(theme);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        switchTheme,
        language,
        switchLanguage: (lang) =>
          switchLanguage(lang, setLanguage, setUserInfo),
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
