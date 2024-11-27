import Link from "next/link";

import { cn } from "@/lib/utils";
import { MainNav } from "@/entities/ui/main-nav/mainNav";
import { buttonVariants, NumberTicker } from "@/shared/ui";
import { Github, StarIcon, Twitter } from "lucide-react";
import { siteConfig } from "@/shared/configs";
import { MobileNav } from "@/entities";
import { AccountDropdown } from "@/entities/ui/accout-dropdown/account-dropdown";

export const Header = async () => {
  let stars: number = 0; // Default value

  try {
    const response = await fetch(
      "https://api.github.com/repos/Primis1/my-own-blockchain",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      stars = data.stargazers_count; // Update stars if API response is valid
    }
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
  }

  return (
    <header
      className={cn(
        "supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full flex justify-center bg-background/40 backdrop-blur-lg"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <MainNav />
        <MobileNav />

        <div className="flex items-center justify-between gap-2 md:justify-end">
          <Link
            className={cn(
              "hidden md:inline-flex",
              buttonVariants({ variant: "default" })
            )}
            target="_blank"
            href={siteConfig.links.github}
          >
            <div className="flex items-center">
              <Github className="size-4" />
              <span className="ml-1 lg:hidden">Star</span>
              <span className="ml-1 hidden lg:inline">Star on GitHub</span>
            </div>
            <div className="ml-2 flex items-center gap-1 text-sm md:flex">
              <StarIcon className="size-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300" />
              <NumberTicker
                value={stars}
                className="font-display font-medium text-white dark:text-black"
              />
            </div>
          </Link>

          <nav className="flex items-center gap-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Github className="size-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.telegram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Twitter className="size-4 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </nav>

          <nav>
            <a
              className={cn(buttonVariants({ variant: "ghost" }))}
              href="api/auth/login"
            >
              Login
            </a>
          </nav>

          <AccountDropdown />
        </div>
      </div>
      {/* <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" /> */}
    </header>
  );
};
