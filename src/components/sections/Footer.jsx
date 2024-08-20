/* eslint-disable no-unused-vars */
// import user_info from "../../data/info_en.js";
import GitHubButton from "react-github-btn";
import { FaArrowCircleUp } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../App";
const Footer = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { userInfo } = useContext(AppContext);

  return (
    <footer className="p-4 text-center md:flex justify-between">
      {/* =========== GITHUB BUTTON =========== */}
      {/* <GitHubButton
        className="self-center"
        href="https://github.com/dsbalico/dsfolio"
        data-color-scheme={theme}
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star dsbalico/dsfolio on GitHub"
      >
        Star on Github
      </GitHubButton> */}
      {/* =========== USER COPYRIGHT =========== */}
      <p className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 text-sm text-center font-light">
        {userInfo.footerPage.RIGHTS_RESERVED}
      </p>
      {/* =========== SCROLL ON TOP BUTTON =========== */}
      <button
        onClick={() => scrollToTop()}
        className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 mx-auto md:mx-0 text-sm font-light flex gap-2"
      >
        <FaArrowCircleUp className="self-center text-red-800 dark:text-red-500" />{" "}
        {userInfo.footerPage.BACK_TO_TOP}
      </button>
    </footer>
  );
};

export default Footer;
