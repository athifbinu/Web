import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard projectData={project} key={project.id} />
      ))}
    </>
  );
};

export default ProjectList;
