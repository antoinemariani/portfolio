import ScrollButton from "./ScrollButton";

export default function ScrollButtons() {
  return (
    <div className="flex justify-center gap-4">
      <ScrollButton name="skills" />
      <ScrollButton name="projects" />
      {/* <ScrollButton name="contact" icon="fa-solid fa-envelope" /> */}
    </div>
  );
}
