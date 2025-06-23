// src/components/OurServices.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Akhuwat Business Loan",
//     desc: "Applying for a business loan from Akhuwat is easy and can be completed online. The loans are intended to cover urgent financial needs, with approvals usually given quickly.",
//     image: "https://i.postimg.cc/rmwXRKMC/akhuwatfoundationbusinessloan.jpg",
//   },
//   {
//     title: "Akhuwat Home Loan",
//     desc: "The Akhuwat Foundation provides home loans for buying, building, or upgrading properties. The application process is streamlined",
//     image: "https://i.postimg.cc/1tjTgBWs/akhuwatfoundationhomeloan.jpg",
//   },
//   {
//     title: "Akhuwat Personal Loan",
//     desc: "Akhuwat offers personal loans up to Rs. 2.5 million, with amounts determined by your income and credit status.",
//     image: "https://i.postimg.cc/cCtzf3jY/akhuwatfoundationpersonalloans.jpg",
//   },
//   {
//     title: "Microfinance Loans",
//     desc: "Microfinance loans offer small, zero-interest funding to individuals and small enterprises, promoting financial freedom.",
//     image: "https://i.postimg.cc/1RTh4mTw/akhuwatfoundationeasyloanapproval.jpg",
//   },
//   {
//     title: "Akhuwat Housing Loan",
//     desc: "Housing loans provide financial assistance for buying, constructing, or upgrading homes with flexible repayment plans.",
//     image: "https://i.postimg.cc/CLqy8yTt/akhuwatfoundationbusinessloan2.jpg",
//   },
//   {
//     title: "Education Loans",
//     desc: "Education loans provide essential financial support for students to manage tuition and academic costs.",
//     image: "https://i.postimg.cc/cCtzf3jY/akhuwatfoundationpersonalloans.jpg",
//   },
// ];

// const OurServices = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Heading */}
//         <h1 className="text-3xl text-center md:text-4xl font-bold text-[#22C55E] py-5">
//             Our Services
//           </h1>

//         {/* Cards Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-lg py-3 flex flex-col gap-8 shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-bold text-[#22C55E] mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-md text-gray-600">{service.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;
"use client"
import { motion } from "framer-motion"

const services = [
  {
    title: "Akhuwat Business Loan",
    desc: "Applying for a business loan from Akhuwat is easy and can be completed online. The loans are intended to cover urgent financial needs, with approvals usually given quickly.",
    image: "https://i.postimg.cc/rmwXRKMC/akhuwatfoundationbusinessloan.jpg",
    icon: "🏢",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Akhuwat Home Loan",
    desc: "The Akhuwat Foundation provides home loans for buying, building, or upgrading properties. The application process is streamlined",
    image: "https://i.postimg.cc/1tjTgBWs/akhuwatfoundationhomeloan.jpg",
    icon: "🏠",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Akhuwat Personal Loan",
    desc: "Akhuwat offers personal loans up to Rs. 2.5 million, with amounts determined by your income and credit status.",
    image: "https://i.postimg.cc/cCtzf3jY/akhuwatfoundationpersonalloans.jpg",
    icon: "👤",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Microfinance Loans",
    desc: "Microfinance loans offer small, zero-interest funding to individuals and small enterprises, promoting financial freedom.",
    image: "https://i.postimg.cc/1RTh4mTw/akhuwatfoundationeasyloanapproval.jpg",
    icon: "👥",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Akhuwat Housing Loan",
    desc: "Housing loans provide financial assistance for buying, constructing, or upgrading homes with flexible repayment plans.",
    image: "https://i.postimg.cc/CLqy8yTt/akhuwatfoundationbusinessloan2.jpg",
    icon: "🏘️",
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Education Loans",
    desc: "Education loans provide essential financial support for students to manage tuition and academic costs.",
    image: "https://i.postimg.cc/cCtzf3jY/akhuwatfoundationpersonalloans.jpg",
    icon: "🎓",
    color: "from-indigo-500 to-indigo-600",
  },
]

const OurServices = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="text-green-600 gradient-text">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive financial solutions designed to empower individuals and communities across Pakistan
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                />

                {/* Floating Icon */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">{service.icon}</span>
                </motion.div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.button
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

                <motion.div
                  className="flex items-center text-green-600 font-semibold group/btn cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Apply Now
                  <motion.svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for Loan Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default OurServices
