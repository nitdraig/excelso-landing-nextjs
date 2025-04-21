import AboutHero from "./components/AboutHero";
import AboutValues from "./components/AboutValues";

export default function AboutView() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutValues />
    </div>
  );
}
