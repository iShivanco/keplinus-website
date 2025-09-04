"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("✅ Message sent successfully!");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        const data = await res.json();
        setError(data?.error || "Failed to send message.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[70vh] py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          {/* Glass Form Card */}
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-2xl bg-white/90 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 shadow-md"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Start the conversation
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Fill out the form below — we typically respond within one business
              day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Acme, Inc."
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 transition-all"
                />
              </div>

              {success && (
                <p className="text-green-600 dark:text-green-400 text-sm">
                  {success}
                </p>
              )}
              {error && (
                <p className="text-red-600 dark:text-red-400 text-sm">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-900/70 to-indigo-500/90 hover:from-indigo-900/80 hover:to-indigo-500/100 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Micro contact info cards */}
          <motion.div
            variants={fadeUp}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-md p-2 bg-indigo-50 text-indigo-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Email
                  </p>
                  <a
                    href="mailto:keplinus@gmail.com"
                    className="text-sm text-slate-600 dark:text-slate-300"
                  >
                    keplinus@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-md p-2 bg-indigo-50 text-indigo-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Phone
                  </p>
                  <a
                    href="tel:+91987XXXX210"
                    className="text-sm text-slate-600 dark:text-slate-300"
                  >
                    +91 987XX XX210
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
