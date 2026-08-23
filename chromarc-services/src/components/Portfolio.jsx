import { motion } from "framer-motion";
import clinic from "../assets/projects/clinic.png"
import asCollection from "../assets/projects/asCollection.png"
import explorFoodie from "../assets/projects/explorFoodie.png"
import bangaliana from "../assets/projects/bangaliana.png"
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
    <section
      id="work"
      className="relative py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-gray-400 text-sm">
            Featured Work
          </p>

          <h2 className="text-5xl font-bold mt-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects That Deliver Results
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Real businesses. Real growth.
            Real impact.
          </p>

        </div>

        <div className="mt-24 space-y-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                delay: index * 0.1,
              }}
              className="
                group
                grid
                lg:grid-cols-2
                gap-8
                items-center
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                rounded-3xl
                overflow-hidden
                hover:border-purple-500/40
                transition-all
                duration-500
              "
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-10">

                <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300">
                  {project.category}
                </div>

                <h3 className="text-4xl font-bold mt-6">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  Helping brands improve visibility,
                  customer engagement, and growth through
                  tailored digital strategies.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <div className="bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-xl">
                    {project.result}
                  </div>

                </div>

                <button className="mt-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-6 py-3 rounded-xl font-semibold">
                  View Project
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Portfolio;