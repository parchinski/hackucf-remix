import React from "react";
import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useHydrated } from "remix-utils/use-hydrated";

import {
  getTheme,
  setTheme as setSystemTheme,
} from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const THEME_OPTIONS = ["light", "dark", "system"] as const;
type ThemeOption = (typeof THEME_OPTIONS)[number];

export function ThemeToggle() {
  const hydrated = useHydrated();
  const [theme, setThemeState] = React.useState<ThemeOption>("system");

  React.useEffect(() => {
    if (hydrated) {
      const currentTheme = getTheme() as ThemeOption;
      setThemeState(currentTheme);
    }
  }, [hydrated]);

  const setTheme = (theme: ThemeOption) => {
    setSystemTheme(theme);
    setThemeState(theme);
  };

  return (
    <div className="flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="w-10 h-10 rounded-full border"
            size="icon"
            variant="ghost"
          >
            <span className="sr-only">Theme selector</span>
            {!hydrated ? null : theme === "dark" ? (
              <MoonIcon />
            ) : theme === "light" ? (
              <SunIcon />
            ) : (
              <LaptopIcon />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2">
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {THEME_OPTIONS.map((themeOption) => (
            <DropdownMenuItem asChild key={themeOption}>
              <button
                type="button"
                className="w-full text-left"
                onClick={() => setTheme(themeOption)}
                aria-selected={theme === themeOption}
              >
                {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
              </button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
