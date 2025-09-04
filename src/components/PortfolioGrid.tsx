// src/pages/portfolio.tsx
import { motion } from "framer-motion";
import { Globe, Smartphone, Database, Brain, Rocket } from "lucide-react";

const projects = [
  {
    title: "CRED-setu",
    description:
      "AI-powered credit scoring platform for underbanked Indians with alternative data and borrower-lender matchmaking.",
    icon: Brain,
    tags: ["AI/ML", "Fintech", "Next.js", "Python", "APIs"],
  },
  {
    title: "Keplinus",
    description:
      "AI agents & professional websites company delivering cutting-edge automation and SaaS solutions.",
    icon: Rocket,
    tags: ["AI Agents", "Web Apps", "Automation", "APIs"],
  },
  {
    title: "Mobile Finance Assistant",
    description:
      "Voice-enabled finance assistant in Indian languages to help users manage credit, savings, and transactions.",
    icon: Smartphone,
    tags: ["React Native", "AI Voice", "Multilingual", "Finance"],
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Secure, scalable, and cost-efficient cloud architecture for handling millions of transactions.",
    icon: Database,
    tags: ["AWS", "PostgreSQL", "Firebase", "Docker"],
  },
];

const colors = [
  "from-indigo-500/20 to-indigo-700/10",
  "from-teal-500/20 to-teal-700/10",
  "from-rose-500/20 to-rose-700/10",
  "from-amber-500/20 to-amber-700/10",
];

export default function Portfolio() {
  return (
    <section className="min-h-[90vh] py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-14">Our Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 shadow-lg bg-gradient-to-br ${colors[index % colors.length]} backdrop-blur-md`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Icon className="w-10 h-10 mb-4 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200 mb-4">{project.description}</p>

                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <motion.li
                      key={idx}
                      className="text-xs bg-white/10 px-3 py-1 rounded-full"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      {tag}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
