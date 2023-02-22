import Project from "./Project.jsx";

function Projects() {
  const projects = [
    {
      name: "Pomodoro Vite.js",
      url: "/pomodoro-vitejs",
    },
    {
      name: "My First Landing Page",
      url: "/landing",
    },
    {
      name: "Profile Page",
      url: "/profile",
    },
    {
      name: "GitHub",
      url: "https://www.github.com/antoinemariani",
    },
    {
      name: "Re:Cycle - Bike Repair App",
      url: "https://www.recycle-velo.me",
    },
  ];

  const projectsComponents = projects.map((project) => {
    <Project name={project.name} url={project.url} />;
  });

  return (
    <div className="flex flex-col items-center justify-center">
      {projectsComponents}
    </div>
  );
}

export default Projects;
