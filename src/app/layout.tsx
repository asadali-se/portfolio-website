import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b border-border px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-accent font-bold text-lg tracking-tight">
            ~/portfolio
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-muted hover:text-accent transition-colors text-sm">Home</Link>
            <Link href="/about" className="text-muted hover:text-accent transition-colors text-sm">About</Link>
            <Link href="/projects" className="text-muted hover:text-accent transition-colors text-sm">Projects</Link>
            <Link href="/blog" className="text-muted hover:text-accent transition-colors text-sm">Blog</Link>
          </div>
        </nav>

        <div className="flex-1">{children}</div>

        <footer className="border-t border-border px-6 py-6 flex items-center justify-between text-muted text-sm">
          <span>&copy; 2026 My Portfolio</span>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
