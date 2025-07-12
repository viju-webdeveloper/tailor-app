'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Product } from '../data/products';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  products: Product[];
}

export default function ProductSlider({ products }: Props) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    mode: 'free',
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 800px)': {
        slides: { perView: 2 },
      },
      '(min-width: 1200px)': {
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
      {/* Left Arrow Section */}
      <div className="w-12 sm:w-16 flex justify-center">
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
          {products.map((product) => (
            <div key={product.id} className="keen-slider__slide">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow Section */}
      <div className="w-12 sm:w-16 flex justify-center">
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
