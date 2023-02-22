import React, { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
}
// the above interface states that the ProjectList component will receive an array of projects as a prop. The ProjectList component will then map over the array of projects and display each project in a card.
function ProjectList({ projects }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };
  
  const items = projects.map((project) => (
    <div key={project.id} className="cols-sm">
      {project === projectBeingEdited ? (
        <ProjectForm onCancel={cancelEditing} />
        ) : (
          <ProjectCard project={project} onEdit={handleEdit} />
          )}
    </div>
  ));
  
  
  return <div className="row">{items}</div>;
}
export default ProjectList;
