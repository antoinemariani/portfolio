export default function Banner() {
  return (
    <div id="banner" className="flex flex-col justify-center">
      <div className="flex min-h-[80vh] flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Antoine Mariani</h1>
        <p className="text-2xl font-bold">Fullstack Developer</p>
      </div>

      <div id="link" className="mb-8 self-center">
        <a
          className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          href="#projects"
        >
          <span className="sr-only"> Download </span>
          <i className="fa-solid fa-arrow-down"></i>
        </a>
      </div>
    </div>
  );
}
