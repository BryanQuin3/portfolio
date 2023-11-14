/* eslint-disable react/prop-types */
import { projects } from "../contstants/constants";
import { ProjectCard } from "./ProjectCard";
export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className={` grid place-items-center gap-4 transition-all  md:grid-cols-2 lg:px-0`}
    >
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </section>
  );
};

export default ProjectsSection;
