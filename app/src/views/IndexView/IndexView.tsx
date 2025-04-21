import IndexCTA from "./components/IndexCTA";
import IndexStats from "./components/IndexStats";
import IndexHero from "./components/IndexHero";
import IndexOurDivisions from "./components/IndexOurDivisions";

export default function Home() {
  return (
    <div className="flex flex-col">
      <IndexHero />
      <IndexOurDivisions />
      <IndexStats />
      <IndexCTA />
    </div>
  );
}
