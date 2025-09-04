// src/app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4">
      
      {/* Animated 404 Number */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
      >
        404
      </motion.h1>

      {/* Not Found Text */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-xl sm:text-2xl text-slate-300 text-center max-w-md"
      >
        Oops! The page you're looking for doesn't exist or has been moved.
      </motion.p>

      {/* Illustration / Decorative Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-10 w-60 h-60 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 opacity-20 animate-pulse"
      ></motion.div>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-all rounded-md font-semibold text-white shadow-lg"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-purple-500 hover:bg-purple-500 hover:text-white transition-all rounded-md font-semibold text-purple-300"
        >
          Contact Us
        </Link>
      </motion.div>

      {/* Optional Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-10 text-sm text-slate-400"
      >
        Keplinus &copy; {new Date().getFullYear()}
      </motion.p>
    </div>
  );
}
