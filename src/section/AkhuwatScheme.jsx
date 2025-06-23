// // src/components/AkhuwatScheme.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const AkhuwatScheme = () => {
//   return (
//     <section className="py-10 bg-white">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start gap-10">
//         {/* Image */}
//         <motion.div
//           className="md:w-1/2"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <img
//             src="https://i.postimg.cc/xCChTh36/akhuwatfoundationhome.jpg"
//             alt="Akhuwat Scheme"
//             className="rounded-lg shadow-lg w-full"
//           />
//         </motion.div>

//         {/* Text */}
//         <motion.div
//           className="md:w-1/2 pt-10"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl  font-bold text-green-600 mb-4">
//             Akhuwat Loan Scheme 2025
//           </h2>
//           <p className="text-gray-700 text-xl leading-relaxed">
//             Akhuwat Loan Service stands out as a unique loan provider in
//             Pakistan, offering ethical, interest-free loans (Qarz-e-Hasna)
//             designed to uplift those in need. Unlike conventional banks, Akhuwat
//             prioritizes social welfare over profit.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AkhuwatScheme;
"use client"
import { motion } from "framer-motion"

const features = [
  { icon: "✅", title: "Interest-Free", desc: "100% Sharia-compliant loans" },
  { icon: "👥", title: "Community-Based", desc: "Supporting local communities" },
  { icon: "❤️", title: "Social Welfare", desc: "Prioritizing people over profit" },
  { icon: "📈", title: "Quick Approval", desc: "Fast processing and disbursement" },
]

const AkhuwatScheme = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
              <motion.img
                src="https://i.postimg.cc/xCChTh36/akhuwatfoundationhome.jpg"
                alt="Akhuwat Scheme"
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Floating Stats */}
              <motion.div
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg glass"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-2xl font-bold text-green-600"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    50L+
                  </motion.div>
                  <div className="text-sm text-gray-600">Max Loan Amount</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg glass"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-2xl font-bold text-green-600"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  >
                    0%
                  </motion.div>
                  <div className="text-sm text-gray-600">Interest Rate</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Akhuwat Loan
                <motion.span
                  className="block text-green-600 gradient-text"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Scheme 2025
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Akhuwat Loan Service stands out as a unique loan provider in Pakistan, offering ethical, interest-free
                loans (Qarz-e-Hasna) designed to uplift those in need. Unlike conventional banks, Akhuwat prioritizes
                social welfare over profit.
              </motion.p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300 hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AkhuwatScheme
