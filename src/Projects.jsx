import Project from "./Project.jsx";
import pomodoroImg from "./img/pomodoro.png";
import recycleImg from "./img/recycle.png";
import blablaflightImg from "./img/blablaflight.png";
import profileImg from "./img/profile.png";
import landingImg from "./img/landing.png";

function Projects() {
  const projects = [
    {
      key: 1,
      name: "Pomodoro Vite.js",
      url: "/pomodoro-vitejs",
      img: pomodoroImg,
      description: "A Pomodoro timer built with Vite.js",
    },
    {
      key: 2,
      name: "Re:Cycle",
      url: "https://www.recycle-velo.me",
      img: recycleImg,
      description:
        "Online bike repair diagnosis & services website, made with Ruby on Rails, PostgreSQL, JavaScript & StimulusJS",
    },
    {
      key: 3,
      name: "BlaBlaFlight",
      url: "https://www.github.com/blablaflight",
      img: blablaflightImg,
      description:
        "Flightpooling app, made with Ruby on Rails, PostgreSQL, JavaScript & StimulusJS",
    },
    {
      key: 4,
      name: "Profile Page",
      url: "/profile",
      img: profileImg,
      description: "A pedagogical profile page built in vanilla HTML/CSS",
    },
    {
      key: 5,
      name: "My First Landing Page",
      url: "/landing",
      img: landingImg,
      description: "A pedagogical landing page built in vanilla HTML/CSS",
    },

    // {
    //   key: 6,
    //   name: "GitHub",
    //   url: "https://www.github.com/antoinemariani",
    //   img: "",
    //   description: "",
    // },
  ];

  const projectsComponents = projects.map((project) => {
    return (
      <Project
        key={project.key}
        name={project.name}
        url={project.url}
        description={project.description}
        img={project.img}
      />
    );
  });

  return (
    <div id="projects" className="container my-16 flex">
      <div className="flex flex-wrap justify-around gap-16">
        {projectsComponents}
      </div>
    </div>
  );
}

export default Projects;
