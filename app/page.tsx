import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Discover from "@/components/discover";
import Itineraries from "@/components/itineraries/itineraries";
import Footages from "@/components/footages";
import Articles from "@/components/articles";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Discover />
      <Itineraries />
      <Footages />
      <Articles />
    </main>
  );
}
