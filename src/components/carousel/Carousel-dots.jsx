// src/components/carousel/Carousel-dots.jsx

import { useCallback, useEffect, useState } from "react";

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export const DotButton = ({ onClick, selected }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`transition-all duration-300 h-1 rounded-full ${
        selected ? "bg-black w-8" : "bg-gray-300 w-6"
      }`}
    />
  );
};
