import { Link } from '@remix-run/react';
import { Instagram, Twitter, Github, Linkedin } from 'lucide-react';
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

  const SOCIAL_LINKS = [
    {
      id: 'instagram',
      icon: <Instagram className="h-6 w-6" />,
      url: 'https://www.instagram.com',
      label: 'Instagram',
    },
    {
      id: 'twitter',
      icon: <Twitter className="h-6 w-6" />,
      url: 'https://www.twitter.com',
      label: 'Twitter',
    },
    {
      id: 'github',
      icon: <Github className="h-6 w-6" />,
      url: 'https://www.github.com',
      label: 'GitHub',
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="h-6 w-6" />,
      url: 'https://www.linkedin.com',
      label: 'LinkedIn',
    },
  ];

  const ACTION_LINKS = [
    { id: 'join-the-fun', text: 'Join the Fun', url: '#' },
    { id: 'hop-on-discord', text: 'Hop on Discord', url: '#' },
    { id: 'view-the-calendar', text: 'View the Calendar', url: '#' },
    { id: 'present-at-meeting', text: 'Present at a Meeting', url: '#' },
    { id: 'join-mailing-list', text: 'Join the Mailing List', url: '#' },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Home Section */}
      <section
        className="h-screen flex items-center justify-center p-8 bg-background relative scroll-mt-16"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {CARD_DATA.map(card => (
            <Card
              key={card.id}
              className="bg-background border-brandGold flex flex-col mt-12 border-2 pb-3"
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
                    width={340}
                    height={300}
                    className="w-full h-full object-cover"
                    loading="lazy"
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

      {/* Stay Connected Section */}
      <section
        className="min-h-screen flex flex-col justify-center bg-background px-8 scroll-mt-16"
        id="connect"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-brandGold">
            Stay Connected
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-8 text-white">
            You can follow us on social media to stay tuned for job and
            internship opportunities, or get updated when we hold a meeting.
            Don't forget to join our Discord!
          </p>
          <div className="flex justify-center space-x-6">
            {SOCIAL_LINKS.map(social => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brandGold hover:bg-brandGoldHover text-background h-12 w-12 flex items-center justify-center rounded-md"
                aria-label={`Follow us on ${social.label}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {ACTION_LINKS.map(action => (
            <Link
              key={action.id}
              to={action.url}
              className="bg-background hover:bg-brandGold hover:text-background border-brandGold text-brandGold border-2 py-2 px-4 rounded"
            >
              {action.text}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
