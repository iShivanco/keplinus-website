// src/pages/index.tsx
"use client";

import Head from "next/head";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Technologies from "@/components/Technologies";
import PortfolioGrid from "@/components/PortfolioGrid";
import Testimonials from "@/components/Testimonials";
const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function Home() {
  return (
    <>
      {/* ===== SEO HEAD ===== */}
      <Head>
        <title>Keplinus – AI & Web Development Solutions</title>
        <meta
          name="description"
          content="Keplinus provides cutting-edge AI solutions and professional web development services. Explore our portfolio, services, and technologies."
        />
        <link rel="canonical" href="https://keplinus.vercel.app/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Keplinus – AI & Web Development Solutions"
        />
        <meta
          property="og:description"
          content="Explore Keplinus' AI solutions, web development services, and innovative projects. We deliver premium, scalable, and secure web experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keplinus.vercel.app/" />
        <meta
          property="og:image"
          content="https://keplinus.vercel.app/logo-og.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Keplinus – AI & Web Development Solutions"
        />
        <meta
          name="twitter:description"
          content="Discover Keplinus' AI solutions, professional web development, and portfolio projects. Transform your ideas into scalable web experiences."
        />
        <meta
          name="twitter:image"
          content="https://keplinus.vercel.app/logo-og.png"
        />
      </Head>

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
    </>
  );
}
