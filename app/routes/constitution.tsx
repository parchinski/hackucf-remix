import { Link } from '@remix-run/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CONSTITUTION_ARTICLES } from '@/lib/constitutionData';

export default function Constitution() {
  return (
    <main className="min-h-screen p-8 bg-background text-foreground pt-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16 mt-8">
          <h1 className="text-5xl font-bold">
            Constitution of Collegiate Cyber Defense Club
          </h1>
          <Link
            to="/about-us"
            className="text-center border-2 bg-background hover:bg-brandGold text-lg hover:text-background border-brandGold text-brandGold rounded-full w-screen max-w-6xl mt-16 py-1"
          >
            Back to About Us
          </Link>
        </div>
        <p className="mb-12 text-xl">
          This document outlines the governing principles and operational
          procedures of the Collegiate Cyber Defense Club.
        </p>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {CONSTITUTION_ARTICLES.map(article => (
            <AccordionItem
              key={article.id}
              value={article.id}
              className="border border-brandGold rounded-lg my-4"
            >
              <AccordionTrigger className="px-4 py-2 hover:bg-brandGold hover:text-background rounded-md transition-colors">
                {article.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                {Array.isArray(article.content) ? (
                  article.content.map(section => (
                    <div key={section.id} className="mb-4">
                      <h3 className="text-lg font-semibold text-brandGold mb-2">
                        {section.subtitle}
                      </h3>
                      <p>{section.text}</p>
                    </div>
                  ))
                ) : (
                  <p>{article.content}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-brandGold">
            History of Constitution:
          </h2>
          <ul className="list-disc list-inside">
            <li>Created: 29 Oct 2012</li>
            <li>Previously Revised: 20 Aug 2013</li>
            <li>Revised: 30 Apr 2020</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link
            to="/about"
            className="text-brandGold hover:underline"
            prefetch="intent"
          >
            Back to About Us
          </Link>
        </div>
      </div>
    </main>
  );
}
