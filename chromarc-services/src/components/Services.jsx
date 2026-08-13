const services = [
  {
    title: "SEO Optimization",
    icon: "🔍",
    description:
      "Improve rankings, organic traffic, and visibility through data-driven SEO strategies.",
  },
  {
    title: "Social Media Marketing",
    icon: "📱",
    description:
      "Build a strong online presence with engaging content and audience growth.",
  },
  {
    title: "Meta & Google Ads",
    icon: "🎯",
    description:
      "Run high-converting ad campaigns across Meta and Google to generate quality leads.",
  },
  {
    title: "Brand Strategy",
    icon: "✨",
    description:
      "Create a memorable brand identity that differentiates you from competitors.",
  },
  {
    title: "Website Development",
    icon: "💻",
    description:
      "Modern, responsive, and conversion-focused websites built for growth.",
  },
  {
    title: "Video & Graphic Design",
    icon: "🎬",
    description:
      "Creative visuals, motion graphics, and professional designs that elevate your brand.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Growth Services
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            We combine strategy, creativity, and performance marketing
            to help businesses scale faster and convert more customers.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                relative
                overflow-hidden
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                p-8
                rounded-3xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-purple-500/50
              "
            >

              {/* Gradient Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

              <div className="relative z-10">

                <div className="text-5xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4 transition-all group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;