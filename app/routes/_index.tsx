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

export default function Index() {
  const CARD_DATA = [
    {
      id: 'meetings',
      title: 'Meetings',
      description:
        'We hold meetings during the fall and spring semesters. Topics range from current events to security software tools and even hardware. Often special guests from various businesses and organizations will present on advanced special topics like reverse engineering and exploitation.',
      buttonText: 'View Our Calendar',
      imageURL: '/meetings.jpg',
    },
    {
      id: 'cyber-teams',
      title: 'Cyber Teams',
      description:
        "One component of the club involves applying defensive security strategies in order to rigorously protect computers from being compromised. Our competition teams are dedicated to learning the 'ins and outs' of administering and hardening systems to defend against some of today's leading threats.",
      buttonText: 'About CCDC',
      imageURL: '/cyber-teams.jpg',
    },
    {
      id: 'cyber-games',
      title: 'Cyber Games',
      description:
        'A second component of the club involves learning how attackers leverage exploits and gain control of systems. At our CTF competitions, students have the opportunity to research, explore, and exploit vulnerabilities. Through collaborating on thought-provoking games and challenges, club members are able to learn the skills necessary to becoming a security professional.',
      buttonText: 'About CTFs',
      imageURL: '/cyber-games.jpg',
    },
    {
      id: 'membership',
      title: 'Membership',
      description:
        "If you like breaking stuff, problem solving, hacker-talk, or even just expressing your true 1337ness, then you definitely want to get involved. It is so neat to be around people with the same interests. It is at our meetings, competitions, and special events that we encourage you to unleash your inner nerd. Joining is a breeze. Don't skip out.",
      buttonText: 'Join Now',
      imageURL: '/membership.jpg',
    },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Home Section */}
      <section
        className="h-screen flex items-center justify-center p-8 bg-black relative scroll-mt-16"
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
        className="min-h-screen flex flex-col justify-center bg-background px-4 py-8 scroll-mt-16"
        id="meetings"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-brandGold">
          Club Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {CARD_DATA.map(card => (
            <Card
              key={card.id}
              className="bg-background border-brandGold flex flex-col border-2 pb-3"
            >
              <CardHeader className="py-3">
                <CardTitle className="text-brandGold text-lg font-bold">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col pb-2 space-y-4">
                <div className="w-full h-auto relative aspect-w-16 aspect-h-9">
                  <img
                    src={card.imageURL}
                    alt={`${card.title}`}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
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
