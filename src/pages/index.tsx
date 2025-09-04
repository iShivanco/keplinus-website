// src/pages/index.tsx
"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Technologies from "@/components/Technologies";
import PortfolioGrid from "@/components/PortfolioGrid";
import Testimonials from "@/components/Testimonials";
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesGrid />

      {/* Technologies Section */}
      <Technologies />

      {/* Portfolio Section */}
      <PortfolioGrid />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <ContactForm />
         
     </div>

  );
}
