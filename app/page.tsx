import Card from "@/components/Card";
import Carousal2 from "@/components/Carousal2";
import Founded from "@/components/homepage/Founded";
import Hero from "@/components/homepage/Hero";
import Home3rdSection from "@/containers/Home3rdSection";

export default function Page() {
  return (
    <main className="flex-grow">
      <Carousal2 />
      <Hero />
      <Founded />
      <Card />
      <Home3rdSection />
    </main>
  );
}
