import { Link } from '@remix-run/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// deemed to small for own file
const FAQ_ITEMS = [
  {
    id: 'item-1',
    question: 'What is a capture-the-flag?',
    answer:
      'A capture-the-flag (CTF) is a type of computer security competition. Participants attempt to find hidden "flags" by solving challenges related to various cybersecurity topics.',
  },
  {
    id: 'item-2',
    question: 'What skills are tested?',
    answer:
      "CTFs test a wide range of skills including cryptography, web exploitation, reverse engineering, binary exploitation, and more. It's a great way to develop practical cybersecurity skills.",
  },
  {
    id: 'item-3',
    question: 'Do you publish solutions for challenges?',
    answer:
      "We typically don't publish solutions publicly, but we do discuss them in our meetings and provide guidance to our members.",
  },
  {
    id: 'item-4',
    question: 'I know nothing. Can I play?',
    answer:
      'We welcome beginners and provide resources to help you get started. Many of our experienced members started with no prior knowledge.',
  },
];

const STATISTICS = [
  { id: 'stat-1', value: '7th', label: 'Top US Academic Team' },
  { id: 'stat-2', value: '16th', label: 'Top American Team' },
  { id: 'stat-3', value: '102nd', label: 'Top International Team' },
];

export default function Competitions() {
  return (
    <main className="min-h-screen p-8 bg-background text-foreground pt-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16 mt-8">
          <h1 className="text-5xl font-bold">Competitions</h1>
          <Link
            to="/about-us"
            className="text-center border-2 bg-background hover:bg-brandGold text-lg hover:text-background border-brandGold text-brandGold rounded-full w-full mt-16 py-1"
          >
            Back to About Us
          </Link>
        </div>
        <p className="mb-12 text-xl">
          Hack@UCF participates in both offensive and defensive security across
          our two teams, KnightSec and the UCF Collegiate Cybersecurity
          Competition (C3) Team.
        </p>

        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold">KnightSec</h2>
          <p className="mb-4">
            <span className="text-brandGold">KnightSec</span> is our club's
            cyber competition team, which competes in capture-the-flag (CTF)
            competitions year-round and smaller defensive competitions like NCAE
            CyberGames, HiveStorm, and more. All Hack@UCF members are able to
            participate in these competitions; no try-outs or prior experience
            required.
          </p>
          <p className="mb-8">
            For those getting into cybersecurity, CTFs allow you to practice
            your offensive security (red team) skills in a safe, legal, and
            gamified environment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            {STATISTICS.map(stat => (
              <div key={stat.id} className="text-center mt-16">
                <p className="mb-2 text-5xl font-bold">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map(item => (
              <AccordionItem
                className="border border-brandGold rounded-lg my-4"
                key={item.id}
                value={item.id}
              >
                <AccordionTrigger className="px-4 py-2 hover:bg-brandGold hover:text-background rounded-md transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-semibold">UCF C3 Teams</h2>
          <p className="mb-4">
            The UCF College of Engineering and Computer Science sponsors the{' '}
            <span className="text-brandGold">
              Collegiate Cybersecurity Competition (C3) Team
            </span>
            , our application-only cybersecurity team. This team, managed and
            coached by UCF faculty, competes in (and wins) the largest
            cybersecurity competitions in the country, including the Collegiate
            Cyber Defense Competition (CCDC), Collegiate Penetration Testing
            Competition (CPTC), the U.S. Department of Energy's CyberForce, and
            the NSA Cybersecurity exercise (NCX-CAE).
          </p>
          <p>
            If you are interested in applying for the team, fill out the
            application at{' '}
            <a
              href="http://bit.ly/UCF-C3Team"
              className="text-brandGold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              bit.ly/UCF-C3Team
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
