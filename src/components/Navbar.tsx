"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 dark:bg-slate-900/40 border-b border-white/10 dark:border-slate-700/30">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}

        {/* Keplinus Logo with gradient hover */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide transition duration-500"
        >
          <span className="bg-gradient-to-r from-amber-500/40 to-amber-500/90 bg-clip-text text-transparent">
            Keplinus
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group text-sm font-medium tracking-wide uppercase transition duration-500"
            >
              <span
                className={`${
                  pathname === link.href
                    ? "bg-gradient-to-r from-amber-500/40 to-amber-500/90 bg-clip-text text-transparent"
                    : "text-white/80 group-hover:bg-gradient-to-r group-hover:from-amber-500/40 group-hover:to-amber-500/90 group-hover:bg-clip-text group-hover:text-transparent"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-slate-700/40 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-200" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/20 dark:hover:bg-slate-700/40 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 dark:bg-slate-900/95 backdrop-blur-xl border-t border-white/10 dark:border-slate-700/30"
          >
            <div className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group text-lg uppercase tracking-wide font-medium transition duration-500"
                >
                  <span
                    className={`${
                      pathname === link.href
                        ? "bg-gradient-to-r from-amber-500/40 to-amber-500/90 bg-clip-text text-transparent"
                        : "text-white/80 group-hover:bg-gradient-to-r group-hover:from-amber-500/40 group-hover:to-amber-500/90 group-hover:bg-clip-text group-hover:text-transparent"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
