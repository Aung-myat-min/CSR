import Card from "@/components/Card";
import Carousal from "@/components/Carousal";

export default function Page() {
  return (
    <div className="flex-grow">
      <Carousal />
      <Card />
    </div>
  );
}
