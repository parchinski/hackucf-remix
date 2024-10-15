import { useState, useEffect } from 'react';
import { Image } from '@unpic/react';

interface ImageCarouselProps {
  imagePaths: string[];
  alt: string;
}

export default function ImageCarousel({ imagePaths, alt }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (imagePaths.length === 0) return;

    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagePaths.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [imagePaths]);

  if (!imagePaths || imagePaths.length === 0) {
    console.error(
      'ERROR: BRO WHAT IS HAPPENING WITH IMAGE LOADING! NO IMAGE PATHS LOADED',
    );
    return null;
  }

  return (
    <div className="w-full h-auto relative overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {imagePaths.map((image, index) => (
          <div key={image} className="w-full flex-shrink-0">
            <Image
              src={`/${image}`}
              alt={`${alt} ${index + 1}`}
              layout="constrained"
              width={1600}
              height={900}
              className="w-full h-auto"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
