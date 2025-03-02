import userInfo from "../../data/info_en.js";
import { FaLandmark } from "react-icons/fa";
import { useInView } from "react-hook-inview";
import AnimateWrapper from "../animations/AnimateWrapper.jsx";
import { useContext } from "react";
import { AppContext } from "../../App";
const Education = () => {
  const [educationRef, inView] = useInView();
  const { userInfo } = useContext(AppContext);

  return (
    <section
      id="education"
      ref={educationRef}
      className="mt-20 mx-4 lg:mx-20 flex flex-col md:flex-row gap-4 md:gap-2"
    >
      <AnimateWrapper inView={inView} effect="animate-fade-right">
        {/* =========== EDUCATION =========== */}
        <div className="w-full md:w-[80%]">
          {/* =========== EDUCATION TITLE =========== */}
          <h4 className="text-xl dark:text-white mb-4 font-bold flex gap-2 items-center ">
            <FaLandmark className="text-xl text-primary" />
            {userInfo.educationPage.EDUCATION}
          </h4>
          <div className="md:h-[480px] md:overflow-y-scroll scroll-smooth">
            {/* =========== EDUCATION LIST =========== */}
            {userInfo.education.map((edu, index) => {
              return (
                <div key={index}>
                  {/* =========== DURATION =========== */}
                  <div className="ps-2 my-2 first:mt-0 !mt-2">
                    <h3 className="text-xs font-medium uppercase   text-primary">
                      {edu.duration}
                    </h3>
                  </div>

                  <div className="flex gap-x-3 relative group rounded-lg">
                    <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                      <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                      </div>
                    </div>

                    <div className="grow p-2 pb-8">
                      {/* =========== IMAGE AND SCHOOL NAME =========== */}
                      <h3 className="flex items-center gap-x-2 font-semibold text-zinc-800 dark:text-white">
                        <img
                          className="w-9 h-9 rounded-full"
                          src={edu.image}
                          alt="School Logo"
                        />
                        <div className="leading-5">
                          {edu.school}
                          {/* =========== DEGREE =========== */}
                          <p className="font-normal text-xs text-zinc-600 dark:text-zinc-400">
                            {edu.degree}
                          </p>
                          {/* =========== MARKS =========== */}
                          <p className="font-normal text-xs text-zinc  dark:text-zinc-400">
                            {edu.marks}
                          </p>
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimateWrapper>
    </section>
  );
};

export default Education;
