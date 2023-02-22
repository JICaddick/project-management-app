import { Project } from './Project';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}
// the above interface states that the ProjectList component will receive an array of projects as a prop. The ProjectList component will then map over the array of projects and display each project in a card.
function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="row">
      {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
      ))}
    </div>
  );
}
export default ProjectList;