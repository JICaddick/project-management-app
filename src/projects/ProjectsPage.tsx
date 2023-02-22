import { MOCK_PROJECTS } from "./MockProjects";
//MOCK_PROJECTS is an array of objects, each object is a project. We're going to display the projects in a list and so we need to stringify the array of objects to display it in the browser. The second argument is a replacer function so we can pass null because we don't need to replace anything. The third argument is the number of spaces to use for indentation. We're going to use 2 spaces for indentation.

export default function ProjectsPage() {
  return (
    <>
      <pre>
        <h1>Projects</h1>
        {JSON.stringify(MOCK_PROJECTS, null, ' ')}
      </pre>
    </>
  );
}