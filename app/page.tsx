import Card from "@/components/Card";
import Carousal from "@/components/Carousal";
import Home3rdSection from "@/containers/Home3rdSection";

export default function Page() {
  return (
    <main className="flex-grow">
      <Carousal />
      <Card />
      <Home3rdSection />
    </main>
  );
}
