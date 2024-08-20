// import userInfo from "../../data/info_en.js";
import Project from "../Project.jsx";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { useInView } from "react-hook-inview";
import AnimateWrapper from "../animations/AnimateWrapper.jsx";
import { useContext } from "react";
import { AppContext } from "../../App";

const Projects = () => {
  const [projectsRef, inView] = useInView();
  const { userInfo } = useContext(AppContext);

  return (
    <section className="" ref={projectsRef}>
      <h4
        id="projects"
        className="text-4xl font-bold flex justify-center items-center gap-2 dark:text-white"
      >
        <AnimateWrapper inView={inView} effect="animate-fade-right">
          <HiOutlineCodeBracketSquare className=" text-red-800 dark:text-red-500" />
        </AnimateWrapper>
        <AnimateWrapper inView={inView} effect="animate-fade-left">
          {userInfo.projectsPage.PROJECTS}
        </AnimateWrapper>
      </h4>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16">
        {userInfo.projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              link={project.link}
              VIEW_PROJECT={userInfo.projectsPage.VIEW_PROJECT}
              VIEW_GITHUB={userInfo.projectsPage.VIEW_GITHUB}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Projects;
