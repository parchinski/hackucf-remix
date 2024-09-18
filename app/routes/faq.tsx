import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ_ITEMS = [
  {
    question: 'What is Hack@UCF?',
    answer:
      'The Collegiate Cyber Defense Club, also known as Hack@UCF, is a registered student organization (RSO) at the University of Central Florida and a 501(c)(3) nonprofit focused on providing students with information security education and opportunities. We teach both offensive and defensive security in the following areas: network security, wireless security, physical security, web application security, binary exploitation and reverse engineering, penetration testing and red teaming, social engineering, forensics, and lock picking.',
    key: 'what-is-hackucf',
  },
  {
    question: 'When are meetings?',
    answer:
      'Check the calendar, newsletter, or our social media pages for up-to-date announcements regarding club events. Our general body meetings are Fridays at 5:30pm-7:00pm EST in BA-119.',
    key: 'meeting-times',
  },
  {
    question:
      'I am a freshman/new to all this/not good with computers. Should I still come?',
    answer:
      "Absolutely. We are open to all students here at UCF and there is no reason to feel like you shouldn't attend meetings. If the content is out of your depth, ask questions either during or after the meeting.",
    key: 'newcomers-welcome',
  },
  {
    question: 'I am not a UCF student. May I still come to meetings?',
    answer:
      'Absolutely. Meetings are open to the public, but pizza is intended for members only.',
    key: 'non-ucf-students',
  },
  {
    question: 'What are the benefits of membership?',
    answer:
      'Members get a discount of our awesome t-shirt and voting rights for elections. More information about membership is available here.',
    key: 'membership-benefits',
  },
  {
    question: 'How do I become a member?',
    answer: 'You are looking for this page here.',
    key: 'become-member',
  },
  {
    question: 'How do I join the mailing list?',
    answer: 'You can join the mailing list here.',
    key: 'join-mailing-list',
  },
  {
    question: 'How do I join Ops? What are the benefits to joining Ops?',
    answer:
      'Ops is short for our Operational Team. They help organize speakers, club events, and otherwise run the club with the executive board. Enjoy pizza, speakers, resources, workshops? Consider volunteering to join Ops. Ops meetings are held about once a week and are open to all Hack@UCF members. Why should you join? You get to contribute to making Hack@UCF awesome!',
    key: 'join-ops-team',
  },
  {
    question: 'What are CTFs?',
    answer:
      'A CTF, or Capture the Flag, is a game used to teach information security fundamentals or gauge information security skill levels. Typically a CTF is held in a "Jeopardy Style" where contestants solve problems on a Jeopardy board for points, but "King of the Castle" and "Red vs. Blue" types are also available. More information about CTFs is available here.',
    key: 'what-are-ctfs',
  },
  {
    question: 'How do I join the CCDC Team?',
    answer:
      'The Collegiate Cyber Defense Competition (CCDC) Team consists of 12 members and 4 alternates. The team is always looking for self-motivated students possessing skills in Windows or Linux administration and skills using traditional products like firewalls, IDS, and NACs. You must be a full-time student with a minimum GPA of 2.0 in order to qualify for the team. Tryouts occur during the Fall semester. The team roster is announced during the Spring semester and team members start practicing three times a week in preparation for the regional and national competitions. Spring semester practices are restricted to team members only. If you are a beginner in this area consider taking the free SANS Cyber Aces training (http://www.cyberaces.org/). More information about the team is available here.',
    key: 'join-ccdc-team',
  },
  {
    question: 'How do I join Knightsec?',
    answer:
      'Knightsec is our offensive security team. While there is no official structure to Knightsec, we send and organize teams of students to participate in various CTFs nationally. Each CTF has different requirements with regards to team size and skill set. More information about Knightsec is available here.',
    key: 'join-knightsec',
  },
  {
    question: 'How do I get started in Information Security?',
    answer:
      'Begin with the end in mind. Information security is becoming a wide area of study with different areas of knowledge. Do you know what area interests you? Begin learning about the field by studying the different fields that comprise information security—see the resources below. Once you have an idea of what interests you, begin studying that area. There are many different career paths that sound appealing to you. Look at security job descriptions at companies that interest you. What skills do they require? If you do not possess that skill set, how do you obtain it? Align your studies to include these necessary skills. Access to a lab helps solidify academic concepts (e.g., do it, do not just read about it).',
    key: 'get-started-infosec',
  },
  {
    question: 'What resources do you recommend?',
    answer: (
      <div>
        <p>Wargames:</p>
        <ul className="list-disc list-inside ml-4">
          <li>HackTheBox CTF</li>
          <li>OverTheWire</li>
          <li>Microcorruption</li>
          <li>pwnable.kr</li>
          <li>pwnable.tw</li>
          <li>Hack This Site!</li>
        </ul>
        <p>CTF Workshop: https://github.com/kablaa/CTF-Workshop</p>
        <p>x86 Assembly Crash Course: https://youtu.be/75gBFiFtAb8</p>
        <p>
          LiveOverflow: https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w
        </p>
        <p>ippsec: https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA</p>
        <p>Penetration Testing: https://github.com/enaqx/awesome-pentest</p>
        <p>
          Starting Out: High school oriented CTF such as PicoCTF (start small,
          learn concepts)
        </p>
      </div>
    ),
    key: 'recommended-resources',
  },
  {
    question: 'How do I get my first information security internship?',
    answer:
      'Many of the talks given at Hack@UCF consist of material that will be usable in the information security field. That being said, many of the people giving these talks are people who can lead you in the right direction to land an information security internship. We also host workshops covering hands-on material where you can apply the concepts learned in these talks.',
    key: 'first-infosec-internship',
  },
  {
    question: 'I have additional questions not answered here.',
    answer: 'Contact ops@hackucf.org and we will do our best to help you out.',
    key: 'additional-questions',
  },
  {
    question: 'What does Cyber touch?',
    answer: 'Everything.',
    key: 'cyber-touch',
  },
];

export default function FAQ() {
  return (
    <main className="min-h-screen p-8 bg-background text-foreground pt-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-4 text-5xl font-bold">Frequently Asked Questions</h1>
        <p className="mb-12 text-xl">
          Check out answers to the questions we get asked most. Welcome to the
          official Hack@UCF FAQ.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              className="border border-brandGold rounded-lg my-4"
              key={item.key}
              value={`item-${index}`}
            >
              <AccordionTrigger className="px-4 py-2 hover:bg-brandGold hover:text-background rounded-md transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                {typeof item.answer === 'string' ? (
                  <p>{item.answer}</p>
                ) : (
                  item.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
