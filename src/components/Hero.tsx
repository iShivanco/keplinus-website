"use client";

import FadeInSection from "./FadeInSection";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[840px] w-full overflow-hidden pt-20">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg-web.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 h-full justify-center">
        <FadeInSection>
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold text-white">
              Empowering Businesses
            </h1>
            <h1 className="text-5xl font-bold text-white">
              with AI & Web Solutions
            </h1>

            <p className="text-lg text-gray-200">
              We build professional websites and AI-powered agents to automate,
              analyze, and accelerate your growth.
            </p>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center 
             px-8 py-3 rounded-2xl font-semibold text-white 
             bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 
             shadow-lg shadow-blue-500/30
             transition-all duration-300 ease-out
             hover:scale-[1.04] hover:shadow-blue-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
              </span>
              <span
                className="absolute inset-0 rounded-2xl bg-gradient-to-r 
               from-cyan-300 via-blue-400 to-indigo-500
               opacity-0 group-hover:opacity-100 
               transition-opacity duration-300"
              />
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
