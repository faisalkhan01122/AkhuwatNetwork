import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaMoneyBillWave, FaUsers } from 'react-icons/fa';
import { GiPlantRoots } from 'react-icons/gi';
import CountUp from 'react-countup';

const AkhuwatLoanSection = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 md:px-20">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-lg font-bold text-green-600">
          Akhuwat Loan Contact Number 03354571620
        </h3>

        <h1 className="text-5xl font-bold text-blue-600 mt-4">
          <CountUp end={89982} duration={3} separator="," />
        </h1>
        <p className="text-gray-600 mt-1 text-sm">
          Total Loan Approved Applications
        </p>
      </motion.div>

      <motion.div
        className="mt-10 rounded-xl p-10 bg-gradient-to-r from-blue-900 to-blue-500 text-white shadow-lg relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        {/* Decorative corners */}
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-green-400 rotate-45"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-green-400 rotate-45"></div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Akhuwat</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Loans</h3>
          <p className="text-green-200 mb-4">For your needs</p>

          {/* Icons Section */}
          <div className="flex justify-center gap-6 text-4xl">
            <GiPlantRoots className="bg-white text-black p-2 rounded-full w-12 h-12" />
            <FaUsers className="bg-white text-black p-2 rounded-full w-12 h-12" />
            <FaMoneyBillWave className="text-yellow-300" />
            <FaHandshake className="text-yellow-400" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AkhuwatLoanSection;
