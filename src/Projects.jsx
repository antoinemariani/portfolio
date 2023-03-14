import Project from "./Project.jsx";
import projects from "./projects.js";

function Projects() {
  const projectsComponents = projects.map((project) => {
    return (
      <Project
        key={project.key}
        name={project.name}
        url={project.url}
        description={project.description}
        img={project.img}
        tech={project.tech}
      />
    );
  });

  return (
    <div id="projects" className="container flex flex-col justify-center my-16">
      <h2 className="pb-8 text-4xl font-bold text-gray-800">Projects</h2>
      <div className="flex flex-wrap justify-around gap-16">
        {projectsComponents}
      </div>
    </div>
  );
}

export default Projects;
