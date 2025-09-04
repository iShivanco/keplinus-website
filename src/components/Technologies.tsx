// src/pages/technologies.tsx
import { Code2, Smartphone, Server, BrainCircuit, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  {
    title: "Web Development",
    description:
      "Modern frameworks and tools to build responsive, fast, and SEO-friendly websites.",
    icon: Code2,
    items: ["Next.js", "React.js", "Tailwind CSS", "HTML5 & CSS3", "JavaScript / TypeScript"],
  },
  {
    title: "Mobile Development",
    description:
      "High-performance mobile apps with smooth UI/UX for Android and iOS platforms.",
    icon: Smartphone,
    items: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    title: "Backend & Cloud",
    description:
      "Scalable, secure, and robust backend solutions with cloud integration.",
    icon: Server,
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "AWS / Firebase"],
  },
  {
    title: "AI & Data",
    description:
      "Intelligent solutions for automation, analytics, and AI-powered insights.",
    icon: BrainCircuit,
    items: ["Python", "TensorFlow / PyTorch", "OpenAI API", "Data Analytics"],
  },
];

const colors = [
  "from-pink-500/20 to-pink-700/10",
  "from-blue-500/20 to-blue-700/10",
  "from-green-500/20 to-green-700/10",
  "from-purple-500/20 to-purple-700/10",
];


// from-black to-gray-900
// gray-900

export default function Technologies() {
  return (
    <section className="min-h-[90vh] py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-14">Technologies We Use</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((service, index) => {
            const Icon = service.icon;
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
                {/* Icon with stable entry animation */}
                <motion.div
                  initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Icon className="w-10 h-10 mb-4 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-200 mb-4">{service.description}</p>

                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </motion.div>
                      <span>{item}</span>
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
