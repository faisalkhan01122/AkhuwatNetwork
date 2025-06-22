import React from "react";
import { motion } from "framer-motion";

const LoanSection = () => {
  return (
    <section className="bg-[#F0FDF4] py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-[#22C55E] mb-6"
      >
        Akhuwat Loan Scheme 2025
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-5xl mx-auto text-gray-700 text-sm md:text-base leading-7"
      >
        The Akhuwat Loan Scheme 2025 continues the foundation's mission of
        providing interest-free financial assistance to empower individuals and
        communities across Pakistan. This year's program features enhanced
        accessibility with simplified application procedures, expanded loan
        categories, and increased outreach to underserved areas. Whether you
        need support for education, healthcare, housing, or business
        development, the 2025 scheme offers tailored solutions to help you
        achieve your goals while maintaining the core principles of dignity and
        mutual support.
      </motion.p>
    </section>
  );
};

export default LoanSection;
