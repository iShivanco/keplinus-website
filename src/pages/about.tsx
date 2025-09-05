// src/pages/about.tsx
"use client";

import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, Globe, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type TeamMember = {
  name: string;
  slug: string; // 🔥 added slug field
  role: string;
  bio: string;
  photo: string;
  linkedin?: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Shivanshu Dixit",
    slug: "shivanshu-dixit",
    role: "Founder & CTO",
    bio: "Systems architect focused on scalable web platforms, AI pipelines, and observability.",
    photo: "/images/shivanshu_profile.jpg",
    linkedin: "#",
  },
  {
    name: "Rohan Rai",
    slug: "rohan-rai",
    role: "Head of Product",
    bio: "Design-led product leader who turns research into delightful, usable products.",
    photo: "/images/rohan_profile.jpg",
    linkedin: "#",
  },
  {
    name: "Advika",
    slug: "advika",
    role: "Lead ML Engineer",
    bio: "Builds robust, auditable agentic systems and production ML infrastructure.",
    photo: "/images/advika_profile.jpg",
    linkedin: "#",
  },
];

const timeline = [
  { year: "2019", text: "Founded — initial consulting & web projects." },
  { year: "2020", text: "Built first production AI assistant for e-commerce." },
  { year: "2022", text: "Expanded into data & analytics services." },
  { year: "2024", text: "Crossed 100 projects milestone; global client base." },
];

const values = [
  {
    title: "Human-first design",
    desc: "We centre real users in every decision — research, prototypes, and testing guide us.",
    icon: <Users className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Transparency",
    desc: "Open roadmaps, clear pricing, and continuous reporting — no surprises.",
    icon: <Globe className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Reliability",
    desc: "Production-grade engineering, monitoring, and SLAs so you can rely on outcomes.",
    icon: <Award className="w-6 h-6 text-purple-600" />,
  },
];

const stats = [
  { num: "100+", label: "Projects Delivered" },
  { num: "50+", label: "Global Clients" },
  { num: "5+", label: "Years Experience" },
  { num: "99.9%", label: "Uptime SLAs" },
];

const testimonials = [
  {
    quote:
      "Keplinus took our concept and shipped a production-ready AI assistant that reduced support time by 42%.",
    author: "Nina Rao — Head of Ops, RetailX",
  },
  {
    quote:
      "Their engineering discipline and design thinking means we launched on schedule with measurable conversion lift.",
    author: "Carlos Mendez — VP Product, Finflow",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  const [testiIndex, setTestiIndex] = useState(0);

  function nextTesti() {
    setTestiIndex((i) => (i + 1) % testimonials.length);
  }
  function prevTesti() {
    setTestiIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

 return (
    <>
      {/* ===== SEO HEAD ===== */}
      <Head>
        <title>About Keplinus – AI Agents & Professional Websites</title>
        <meta
          name="description"
          content="Learn about Keplinus, our story, mission, core values, and talented team building AI agents and professional websites worldwide."
        />
        <link rel="canonical" href="https://keplinus.vercel.app/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Keplinus – AI Agents & Professional Websites" />
        <meta property="og:description" content="Discover Keplinus’ story, mission, values, and team behind intelligent AI solutions and premium websites." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keplinus.vercel.app/about" />
        <meta property="og:image" content="https://keplinus.vercel.app/logo-og.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Keplinus – AI Agents & Professional Websites" />
        <meta name="twitter:description" content="Learn about the Keplinus team, mission, and values behind intelligent AI agents and professional websites." />
        <meta name="twitter:image" content="https://keplinus.vercel.app/logo-og.png" />
      </Head>

    <section className="py-24 bg-gradient-to-b from-purple-100/50 to-purple-100/90 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-6 lg:px-12">
        {/* HERO */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-purple-500/40 to-purple-500/90 bg-clip-text text-transparent">
              Keplinus
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300">
            We blend AI, engineering, and design to build products that scale.
            Trusted by startups and enterprises, our focus is measurable impact
            — not just beautiful interfaces.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-900/50 to-purple-400/90 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Work with us
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-100 hover:bg-slate-50/80 transition"
            >
              View portfolio
            </a>
          </div>
        </motion.header>

        {/* Story + Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white"
            >
              Our Story & Mission
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              Keplinus started with a simple idea: build technology that
              empowers people and teams instead of adding noise. Our founders —
              product designers and engineers — teamed up to ship first-class
              web experiences and AI systems that solve real business problems.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              Today we focus on three pillars:{" "}
              <span className="font-semibold text-purple-400">trust</span>,{" "}
              <span className="font-semibold">clarity</span>, and{" "}
              <span className="font-semibold">reliability</span>. We combine
              research-driven design with disciplined engineering and
              responsible AI practices to help clients scale with confidence.
            </motion.p>

            <motion.ul
              variants={stagger}
              className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {[
                "Human-centred product design",
                "Production-ready engineering",
                "Responsible AI & governance",
                "Long-term partnerships",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-purple-500 mt-1" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-white/50 dark:bg-slate-800/40 shadow-xl"
          >
            <div className="relative w-full h-96 md:h-[420px]">
              <Image
                src="/images/about_3d_abstract.jpg"
                alt="Abstract 3D gradient render"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                 "Just because something doesn’t do what you planned it to do doesn’t mean it’s useless."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Journey so far
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timeline.map((t) => (
              <motion.div
                key={t.year}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-white/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 shadow-sm"
              >
                <p className="text-purple-500 font-bold text-lg">{t.year}</p>
                <p className="mt-3 text-slate-700 dark:text-slate-300">
                  {t.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-white/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:scale-105 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-50/10 mb-4">
                  {v.icon}
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {v.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {TEAM.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeUp}
                className="relative rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 shadow-sm"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {m.name}
                  </p>
                  <p className="text-sm text-purple-500 mb-2">{m.role}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {m.bio}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={`/team/${m.slug}`}
                      className="text-sm text-slate-700 dark:text-slate-300 hover:text-purple-500 transition"
                      aria-label={`Profile of ${m.name}`}
                    >
                      View profile
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-white/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-center shadow-sm"
              >
                <p className="text-4xl md:text-5xl font-extrabold text-purple-500">
                  {s.num}
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            What Clients Say
          </h3>
          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence initial={false} mode="wait">
              <motion.blockquote
                key={testimonials[testiIndex].author}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-2xl bg-white/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 shadow-md"
              >
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                  “{testimonials[testiIndex].quote}”
                </p>
                <footer className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                  — {testimonials[testiIndex].author}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={prevTesti}
                aria-label="Previous testimonial"
                className="p-2 rounded-full bg-white/90 dark:bg-slate-800/50 shadow hover:scale-105 transition"
              >
                ‹
              </button>
              <button
                onClick={nextTesti}
                aria-label="Next testimonial"
                className="p-2 rounded-full bg-white/90 dark:bg-slate-800/50 shadow hover:scale-105 transition"
              >
                ›
              </button>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mt-12"
        >
          <div className="inline-block px-8 py-12 rounded-3xl bg-gradient-to-r from-purple-900/50 to-purple-400/90 shadow-xl">
            <h4 className="text-2xl md:text-3xl font-extrabold text-white">
              Building the future, together
            </h4>
            <p className="text-white/90 mt-3 max-w-2xl mx-auto">
              Whether you’re launching a new product or scaling an existing
              platform, Keplinus is your partner for reliable, thoughtful
              engineering.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-purple-800 font-semibold hover:scale-105 transition-transform shadow"
              >
                Let's talk
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
    </>
  );
}
