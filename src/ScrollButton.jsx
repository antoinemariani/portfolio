export default function ScrollButton({ name, icon }) {
  return (
    <a
      className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
      href={"#" + name}
    >
      <span className={icon ? "sr-only" : "text-base"}>
        {name[0].toUpperCase() + name.substring(1, name.length)}
      </span>
      <i className={icon ? icon : "hidden"}></i>
    </a>
  );
}
