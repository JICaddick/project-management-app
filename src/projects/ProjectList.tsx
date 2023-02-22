import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}
// the above interface states that the ProjectList component will receive an array of projects as a prop. The ProjectList component will then map over the array of projects and display each project in a card.

function ProjectList({ projects, onSave }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };

  
  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <ul className="row">
{/* //the type of project does not need to be defined because it is defined in the Project interface and imported from Project.tsx in the interface ProjectListProps */}

      {projects?.map((project) => (
        <div className="cols-sm" key={project.id}>
          {project === projectBeingEdited ? (
            <ProjectForm project={project} onCancel={cancelEditing} onSave={onSave}/>
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </ul>
  );
};

export default ProjectList;
