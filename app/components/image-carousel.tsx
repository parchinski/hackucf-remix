import { useState, useEffect } from 'react';

interface ImageCarouselProps {
  imagePaths: string[];
  alt: string;
}

export default function ImageCarousel({ imagePaths, alt }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagePaths.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [imagePaths.length]);

  return (
    <div className="w-full h-auto relative aspect-w-16 aspect-h-9 overflow-hidden">
      {imagePaths.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`${alt} ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  );
}
