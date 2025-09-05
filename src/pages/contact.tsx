// src/pages/contact.tsx
"use client";

import Head from "next/head";
import { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Send,
  Check,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function ContactFormInline({ onSuccess }: { onSuccess?: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validate() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in name, email, and message.");
      return false;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError(null);
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate() || sending) return;

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setSent(true);
        onSuccess?.();
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setTimeout(() => setSent(false), 3500);
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <motion.label variants={fadeUp} className="block">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Full name
          </span>
          <input
            className="mt-2 w-full rounded-lg border border-slate-200/70 dark:border-slate-700/60 bg-white/90 dark:bg-slate-800/50 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            required
          />
        </motion.label>

        <motion.label variants={fadeUp} className="block">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
          </span>
          <input
            type="email"
            className="mt-2 w-full rounded-lg border border-slate-200/70 dark:border-slate-700/60 bg-white/90 dark:bg-slate-800/50 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            aria-invalid={!!error}
          />
        </motion.label>
      </div>

      <motion.label variants={fadeUp} className="block">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Company (optional)
        </span>
        <input
          className="mt-2 w-full rounded-lg border border-slate-200/70 dark:border-slate-700/60 bg-white/90 dark:bg-slate-800/50 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Acme, Inc."
        />
      </motion.label>

      <motion.label variants={fadeUp} className="block">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Message
        </span>
        <textarea
          className="mt-2 w-full min-h-[140px] rounded-lg border border-slate-200/70 dark:border-slate-700/60 bg-white/90 dark:bg-slate-800/50 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project, timeline, and goals..."
          required
        />
      </motion.label>

      <div className="flex items-center gap-3">
        <motion.button
          variants={fadeUp}
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-5 py-2 rounded-lg font-semibold shadow hover:scale-[1.02] transition focus:outline-none"
        >
          {sending ? (
            <>
              Sending...
              <Send className="w-4 h-4 animate-[spin_1s_linear_infinite]" />
            </>
          ) : sent ? (
            <>
              Sent
              <Check className="w-4 h-4" />
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>

        <motion.button
          variants={fadeUp}
          type="button"
          onClick={() => {
            setName("");
            setEmail("");
            setCompany("");
            setMessage("");
            setError(null);
          }}
          className="px-4 py-2 rounded-lg border border-slate-200/70 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/40 text-slate-700 dark:text-slate-200 hover:bg-white/90 transition"
        >
          Reset
        </motion.button>

        {error && (
          <motion.div
            variants={fadeUp}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ml-auto text-sm text-red-600 dark:text-red-400"
            role="status"
          >
            {error}
          </motion.div>
        )}
      </div>
    </motion.form>
  );
}

export default function ContactPage() {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const scrollToForm = () =>
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <>
      {/* ===== SEO HEAD ===== */}
      <Head>
        <title>Contact Keplinus – Web Development & AI Solutions</title>
        <meta
          name="description"
          content="Get in touch with Keplinus to discuss projects, partnerships, or integrations. Fill out the contact form and our team will respond promptly."
        />
        <link rel="canonical" href="https://keplinus.vercel.app/contact" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Keplinus – Web Development & AI Solutions"
        />
        <meta
          property="og:description"
          content="Reach out to Keplinus for collaborations, project inquiries, or partnership discussions. Our team will respond within one business day."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keplinus.vercel.app/contact" />
        <meta
          property="og:image"
          content="https://keplinus.vercel.app/logo-og.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Keplinus – Web Development & AI Solutions"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Keplinus for collaborations, project inquiries, or partnership discussions."
        />
        <meta
          name="twitter:image"
          content="https://keplinus.vercel.app/logo-og.png"
        />
      </Head>

      <section className="py-20 bg-gradient-to-b from-indigo-500/20 to-indigo-700/10 dark:from-slate-900 dark:to-slate-950 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Get in touch{" "}
              <span className="bg-gradient-to-r from-indigo-600/80 to-indigo-400/90 bg-clip-text text-transparent">
                with Keplinus
              </span>
            </h1>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              Curious about a project, partnership or integration? Share the
              details and we’ll get back with a clear plan and next steps.
            </p>
          </motion.header>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Form + micro info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-7"
              ref={bottomRef as any}
            >
              <motion.div
                variants={fadeUp}
                className="p-6 rounded-2xl bg-white/90 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 shadow-md"
              >
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Start the conversation
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Fill the form below — we typically respond within one business
                  day.
                </p>

                <ContactFormInline
                  onSuccess={() => {
                    /* noop — just local success */
                  }}
                />
              </motion.div>

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

            {/* Right: sticky info column */}
            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-5"
            >
              <motion.div variants={fadeUp} className="sticky top-24">
                <div className="p-6 rounded-2xl bg-white/95 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 shadow-md">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Office
                  </h3>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded-md p-2 bg-indigo-50 text-indigo-700">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Head Office
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Saviour, crossing republik, Ghaziabad, Uttar Pradesh,
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded-md p-2 bg-indigo-50 text-indigo-700">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Hours
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Mon - Fri: 9:30am — 6:30pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-md p-2 bg-indigo-50 text-indigo-700">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Book time
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Prefer a call? Use the form or email to schedule a
                        discovery call.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a
                      href="mailto:keplinus@gmail.com"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium shadow hover:scale-[1.02] transition"
                    >
                      <Mail className="w-4 h-4" /> Email
                    </a>
                    <a
                      href="tel:+91987XXXX210"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 hover:bg-slate-50/70 transition"
                    >
                      <Phone className="w-4 h-4" /> Call
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-700/50 shadow-sm">
                  <iframe
                    title="Keplinus Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.986224649244!2d77.428542!3d28.6331857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe9815f0897%3A0xc4923e391b38ce48!2sSaviour%20GreenIsle!5e0!3m2!1sen!2sin!4v1693842345678!5m2!1sen!2sin"
                    width="100%"
                    height="224"
                    className="border-0"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Micro FAQ */}
                <div className="mt-6 p-4 rounded-xl bg-white/90 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Quick FAQs
                  </h4>
                  <div className="space-y-2">
                    <details className="group rounded-md p-2">
                      <summary className="cursor-pointer font-medium flex justify-between items-center text-slate-900 dark:text-white">
                        What is your typical response time?
                        <span className="text-indigo-500">1 day</span>
                      </summary>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        We respond to most inquiries within one business day.
                      </p>
                    </details>

                    <details className="group rounded-md p-2">
                      <summary className="cursor-pointer font-medium flex justify-between items-center text-slate-900 dark:text-white">
                        Do you sign NDAs?
                        <span className="text-indigo-500">Yes</span>
                      </summary>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        Yes — we’re happy to sign NDAs before discovery calls.
                      </p>
                    </details>
                  </div>
                </div>
              </motion.div>
            </motion.aside>
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="rounded-2xl p-6 bg-gradient-to-r from-indigo-900/40 to-indigo-400/60 text-white shadow-xl flex flex-col md:flex-row items-center gap-4 justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-extrabold">
                  Ready to start?
                </h3>
                <p className="text-indigo-100/90 mt-1">
                  Share a few details and we’ll propose a plan that fits your
                  needs.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-indigo-800 font-semibold shadow hover:scale-[1.03] transition"
                >
                  Contact us
                </button>
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/30 text-white/90 hover:bg-white/20 transition"
                >
                  View portfolio
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating quick contact (bottom-right) */}
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={scrollToForm}
          aria-label="Quick contact"
          className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-indigo-800 to-indigo-400 text-white shadow-lg hover:scale-[1.03] transition"
        >
          <Mail className="w-5 h-5" />
          <span className="hidden sm:inline">Contact</span>
        </motion.button>
      </section>
    </>
  );
}
