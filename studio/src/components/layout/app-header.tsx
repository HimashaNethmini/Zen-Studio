"use client";

import Link from "next/link";
import { Bell, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "My Plan", href: "/my-plan" },
  { label: "Progress", href: "/progress" },
  { label: "Profile", href: "/profile" },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e2ee] bg-[#fbf9f7]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-2 text-[#2c245d]"
          aria-label="Luma home"
        >
          <Sparkles className="size-5 fill-[#c7b3ff] text-[#7051b8] transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-display text-3xl font-semibold tracking-tight">
            Luma
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#3d2e78]"
                    : "text-[#777187] hover:text-[#3d2e78]"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-[#7051b8]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full text-[#4a3c75] hover:bg-[#f0ebfb]"
            aria-label="Notifications"
          >
            <Bell className="size-5" />
            <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-[#ec6b67] ring-2 ring-[#fbf9f7]" />
          </Button>

          <Avatar className="size-10 border border-[#dfd5f0] bg-[#e8ddff]">
            <AvatarFallback className="bg-[#e8ddff] font-semibold text-[#4e3d81]">
              A
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}