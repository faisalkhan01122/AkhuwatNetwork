// src/components/FooterBar.jsx
import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FooterBar = () => {
  return (
    <>
      {/* Floating WhatsApp Icon (Bottom Left) */}
      <a
        href="https://wa.me/923334576120"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-4 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>

      {/* Floating Call Icon (Bottom Right) */}
      <a
        href="tel:+923334576120"
        className="fixed bottom-6 right-4 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        <FaPhone className="text-white text-3xl" />
      </a>

      {/* Green Footer Bar
      <div className="bg-green-500 text-white text-center py-3 text-sm sm:text-base font-medium mt-10">
        Akhuwat Loan Helpline Number 03334576120
      </div> */}
    </>
  );
};

export default FooterBar;
