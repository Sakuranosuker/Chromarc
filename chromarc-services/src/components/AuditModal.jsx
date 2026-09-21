import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import HeroBG from "../assets/HeroBG.jpg";

const AuditModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-black/80
            backdrop-blur-lg
            p-4
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 40,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-6xl
              h-[92vh]
              rounded-3xl
              overflow-hidden
              border border-white/10
              bg-[#0B0B0B]
              shadow-[0_0_60px_rgba(168,85,247,0.25)]
            "
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px]" />
              <div className="absolute bottom-0 right-10 w-72 h-72 bg-pink-500/20 blur-[120px]" />
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="
                absolute
                top-5
                right-5
                z-50
                w-12
                h-12
                rounded-full
                bg-black/40
                backdrop-blur-md
                border border-white/10
                flex items-center justify-center
                hover:bg-white/10
                transition
              "
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={HeroBG}
                alt="Strategy Audit"
                className="
                  w-full
                  h-full
                  object-cover
                  scale-105
                "
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-5xl font-bold text-white">
                  Free Strategy Audit
                </h2>

                <p className="mt-3 text-gray-200 max-w-xl">
                  Get personalized growth recommendations for
                  your business.
                </p>
              </div>
            </div>

            {/* Form Container */}
            <div
              className="
                h-[calc(92vh-208px)]
                overflow-hidden
                bg-[#0B0B0B]
              "
            >
              <iframe
                title="Strategy Audit"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdxqy8wFr1H0jBfgYHr6sHoSxsnWSjRUffvqhBFcFiywUV_1w/viewform?embedded=true"
                className="w-full h-full"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading...
              </iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuditModal;
