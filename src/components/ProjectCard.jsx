/* eslint-disable react/prop-types */
import { ArrowOutward } from "./Icons";
import { useRef } from "react";
import { handleMouseLeave, handleMouseMove } from "../logics/logics";
import { Tecnologies } from "./Tecnologies";
export const ProjectCard = ({ project }) => {
  const ref = useRef(null);

  return (
    <article
      className={`flex items-center flex-col justify-center gap-4 p-8 h-full  rounded-xl bg-gradient-to-r from-gray-100 via-green-50 to-amber-50 border  hover:shadow-sm hover:cursor-pointer`}
    >
      <header className="flex items-center gap-2 justify-between w-full">
        <h3 className={`text-2xl font-semibold text-black`}>{project.name}</h3>
        <a
          href={project.link}
          target="_blank"
          className="group bg-white p-3 rounded-full self-start hover:cursor-pointer hover:bg-gray-900 transition-colors duration-300"
          rel="noreferrer"
        >
          <ArrowOutward className="group-hover:fill-white transition-colors duration-300" />
        </a>
      </header>
      <p className={`text-wrap-balance text-black`}>{project.description}</p>
      <a href={project.link} target="_blank" rel="noreferrer">
        <img
          ref={ref}
          onMouseMove={(e) => handleMouseMove(e, ref.current)}
          onMouseLeave={() => handleMouseLeave(ref.current)}
          loading="lazy"
          className="rounded-lg w-full"
          src={project.img.src}
          alt={project.img.alt}
        />
      </a>
      <footer>
        <Tecnologies tecnologies={project.tecnologies} />
      </footer>
    </article>
  );
};

export default ProjectCard;
