function Project({ name, url }) {
  const projectName = name;
  const projectUrl = url;
  return (
    <div>
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{projectName}</div>
          <p className="text-base text-gray-700">{projectUrl}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
