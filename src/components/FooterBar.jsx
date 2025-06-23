import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FooterBar = () => {
  return (
    <>
      {/* WhatsApp Icon */}
      <motion.a
        href="https://wa.me/923334576120"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 left-3 z-50 bg-green-500 hover:bg-green-600 p-1.5 sm:p-2.5 md:p-3 rounded-full shadow-xl transition-all duration-300 group"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="text-white text-base sm:text-lg md:text-4xl group-hover:animate-bounce" />
        <motion.div
          className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur text-white text-[9px] sm:text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          initial={{ y: 5 }}
          whileHover={{ y: 0 }}
        >
          Chat on WhatsApp
        </motion.div>
      </motion.a>

      {/* WhatsApp Pulse */}
      <motion.div
        className="fixed bottom-3 left-3 z-40 w-8 h-8 sm:w-10 sm:h-10 bg-green-400 rounded-full opacity-30 pointer-events-none"
        animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Call Icon */}
      <motion.a
        href="tel:+923334576120"
        className="fixed bottom-3 right-5 z-50 bg-blue-500 hover:bg-blue-600 p-1.5 sm:p-2.5 md:p-3 rounded-full shadow-xl transition-all duration-300 group"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPhone className="text-white text-base sm:text-lg md:text-4xl group-hover:animate-pulse" />
        <motion.div
          className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur text-white text-[9px] sm:text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          initial={{ y: 5 }}
          whileHover={{ y: 0 }}
        >
          Call Now
        </motion.div>
      </motion.a>

      {/* Call Pulse */}
      <motion.div
        className="fixed bottom-3 right-3 z-40 w-8 h-8 sm:w-10 sm:h-10 bg-blue-400 rounded-full opacity-30 pointer-events-none"
        animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </>
  );
};

export default FooterBar;
