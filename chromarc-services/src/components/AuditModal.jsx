import { motion, AnimatePresence } from "framer-motion";
import HeroBG from "../assets/HeroBG.jpg"
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
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-md
            p-4
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 50,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-5xl
              h-[85vh]
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              bg-[#0B0B0B]
              shadow-2xl
              shadow-purple-500/20
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-4
                z-20
                w-10
                h-10
                rounded-full
                bg-white/10
                hover:bg-white/20
                transition
              "
            >
              ✕
            </button>

            {/* Google Form */}
            <div className="relative h-48 overflow-hidden">
              <img src={HeroBG} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white">
                  Free Strategy Audit
                </h2>
              </div>
            </div>
            <iframe
              title="Strategy Audit"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdxqy8wFr1H0jBfgYHr6sHoSxsnWSjRUffvqhBFcFiywUV_1w/viewform?embedded=true"
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuditModal;
