import type { MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';
import { Image } from '@unpic/react';
import { Mail } from 'lucide-react';
import { DiscordLogoIcon as Discord } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'WiCyS @ UCF' },
    {
      name: 'description',
      content:
        'Women in CyberSecurity (WiCyS) chapter at the University of Central Florida',
    },
  ];
};

export default function WiCyS() {
  return (
    <main className="bg-background text-white min-h-screen mt-20 px-8">
      <div className="container mx-auto max-w-6xl py-16">
        <h1 className="text-5xl font-bold mb-16 text-center">WiCyS @ UCF</h1>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-6">
              Women in CyberSecurity (WiCyS) is a leading global organization
              that unites underrepresented groups in cybersecurity for knowledge
              sharing, networking, and mentoring.
            </p>
            <p className="text-lg">
              The WiCyS club at the University of Central Florida, established
              in 2023, aims to align with WiCyS's global mission by fostering a
              supportive community for UCF students.
            </p>
          </div>
          <div className="flex items-center justify-center h-full">
            <Image
              src="/wicys-logo.svg"
              alt="WiCyS Logo"
              width={600}
              height={600}
              objectFit="fill"
              className="w-full h-auto max-w-md"
              priority={true}
            />
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-brandGold">
            Connect with us!
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <Link
              to="mailto:wicys@hackucf.org"
              target="_blank"
              rel="noopener noreferrer"
              prefetch="intent"
            >
              <Button
                variant="outline"
                className="border-2 bg-background hover:bg-brandGold text-lg hover:text-background border-brandGold text-brandGold rounded-full p-4 flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                wicys@hackucf.org
              </Button>
            </Link>
            <Link
              to="https://hackucf.org/wicys-discord"
              target="_blank"
              rel="noopener noreferrer"
              prefetch="intent"
            >
              <Button
                variant="outline"
                className="border-2 bg-background hover:bg-brandGold text-lg hover:text-background border-brandGold text-brandGold rounded-full p-4 flex items-center gap-2"
              >
                <Discord className="h-5 w-5" />
                WiCyS Discord
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Image
              src="/wicys-events1.webp"
              alt="WiCyS Event 1"
              width={400}
              height={300}
              className="rounded-lg w-full"
            />
            <Image
              src="/wicys-events2.webp"
              alt="WiCyS Event 2"
              width={400}
              height={300}
              className="rounded-lg w-full"
            />
            <Image
              src="/wicys-events3.webp"
              alt="WiCyS Event 3"
              width={400}
              height={300}
              className="rounded-lg w-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
