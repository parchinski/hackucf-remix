import { Image } from '@unpic/react';

export default function Razrab() {
  return (
    <div className="mt-20 flex justify-center items-center">
      <Image
        src="/villager.webp"
        alt="Villager"
        width={800}
        height={800}
        objectFit="cover"
        className="w-full h-full pt-20 z-200"
        priority={true}
      />
    </div>
  );
}
