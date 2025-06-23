// src/components/FooterBar.jsx
// import React from "react";
// import { FaWhatsapp, FaPhone } from "react-icons/fa";

// const FooterBar = () => {
//   return (
//     <>
//       {/* Floating WhatsApp Icon (Bottom Left) */}
//       <a
//         href="https://wa.me/923334576120"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 left-4 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition"
//       >
//         <FaWhatsapp className="text-white text-3xl" />
//       </a>

//       {/* Floating Call Icon (Bottom Right) */}
//       <a
//         href="tel:+923334576120"
//         className="fixed bottom-6 right-4 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition"
//       >
//         <FaPhone className="text-white text-3xl" />
//       </a>

//       {/* Green Footer Bar
//       <div className="bg-green-500 text-white text-center py-3 text-sm sm:text-base font-medium mt-10">
//         Akhuwat Loan Helpline Number 03334576120
//       </div> */}
//     </>
//   );
// };

// export default FooterBar;
"use client"
import { motion } from "framer-motion"
import { FaWhatsapp, FaPhone } from "react-icons/fa"

const FooterBar = () => {
  return (
    <>
      {/* Floating WhatsApp Icon (Bottom Left) */}
      <motion.a
        href="https://wa.me/923334576120"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-4 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition-all duration-300 group"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-white text-2xl group-hover:animate-bounce" />
        <motion.div
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          initial={{ y: 10 }}
          whileHover={{ y: 0 }}
        >
          Chat on WhatsApp
        </motion.div>
      </motion.a>

      {/* Floating Call Icon (Bottom Right) */}
      <motion.a
        href="tel:+923334576120"
        className="fixed bottom-6 right-4 z-50 bg-blue-500 hover:bg-blue-600 p-4 rounded-full shadow-lg transition-all duration-300 group"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaPhone className="text-white text-2xl group-hover:animate-pulse" />
        <motion.div
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          initial={{ y: 10 }}
          whileHover={{ y: 0 }}
        >
          Call Now
        </motion.div>
      </motion.a>

      {/* Pulse Animation for Attention */}
      <motion.div
        className="fixed bottom-6 left-4 z-40 w-16 h-16 bg-green-400 rounded-full opacity-30 pointer-events-none"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed bottom-6 right-4 z-40 w-16 h-16 bg-blue-400 rounded-full opacity-30 pointer-events-none"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </>
  )
}

export default FooterBar
