import OpenCollaborate from "./components/OpenCollaborate";
import OpenHero from "./components/OpenHero";
import OpenProjects from "./components/OpenProjects";

export default function OpenView() {
  return (
    <div className="flex flex-col">
      <OpenHero />
      <OpenProjects />
      <OpenCollaborate />
    </div>
  );
}
