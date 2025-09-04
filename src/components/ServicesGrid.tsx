// src/components/ServicesGrid.tsx
"use client";

import { Code, Cpu, Database, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Code className="w-6 h-6 text-white" />,
    title: "Web Development",
    description: "Custom websites with modern, responsive designs to grow your business online.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-white" />,
    title: "AI Solutions",
    description: "AI agents and intelligent systems to automate and optimize your workflows.",
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: "Data Analytics",
    description: "Advanced analytics solutions to make data-driven business decisions.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Mobile Apps",
    description: "High-performance mobile apps for iOS and Android with sleek UI/UX.",
  },
];

// 🎨 Same gradient as Technologies.tsx cards
const cardGradient = "linear-gradient(160deg, #0E0425, #11052E, #180741)";

export default function ServicesGrid() {
  return (
    <section
      className="min-h-[75vh] py-20"
      style={{
        background: "linear-gradient(135deg, #0E0425 0%, #11052E 50%, #180741 100%)",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 flex flex-col items-center text-center rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              style={{
                background: cardGradient,
                backdropFilter: "blur(6px)",
              }}
            >
              {/* Icon Circle */}
              <div
                className="rounded-full p-4 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
