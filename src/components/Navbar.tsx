"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-border px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-accent font-bold text-lg tracking-tight">
        ~/portfolio
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-muted hover:text-accent transition-colors text-sm"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Hamburger icon (mobile only) */}
      <button
        className="md:hidden text-muted hover:text-accent transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border flex flex-col items-center gap-4 py-6 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
