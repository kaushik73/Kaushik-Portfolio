import { CiLink } from "react-icons/ci";

const Project = ({
  title,
  description,
  technologies,
  link,
  github,
  VIEW_PROJECT,
  VIEW_GITHUB,
}) => {
  return (
    <div className="group hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all duration-300 p-6 border-b border-primary mx-2 md:mx-0 md:border-none md:rounded-xl">
      <div className="flex gap-2 overflow-x-scroll py-2 technologies ">
        {/* =========== TECHNOLOGIES USED =========== */}
        {technologies.split(",").map((tech, index) => (
          <span
            className="cursor-e-resize inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-secondary text-primary dark:bg-secondary dark:text-secondary group-hover:animate-rotate-y group-hover:animate-once group-hover:animate-duration-700 group-hover:animate-delay-300 group-hover:animate-ease-linear"
            key={index}
          >
            {tech}
          </span>
        ))}
      </div>
      {/* =========== PROJECT TITLE =========== */}
      <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-4">
        {title}
      </h3>
      {/* =========== PROJECT DESCRIPTION =========== */}
      <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
        {description}
      </p>

      <div className="flex  gap-6 text-zinc-600 dark:text-zinc-300 font-medium">
        {/* =========== PROJECT GITHUB =========== */}
        {github !== "" && (
          <>
            <a
              href={github}
              className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
            >
              <CiLink className="text-2xl self-center" />
              <span className="text-xs self-center">{VIEW_GITHUB}</span>
            </a>
          </>
        )}
        {/* =========== PROJECT LINK =========== */}
        {link !== "" && (
          <a
            href={link}
            className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
          >
            <>
              <CiLink className="text-2xl self-center" />
              <span className="text-xs self-center">{VIEW_PROJECT}</span>
            </>
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
