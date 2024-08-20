import { AppContext } from "../App.jsx";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ToggleTheme from "../components/ToggleTheme.jsx";

import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import Education from "../components/sections/Education.jsx";
import Skills from "../components/sections/Skills.jsx";
import Experience from "../components/sections/Experience.jsx";
import Certificates from "../components/sections/Certificates.jsx"; // do not remove
import ToggleLanguage from "../components/ToggleLanguage.jsx";

const Homepage = () => {
  const { theme, switchTheme, language, switchLanguage } =
    useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <ToggleTheme switchTheme={switchTheme} />
        <ToggleLanguage switchLanguage={switchLanguage} />
        <Hero />
        <Projects />
        <div className="flex">
          <Education />
          <Experience />
        </div>
        <Skills />
        {/* <Certificates /> */}
        <Contact />

        <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default Homepage;
