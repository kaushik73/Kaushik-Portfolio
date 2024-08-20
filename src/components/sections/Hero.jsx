// import userInfo from "../../data/userInfo.js";
import { IoIosArrowForward } from "react-icons/io";
import { useInView } from "react-hook-inview";
import { TypeAnimation } from "react-type-animation";
import { useContext } from "react";
import { AppContext } from "../../App";

const Hero = () => {
  const [imageRef, inView] = useInView();
  const { userInfo } = useContext(AppContext);

  return (
    <section
      id="hero"
      className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24 bg-[var(--primary-color)]"
    >
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          <img
            src={userInfo.main.photo}
            className="rounded-full mb-6 lg:hidden"
            alt="Kaushik Jain Picture"
          />

          {/* =========== TOOLTIP TEXT =========== */}
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity  inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm"
            role="tooltip"
          >
            {userInfo.hero.HELLO_HOW_YOU_DOING}{" "}
          </span>
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <div className="flex gap-1 items-baseline">
              <p className="">
                {userInfo.hero.HELLO_THERE}{" "}
                <span className="font-bold text-xl">!</span>
              </p>{" "}
              <p className="animate-wiggle-more text-2xl animate-infinite animate-duration-3000">
                👋
              </p>
            </div>
            <h1 className="font-black mt-3 text-5xl  lg:w-[85%]">
              {userInfo.main.name}
            </h1>
            <h2 className="text-xl">
              <TypeAnimation
                sequence={[
                  "I am a Frontend Developer",
                  1000,
                  "I am Curious to Learn",
                  1000,
                  "Let's Connect...",
                  1000,
                  "Let's Work Together...",
                  1000,
                ]}
                speed={200}
                repeat={Infinity}
              />
            </h2>

            <p
              className={`mt-4 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7 ${
                inView
                  ? "animate-fade animate-once animate-duration-[3500ms] animate-delay-100"
                  : ""
              } `}
            >
              {userInfo.main.description}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="../../public/Kaushik_Jain_Resume.pdf"
                download="Kaushik_Jain_Resume.pdf"
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                {userInfo.hero.RESUME}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">
                  {userInfo.hero.CONTACT}
                </span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          {/* =========== IMAGE CONTAINER =========== */}
          <div
            className="relative  hidden lg:block w-[480px] self-center"
            ref={imageRef}
          >
            <span
              className={`h-[500px] w-[2px] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-0 bg-red-600 dark:bg-white rounded-full `}
            ></span>
            <img
              className={`rounded-[10%] transform   border border-red-600 dark:border-none ${
                inView
                  ? "animate-wiggle  animate-twice animate-duration-[1500ms] animate-delay-100  animate-normal animate-fill-forwards"
                  : ""
              }`}
              src={userInfo.main.photo}
              alt="Kaushik Jain Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
