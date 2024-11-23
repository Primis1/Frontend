"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LinkItem } from "@/shared/ui";

export const Header = () => {
  const pathname = usePathname();
  const navigation = [
    { title: "Components", path: "/components" },
    { title: "Templates", path: "/templates" },
    { title: "Demo", path: "/demo" },
    { title: "Logs", path: "/changelog" },
    { title: "Join", path: "/join" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-zinc-900 via-black to-zinc-800 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href={"/api/auth/login"}>Login</a>
      </nav>
    </header>
  );
};
