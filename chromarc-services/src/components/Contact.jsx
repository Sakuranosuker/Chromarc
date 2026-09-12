import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.3em] text-gray-400 text-sm">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Ready To Grow?
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">
            Let's discuss your project and create a
            strategy that turns clicks into customers.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="
              border border-white/10
              bg-white/5
              backdrop-blur-md
              rounded-3xl
              p-8
            "
          >
            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Business Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
              />

              <button
                type="submit"
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-gradient-to-r
                  from-pink-500
                  via-purple-500
                  to-cyan-500
                  py-4
                  rounded-xl
                  font-semibold
                  hover:scale-[1.02]
                  transition-all
                "
              >
                <Send size={18} />
                Send Message
              </button>

            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">

              <div className="flex gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Mail />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    chromarcservices@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Phone />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    +91 74394 46412
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <MapPin />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Location
                  </h3>

                  <p className="text-gray-400">
                    Kolkata, India
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Card */}
            <div
              className="
                mt-12
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                rounded-3xl
                p-8
              "
            >
              <h3 className="text-2xl font-bold">
                Free Strategy Session
              </h3>

              <p className="text-gray-400 mt-4">
                Book a free consultation and discover
                growth opportunities for your business.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;