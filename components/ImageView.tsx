"use client";
import PhotoAlbum from "react-photo-album";
import P2 from "@/public/images/P2.jpg";
import P1 from "@/public/images/P1.jpg";
import P3 from "@/public/images/P3.png";
import NextJsImage from "@/components/NextJsImage";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
const photos = [
  {
    src: P1.src,
    width: P1.width,
    height: P1.height,
  },
  {
    src: P2.src,
    width: P2.width,
    height: P2.height,
  },
  {
    src: P3.src,
    width: P2.width,
    height: P3.height,
  },
];

export default function ImageView() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        renderPhoto={NextJsImage}
        defaultContainerWidth={1200}
        sizes={{ size: "calc(100vw - 240px)" }}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
