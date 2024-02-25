import ThemeSwitch from "./themes/ThemeSwitch"; // Adjust the path based on your project structure
import { BiSun, BiMoon } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <ThemeSwitch />
    </div>
  );
}
