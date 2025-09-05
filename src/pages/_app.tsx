// src/pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

import Footer from "@/components/Footer";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // Example: simple client-side effect for analytics placeholder.
  useEffect(() => {
    // Replace with real analytics initialization if needed
    // e.g., window.gtag && window.gtag('config', process.env.NEXT_PUBLIC_GA_ID)
  }, []);

  return (
    <>
      <Head>
        {/* ===== Basic SEO ===== */}
        <title>Keplinus – AI Agents & Professional Websites</title>
        <meta
          name="description"
          content="Keplinus builds intelligent AI agents and professional websites for startups and businesses worldwide."
        />
        <meta
          name="keywords"
          content="Keplinus, AI agents, AI software, professional websites, tech services, AI solutions, startup websites"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#099db6" />
        {/* Browser favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* ===== Canonical URL ===== */}
        <link rel="canonical" href="https://keplinus.vercel.app/" />

        {/* ===== Open Graph for Social Sharing ===== */}
        <meta
          property="og:title"
          content="Keplinus – AI Agents & Professional Websites"
        />
        <meta
          property="og:description"
          content="We build intelligent AI agents and premium websites worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keplinus.vercel.app/" />
        {/* Gradient logo image for OG */}
        <meta
          property="og:image"
          content="https://keplinus.vercel.app/logo-og.png"
        />

        {/* ===== Twitter Card ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Keplinus – AI Agents & Professional Websites"
        />
        <meta
          name="twitter:description"
          content="Keplinus builds intelligent AI agents and professional websites for startups and businesses worldwide."
        />
        <meta
          name="twitter:image"
          content="https://keplinus.vercel.app/logo-og.png"
        />

        {/* ===== JSON-LD Structured Data ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Keplinus",
              url: "https://keplinus.vercel.app/",
              logo: "https://keplinus.vercel.app/logo-og.png",
              sameAs: [
                "https://www.linkedin.com/company/keplinus",
                "https://twitter.com/keplinus",
              ],
              description:
                "Keplinus builds intelligent AI agents and professional websites for startups and businesses worldwide.",
            }),
          }}
        />
      </Head>

      {/* ThemeProvider adds class 'dark' when theme='dark' */}
      <ThemeProvider attribute="class" enableSystem={true}>
        <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
          <Navbar />

          <main className="flex-1">
            <Component {...pageProps} />
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
