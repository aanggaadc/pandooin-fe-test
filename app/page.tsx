import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Discover from "@/components/discover";
import Destinations from "@/components/destinations";
import Footages from "@/components/footages";
import Articles from "@/components/articles";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Discover />
      <Destinations />
      <Footages />
      <Articles />
      <Footer />
    </main>
  );
}
