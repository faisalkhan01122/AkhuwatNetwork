// src/components/AkhuwatScheme.jsx
import React from "react";
import { motion } from "framer-motion";

const AkhuwatScheme = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start gap-10">
        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.postimg.cc/xCChTh36/akhuwatfoundationhome.jpg"
            alt="Akhuwat Scheme"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="md:w-1/2 pt-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl  font-bold text-green-600 mb-4">
            Akhuwat Loan Scheme 2025
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            Akhuwat Loan Service stands out as a unique loan provider in
            Pakistan, offering ethical, interest-free loans (Qarz-e-Hasna)
            designed to uplift those in need. Unlike conventional banks, Akhuwat
            prioritizes social welfare over profit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AkhuwatScheme;
