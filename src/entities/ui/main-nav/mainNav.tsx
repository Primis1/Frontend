"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Badge } from "@/shared/ui/badge/badge";
import { ExternalLinkIcon } from "lucide-react";
import { siteConfig } from "@/shared/configs/config";

export const mainNav = [
  {
    title: "Blog",
    href: "/",
  },
  {
    title: "CV",
    href: "/",
    event: "header_cta_clicked",
    label: "New",
  },
  {
    title: "Projects",
    href: "/",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4  flex md:flex">
      <Link href="/" className="relative mr-6 flex items-center space-x-2">
        <span className="hidden font-bold md:inline-block">
          {siteConfig.name}
        </span>
        <Badge variant="default">Go / NextJS</Badge>
      </Link>
      <nav className="flex align-center">
        {mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href!}
            aria-label={item.title}
            onClick={() => item.event}
            target={item ? "_blank" : undefined}
            className={cn(
              "flex items-center justify-center transition-colors hover:text-foreground/80",
              pathname?.startsWith(item.href!)
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            <span className="shrink-0">{item.title}</span>
            {item.label && (
              <span className="ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
            {item && <ExternalLinkIcon className="ml-2 size-4" />}
          </Link>
        ))}
      </nav>
    </div>
  );
}
