// src/components/AkhuwatTrustSection.jsx
import React from "react";

const AkhuwatTrustSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Progress Trust Section */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="text-start text-sm font-semibold text-gray-300 mb-3">
          People’s Trust on Akhuwat Foundation Loan
        </div>

        <div className="w-full bg-gray-200 h-6 rounded-full relative overflow-hidden">
          <div className="bg-green-500 h-full w-[97%] rounded-full transition-all duration-700"></div>
          <div className="absolute inset-0 flex justify-center items-center font-bold text-white text-sm">
            97%
          </div>
        </div>
      </div>

      {/* Loan Content */}
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-[#22C55E] mb-6">
          Akhuwat Loan
        </h1>
        <p className="text-gray-700 text-base md:text-md mb-6 leading-relaxed">
          Progressing from a historical and philosophical discourse towards a
          pragmatic model of poverty alleviation, Akhuwat was founded by Dr.
          Amjad Saqib in 2001. Prior to establishing Akhuwat, he served in the
          Civil Services of Pakistan in the District Management Group (DMG).
        </p>

        <h2 className="text-2xl font-semibold  text-start text-black mb-4">
          While serving as the General Manager
        </h2>
        <p className="text-gray-700 text-base md:text-md leading-relaxed">
          While serving as the General Manager of the Punjab Rural Support
          Program (PRSP) he had witnessed the devastating impact of poverty and
          was committed to dedicate the rest of his life to alleviate the
          suffering of the poor. He once took his friends to visit a village,
          Jia Bagga, to study the impact of intervention by PRSP. Dr. Kamran
          Shams and he had a conversation with a local woman, inquiring what has
          been the impact of the PKR 10,000 loan she took from the PRSP.
        </p>
      </div>
    </section>
  );
};

export default AkhuwatTrustSection;
