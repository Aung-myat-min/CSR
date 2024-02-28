"use client";
import ItemShowCase from "@/components/itemShowCase";

const items = [
  {
    headers: "Car",
    description: "This is a car",
    url: "https://wallpaperbat.com/img/287163-anime-desktop-wallpaper-top-free-anime-desktop-background.jpg",
    id: 1,
  },
  {
    headers: "Cat",
    description: "This is a Cat",
    url: "https://wallpaperbat.com/img/864500-sung-jin-woo-anime-art-wallpaper-cool-anime-wallpaper-hd-anime-wallpaper-anime-wallpaper.jpg",
    id: 1,
  },
  {
    headers: "Dog",
    description: "This is a Dog",
    url: "https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg",
    id: 1,
  },
  {
    headers: "Car",
    description: "This is a car",
    url: "https://wallpaperbat.com/img/287163-anime-desktop-wallpaper-top-free-anime-desktop-background.jpg",
    id: 1,
  },
  {
    headers: "Cat",
    description: "This is a Cat",
    url: "https://wallpaperbat.com/img/864500-sung-jin-woo-anime-art-wallpaper-cool-anime-wallpaper-hd-anime-wallpaper-anime-wallpaper.jpg",
    id: 1,
  },
  {
    headers: "Dog",
    description: "This is a Dog",
    url: "https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg",
    id: 1,
  },
  {
    headers: "Car",
    description: "This is a car",
    url: "https://wallpaperbat.com/img/287163-anime-desktop-wallpaper-top-free-anime-desktop-background.jpg",
    id: 1,
  },
  {
    headers: "Cat",
    description: "This is a Cat",
    url: "https://wallpaperbat.com/img/864500-sung-jin-woo-anime-art-wallpaper-cool-anime-wallpaper-hd-anime-wallpaper-anime-wallpaper.jpg",
    id: 1,
  },
  {
    headers: "Dog",
    description: "This is a Dog",
    url: "https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg",
    id: 1,
  },
];

export default function App() {
  return (
    <div className="grid grid-cols-3 gap-10 mt-[12vh]">
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
