import { Link } from '@remix-run/react';

export default function CaptureTheFlag() {
  return (
    <main className="min-h-screen py-32 px-8 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-4 text-5xl font-bold">Capture the Flag</h1>
        <p className="mb-12 text-xl">
          We work hard. We play hard. We're KnightSec and we do the breaking.
        </p>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold">KnightSec, the Team</h2>
          <p className="mb-6">
            At the University of Central Florida, we are all{' '}
            <span className="text-brandGold">Knight</span>. And that sec in{' '}
            <span className="text-brandGold">KnightSec</span> doesn't
            necessarily stand for secrecy, but rather security. We do something
            really special. Our students participate in offensive-based Capture
            the Flag competitions regularly against teams from around the world
            to engage in real-world security challenges in a point-based,
            jeopardy-style fashion.
          </p>
          <p>
            Capture the Flag—most commonly spoken in its acronym form—doesn't
            just refer to that game we used to play as kids in the backyard. We
            play it in a security context too. It is a competition where
            students, enthusiasts, and security professionals from around the
            world come together during a period of time—maybe 24 or 48 hours—to
            race against each other to solve challenges for team-awarded points.
            Our team works together to succeed.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold">
            Categories and Challenges
          </h2>
          <p className="mb-6">
            We see all sorts of challenges during these competitions. In the
            jeopardy-style fashion, we are given a number of categories like on
            that TV show, Jeopardy!. Some cool categories include network
            sniffing, system administration, web, reverse engineering, protocol
            analysis, programming, and cryptography. The best part? Most of our
            students don't need to have any of these skills to get started. We
            are a community; we teach each other. All that is needed is an
            eagerness to learn.
          </p>
          <p className="mb-6">
            Web challenges, for example, usually involve a web application
            running on a remote server. Our goal might be to compromise the
            website—find a user's password, bypass authentication, get into the
            administrator's account, or even steal information from a database.
            In reverse engineering challenges, we are given a compiled program—a
            binary EXE file, Nintendo DS ROM, Android application, etc.—and have
            a goal of extracting the secret or flag. We are to capture the flag.
          </p>
          <p>
            Pwning is another category. Usually, it's challenges that might
            involve a remote server executing a compiled program. To get points
            on the board, we must exploit the application running on the remote
            server to gain administrator privileges or otherwise capture the
            flag. The forensics-based category can include challenges where we
            aim to understand the intricacies of a file format or even extract
            hidden data from an image, for instance, using steganography
            techniques. Sometimes we need to find out all the information about
            a person or subject to eventually find the flag in
            reconnaissance-type challenges.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold">Write-ups</h2>
          <p>
            We love to share what we do, so after each competition, our students
            strive to document what they have learned and the processes they
            have applied in order to solve CTF challenges. We post our write-ups
            on the website.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-semibold">Getting Started</h2>
          <p className="mb-6">
            Capture the Flag competitions are scheduled frequently, each hosted
            by different organizations from around the world. Usually, the
            competitions are virtual, so it's really easy for anyone to
            participate—they happen online, which means we can totally pull an
            at-home-in-underwear. How does the team collaborate if everyone is
            at home? Well, check out the bottom-right corner. We stay connected.
          </p>
          <p className="mb-6">
            We have a CTF workshop nearly every weekend. Catch up on some of the
            challenges that we work on:{' '}
            <Link to="#" className="text-brandGold hover:underline">
              Challenges
            </Link>
            .
          </p>
          <p>
            Occasionally, we will host an all-day or multi-day CTF event
            on-campus where students can learn, have fun, and enjoy food and
            drinks from our sponsors—all while competing. Be on the lookout for
            upcoming competitions by checking out{' '}
            <Link to="#" className="text-brandGold hover:underline">
              CTFtime
            </Link>{' '}
            and our{' '}
            <Link to="#" className="text-brandGold hover:underline">
              calendar
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
