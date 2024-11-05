import { Link } from '@remix-run/react';

import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { id: 'competitions', name: 'Competitions', href: '/competitions' },
  { id: 'ctf', name: 'Capture The Flag Competitions', href: '/ctf' },
  { id: 'ccdc', name: 'CCDC Competition', href: '/ccdc' },
  { id: 'faq', name: 'FAQ', href: '/faq' },
  { id: 'constitution', name: 'Constitution', href: '/constitution' },
  { id: 'nonprofit', name: 'Nonprofit', href: '/nonprofit' },
];

const PARTNER_LINKS = [
  { id: 'citrussec', name: 'Citrussec', href: 'https://www.citrussec.com/' },
  {
    id: 'knighthacks',
    name: 'KnightHacks',
    href: 'https://club.knighthacks.org/',
  },
  {
    id: 'cybersecurity-club-fsu',
    name: 'Cybersecurity Club @ FSU',
    href: 'https://cybersecurity.fsu.edu/club/',
  },
  {
    id: 'whitehatters',
    name: "USF's WhiteHatters",
    href: 'https://wcsc.info/',
  },
  {
    id: 'kernel-sanders',
    name: "UF's Kernel Sanders",
    href: 'https://ufsit.club/',
  },
  {
    id: 'florida-poly-cyber-club',
    name: "Florida Poly's Cyber Club",
    href: 'https://floridapoly.presence.io/organization/cybersecurity-club',
  },
  {
    id: 'cyberpatriot',
    name: 'CyberPatriot',
    href: 'https://www.uscyberpatriot.org/home',
  },
  {
    id: 'florida-cyber-alliance',
    name: 'Florida Cyber Alliance',
    href: 'https://www.floridacyberalliance.org/',
  },
  {
    id: 'isc2-central-florida',
    name: '(ISC)² Central Florida Chapter',
    href: 'https://isc2orlando.org/',
  },
  {
    id: 'owasp-orlando',
    name: 'OWASP Orlando',
    href: 'https://owasp.org/www-chapter-orlando/',
  },
  { id: 'sparsa', name: 'SPARSA', href: 'https://www.sparsa.org/' },
  {
    id: 'electronic-frontier-alliance',
    name: 'Electronic Frontier Alliance',
    href: 'https://www.eff.org/fight/',
  },
];

export default function AboutUs() {
  return (
    <main className="bg-background text-white min-h-screen mt-20 px-8">
      <div className="container mx-auto max-w-6xl py-16">
        <h1 className="text-5xl font-bold mb-16 text-center">About Us</h1>

        {/* Navigation Links */}
        <nav className="bg-background mb-16">
          <div className="container mx-auto px-4">
            <ul className="flex flex-wrap justify-center gap-4">
              {NAV_LINKS.map(link => (
                <li key={link.id}>
                  <Link to={link.href} prefetch="intent">
                    <Button
                      variant="outline"
                      className="border-2 bg-background hover:bg-brandGold text-lg hover:text-background border-brandGold text-brandGold rounded-full p-4"
                    >
                      {link.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Our Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-brandGold">
            Our Mission
          </h2>
          <p className="text-lg">
            We strive to foster a generation that is aware of information
            security, specifically in the Central Florida area. We expect to
            fulfill our mission through getting the campus community involved in
            the cyber realm through education and experience in both offensive
            and defensive security strategies.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-brandGold">
            Our Story
          </h2>
          <div className="space-y-4">
            <p>
              The Collegiate Cyber Defense Club @ UCF was founded back in Fall
              2012 by a small group of eager, security-enthused students. Word
              about the club spread quickly, drawing in dozens of students from
              a variety of majors—even those not belonging to the College of
              Engineering and Computer Science. In Spring 2013, the club
              founders applied to be an official club; the Student Government
              Association named Collegiate Cyber Defense Club a registered
              student organization.
            </p>
            <p>
              The official name, Collegiate Cyber Defense Club, stems from the
              similarly named{' '}
              <Link to="#" className="text-brandGold hover:underline">
                Collegiate Cyber Defense Competition
              </Link>{' '}
              (CCDC). It should be no surprise that we participate in this
              competition; however, that is not all we do. With over 400+
              members to date, we continue to bring that much-needed
              cybersecurity presence to the campus of the University of Central
              Florida through a number of methods:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Compete in offense-based virtual Capture the Flag (CTF)
                competitions
              </li>
              <li>
                Provide tutorials, talks, and workshops to discuss and apply
                offensive and defensive security strategies
              </li>
              <li>
                Invite guest speakers from major companies and corporations in
                the region to discuss security
              </li>
              <li>Take special trips to various companies</li>
            </ul>
            <p>
              For more information, choose a path:{' '}
              <Link to="#" className="text-brandGold hover:underline">
                Defensive Security
              </Link>{' '}
              or{' '}
              <Link to="#" className="text-brandGold hover:underline">
                Offensive Security
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Our Aliases */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-brandGold">
            Our Aliases
          </h2>
          <p className="mb-4">
            We go by several names, often depending on context—whether we're
            representing ourselves on-campus, for instance, or competing in
            virtual competitions:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Hack@UCF</li>
            <li>CCDC</li>
            <li>KnightSec</li>
          </ul>
          <p className="mt-4">
            Check out our{' '}
            <Link to="/faq" className="text-brandGold hover:underline">
              frequently asked questions
            </Link>{' '}
            for more information about us.
          </p>
        </section>

        {/* Our Allies */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-brandGold">
            Our Allies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PARTNER_LINKS.map(ally => (
              <a
                key={ally.id}
                href={ally.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-background border-2 border-brandGold p-4 rounded-lg hover:bg-brandGold transition-colors group overflow-hidden">
                  <span className="text-brandGold group-hover:text-background transition-colors whitespace-nowrap">
                    {ally.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
