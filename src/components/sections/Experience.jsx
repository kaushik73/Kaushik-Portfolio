import { FaBuildingUser } from "react-icons/fa6";
import { useInView } from "react-hook-inview";
import AnimateWrapper from "../animations/AnimateWrapper.jsx";
import { useContext } from "react";
import { AppContext } from "../../App";

const Experience = () => {
  const [experienceRef, inView] = useInView();
  const { userInfo } = useContext(AppContext);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="mt-20 mx-4 lg:mx-20 flex flex-col md:flex-row gap-4 md:gap-2 rounded-lg"
    >
      <AnimateWrapper inView={inView} effect="animate-fade-left">
        {/* EXPERIENCE */}
        <div className="w-full md:w-[80%]">
          {/* EXPERIENCE TITLE */}
          <h4 className="text-xl  mb-4 font-bold flex gap-2 items-center">
            <FaBuildingUser className="text-2xl text-accent text-primary" />
            {userInfo.experiencePage.EXPERIENCE}
          </h4>

          <div className="md:h-[480px] md:overflow-y-scroll scroll-smooth">
            {/* EXPERIENCE LIST */}
            {userInfo.experience.map((exp, index) => {
              return (
                <div
                  key={index}
                  className="p-4 rounded-lg shadow-md shadow-secondary mb-4"
                >
                  <h3 className="text-xs font-medium uppercase text-text">
                    {exp.duration}
                  </h3>

                  <div className="flex gap-x-3 relative group rounded-lg">
                    <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-accent">
                      <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-white border-2 border-text"></div>
                      </div>
                    </div>
                    <div className="grow p-2 pb-8">
                      {/* COMPANY NAME */}
                      <h3 className="flex items-center gap-x-2 font-semibold ">
                        <img
                          className="w-9 rounded-full"
                          src={exp.image}
                          alt="Company Logo"
                        />
                        <div className="leading-5">
                          {exp.company}
                          {/* POSITION */}
                          <p className="font-normal text-xs text-text">
                            {exp.position}
                          </p>
                        </div>
                      </h3>
                      <ul className="list-disc list-inside  mt-2">
                        {/* DESCRIPTION LIST */}
                        {exp.descriptions.map((desc, index) => {
                          return (
                            <li className="flex space-x-3" key={index}>
                              <svg
                                className="flex-shrink-0 size-4 mt-0.5 text-accent"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm mt-1">{desc}</span>
                            </li>
                          );
                        })}
                      </ul>
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

export default Experience;
