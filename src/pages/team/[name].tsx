// src/pages/team/[name].tsx
"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  slug: string;
  role: string;
  bio: string;
  photo: string;
  linkedin?: string;
  details: string;
  skills: string[];
};

const TEAM: TeamMember[] = [
  {
    name: "Shivanshu Dixit",
    slug: "shivanshu-dixit",
    role: "Founder & CTO",
    bio: "Systems architect focused on scalable web platforms, AI pipelines, and observability.",
    photo: "/images/shivanshu_profile.jpg",
    linkedin: "https://www.linkedin.com/",
    details: `Shivanshu has over 5 years of experience in distributed systems and AI infrastructure.
      He has designed pipelines serving millions of requests per day and leads our technical vision.`,
    skills: ["System Architecture", "AI/ML Pipelines", "Cloud Infrastructure"],
  },
  {
    name: "Rohan Rai",
    slug: "rohan-rai",
    role: "Head of Product",
    bio: "Design-led product leader who turns research into delightful, usable products.",
    photo: "/images/rohan_profile.jpg",
    linkedin: "https://www.linkedin.com/",
    details: `Rohan blends design thinking with product strategy. He has shipped products across fintech,
      healthtech, and SaaS, always with a focus on human-first design.`,
    skills: ["Product Strategy", "UX Research", "Prototyping"],
  },
  {
    name: "Advika",
    slug: "advika",
    role: "Lead ML Engineer",
    bio: "Builds robust, auditable agentic systems and production ML infrastructure.",
    photo: "/images/advika_profile.jpg",
    linkedin: "https://www.linkedin.com/",
    details: `Advika is passionate about explainable AI and governance. She has implemented
      large-scale ML systems with an emphasis on fairness and performance.`,
    skills: ["Machine Learning", "MLOps", "Explainable AI"],
  },
];

export default function TeamProfile() {
  const router = useRouter();
  const { name } = router.query;

  const member = TEAM.find((m) => m.slug === name);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Member not found
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-purple-100/40 to-purple-50 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Profile Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white/80 dark:bg-slate-800/50 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Left: Photo */}
            <div className="relative h-72 md:h-full">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="md:col-span-2 p-8 space-y-4">
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                {member.name}
              </h1>
              <p className="text-purple-600 font-medium">{member.role}</p>
              <p className="text-slate-700 dark:text-slate-300">{member.details}</p>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                  Key Skills
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-6">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                )}
                <Link
                  href="/about"
                  className="inline-block px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 transition"
                >
                  ← Back to Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
