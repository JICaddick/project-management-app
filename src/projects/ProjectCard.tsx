import { Project } from "./Project";

function formatDescription(description: string): string {
  return description.substring(0, 60) + "...";
}
// The difference between interfaces and types is that types can be used to define primitives, unions, and tuples, while interfaces can only be used to define objects. In addition, types can be used to define a type alias, while interfaces cannot.
// interfaces are preferred over types when defining props for a component. The reason for this is that interfaces can be extended, while types cannot. This means that if you want to add a new prop to a component, you can simply extend the interface, instead of having to change the type definition.
// onEdit is a callback function that will be called when the Edit button is clicked. The callback function will be passed the project that is being edited. It returns a void value.
interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

function ProjectCard(props: ProjectCardProps) {
  const { project, onEdit } = props;
  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  };
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
        <button
          className=" bordered"
          onClick={() => {
            handleEditClick(project);
          }}
        >
          <span className="icon-edit "></span>
          Edit
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;
