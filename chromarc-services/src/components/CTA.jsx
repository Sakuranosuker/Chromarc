import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          max-w-7xl
          mx-auto
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-10
          md:p-16
          text-center
        "
      >
        {/* Background Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full" />

        <div className="relative z-10">

          <p className="uppercase tracking-[0.3em] text-gray-400 text-sm">
            Let's Build Something Amazing
          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Ready To Turn
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {" "}Clicks Into Customers?
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">
            Whether you're launching a new business,
            growing your online presence, or scaling your marketing,
            Chromarc is here to help.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="
              mt-10
              bg-gradient-to-r
              from-pink-500
              via-purple-500
              to-cyan-500
              px-10
              py-4
              rounded-xl
              font-semibold
              text-lg
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              shadow-purple-500/20
            "
          >
            Book Free Strategy Call
          </button>

        </div>
      </motion.div>
    </section>
  );
};

export default CTA;