import { motion } from "framer-motion";

import clinic from "../assets/projects/clinic.png";
import asCollection from "../assets/projects/asCollection2.jpeg";
import explorFoodie from "../assets/projects/explorFoodie.png";
import bangaliana from "../assets/projects/bangaliana.png";
import ramshas from "../assets/projects/RamshaBakery2.png";

const projects = [
  {
    title: "Dr. SM Rahaman Clinic",
    category: "Website + SEO + GBP",
    result: "Local Search Growth",
    image: clinic,
  },
  {
    title: "AS Collection",
    category: "Social Media + GBP",
    result: "Business Visibility Boost",
    image: asCollection,
  },
  {
    title: "Ramsha's Bakery",
    category: "Social Media + Content",
    result: "Visibility + Engagement Boost",
    image: ramshas,
  },
  {
    title: "Explor Foodie",
    category: "Instagram Growth",
    result: "436+ Followers",
    image: explorFoodie,
  },
  {
    title: "Bangaliana By Ranu",
    category: "Instagram Growth",
    result: "4956+ Followers",
    image: bangaliana,
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-gray-400 text-sm">
            Featured Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects That Deliver Results
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Real businesses. Real growth. Real impact.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                group
                grid
                md:grid-cols-[320px_1fr]
                gap-0
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                hover:border-purple-500/40
                transition-all
                duration-300
              "
            >
              {/* Image */}
              <div className="overflow-hidden h-[220px] md:h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span
                  className="
                    w-fit
                    px-3
                    py-1.5
                    rounded-full
                    text-xs
                    border
                    border-purple-500/20
                    bg-purple-500/10
                    text-purple-300
                  "
                >
                  {project.category}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold mt-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm md:text-base leading-relaxed">
                  Helping brands improve visibility, engagement, and
                  sustainable growth through tailored digital strategies.
                </p>

                <div className="mt-5">
                  <div
                    className="
                      inline-flex
                      items-center
                      px-4
                      py-2
                      rounded-lg
                      border
                      border-cyan-500/20
                      bg-cyan-500/10
                      text-cyan-300
                      text-sm
                    "
                  >
                    {project.result}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;