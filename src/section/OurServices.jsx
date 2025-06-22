// src/components/OurServices.jsx
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Akhuwat Business Loan",
    desc: "Applying for a business loan from Akhuwat is easy and can be completed online. The loans are intended to cover urgent financial needs, with approvals usually given quickly.",
    image: "https://i.postimg.cc/rmwXRKMC/akhuwatfoundationbusinessloan.jpg",
  },
  {
    title: "Akhuwat Home Loan",
    desc: "The Akhuwat Foundation provides home loans for buying, building, or upgrading properties. The application process is streamlined",
    image: "https://i.postimg.cc/1tjTgBWs/akhuwatfoundationhomeloan.jpg",
  },
  {
    title: "Akhuwat Personal Loan",
    desc: "Akhuwat offers personal loans up to Rs. 2.5 million, with amounts determined by your income and credit status.",
    image: "https://i.postimg.cc/cCtzf3jY/akhuwatfoundationpersonalloans.jpg",
  },
  {
    title: "Microfinance Loans",
    desc: "Microfinance loans offer small, zero-interest funding to individuals and small enterprises, promoting financial freedom.",
    image: "https://i.postimg.cc/1RTh4mTw/akhuwatfoundationeasyloanapproval.jpg",
  },
  {
    title: "Akhuwat Housing Loan",
    desc: "Housing loans provide financial assistance for buying, constructing, or upgrading homes with flexible repayment plans.",
    image: "https://i.postimg.cc/CLqy8yTt/akhuwatfoundationbusinessloan2.jpg",
  },
  {
    title: "Education Loans",
    desc: "Education loans provide essential financial support for students to manage tuition and academic costs.",
    image: "https://i.postimg.cc/cCtzf3jY/akhuwatfoundationpersonalloans.jpg",
  },
];

const OurServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl text-center md:text-4xl font-bold text-[#22C55E] py-5">
            Our Services
          </h1>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg py-3 flex flex-col gap-8 shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#22C55E] mb-2">
                  {service.title}
                </h3>
                <p className="text-md text-gray-600">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
