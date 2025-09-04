// src/pages/portfolio.tsx
"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const projects = [
  {
    title: "AI Credit Scoring Model",
    image: "/images/cred.png",
    description:
      "Cred-Setu-AI is an AI-powered credit scoring engine designed for the underbanked Indian population, using alternative data and explainable AI to connect borrowers and lenders in a secure, transparent, and inclusive way.",
    features: [
      "Alternative Data-Based Credit Scoring",
      "Borrower–Lender Matching Engine",
      "24/7 automated support",
    ],
    link: "#",
  },
  {
    title: "Oil Filling Station Website",
    image: "/images/pump.jpeg",
    description:
      "Dhruv Filling Station is a web-based dashboard designed for managing and monitoring petrol/diesel/CNG pumps. It helps station owners and staff track fuel inventory, sales, revenue, employee shifts, and customer feedback—all in real-time. The dashboard also provides reports, alerts for low stock, maintenance reminders, and financial oversight to make operations smooth, efficient, and transparent.",
    features: ["Real-Time Fuel Monitoring", "Secure payments", "Sales Analytics"],
    link: "#",
  },
  {
    title: "Mobile news App",
    image: "/images/news.jpg",
    description:
      "Global News is a cutting-edge mobile application designed to deliver real-time, personalized news from around the world. Whether you're interested in politics, technology, sports, or entertainment, Global News ensures you stay informed with the latest updates tailored to your preferences.",
    features: [
      "Personalized News Feed",
      "Offline Reading",
      "Live News Streaming",
    ],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    image: "/images/sales.png",
    description:
      "Designed an interactive analytics dashboard to give businesses real-time insights into KPIs and growth metrics.",
    features: ["Custom reports", "Data visualization", "Scalable architecture"],
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-gradient-to-b from-pink-100/40 to-pink-100/50 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 text-slate-900 dark:text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-900 to-pink-500 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-center text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-16">
          Every project we build is rooted in{" "}
          <span className="font-semibold text-pink-500">innovation</span>,{" "}
          <span className="font-semibold">functionality</span>, and{" "}
          <span className="font-semibold">impact</span>. Here’s a look at some
          of our featured work.
        </p>

        {/* Projects Section */}
        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left: Image */}
              <div className="flex-1 relative w-full h-72 md:h-[400px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform"
                />
              </div>

              {/* Right: Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle className="w-5 h-5 text-pink-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-pink-800 to-pink-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
