/* eslint-disable react/prop-types */
import { projects } from "../contstants/constants";
import { ProjectCard } from "./ProjectCard";
export const ProjectsSection = () => {
  return (
    <section className="mt-10 grid place-items-center gap-4 px-6 md:grid-cols-2 lg:px-0 ">
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </section>
  );
};

export default ProjectsSection;
