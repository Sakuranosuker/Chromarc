import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 blur-[180px] rounded-full" />

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 blur-[180px] rounded-full" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[200px] rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
        >
          Build.
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Scale. </span>
          Dominate.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg md:text-xl"
        >
          We help businesses generate more leads, increase
          visibility, and convert traffic into revenue through
          SEO, Social Media Marketing, Paid Ads, Branding,
          and High-Converting Websites.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Book Free Strategy Call
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/5 transition">
            View Portfolio
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              50+
            </h2>
            <p className="text-gray-400 mt-2">
              Projects
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              20+
            </h2>
            <p className="text-gray-400 mt-2">
              Clients
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              95%
            </h2>
            <p className="text-gray-400 mt-2">
              Retention
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              24/7
            </h2>
            <p className="text-gray-400 mt-2">
              Support
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;