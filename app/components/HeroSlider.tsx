'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useRef } from 'react';
import Image from 'next/image';

const images = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
  '/images/banner3.jpg',
];

export default function HeroSlider() {
  // Autoplay plugin for Keen Slider
  function AutoplayPlugin(slider: any) {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;
    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, 3000);
    }
    slider.on('created', () => {
      slider.container.addEventListener('mouseover', () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener('mouseout', () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on('dragStarted', clearNextTimeout);
    slider.on('animationEnded', nextTimeout);
    slider.on('updated', nextTimeout);
  }

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
    },
  }, [AutoplayPlugin]);

  return (
    <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
      {images.map((src, i) => (
        <div key={i} className="keen-slider__slide">
          <Image
            width={1600}
            height={300}
            src={src}
            alt={`Banner ${i + 1}`}
            className="w-full h-[300px] object-cover"
          />
        </div>
      ))}
    </div>
  );
}
