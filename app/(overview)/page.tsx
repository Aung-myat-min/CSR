import Card from "@/components/Card";
import Carousal2 from "@/components/Carousal2";
import FAQs from "@/components/homepage/FAQs";
import Founded from "@/components/homepage/Founded";
import Hero from "@/components/homepage/Hero";
import Members from "@/components/homepage/Members";
import { ScrollOnAppear } from "@/components/ScrollOnAppear";
import Home3rdSection from "@/containers/Home3rdSection";

export default function Page() {
  return (
    <main className="flex-grow">
      <Carousal2 />
      <ScrollOnAppear>
        <Hero />
      </ScrollOnAppear>
      <ScrollOnAppear>
        <Founded />
      </ScrollOnAppear>
      <ScrollOnAppear>
        <Members />
      </ScrollOnAppear>
      <ScrollOnAppear>
        {/* @ts-expect-error Server Component */}
        <Card />
      </ScrollOnAppear>
      <ScrollOnAppear>
        <FAQs />
      </ScrollOnAppear>
      <ScrollOnAppear>
        <Home3rdSection />
      </ScrollOnAppear>
    </main>
  );
}
