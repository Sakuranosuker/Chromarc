import { motion } from "framer-motion";
import logo from "../assets/Chromarc logo.png";

const features = [
  {
    icon: "🎯",
    title: "Precision Targeting",
    description:
      "We don't shout into the internet. We identify and reach the people most likely to become your customers through data-driven campaigns and strategic positioning.",
  },
  {
    icon: "⚡",
    title: "Design + Performance",
    description:
      "Beautiful design means nothing if it doesn't convert. Every website, campaign, and creative asset is built to generate measurable business growth.",
  },
  {
    icon: "🤝",
    title: "Transparent Partnership",
    description:
      "No confusing reports. No marketing jargon. Just clear communication, measurable progress, and a team invested in your success.",
  },
];

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
  },
  {
    number: "20+",
    label: "Happy Clients",
  },
  {
    number: "95%",
    label: "Client Retention",
  },
  {
    number: "24/7",
    label: "Support",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Why Brands Choose Chromarc
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg">
            Strategy. Creativity. Results.
            <br />
            We blend data-driven marketing with compelling design
            to help businesses grow faster and stand out online.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="
                group
                relative
                overflow-hidden
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                rounded-3xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-purple-500/50
              "
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

              <div className="relative z-10">
                <div className="text-5xl mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-28
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            rounded-[32px]
            p-10
            md:p-16
          "
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Logo Side */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full" />

                <img
                  src={logo}
                  alt="Chromarc Logo"
                  className="relative w-52 h-52 object-contain"
                />
              </div>
            </div>

            {/* Text Side */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                Our Mission
              </p>

              <h3 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                Turning Clicks Into{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Customers
                </span>
              </h3>

              <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                Our mission is to help businesses build a powerful
                digital presence through high-performing websites,
                strategic marketing, and memorable branding.
              </p>

              <p className="mt-6 text-gray-300 text-lg italic">
                "We bridge the gap between great ideas and
                measurable business growth."
              </p>
            </div>

          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="
                text-center
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                rounded-3xl
                p-8
              "
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {stat.number}
              </h3>

              <p className="text-gray-400 mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;