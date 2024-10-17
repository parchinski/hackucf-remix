import { Link } from '@remix-run/react';

export default function CollegiateCyberDefenseCompetition() {
  return (
    <main className="min-h-screen p-8 bg-background text-foreground pt-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16 mt-8 px-12">
          <h1 className="text-5xl font-bold">
            Collegiate Cyber Defense Competition
          </h1>
          <Link
            to="/about-us"
            className="absolute px-4 top-16 left-4 text-center text-brandGold border-brandGold
          border-2 py-2 rounded-full bg-background hover:bg-brandGold hover:text-background transition-colors my-8"
          >
            Back to About Us
          </Link>
        </div>
        <p className="mb-12 text-xl">
          We're the good guys. We defend. The UCF Collegiate Cyber Defense
          Competition Team loves it.
        </p>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold">About the Competition</h2>
          <p className="mb-4">
            Something very tried and true to our hearts is the Collegiate Cyber
            Defense Competition, which we have drawn our very own name from:
            Collegiate Cyber Defense Club @ UCF. This competition is primarily
            focused on system administration, security, and business. During the
            events, we experience and apply all sorts of skills: customer
            service, networking, forensics, incident response, technical
            writing, and other business-related tasks.
          </p>
          <p>
            Our dedicated team of 12 undergraduate students practices tirelessly
            around the year, training new recruits and building techniques to
            administer and secure servers and personal computing systems.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold">How It Works</h2>
          <p className="mb-4">
            We participate in the{' '}
            <a
              href="http://www.seccdc.org/"
              className="text-brandGold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Southeast Collegiate Cyber Defense Competition
            </a>
            , which takes place during the spring. Our region is one of ten in
            the United States. The team that places first in each region
            progresses to the national competition:{' '}
            <a
              href="http://nationalccdc.org/"
              className="text-brandGold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Collegiate Cyber Defense Competition
            </a>
            .
          </p>
          <p className="mb-4">
            We have an opportunity to again work with databases, web
            applications, Domain Name System, Active Directory, advanced
            networking, incident response and reporting, and more. The
            competition scenario typically involves being handed a vulnerable
            and highly misconfigured small business network environment.
          </p>
          <p className="mb-4">
            We must keep our business alive and respond to business-related
            tasks called injections. All the while, we are being actively
            attacked by Red Team—a relatively large group of offensive security
            professionals. We might be asked to set up a new network appliance
            or even conduct a forensic examination of the computer for Bobby
            Joe, one of the many disgruntled employees fired. Our customers are
            important and we must attend to them too.
          </p>
          <p>
            The game becomes an all-exciting challenge of planning for the
            unexpected.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold">Why We Compete</h2>
          <p>
            There is a primary reason we compete in the Collegiate Cyber Defense
            Competition: it is ridiculously fun! It affords us the opportunity
            to practice while focusing on the defensive aspects of cyber
            security in a corporate network environment. We get to experience
            what it is like out there in the real world—the challenges we are up
            against. It is a huge learning opportunity and a great professional
            networking opportunity. Competing teams are able to pit their skills
            against others in front of industry sponsors that are looking to
            recruit. It is at these competitions that students are exposed to
            today's most advanced and emerging technologies.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold">Recruiting</h2>
          <p>
            Every fall, we look for students interested in participating. At
            first, we hold special sessions regularly to train novices in the
            art of secure system administration. We prepare signature content
            specifically for recruits that might not know a port from a socket.
            A self- starter attitude is definitely needed to keep up with the
            massive influx of knowledge. We provide an educational experience
            that students will never come close to replicating in a classroom.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-semibold">Our Success</h2>
          <p>
            The UCF Collegiate Cyber Defense Competition Team has taken first
            three years in a row at the Southeast Collegiate Cyber Defense
            Competition. The team's hard work brought home the Alamo Cup after
            being named the National Collegiate Cyber Defense Competition
            Champions in April 2014. A year later, in April 2015, the team was
            invited back to the National Collegiate Cyber Defense Competition
            after placing first at the Southeast regional competition. With
            roughly half the team returning, they successfully defended their
            title by placing first for a second consecutive year. We have also
            earned awards including Best in Service, Best in Defense, and Best
            in Business in the Southeast region. Team members are interning at
            Fortune 500 companies and all graduates of the team are gainfully
            employed in the security field.
          </p>
        </section>
      </div>
    </main>
  );
}
