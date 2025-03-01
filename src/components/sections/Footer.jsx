import GitHubButton from "react-github-btn";
import { FaArrowCircleUp } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../App";

const Footer = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { userInfo } = useContext(AppContext);

  return (
    <footer className="p-4 text-center md:flex justify-between text-text">
      <p className="self-center mt-2 md:mt-0 text-sm font-light">
        {userInfo.footerPage.RIGHTS_RESERVED}
      </p>
      <button
        onClick={scrollToTop}
        className="self-center mt-2 md:mt-0 mx-auto md:mx-0 text-sm font-light flex gap-2 hover:text-accent transition-all duration-300"
      >
        <FaArrowCircleUp className="self-center text-primary" />{" "}
        {userInfo.footerPage.BACK_TO_TOP}
      </button>
    </footer>
  );
};

export default Footer;
