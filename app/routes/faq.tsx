import { Link } from '@remix-run/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ_ITEMS } from '@/lib/faqData';

export default function FAQ() {
  return (
    <main className="min-h-screen p-8 bg-background text-foreground pt-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16 mt-8 px-12">
          <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
          <Link
            to="/about-us"
            className="text-center border-2 bg-background hover:bg-brandGold text-lg hover:text-background border-brandGold text-brandGold rounded-full w-screen max-w-6xl mt-16 py-1"
          >
            Back to About Us
          </Link>
        </div>
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
