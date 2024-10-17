import { useState, useEffect, useRef } from 'react';
import { Image } from '@unpic/react';

interface ImageCarouselProps {
  imagePaths: string[];
  alt: string;
}

export default function ImageCarousel({ imagePaths, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalImages = imagePaths.length;

  useEffect(() => {
    if (imagePaths.length === 0) return;

    const timer = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalImages);
    }, 8000);

    return () => clearInterval(timer);
  }, [imagePaths, currentIndex, totalImages]);

  useEffect(() => {
    if (previousIndex === totalImages - 1 && currentIndex === 0) {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 180);
    }
  }, [currentIndex, previousIndex, totalImages]);

  if (!imagePaths || imagePaths.length === 0) {
    console.error('ERROR: No image paths loaded');
    return null;
  }

  const getTransformStyle = () => {
    if (previousIndex === totalImages - 1 && currentIndex === 0) {
      return `translateX(-${currentIndex * 100}%)`;
    }
    if (previousIndex === 0 && currentIndex === totalImages - 1) {
      return `translateX(-${(totalImages + 1) * 100}%)`;
    }
    return `translateX(-${currentIndex * 100}%)`;
  };

  const renderImage = (path: string, imageAlt: string, priority = false) => (
    <Image
      src={`/${path}`}
      alt={imageAlt}
      layout="constrained"
      width={1112}
      height={834}
      className="w-full h-auto"
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
    />
  );

  const generateUniqueId = (prefix: string, path: string) =>
    `${prefix}-${path}`;

  return (
    <div className="w-full h-auto relative overflow-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform ease-in-out duration-500"
        style={{
          transform: getTransformStyle(),
          transition: isTransitioning ? 'none' : 'transform 0.5s ease-in-out',
        }}
      >
        <div
          key={generateUniqueId('last', imagePaths[totalImages - 1])}
          className="w-full flex-shrink-0"
        >
          {renderImage(imagePaths[totalImages - 1], `${alt} last clone`)}
        </div>

        {imagePaths.map((image, index) => (
          <div
            key={generateUniqueId('main', image)}
            className="w-full flex-shrink-0"
          >
            {renderImage(image, `${alt} ${index + 1}`, index === 0)}
          </div>
        ))}

        <div
          key={generateUniqueId('first', imagePaths[0])}
          className="w-full flex-shrink-0"
        >
          {renderImage(imagePaths[0], `${alt} first clone`)}
        </div>
      </div>
    </div>
  );
}
