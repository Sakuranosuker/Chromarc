import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

import heroBg from "../assets/HeroBG.jpg";

const Hero = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [0, 500],
    [1, 0]
  );

  const scale = useTransform(
    scrollY,
    [0, 500],
    [1, 1.15]
  );

  // Mouse Parallax
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    const x = e.clientX - innerWidth / 2;
    const y = e.clientY - innerHeight / 2;

    rotateY.set(x / 120);
    rotateX.set(-y / 120);
  };

  const resetMouse = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
    >
      {/* Background Image */}
      <motion.div
        style={{
          opacity,
          scale,
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformPerspective: 1200,
        }}
        className="absolute inset-0 will-change-transform"
      >
        <motion.img
          src={heroBg}
          alt="Hero Background"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[105%] h-[105%] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0B0B0B]" />
      </motion.div>

      {/* Floating Background Glows */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-pink-500/20 blur-[150px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col justify-center min-h-[85vh]">
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
        >
          Turn Clicks Into
          <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Customers
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg md:text-xl"
        >
          SEO, Social Media Marketing,
          Paid Advertising, Video Design,
          Branding and High-Converting
          Websites built to accelerate
          business growth.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20">
            Book Free Strategy Call
          </button>

          <button className="border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl hover:bg-white/5 transition">
            View Portfolio
          </button>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div>
            <h2 className="text-4xl font-bold text-cyan-400">
              50+
            </h2>
            <p className="text-gray-400 mt-2">
              Projects
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-pink-400">
              20+
            </h2>
            <p className="text-gray-400 mt-2">
              Clients
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-purple-400">
              95%
            </h2>
            <p className="text-gray-400 mt-2">
              Retention
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">
              24/7
            </h2>
            <p className="text-gray-400 mt-2">
              Support
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0B0B0B]" />
    </section>
  );
};

export default Hero;