/* eslint-disable react/prop-types */
import { ArrowOutward } from "./Icons";
import { useRef } from "react";
import { handleMouseLeave, handleMouseMove } from "../logics/logics";
export const ProjectCard = ({ project }) => {
  const ref = useRef(null);

  return (
    <article
      ref={ref}
      onMouseMove={(e) => handleMouseMove(e, ref.current)}
      onMouseLeave={() => handleMouseLeave(ref.current)}
      className={`flex items-center flex-col justify-center gap-4 p-8 h-full w-full rounded-xl bg-gradient-to-r from-gray-100 via-green-50 to-amber-50 border transition-shadow duration-500 hover:shadow-xl transform hover:cursor-pointer`}
    >
      <header className="flex items-center gap-2 justify-between w-full">
        <div className="overflow-hidden">
          <h3 className={`text-2xl font-semibold text-black`}>
            {project.name}
          </h3>
          <p className={`text-wrap-balance text-black line-clamp-1`}>
            {project.description}
          </p>
        </div>
        <a
          href={project.link}
          target="_blank"
          className="group bg-white p-3 rounded-full self-start hover:cursor-pointer hover:bg-gray-900 transition-colors duration-300"
          rel="noreferrer"
        >
          <ArrowOutward className="group-hover:fill-white transition-colors duration-300" />
        </a>
      </header>
      <img
        loading="lazy"
        className="rounded-lg w-full"
        src={project.img.src}
        alt={project.img.alt}
      />
    </article>
  );
};

export default ProjectCard;
