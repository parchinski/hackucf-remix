import { Link } from '@remix-run/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import HackerBg from '@/components/ui/hacker-bg';
import BackgroundGrid from '@/components/ui/grid-bg';
import ImageCarousel from '@/components/image-carousel';
import { INDEX_CARD_DATA } from '@/lib/cardData';

function ScrollArrow({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="hidden md:flex absolute bottom-24 left-3/6 transform -translate-x-1/2 animate-bounce transition-colors duration-600 ease-in-out hover:text-brandGoldHover"
      aria-label="Scroll to next section"
    >
      <ChevronDown className="sm:w-8 sm:h-8 md:w-12 md:h-12 text-brandGold opacity-70" />
    </button>
  );
}

export default function Index() {
  const clubActivitiesRef = useRef<HTMLElement>(null);

  const scrollToNextSection = () => {
    clubActivitiesRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="w-full overflow-y-auto scroll-smooth">
      {/* Home Section */}
      <section className="min-h-screen w-full flex items-center justify-center px-8 bg-black relative">
        <HackerBg className="absolute inset-0 w-full h-full" />
        <div className="max-w-4xl text-center z-10 mt-16">
          <h1 className="text-5xl font-bold bg-white text-transparent bg-clip-text drop-shadow-md py-1 animate-fade-in-up">
            HACK@UCF
          </h1>
          <h1 className="text-5xl font-bold mb-4 bg-white text-transparent bg-clip-text drop-shadow-md py-1 animate-fade-in-up">
            Collegiate Cyber Defense Club
          </h1>
          <p className="text-2xl mb-8 text-white font-semibold drop-shadow-md animate-fade-in-up animation-delay-300">
            We are the University of Central Florida's only defensive and
            offensive cybersecurity student organization.
          </p>
          <Link
            to="/about-us"
            prefetch="intent"
            className="transition-colors border-2 bg-background hover:bg-brandGold text-lg hover:text-background border-brandGold text-brandGold rounded-full py-2 px-4 inline-block animate-fade-in-up animation-delay-500"
            aria-label="Learn more about Collegiate Cyber Defense Club"
          >
            🌐 Learn More 🌐
          </Link>
        </div>
        <ScrollArrow onClick={scrollToNextSection} />
        {/* Add transition overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-20" />
      </section>

      {/* Meetings and Membership Section */}
      <section
        className="min-h-screen w-full flex flex-col justify-top bg-background px-4 sm:px-8 relative overflow-hidden"
        aria-label="Club Activities section"
        ref={clubActivitiesRef}
      >
        <BackgroundGrid className="absolute inset-0 w-full h-full" />
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white relative z-10">
          Club Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 overflow-y-auto">
          {INDEX_CARD_DATA.map(card => (
            <Card
              key={card.id}
              className="bg-background border-brandGold flex flex-col border-2 pb-3 h-auto"
            >
              <CardHeader className="py-3 sm:py-4">
                <CardTitle className="text-brandGold sm:text-lg md:text-xl font-bold">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col pb-3 sm:pb-4 space-y-3 sm:space-y-4">
                <div className="overflow-hidden">
                  <ImageCarousel imagePaths={card.imageUrls} alt={card.title} />
                </div>
                <CardDescription className="text-white text-xs sm:text-sm">
                  {card.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="py-2 sm:py-3">
                <Button
                  asChild
                  className="w-full bg-brandGold hover:bg-brandGoldHover text-background text-xs sm:text-sm"
                >
                  <Link to={card.link} prefetch="intent">
                    {card.buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
