import { Link } from '@remix-run/react';

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

export default function Index() {
  return (
    <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory">
      {/* Home Section */}
      <section
        className="h-screen w-full flex items-center justify-center p-8 bg-black relative snap-start"
        id="home"
      >
        <HackerBg className="absolute inset-0 w-full h-full" />
        <div className="max-w-4xl text-center z-10 mt-16">
          <h1 className="text-5xl font-bold mb-4 bg-white text-transparent bg-clip-text drop-shadow-md py-1">
            Collegiate Cyber Defense Club at UCF
          </h1>
          <p className="text-2xl mb-8 text-white font-semibold drop-shadow-md">
            We are the University of Central Florida's only defensive and
            offensive cybersecurity student organization.
          </p>
          <Link
            to="/about-us"
            className="transition-colors border-2 bg-background hover:bg-brandGold text-lg hover:text-background border-brandGold text-brandGold rounded-full py-2 px-4 inline-block"
            aria-label="Learn more about Collegiate Cyber Defense Club"
          >
            🌐 Learn More 🌐
          </Link>
        </div>
      </section>

      {/* Meetings and Membership Section */}
      <section
        className="h-screen w-full flex flex-col justify-center bg-background px-4 py-8 snap-start relative"
        id="meetings"
        aria-label="Club Activities section"
      >
        <BackgroundGrid className="absolute inset-0 w-full h-full" />
        <h2 className="text-3xl font-bold text-center mb-10 sm:mb-12 md:mb-14 text-brandGold relative z-10">
          Club Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr relative z-10">
          {INDEX_CARD_DATA.map(card => (
            <Card
              key={card.id}
              className="bg-background border-brandGold flex flex-col border-2 pb-3"
            >
              <CardHeader className="py-4">
                <CardTitle className="text-brandGold text-lg font-bold">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col pb-4 space-y-4">
                <ImageCarousel imagePaths={card.imageUrls} alt={card.title} />
                <CardDescription className="text-white text-sm">
                  {card.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="py-3">
                <Button className="w-full bg-brandGold hover:bg-brandGoldHover text-background text-sm">
                  {card.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
