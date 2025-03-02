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
      className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24 "
    >
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle ">
          <img
            src={userInfo.main.photo}
            className="rounded-full mb-6 lg:hidden border border-secondary"
            alt="Kaushik Jain Picture"
          />
        </div>

        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] self-center">
            <div className="flex gap-1 items-baseline">
              <p>
                {userInfo.hero.HELLO_THERE}{" "}
                <span className="font-bold text-xl text-text">!</span>
              </p>{" "}
              <p className="animate-wiggle-more text-2xl animate-infinite animate-duration-3000">
                👋
              </p>
            </div>

            <h1 className="font-black mt-3 text-5xl text-text lg:w-[85%]">
              {userInfo.main.name}
            </h1>

            <h2 className="text-xl ">
              <TypeAnimation
                sequence={[
                  "I am a Frontend Developer",
                  1000,
                  "I am Curious to Learn",
                  1000,
                  "Let's Connect...",
                  1000,
                  "Let Me Build Something...",
                  1000,
                ]}
                speed={200}
                repeat={Infinity}
              />
            </h2>

            <p
              className={`mt-4  font-light lg:w-[87%] leading-7 ${
                inView
                  ? "animate-fade animate-once animate-duration-[3500ms] animate-delay-100"
                  : ""
              } `}
            >
              {userInfo.main.description}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="/resume/Kaushik_Jain_Resume.pdf"
                download="Kaushik_Jain_Resume.pdf"
                aria-placeholder="download"
                className="button-custom px-6 py-3 border border-text hover:bg-secondary
            hover:text-white hover:border-secondary font-medium transition-all duration-300"
              >
                <span>{userInfo.hero.RESUME}</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 text-text hover:text-secondary transition-all duration-300 flex gap-3 hover:gap-4"
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
            className="relative hidden lg:block w-[480px] self-center "
            ref={imageRef}
          >
            <span className="h-[500px] w-[2px] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-0 bg-secondary rounded-full"></span>

            <img
              className={`rounded-[10%] transform border border-primary shadow-lg shadow-primary ${
                inView
                  ? "animate-wiggle animate-twice animate-duration-[1500ms] animate-delay-100 animate-normal animate-fill-forwards"
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
