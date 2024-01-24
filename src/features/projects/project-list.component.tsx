import { useProjects } from './use-project.hook';

const ProjectList = () => {
  const projects = useProjects();

  if (projects.length <= 0) {
    return <h2>No Projects</h2>;
  }

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          style={{ backgroundColor: 'white', width: '300px', height: '100px' }}
        >
          <h2>{project.title}</h2>
          <p>{project.id}</p>
        </div>
      ))}
    </>
  );
};

export default ProjectList;
