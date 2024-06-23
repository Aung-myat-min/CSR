"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import P1 from "@/public/images/P1.jpg";
import P2 from "@/public/images/P2.jpg";
import P3 from "@/public/images/P3.png";

interface Slide {
  id: number;
  url: string;
}

const slides: Slide[] = [
  { id: 1, url: P1.src },
  { id: 2, url: P2.src },
  { id: 3, url: P3.src },
];

/**
 * Carousel component that displays a slideshow of images.
 */
const Carousel: React.FC = () => {
  // State to keep track of the current slide index.
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Ref to the carousel container div.
  const slideRef = useRef<HTMLDivElement>(null);

  // Interval ID for the slide interval.
  let slideInterval: ReturnType<typeof setInterval>;

  /**
   * Set up the slide interval and event listeners on mount.
   * Clean up the slide interval and event listeners on unmount.
   */
  useEffect(() => {
    const slider = slideRef.current;

    /**
     * Start the slide interval.
     */
    const startSlider = () => {
      slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
    };

    /**
     * Pause the slide interval.
     */
    const pauseSlider = () => {
      clearInterval(slideInterval);
    };

    if (slider) {
      slider.addEventListener("mouseenter", pauseSlider);
      slider.addEventListener("mouseleave", startSlider);

      startSlider();
    }

    return () => {
      clearInterval(slideInterval);
      if (slider) {
        slider.removeEventListener("mouseenter", pauseSlider);
        slider.removeEventListener("mouseleave", startSlider);
      }
    };
  }, []);

  /**
   * Handle click event for the 'Next' button.
   * Move to the next slide.
   */
  const handleOnNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  /**
   * Handle click event for the 'Previous' button.
   * Move to the previous slide.
   */
  const handleOnPrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section>
      {/* Carousel container div */}
      <div
        ref={slideRef}
        className="max-w-[1920px] lg:h-[550px] md:h-[450px] xl:h-[580px] h-[280px] w-11/12 m-auto lg:mt-28 md:mt-24 xl:mt-30 mt-20 relative group overflow-hidden rounded-2xl"
      >
        {/* Slides container */}
        <div
          className="h-full bg-center bg-cover duration-500 flex"
          style={{
            transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {/* Render each slide */}
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full h-full bg-center bg-cover duration-500"
              style={{ backgroundImage: `url(${slide.url})` }}
            ></div>
          ))}
        </div>

        {/* Slide navigation buttons */}
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button
            aria-label="Previous Slide"
            className="bg-content dark:bg-background text-background dark:text-content p-1 rounded-full bg-opacity-50 dark:bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <BsChevronCompactLeft size={30} />
          </button>
          <button
            aria-label="Next Slide"
            className="bg-content dark:bg-background text-background dark:text-content p-1 rounded-full bg-opacity-50 dark:bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <BsChevronCompactRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
