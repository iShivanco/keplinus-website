// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

import Footer from '@/components/Footer';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // Example: simple client-side effect for analytics placeholder.
  useEffect(() => {
    // Replace with real analytics initialization if needed
    // e.g., window.gtag && window.gtag('config', process.env.NEXT_PUBLIC_GA_ID)
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#099db6" />
        <link rel="icon" href="/favicon.ico" />
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
