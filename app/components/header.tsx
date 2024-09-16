import { useState } from "react";
import { Link } from "@remix-run/react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Constants moved outside the component to prevent re-creation on each render
const NAV_ITEMS = [
  { id: "about-us", name: "About Us", href: "/about-us" },
  { id: "contact-us", name: "Contact Us", href: "/contact-us" },
  { id: "sponsorship", name: "Sponsorship", href: "/sponsorship" },
  { id: "whats-going-on", name: "What's Going On", href: "/whats-going-on" },
  { id: "wicys", name: "WiCyS", href: "/wicys" },
  {
    id: "horse-plinko",
    name: "Horse Plinko Cyber Challenge",
    href: "https://plinko.horse",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full p-4 bg-black border-b border-stone-800 shadow-md flex justify-between items-center">
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
      <nav className="hidden lg:flex space-x-4 mx-2">
        {NAV_ITEMS.map((item) =>
          item.href.startsWith("http") ? (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black hover:bg-white transition-colors text-sm px-3 py-2 rounded-md"
            >
              {item.name}
            </a>
          ) : (
            <Link
              key={item.id}
              to={item.href}
              prefetch="intent"
              className="text-white hover:text-black hover:bg-white transition-colors text-sm px-3 py-2 rounded-md"
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
          className="hidden lg:inline-flex bg-black border-2 border-brandGold text-brandGold hover:bg-brandGold hover:text-black text-sm"
        >
          Join Our Discord
        </Button>

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
            className="w-[300px] sm:w-[400px] bg-black"
          >
            <SheetHeader>
              <SheetTitle className="text-2xl text-brandGold">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col mt-8 space-y-4">
              {NAV_ITEMS.map((item) =>
                item.href.startsWith("http") ? (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-left text-sm text-white hover:text-black hover:bg-white transition-colors px-3 py-2 rounded-md"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.id}
                    to={item.href}
                    prefetch="intent"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-left text-sm text-white hover:text-black hover:bg-white transition-colors px-3 py-2 rounded-md"
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <Button
                variant="outline"
                className="bg-black border-brandGold text-brandGold hover:bg-brandGold hover:text-black text-sm transition-colors w-full"
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
