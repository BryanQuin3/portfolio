/* eslint-disable react/prop-types */
import { ArrowOutward } from "./Icons";
import { Tecnologies } from "./Tecnologies";
export const ProjectCard = ({ project }) => {
  return (
    <article
      className={`flex items-center flex-col justify-center gap-4 p-8 h-full  rounded-xl bg-gradient-to-r from-gray-100 via-green-50 to-amber-50 border animate-scroll  hover:shadow-sm`}
    >
      <header className="flex items-center gap-2 justify-between w-full">
        <h3 className={`text-2xl font-semibold text-black`}>{project.name}</h3>
        <a
          title="Ir al proyecto"
          href={project.link}
          target="_blank"
          className="group bg-white p-3 rounded-full self-start hover:cursor-pointer hover:bg-gray-900 transition-colors duration-300 overflow-hidden relative"
          rel="noreferrer"
        >
          <ArrowOutward className="group-hover:fill-white hover:cursor-pointer   group-hover:translate-x-9 group-hover:-translate-y-7 duration-300" />
          <ArrowOutward className="group-hover:fill-white hover:cursor-pointer duration-300 absolute -bottom-5 -left-5 group-hover:translate-x-8 group-hover:-translate-y-8" />
        </a>
      </header>
      <p className={`text-wrap-balance text-black`}>{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        title={`Ir al proyecto ${project.name}`}
      >
        <img
          loading="lazy"
          className="rounded-lg w-full hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-500"
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
