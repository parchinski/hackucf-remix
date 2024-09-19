import { useState } from 'react';
import { Link } from '@remix-run/react';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';

const NAV_ITEMS = [
  { id: 'about-us', name: 'About Us', href: '/about-us' },
  { id: 'contact-us', name: 'Contact Us', href: '/contact-us' },
  { id: 'sponsorship', name: 'Sponsorship', href: '/sponsorship' },
  { id: 'calendar', name: 'Calendar', href: '/calendar' },
  { id: 'wicys', name: 'WiCyS', href: '/wicys' },
  {
    id: 'horse-plinko',
    name: 'Horse Plinko Cyber Challenge',
    href: 'https://plinko.horse',
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full bg-background p-4 border-b border-stone-800 shadow-md flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" aria-label="HackUCF Home">
          <img
            src="/hackucf-logo.svg"
            alt="HackUCF Logo"
            className="w-48 md:w-64"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-2 mx-2">
        {NAV_ITEMS.map(item =>
          item.href.startsWith('http') ? (
            <Button
              key={item.id}
              variant="ghost"
              asChild
              className="text-white hover:text-background hover:bg-white transition-colors text-sm px-2 py-2 rounded-md whitespace-nowrap"
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </Button>
          ) : (
            <Link
              key={item.id}
              to={item.href}
              prefetch="intent"
              className="text-white hover:text-background hover:bg-white transition-colors text-sm px-2 py-2 rounded-md whitespace-nowrap"
            >
              {item.name}
            </Link>
          ),
        )}
      </nav>

      {/* Actions */}
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="hidden lg:inline-flex bg-background border-2 border-brandGold text-brandGold hover:bg-brandGold hover:text-background text-sm mx-2"
        >
          Join Our Discord
        </Button>
        <div className="flex items-center">
          <div className="lg:hidden mr-2">
            <ThemeToggle />
          </div>
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          {/* Mobile Menu Content */}
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-background"
          >
            <SheetHeader>
              <SheetTitle className="text-2xl text-brandGold">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col mt-8 space-y-4">
              {NAV_ITEMS.map(item =>
                item.href.startsWith('http') ? (
                  <Button
                    key={item.id}
                    variant="ghost"
                    asChild
                    onClick={() => setIsOpen(false)}
                    className="w-full text-left text-sm text-white hover:text-background hover:bg-white transition-colors px-3 py-2 rounded-md"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </Button>
                ) : (
                  <Link
                    key={item.id}
                    to={item.href}
                    prefetch="intent"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-left text-sm text-white hover:text-background hover:bg-white transition-colors px-3 py-2 rounded-md"
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <Button
                variant="outline"
                className="bg-background border-brandGold text-brandGold hover:bg-brandGold hover:text-background text-sm transition-colors w-full"
                onClick={() => setIsOpen(false)}
              >
                Join Our Discord
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
