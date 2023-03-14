import Skills from "./Skills.jsx";
import ScrollButton from "./ScrollButton.jsx";
import profilePic from "./img/profile-pic.jpeg";
import ScrollButtons from "./ScrollButtons.jsx";

export default function Banner() {
  return (
    <div className="">
      <div className="flex min-w-full max-w-[100vh] flex-wrap items-center justify-around bg-white text-center">
        <div id="banner" className="flex min-w-[50vh] flex-col justify-center">
          <div className="flex min-h-[80vh] flex-col items-center justify-center gap-8">
            <img
              className="w-48 h-48 rounded-full shadow-md"
              src={profilePic}
              alt="Antoine Mariani"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold text-gray-800">
                Antoine Mariani
              </h1>
              <p className="text-2xl font-bold text-gray-800">
                Fullstack Developer
              </p>
            </div>
            <div
              id="link"
              align="center"
              className="self-center mt-8 mb-8 sm:block md:hidden lg:hidden"
            >
              <ScrollButton
                name="banner-skills"
                icon="fa-solid fa-arrow-down"
              />
              {/* <ScrollButtons /> */}
              {/* <a
                className="inline-block p-3 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                href="#projects"
              >
                <span className="sr-only"> Download </span>
                <i className="fa-solid fa-arrow-down"></i>
              </a> */}
            </div>
          </div>
        </div>
        <div id="banner-skills" className="sm:hidden md:block">
          <Skills />
        </div>
      </div>
      <div
        id="link"
        align="center"
        className="self-center mt-8 mb-8 sm:hidden md:block lg:block"
      >
        <ScrollButton name="projects" icon="fa-solid fa-arrow-down" />
      </div>
    </div>
  );
}
