// src/pages/services.tsx
"use client";

import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import {
  Code,
  Cpu,
  Database,
  Smartphone,
  CheckCircle,
  Rocket,
  Zap,
  ShieldCheck,
  Globe,
  BarChart3,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Service = {
  icon: React.ReactNode;
  title: string;
  blurb: string;
  image: string;
  features: string[];
  deliverables: string[];
  cta?: string;
};

const SERVICES: Service[] = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Web Development",
    blurb:
      "High-performance web apps and marketing sites engineered for speed, accessibility, and conversion. built with modern stacks and clean architecture.",
    image: "/images/about_banner_coding.jpg",
    features: [
      "Next.js + TypeScript foundations",
      "Accessibility & SEO baked-in",
      "Edge-ready performance (CDN, ISR)",
      "Design system & component library",
    ],
    deliverables: [
      "Responsive UI/UX",
      "Headless CMS setup",
      "Analytics & events",
      "CI/CD & observability",
    ],
    cta: "Get a Web Build Plan",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "AI Solutions",
    blurb:
      "AI agents that automate workflows, answer customer queries, and transform operations with safe, auditable reasoning.",
    image: "/images/about_service_ai.jpg",
    features: [
      "Agentic workflows & tools",
      "RAG + vector search",
      "Guardrails & evals",
      "Multi-channel deployments",
    ],
    deliverables: [
      "Agent design doc",
      "Model & prompt configs",
      "Monitoring dashboards",
      "Handover & training",
    ],
    cta: "Design My AI Agent",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Data Analytics",
    blurb:
      "From pipelines to dashboards — we turn raw data into reliable, decision-ready insights with strong governance.",
    image: "/images/about_database_icon.jpg",
    features: [
      "ETL/ELT pipelines",
      "Warehouse & modeling",
      "Metric definitions (semantic layer)",
      "Self-serve BI",
    ],
    deliverables: [
      "Data schemas & docs",
      "Automated tests",
      "Alerting & SLAs",
      "Executive dashboards",
    ],
    cta: "Audit My Data Layer",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile Apps",
    blurb:
      "Delightful iOS/Android apps with crisp UX, offline-first patterns, and analytics from day one.",
    image: "/images/about_ui_ux_design.jpg",
    features: [
      "Cross-platform architecture",
      "Offline sync & caching",
      "Design system parity with web",
      "Secure auth & payments",
    ],
    deliverables: [
      "Store-ready builds",
      "Crash & perf monitoring",
      "Design tokens",
      "Release playbook",
    ],
    cta: "Plan My App Launch",
  },
];

export default function Services() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  let initialIndex = 0; // default to Web Development

  if (serviceParam === "web") initialIndex = 0;
  else if (serviceParam === "ai") initialIndex = 1;
  else if (serviceParam === "mobile") initialIndex = 3; // Mobile Apps box
  // else defaults to 0

  const [active, setActive] = useState(initialIndex);
  const service = SERVICES[active];

  // Animation presets
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <>
      {/* ===== SEO HEAD ===== */}
      <Head>
        <title>Keplinus Services – Web, AI, Mobile & Analytics Solutions</title>
        <meta
          name="description"
          content="Explore Keplinus' full-service offerings: Web Development, AI Agents, Data Analytics, and Mobile App solutions. Build fast, reliable, and scalable products with us."
        />
        <link rel="canonical" href="https://keplinus.vercel.app/services" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Keplinus Services – Web, AI, Mobile & Analytics"
        />
        <meta
          property="og:description"
          content="Discover Keplinus' cutting-edge services: web apps, AI solutions, mobile apps, and data analytics designed for growth and impact."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://keplinus.vercel.app/services"
        />
        <meta
          property="og:image"
          content="https://keplinus.vercel.app/logo-og.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Keplinus Services – Web, AI, Mobile & Analytics"
        />
        <meta
          name="twitter:description"
          content="Explore Keplinus' full-service offerings: Web Development, AI Agents, Data Analytics, and Mobile App solutions."
        />
        <meta
          name="twitter:image"
          content="https://keplinus.vercel.app/logo-og.png"
        />
      </Head>

      <section className="py-24 bg-gradient-to-b from-amber-40 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-amber-500/40 to-amber-500/90 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300">
              We design and ship solutions that are{" "}
              <span className="font-semibold text-amber-500">fast</span>,{" "}
              <span className="font-semibold">reliable</span>, and{" "}
              <span className="font-semibold">scalable</span> — purpose-built
              for growth.
            </p>
          </motion.header>

          {/* Service Explorer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left rail */}
            <aside className="lg:col-span-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="hidden lg:block sticky top-24 space-y-2"
              >
                {SERVICES.map((s, i) => (
                  <motion.button
                    key={s.title}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActive(i)}
                    className={`w-full text-left rounded-2xl p-4 border transition group ${
                      active === i
                        ? "bg-white/80 dark:bg-slate-800/50 border-amber-400/50 ring-2 ring-amber-400/20 shadow-sm"
                        : "bg-white/60 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-700/60 hover:border-amber-300/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-xl ring-1 ${
                          active === i
                            ? "bg-amber-500/10 ring-amber-400/40 text-amber-500"
                            : "bg-slate-100/50 dark:bg-slate-900/30 ring-slate-200/50 dark:ring-slate-700/50 text-amber-500"
                        }`}
                      >
                        {s.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {s.title}
                        </p>
                        <p className="text-sm text-slate-600/90 dark:text-slate-400 line-clamp-2">
                          {s.blurb}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </aside>

            {/* Right panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl bg-white/80 dark:bg-slate-800/40 border border-slate-200/40 dark:border-slate-700/40 shadow-md overflow-hidden"
                >
                  {/* Media */}
                  <div className="relative h-64 md:h-[380px] overflow-hidden">
                    <motion.div
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                      className="h-full w-full"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 720px, 100vw"
                      />
                    </motion.div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="p-6 md:p-8"
                  >
                    <motion.h2
                      variants={fadeInUp}
                      className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white"
                    >
                      {service.title}
                    </motion.h2>
                    <motion.p
                      variants={fadeInUp}
                      className="mt-3 text-lg text-slate-700 dark:text-slate-300"
                    >
                      {service.blurb}
                    </motion.p>

                    {/* Features */}
                    <motion.div
                      variants={staggerContainer}
                      className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      {service.features.map((f) => (
                        <motion.div
                          key={f}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.03, y: -2 }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-700/50"
                        >
                          <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                          <p className="text-slate-700 dark:text-slate-300">
                            {f}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Deliverables */}
                    <motion.div
                      variants={staggerContainer}
                      className="mt-6 flex flex-wrap gap-2"
                    >
                      {service.deliverables.map((d) => (
                        <motion.span
                          key={d}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full text-sm border bg-white/70 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-700/60"
                        >
                          {d}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div variants={fadeInUp} className="mt-7">
                      <a
                        href="/contact"
                        className="inline-block rounded-full px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.05] bg-gradient-to-r from-amber-500/90 to-amber-600/90"
                      >
                        {service.cta ?? "Talk to Us"}
                      </a>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Capabilities */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-24"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
              What We Ship
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Rocket className="w-6 h-6" />,
                  title: "Launch-Ready Builds",
                  desc: "Production CI/CD, perf budgets, error & uptime alerts.",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Performance First",
                  desc: "Core Web Vitals, edge caching, scalable infra.",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Security & Compliance",
                  desc: "Auth, audit logs, role-based access, best practices.",
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Globalization",
                  desc: "i18n, localization, multi-region delivery.",
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Analytics & Insights",
                  desc: "Dashboards, event tracking, growth loops.",
                },
                {
                  icon: <Layers className="w-6 h-6" />,
                  title: "Design Systems",
                  desc: "Tokenized theming, reusable components, docs.",
                },
              ].map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="p-5 rounded-2xl bg-white/80 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm shadow-sm hover:shadow-md transition"
                >
                  <div className="inline-flex items-center gap-2 rounded-xl px-2.5 py-1.5 bg-amber-500/10 ring-1 ring-amber-500/30 text-amber-600">
                    {c.icon}
                    <span className="text-sm font-medium">{c.title}</span>
                  </div>
                  <p className="mt-3 text-slate-700 dark:text-slate-300">
                    {c.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Process */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-24"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-8">
              Our Process
            </h3>
            <ol className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { n: 1, t: "Discover", d: "Goals, users, constraints." },
                { n: 2, t: "Design", d: "UX flows, wireframes, system." },
                { n: 3, t: "Build", d: "Iterative sprints, reviews." },
                { n: 4, t: "Launch", d: "Hardening, telemetry, docs." },
                { n: 5, t: "Evolve", d: "Roadmap, A/B tests, support." },
              ].map((s) => (
                <motion.li
                  key={s.n}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.04 }}
                  className="relative rounded-2xl p-5 bg-white/80 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold">
                    {s.n}
                  </span>
                  <p className="mt-3 font-semibold text-slate-900 dark:text-white">
                    {s.t}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">{s.d}</p>
                </motion.li>
              ))}
            </ol>
          </motion.section>

          {/* FAQ */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-24"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
              FAQs
            </h3>
            <div className="space-y-4">
              {[
                {
                  q: "How do we start?",
                  a: "We begin with a short discovery call to align on goals, constraints, timeline, and success criteria. Then we propose scope and milestones.",
                },
                {
                  q: "What stacks do you use?",
                  a: "Modern JS/TS (Next.js), cloud-native infra, headless CMS, and battle-tested AI tooling. We adapt to your ecosystem when needed.",
                },
                {
                  q: "Do you offer ongoing support?",
                  a: "Yes. We provide retainers for maintenance, new features, and roadmap planning with agreed SLAs.",
                },
                {
                  q: "Can you integrate with our internal tools?",
                  a: "Absolutely — we regularly integrate CRMs, analytics, payments, auth providers, and data warehouses.",
                },
              ].map((f, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="group rounded-xl border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/40 p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-slate-900 dark:text-white">
                    {f.q}
                    <span className="ml-4 transition-transform group-open:rotate-45 text-amber-500 font-bold">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {f.a}
                  </p>
                </motion.details>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-32 text-center relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 to-pink-600 px-8 py-20 shadow-xl"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Build Something Extraordinary?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let’s turn your vision into a digital reality with cutting-edge
                technology, smooth UX, and scalable architecture.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 rounded-full bg-white text-amber-600 font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Get in Touch
              </a>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-20 blur-2xl animate-pulse"></div>
          </motion.section>
        </div>
      </section>
    </>
  );
}
