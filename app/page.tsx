import Card from "@/components/Card";
import Carousal2 from "@/components/Carousal2";
import Hero from "@/components/homepage/Hero";
import Home3rdSection from "@/containers/Home3rdSection";

export default function Page() {
  return (
    <main className="flex-grow">
      <Carousal2 />
      <Hero />
      <Card />
      <Home3rdSection />
    </main>
  );
}
