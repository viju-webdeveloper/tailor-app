'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Clothes } from '../data/clothes';
import ClothesCard from './ClothesCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  clothes: Clothes[];
}

export default function ClothesSlider({ clothes }: Props) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    mode: 'free',
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2.2 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3 },
      },
      '(min-width: 1400px)': {
        slides: { perView: 4 },
      },
    },
  });

  const handlePrev = () => {
    if (slider.current) slider.current.prev();
  };

  const handleNext = () => {
    if (slider.current) slider.current.next();
  };

  return (
    <div className="flex items-center w-full">
      {/* Left Arrow */}
      <div className="w-10 sm:w-14 flex justify-center">
        <button
          onClick={handlePrev}
          className="bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Slider Section */}
      <div className="flex-1 overflow-hidden">
        <div ref={sliderRef} className="keen-slider px-4 sm:px-6 md:px-8">
          {clothes.map((cloth) => (
            <div key={cloth.id} className="keen-slider__slide">
              <ClothesCard cloth={cloth} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <div className="w-10 sm:w-14 flex justify-center">
        <button
          onClick={handleNext}
          className="bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
