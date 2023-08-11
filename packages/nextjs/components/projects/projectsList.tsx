import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "~~/queries/queries";

const ProjectsList = () => {
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const projects = data.projects;

  return (
    <div>
      {projects.map((project: any) => (
        <div key={project.id}>{/* Display project details here */}</div>
      ))}
    </div>
  );
};

export default ProjectsList;
