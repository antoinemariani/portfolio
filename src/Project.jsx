function Project({ name, url, img, description, tech }) {
  const projectName = name;
  const projectUrl = url;
  const projectImg = img;
  const projectDescription = description;
  const projectTech = tech;

  return (
    <a href={projectUrl} id={projectName} className="group m-8 block">
      <img
        src={projectImg}
        alt={projectName}
        className="h-[350px] rounded-md object-cover shadow-md sm:h-[450px]"
      />

      <div className="mt-3 flex justify-between text-sm">
        <div className="text-left">
          <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {projectName}
          </h3>

          <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
            {projectDescription}
          </p>
        </div>

        <p className="text-gray-500">{projectTech}</p>
      </div>
    </a>
  );
}

export default Project;
