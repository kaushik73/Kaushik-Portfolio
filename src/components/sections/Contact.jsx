import { IoCall } from "react-icons/io5";
import {
  FaSquareXTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
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
      className="mt-16 pt-12 px-6 lg:px-24 "
    >
      <AnimateWrapper inView={inView}>
        <h4 className="flex justify-center gap-2 text-5xl font-bold ">
          <FaHandshake className="text-primary" />{" "}
          {userInfo.contactPage.GET_IN_TOUCH}
        </h4>
        <p className="mt-8 leading-7 text-center font-light">
          {userInfo.contact.description.line1}
          <br />
          {userInfo.contact.description.line2}
          <br />
          {userInfo.contact.description.line3}
        </p>
        <div className="mt-10 flex flex-wrap justify-evenly items-baseline">
          <div>
            <a
              href={`mailto:${userInfo.main.email}`}
              className="flex mt-6 gap-4 hover:text-accent transition-all duration-300"
            >
              <MdEmail className="self-center text-lg text-primary" />
              <span>{userInfo.main.email}</span>
            </a>
            <a
              href={`tel:${userInfo.main.phone}`}
              className="flex mt-6 gap-4 hover:text-accent transition-all duration-300"
            >
              <IoCall className="self-center text-lg text-primary" />
              <span>{userInfo.main.phone}</span>
            </a>
          </div>
          <div>
            <a
              href={userInfo.socials.linkedin}
              className="flex gap-4 hover:text-accent transition-all duration-300 mt-4"
            >
              <FaLinkedin className="self-center text-lg text-primary" />
              <span>{userInfo.contactPage.FOLLOW_ON_LINKEDIN}</span>
            </a>
            <a
              href={userInfo.main.github}
              className="flex mt-4 gap-4 hover:text-accent transition-all duration-300"
            >
              <FaGithub className="self-center text-lg text-primary" />
              <span>{userInfo.contactPage.FOLLOW_ON_GITHUB}</span>
            </a>
            <a
              href={userInfo.socials.instagram}
              className="flex gap-4 hover:text-accent transition-all duration-300 mt-4"
            >
              <FaInstagram className="self-center text-lg text-primary" />
              <span>{userInfo.contactPage.FOLLOW_ON_INSTA}</span>
            </a>
          </div>
        </div>
      </AnimateWrapper>
    </section>
  );
};

export default Contact;
