import React from "react";
import { motion } from "framer-motion";

const LoanCard = ({ img, title, linkText, linkUrl, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[#22C55E] rounded-lg p-4 max-w-sm w-full"
    >
      <img src={img} alt={title} className="w-full h-44 object-cover border-2 border-[#22C55E] rounded-md mb-4" />
      <h3 className="font-semibold text-gray-800">
        {title}{" "}
        {linkText && (
          <a href={linkUrl} className="text-green-600 font-medium hover:underline">
            {linkText}
          </a>
        )}
      </h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

export default LoanCard;
