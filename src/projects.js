import pomodoroImg from "./img/pomodoro.png";
import recycleImg from "./img/recycle.png";
import blablaflightImg from "./img/blablaflight.png";
import profileImg from "./img/profile.png";
import landingImg from "./img/landing.png";
import restaurantImg from "./img/restaurant.png";

let key = 1;
const projects = [
  {
    key: key++,
    name: "New Paris Restaurant",
    url: "https://www.github.com/antoinemariani/eunoe-restaurant",
    img: restaurantImg,
    description:
      "A restaurant website & booking system, made with Ruby on Rails, PostgreSQL and TailwindCSS",
    tech: "Ruby on Rails",
  },
  {
    key: key++,
    name: "Re:Cycle",
    url: "https://www.recycle-velo.me",
    img: recycleImg,
    tech: "Ruby on Rails",
    description:
      "Online bike repair diagnosis & services website, made with Ruby on Rails, PostgreSQL, JavaScript & StimulusJS",
  },
  {
    key: key++,
    name: "Pomodoro Vite.js",
    url: "/pomodoro-vitejs",
    img: pomodoroImg,
    tech: "Vite.js",
    description: "A Pomodoro timer built with Vite.js",
  },
  {
    key: key++,
    name: "BlaBlaFlight",
    url: "https://www.github.com/antoinemariani/blablaflight",
    img: blablaflightImg,
    tech: "Ruby on Rails",
    description:
      "Flightpooling app, made with Ruby on Rails, PostgreSQL, JavaScript & StimulusJS",
  },
  {
    key: key++,
    name: "Profile Page",
    url: "/profile",
    img: profileImg,
    tech: "HTML/CSS",
    description: "A pedagogical profile page built in vanilla HTML/CSS",
  },
  {
    key: key++,
    name: "My First Landing Page",
    url: "/landing",
    img: landingImg,
    tech: "HTML/CSS",
    description: "A pedagogical landing page built in vanilla HTML/CSS",
  },
  // {
  //   key: key++,
  //   name: "GitHub",
  //   url: "https://www.github.com/antoinemariani/portfolio",
  //   img: "",
  //   description: "",
  // },
];

export default projects;
