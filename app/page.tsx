"use client";
import ItemShowCase from "@/components/itemShowCase";
import Test from "@/public/images/slide.jpg";
import Image from "next/image";

const items = [
  {
    headers: "Car",
    description: "This is a car",
    url: "https://i.pinimg.com/236x/1f/e9/c3/1fe9c3561790f500d4e6151911198389.jpg",
    id: 1,
  },
  {
    headers: "Cat",
    description: "This is a Cat",
    url: "https://i.pinimg.com/236x/16/ca/b1/16cab153397fc070d5369635ba891e8d.jpg",
    id: 1,
  },
  {
    headers: "Dog",
    description: "This is a Dog",
    url: "https://i.pinimg.com/236x/9e/bf/a9/9ebfa99ee766bd67f6d3101778748504.jpg",
    id: 1,
  },
];

export default function App() {
  return (
    <div className="grid grid-cols-1 gap-10">
      {items.map((item, index) => {
        return (
          <ItemShowCase
            key={index}
            header={item.headers}
            description={item.description}
            url={item.url}
            id={item.id}
          />
        );
      })}
    </div>
  );
}
