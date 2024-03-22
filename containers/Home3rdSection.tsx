import C1 from "@/public/images/certificates_photos/C1.png";
import C3 from "@/public/images/certificates_photos/C3.png";
import C4 from "@/public/images/certificates_photos/C4.png";
import C5 from "@/public/images/certificates_photos/C5.png";
import C6 from "@/public/images/certificates_photos/C6.png";
import C7 from "@/public/images/certificates_photos/C7.png";
import PhotoList from "./PhotoList";

const photos = [
  {
    src: C1.src,
    width: C1.width,
    height: C1.height,
  },
  {
    src: C3.src,
    width: C3.width,
    height: C3.height,
  },
  {
    src: C4.src,
    width: C4.width,
    height: C4.height,
  },
  {
    src: C5.src,
    width: C5.width,
    height: C5.height,
  },
  {
    src: C6.src,
    width: C6.width,
    height: C6.height,
  },
  {
    src: C7.src,
    width: C7.width,
    height: C7.height,
  },
];
export default function Home3rdSection() {
  return <PhotoList photos={photos} />;
}
