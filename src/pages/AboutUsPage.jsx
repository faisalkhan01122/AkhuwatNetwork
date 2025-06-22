import React from 'react'
import HeroImgSection from '../components/HeroImgSection'

const AboutUsPage = () => {
  return (
    <>
    <HeroImgSection imageUrl="https://i.postimg.cc/zGZsSdqf/akhuwatfoundationbusinessloan3.jpg"
        text="About Us"/>
         <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Column */}
        <div className="lg:w-1/2 space-y-5 text-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-[#318B38]">Who We Are</h2>
          <p>
            The Akhuwat Foundation is a distinctive loan provider in Pakistan, offering ethical, interest-free loans (Qarz-e-Hasna) designed to assist those in need. Unlike conventional banks, Akhuwat prioritizes social welfare over profit.
          </p>
          <p>
            They provide loans for a variety of purposes, including business, education, and healthcare, without any hidden charges or processing fees. Applications can be submitted both online and in person at local branches, fostering a community-oriented approach.
          </p>
          <p>
            Akhuwat's mission is to alleviate poverty by delivering accessible, transparent, and cost-free financial support.
          </p>
        </div>

        {/* Image Column */}
        <div className="lg:w-1/2">
          <img
            src="https://i.postimg.cc/1RTh4mTw/akhuwatfoundationeasyloanapproval.jpg"
            alt="Loan Services Akhuwat"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

      <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-10">
        {/* Text Column */}
        <div className="lg:w-2/3 space-y-8 text-gray-800">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-2">
              How to Apply in just Two Simple Steps
            </h3>
            <p className="mb-3">
              To apply for a loan through the Akhuwat scheme, simply follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Visit the Akhuwat Foundation Website:</strong> Explore the various loan options available.
              </li>
              <li>
                <strong>Contact Akhuwat Directly:</strong> Reach out for detailed information about specific eligibility requirements.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-2">
              How will I know if my Akhuwat loan is approved?
            </h3>
            <p>
              After submitting your application for the Akhuwat loan, you can check your loan status on Akhuwat's official website (
              <a href="https://www.akhuwatscheme.online" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                www.akhuwatscheme.online
              </a>
              ). Once approved, the loan amount will be disbursed to your bank account within a few days.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-2">
              Is the Akhuwat Foundation real or fake?
            </h3>
            <p>
              The Akhuwat Foundation is a legitimate loan scheme. It offers personal loans ranging from PKR 1 lakh to PKR 50 lakh, with terms of 1 to 10 years.
              As a subsidiary of HBL Bank, Akhuwat is a reputable organization with an Ehsaas program guide rating of 15 out of 5 stars.
              It has been operating for 15 years and holds a positive rating from the Better Business Bureau.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-2">
              How much is the Akhuwat loan limit?
            </h3>
            <p>
              You can secure a loan from the Akhuwat Foundation ranging from PKR 50,000 to PKR 50 lakh online, all without any interest.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:w-1/3 w-full">
          <img
            src="https://i.postimg.cc/cCtzf3jY/akhuwatfoundationpersonalloans.jpg"
            alt="Personal Loans - Akhuwat Foundation"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
    </>


   




  )
}

export default AboutUsPage