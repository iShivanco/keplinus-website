// src/pages/blog.tsx
"use client";

import { motion } from "framer-motion";

export default function Blog() {
  return (
    <section className="min-h-[90vh] py-20 bg-gradient-to-b from-gray-900 to-black text-white px-6 lg:px-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Keplinus: Revolutionizing Web Development
        </motion.h1>

        {/* Introduction */}
        <motion.div
          className="space-y-4 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            In the ever-evolving landscape of web development, staying ahead of the curve is paramount. 
            <strong> Keplinus</strong> is our cutting-edge project designed to deliver seamless, scalable, 
            and secure web experiences for businesses and developers alike.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-amber-400">Project Vision</h2>
          <p className="text-gray-200">
            Keplinus aims to be a comprehensive solution for modern web applications. 
            Our mission is to empower developers and businesses to build dynamic, user-friendly platforms 
            that scale efficiently and provide a premium user experience.
          </p>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-amber-400">Technology Stack</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li><strong>Frontend:</strong> React.js & Next.js for responsive, dynamic interfaces.</li>
            <li><strong>Styling:</strong> Tailwind CSS for a utility-first, rapid development approach.</li>
            <li><strong>Backend:</strong> Node.js & Express.js for scalable server-side solutions.</li>
            <li><strong>Database:</strong> MongoDB, providing flexibility and high performance.</li>
            <li><strong>Authentication:</strong> NextAuth.js for secure, customizable authentication.</li>
            <li><strong>Deployment:</strong> Vercel for seamless hosting and optimized performance.</li>
          </ul>
        </motion.div>

        {/* Development Journey */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-amber-400">Development Journey</h2>
          <p className="text-gray-200">
            The Keplinus development process emphasizes modularity and scalability. By leveraging a component-based architecture, 
            our application is both maintainable and extensible. We follow clean code practices, rigorous testing, 
            and continuous integration to ensure high-quality standards throughout the project lifecycle.
          </p>
        </motion.div>

        {/* Future Directions */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="text-3xl font-bold text-amber-400">Future Directions</h2>
          <p className="text-gray-200">
            Looking ahead, Keplinus will integrate advanced features such as real-time data processing, 
            AI-driven analytics, and enhanced security protocols. Our commitment to innovation ensures 
            that Keplinus remains at the forefront of modern web development, meeting evolving business needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
