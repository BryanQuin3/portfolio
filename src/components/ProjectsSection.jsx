/* eslint-disable react/prop-types */
import { projects } from "../contstants/constants";
import { ProjectCard } from "./ProjectCard";
import { useRef, useEffect } from "react";
export const ProjectsSection = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.remove("opacity-0");
          entries[0].target.classList.add("animate-fadeZoomIn");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
  }, []);
  return (
    <section
      ref={ref}
      className={`mt-14 opacity-0 grid place-items-center gap-4 transition-all  md:grid-cols-2 lg:px-0`}
    >
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </section>
  );
};

export default ProjectsSection;
