"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { montserrat } from "@/app/fonts";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Vault", path: "/vault" },
    { name: "Open", path: "/open" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container   flex h-16 items-center justify-between">
        <Link href="/" className="flex ml-10 items-center space-x-2">
          <span
            className={`${montserrat.className}text-xl font-bold tracking-tighter`}
          >
            EXCELSO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname === route.path
                  ? "text-foreground"
                  : "text-foreground/60",
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="container flex flex-col py-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "py-2 text-sm font-medium transition-colors hover:text-foreground/80",
                    pathname === route.path
                      ? "text-foreground"
                      : "text-foreground/60",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
