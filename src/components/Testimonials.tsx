"use client";

const testimonials = [
  {
    name: "Daniel Thompson",
    role: "CEO, TechCorp",
    quote:
      "Keplinus delivered an exceptional AI-driven solution for our customer support. The team was highly professional, responsive, and reliable throughout the project.",
    gradient: "from-pink-400/40 to-pink-600/20",
  },
  {
    name: "Aisha Bello",
    role: "Founder, ShopEase",
    quote:
      "Their web development team created a seamless, high-performance e-commerce platform for us. Their attention to detail and expertise exceeded our expectations.",
    gradient: "from-blue-400/40 to-blue-600/20",
  },
  {
    name: "Ankit Singh",
    role: "Product Manager, FinX",
    quote:
      "Integrating AI and analytics through Keplinus transformed our operations. Their solutions are innovative, scalable, and truly impactful for our business.",
    gradient: "from-green-400/40 to-green-600/20",
  },
  {
    name: "Emma Wilson",
    role: "CTO, InnovateX",
    quote:
      "Keplinus’ AI solutions streamlined our processes and delivered measurable results. Their professionalism and technical expertise are unmatched.",
    gradient: "from-purple-400/40 to-purple-600/20",
  },
];

export default function Testimonials() {
  return (
    <section className="min-h-[70vh] py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`bg-gradient-to-br ${t.gradient} p-6 rounded-xl shadow-lg 
              transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl`}
            >
              <div className="flex flex-col items-start gap-2 mb-4">
                <h3 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/70">
                  {t.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  {t.role}
                </p>
              </div>
              <p className="text-sm italic text-white/90 leading-relaxed">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
