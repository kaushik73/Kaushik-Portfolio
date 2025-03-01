import info from "../../data/info_en.js";
import { FiCodesandbox } from "react-icons/fi";
import { useInView } from "react-hook-inview";
import AnimateWrapper from "../animations/AnimateWrapper.jsx";
import { useContext } from "react";
import { AppContext } from "../../App";

const Skills = () => {
  const [skillsRef, inView] = useInView();
  const { userInfo } = useContext(AppContext);

  return (
    <section
      id="skills"
      className="mx-4 lg:mx-20 py-10 rounded-lg"
      ref={skillsRef}
    >
      <AnimateWrapper inView={inView}>
        {/* SKILLS TITLE */}
        <h4 className="text-4xl font-bold flex justify-center items-center gap-2 mt-10">
          <AnimateWrapper
            inView={inView}
            effect="animate-fade-right"
            delay="animate-delay-800"
          >
            <FiCodesandbox className=" text-text" />
          </AnimateWrapper>
          <AnimateWrapper
            inView={inView}
            effect="animate-fade-left"
            delay="animate-delay-800"
          >
            {userInfo.SkillsPage.TECH_I_USE}
          </AnimateWrapper>
        </h4>
        {/* LIST OF SKILLS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
          {info.skills.map((skill, index) => {
            const { id, name, icon: Icon } = skill;
            return (
              <span
                key={id}
                className={`skill-button bg-secondary p-2 rounded-lg flex items-center gap-2 shadow-md transition-transform transform hover:scale-105 animate-pulse animate-infinite animate-duration-[5000ms] animate-ease-in-out ${
                  index % 2 === 0 ? "animate-normal" : "animate-reverse"
                }`}
              >
                <Icon className=" text-2xl text-primary" />
                <span className="text-text">{name}</span>
              </span>
            );
          })}
        </div>
      </AnimateWrapper>
    </section>
  );
};

export default Skills;
