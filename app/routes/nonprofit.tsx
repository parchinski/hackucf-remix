import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from '@remix-run/react';

interface DonationTier {
  tier: string;
  amount: string;
}

interface BylawSection {
  subtitle: string;
  text?: string;
  table?: DonationTier[];
  list?: string[];
}

interface BylawArticle {
  title: string;
  content: BylawSection[];
}

const BYLAWS: BylawArticle[] = [
  {
    title: 'Article I—Collegiate Cyber Defense Club Incorporated',
    content: [
      {
        subtitle: 'Section 1: Name',
        text: "The name of this organization shall be Collegiate Cyber Defense Club Incorporated. It is referred to as the 'Organization' in this document.",
      },
    ],
  },
  {
    title: 'Article II—Mission and Goals',
    content: [
      {
        subtitle: 'Section 1: Mission',
        text: "The mission of the Collegiate Cyber Defense Club Incorporated (the 'Organization') is to establish a Computer Security community within the University of Central Florida (UCF), to provide a venue for students to improve their computer security skills, and to foster a spirit of ethics with the training we provide. We will accomplish this by supporting the Collegiate Cyber Defense Club, a Registered Student Organization (RSO) registered with the University of Central Florida's Student Government Association, henceforth referred to as the Club. Through all of this we hope to produce a security aware generation in Central Florida.",
      },
      {
        subtitle: 'Section 2: Goals',
        text: 'We desire to provide an outlet to gain new skills and share information both across the greater Central Florida area and around the world. We hope to share our knowledge and skills with all that seek to learn.',
      },
      {
        subtitle: 'Section 3: Governing Authority',
        text: 'The Organization is beholden to the Club. All activities and functions of the Organization must be legal under local, state, and federal laws. Within these bylaws, a majority shall be defined as "more than 50%." The Organization is a 501(c)(3) non-profit organization and must act to further the Mission and Goals defined.',
      },
    ],
  },
  {
    title: 'Article III—Membership',
    content: [
      {
        subtitle: 'Section 1: Membership Statement',
        text: "Membership in the Organization, excluding membership via Director establishment, is subject to approval by more than 20% of active directors or by an executive election within the Club. The Director positions of President, Vice President, Treasurer, and Secretary are to mirror the Club's. In general, people interested in volunteering for, or participating in, the Organization should become members of the Club. The Organization will sponsor any volunteering paperwork and tax receipts for supporting the Club.",
      },
      {
        subtitle: 'Section 2: Director Turn-Over',
        text: "Directors are to mirror the positions of President, Vice President, Treasurer, and Secretary of the Club (henceforth known as the 'Executives'). Fourteen days after the Club's executives have been elected, the director board must be updated to stay in sync with the Executives. Previous Executives are to be demoted to being standard members and can decide to leave at any time.",
      },
      {
        subtitle: 'Section 3: Voting Rights',
        text: 'Individuals with Membership cannot vote and all decisions are to be determined by Directors.',
      },
      {
        subtitle: 'Section 4: Revocation of Membership',
        text: 'Membership may be revoked without mutual agreement for non-participation, misconduct, or violations of any provisions of the Bylaws. The member will be notified in writing of the possible revocation at least 72 hours prior to the vote and will be allowed to address the organization in order to relate to members any relevant defense prior to the voting for removal. Membership can only be revoked upon a 2/3 affirmative vote of active student members.',
      },
      {
        subtitle: 'Section 5: Reinstatement of Membership',
        text: 'Reinstatement is subject to approval by 10% of directors.',
      },
    ],
  },
  {
    title: 'Article IV—Directors',
    content: [
      {
        subtitle: 'Section 1: Eligibility',
        text: 'Directors, consisting of a President, Vice President, Treasurer, and Secretary, must be Executives of the Club with the same titles.',
      },
    ],
  },
  {
    title: 'Article V—Finances',
    content: [
      {
        subtitle: 'Section 1: The Club and the Organization',
        text: "The Club is required to donate an amount equivalent to the Organization's operational expenses, including the annual Sunbiz registration fees, officer changes, and IRS filings. If this does not happen in a timely fashion, the Organization has to front the cost and support of the Club can be paused until payment is made.",
      },
      {
        subtitle: 'Section 2: Donations',
        text: 'External parties are permitted to donate monetary and non-monetary assets to the Organization, as described in Sections 3 and 4.',
      },
      {
        subtitle: 'Section 3: Monetary Donations',
        text: 'We accept monetary donations to help cover the cost of operating our organization and to allow us to further our mission. This will typically be done by acquiring more hardware/software for the Club, finance scholarships, subsidize conferences trips for Club members, and more.',
        table: [
          { tier: 'Bronze', amount: '≥ $1,000' },
          { tier: 'Silver', amount: '≥ $3,000' },
          { tier: 'Gold', amount: '≥ $6,000' },
          { tier: 'Platinum', amount: '≥ $10,000' },
        ],
      },
      {
        subtitle: 'Section 4: Non-Monetary Donations',
        text: 'Any donations of software or hardware to the Organization will be accepted, given that the donation follows local, state, and federal laws. Donations valued above $1200 will be declared a Bronze donor. For entities that wish to donate enough software or hardware for all of our dues-paying members, they will be declared a Silver donor given the value of each asset is over $15.',
      },
      {
        subtitle: 'Section 5: Financial Authority',
        text: 'For the protection of the Organization and its directors, it is required the Directors maintain an Expense Authorization Policy. The policy must contain a Conflict of Interest policy. The Expense Authorization Policy may be amended with a majority vote of directors. Organizational funds may be spent on items such as office supplies, events and activities, publicity, travel expenses, and conference fees, but will not be used for anything illegal under University, local, state, and federal laws. All funds must be deposited within 24 business hours after collection',
      },
      {
        subtitle: 'Section 6: Director Transition',
        text: "It shall be the responsibility of all account signers to change contact information, as well as assist in the update of new account signatures with the organization's financial institution after each election. In addition, it is the outgoing Treasurer's responsibility to compile and present all banking documents and information about the previous and current budget to the new Treasurer.",
      },
      {
        subtitle: 'Section 7: Dissolution of Organization',
        text: "In the event that the Organization ceases to exist, any funds remaining in the organization's account shall be donated to either the Club or the following: Electronic Frontier Foundation, 815 Eddy Street, San Francisco, CA 94109 USA, Phone: +1-415-436-9333, Fax: +1-415-436-9993",
      },
    ],
  },
  {
    title: 'Article VI—Ratification and Empowerment',
    content: [
      {
        subtitle: 'Section 1: Ratification',
        text: 'These bylaws will become ratified by a 2/3 approval of the Directors of the organization.',
      },
      {
        subtitle: 'Section 2: Empowerment',
        text: 'These bylaws and any amendments will be effective 12 hours after ratification.',
      },
    ],
  },
  {
    title: 'Article VII—Risk Management',
    content: [
      {
        subtitle: 'Section 1: General',
        text: 'The organization will follow reasonable good-practice risk management and cybersecurity guidelines and procedures for all activities. Additionally, officers of the organization will continually review organizational procedures in an attempt to minimize any potential internal risks.',
      },
    ],
  },
  {
    title: 'Article VIII—Amendments',
    content: [
      {
        subtitle: 'Section 1: General',
        text: 'Amendments to these Bylaws must be proposed by any member of the Organization (including non-directors) in writing to the active President. The amendment must then be presented to the Organization by serving Directors and should include a full explanation and/or rationale for the amendment. The amendment must be voted on by all serving Directors in the next Operations meeting (hosted by the Club and attended by their Operations board) and approved by a 2/3 affirmative vote of serving Directors. Ratified amendments must then be available to the public and listed below:',
      },
      {
        subtitle: 'Section 2: History of Bylaws',
        list: [
          'Created & Ratified: 20 Sep 2022',
          'Monetary Donations modified as per current Prospectus: 20 June 2023',
          'Updated Financial Authority Article V Section 5: 14 October 2024',
        ],
      },
    ],
  },
];

export default function Nonprofit() {
  return (
    <main className="bg-background text-white min-h-screen mt-20 px-8">
      <div className="container mx-auto max-w-6xl py-16">
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-5xl font-bold">Nonprofit Bylaws</h1>
          <Link
            to="/about-us"
            className="text-center border-2 bg-background hover:bg-brandGold text-lg hover:text-background border-brandGold text-brandGold rounded-full w-full mt-16 py-1"
          >
            Back to About Us
          </Link>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {BYLAWS.map(article => (
            <AccordionItem
              key={article.title}
              value={article.title}
              className="border border-[#D2990B] rounded-lg"
            >
              <AccordionTrigger className="px-4 py-2 hover:bg-[#D2990B] hover:text-black transition-colors">
                {article.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                {article.content.map(section => (
                  <div key={section.subtitle} className="mb-4">
                    <h3 className="text-lg font-semibold text-[#D2990B] mb-2">
                      {section.subtitle}
                    </h3>
                    <p className="mb-2">{section.text}</p>
                    {section.table && (
                      <table className="w-full border-collapse border border-[#D2990B] mb-4">
                        <thead>
                          <tr>
                            <th className="border border-[#D2990B] p-2">
                              Tier
                            </th>
                            <th className="border border-[#D2990B] p-2">
                              Monetary Donation Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.table?.map(row => (
                            <tr key={`${row.tier}-${row.amount}`}>
                              <td className="border border-[#D2990B] p-2">
                                {row.tier}
                              </td>
                              <td className="border border-[#D2990B] p-2">
                                {row.amount}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                    {section.list && (
                      <ul className="list-disc list-inside">
                        {section.list?.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
