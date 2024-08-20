// import userInfo from "../../data/info_en.js";
import { IoCall } from "react-icons/io5";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../App";
import { MdEmail } from "react-icons/md";
import { useInView } from "react-hook-inview";
import AnimateWrapper from "../animations/AnimateWrapper.jsx";
import { FaHandshake } from "react-icons/fa";

const Contact = () => {
  const [contactRef, inView] = useInView();
  const { userInfo } = useContext(AppContext);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="mt-16 pt-12 px-6 lg:px-24"
    >
      <AnimateWrapper inView={inView}>
        {/* =========== TITLE =========== */}
        <h4 className=" flex justify-center gap-2 text-5xl font-bold text-center text-zinc-900 dark:text-zinc-100">
          <FaHandshake className=" text-red-800 dark:text-red-500" />{" "}
          {userInfo.contactPage.GET_IN_TOUCH}
          {/* <span className="text-red-800 dark:text-red-500"> */}
          {/* {userInfo.contactPage.WAYS_TO_CONNECT_ME} */}
          {/* </span> */}
        </h4>

        {/* =========== DESCRIPTION =========== */}
        <p className="mt-8 leading-7  text-center text-base text-zinc-600 dark:text-zinc-300 font-light">
          {userInfo.contact.description}
        </p>

        {/* =========== LINKS =========== */}
        <div className="mt-10 flex flex-wrap justify-evenly items-baseline">
          <div className="">
            {/* =========== EMAIL =========== */}
            <a
              href={`mailto:${userInfo.main.email}`}
              className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-3000"
            >
              <MdEmail
                className={`self-center text-lg text-red-800 dark:text-red-500 ${
                  inView
                    ? "animate-flip-down animate-thrice animate-duration-3000 animate-delay-1000"
                    : ""
                }`}
              />
              <span>{userInfo.main.email} </span>
            </a>

            {/* =========== Phone =========== */}
            <a
              href={`tel:${userInfo.main.phone}`}
              className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30"
            >
              <IoCall
                className={`self-center text-lg text-red-800 dark:text-red-500 ${
                  inView
                    ? "animate-flip-down animate-thrice animate-duration-3000 animate-delay-1000"
                    : ""
                }`}
              />
              <span>{userInfo.main.phone}</span>
            </a>
          </div>

          <div className="">
            {/* =========== INSTAGRAM =========== */}
            <a
              href={userInfo.socials.instagram}
              className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
            >
              <FaInstagram
                className={`self-center text-lg text-red-800 dark:text-red-500 ${
                  inView
                    ? "animate-wiggle-more animate-thrice animate-delay-[2000ms] animate-duration-3000"
                    : ""
                }`}
              />
              <span className="self-center">
                {" "}
                {userInfo.contactPage.FOLLOW_ON_INSTA}
              </span>
            </a>

            {/* =========== LINKEDIN =========== */}
            <a
              href={userInfo.socials.linkedin}
              className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
            >
              <FaLinkedin
                className={`self-center text-lg text-red-800 dark:text-red-500 ${
                  inView
                    ? "animate-wiggle-more animate-thrice animate-delay-[2000ms] animate-duration-3000"
                    : ""
                }`}
              />
              <span className="self-center">
                {userInfo.contactPage.FOLLOW_ON_LINKEDIN}
              </span>
            </a>

            {/* =========== Github =========== */}
            <a
              href={userInfo.main.github}
              className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30"
            >
              <FaGithub
                className={`self-center text-lg text-red-800 dark:text-red-500 ${
                  inView
                    ? "animate-wiggle-more animate-thrice animate-delay-[2000ms] animate-duration-3000"
                    : ""
                }`}
              />
              <span>{userInfo.main.github}</span>
            </a>
          </div>
        </div>
      </AnimateWrapper>
    </section>
  );
};

export default Contact;
