// src/components/Footer.tsx
"use client";

import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Keplinus</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Building AI-powered solutions and professional websites with
            excellence. Our mission is to empower businesses through
            cutting-edge technology.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>
              <Link
                href="/services?service=web"
                className="hover:text-white transition"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                href="/services?service=ai"
                className="hover:text-white transition"
              >
                AI Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/services?service=mobile"
                className="hover:text-white transition"
              >
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition"
              >
                Tech Consulting
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/70 dark:from-slate-100/90 dark:to-slate-200/70">
            Follow Us
          </h3>
          <div className="flex items-center gap-4 mt-2">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-[#E1306C] hover:scale-110 transition-all duration-300"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-[#1DA1F2] hover:scale-110 transition-all duration-300"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-[#0A66C2] hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="hover:text-[#181717] hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Keplinus. All rights reserved.
      </div>
    </footer>
  );
}
