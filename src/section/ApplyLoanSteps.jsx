// src/components/ApplyLoanSteps.jsx
import React from "react";

const steps = [
  {
    step: "Step 1",
    title: "Understand the Eligibility Criteria",
    content: [
      "Before applying, it's important to understand the eligibility criteria set by Akhuwat. The foundation typically offers loans to:",
    ],
    bullets: [
      "Individuals looking to start or expand a small business.",
      "People in need of financial assistance for education, healthcare, or improving living conditions.",
      "Applicants must show they need the loan and have a good plan to use it.",
    ],
    end: "Akhuwat gives priority to people who are poor and may not have a bank account. Knowing this will help you check if you qualify and get ready to apply.",
  },
  {
    step: "Step 2",
    title: "Prepare Your Documentation",
    content: [
      "Akhuwat wants to make it easier for you to get a loan. You will need some documents for your loan application. This may include:",
    ],
    bullets: [
      "A valid form of identification (such as a National ID card).",
      "Proof of residence or business location.",
      "A detailed business plan or description of how the loan will be used.",
    ],
    end: "Make sure your documents are up-to-date and correct to prevent any delays in your application.",
  },
  {
    step: "Step 3",
    title: "Visit an Akhuwat Branch or Contact Point",
    content: [
      "Find the closest Akhuwat branch or contact point in your area. Akhuwat has many offices in Pakistan, working with local mosques, churches, and community centers. Visiting in person lets you get information, ask questions, and learn about the foundation's values.",
    ],
  },
  {
    step: "Step 4",
    title: "Attend an Orientation Session",
    content: [
      "Akhuwat regularly holds sessions for people interested in applying for loans. These sessions give information about the loan process, repayment terms, and success stories of past recipients. Going to a session is a great chance to learn about the foundation's mission and how it can help with your financial needs and goals.",
    ],
  },
  {
    step: "Step 5",
    title: "Submit Your Loan Application",
    content: [
      "Once you have all the required information and documents, you can submit your loan application. Akhuwat staff will help you with the process to make sure your paperwork is complete and accurately shows your needs and ability to repay.",
    ],
  },
  {
    step: "Step 6",
    title: "Participate in the Community Verification Process",
    content: [
      "Akhuwat involves the community in verifying loan applications. They may visit your home or business and talk to community members to confirm your need and ability for the loan. This shows the foundation's focus on community support and shared responsibility.",
    ],
  },
  {
    step: "Step 7",
    title: "Loan Approval and Disbursement",
    content: [
      "After your loan application is verified, it will be reviewed for approval. If approved, you will receive the loan in a group setting, highlighting the community's support for everyone's success.",
    ],
  },
  {
    step: "Step 8",
    title: "Repayments",
    content: [
      "Akhuwat loans have a clear repayment schedule and usually don't have interest. When you pay back your loan, you not only fulfill your commitment but also help support other people in need through a revolving fund.",
    ],
  },
];

const ApplyLoanSteps = () => {
  return (
    
    <section className="bg-[#F0FDF4]">
      <div className="max-w-5xl  mx-auto  px-4 py-12">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#22C55E]">
        How to Akhuwat Loan Apply Online
      </h2>
      <p className="text-gray-600 text-center text-base md:text-lg mb-8 leading-relaxed">
        Applying for an Akhuwat loan is easy and inclusive. The process is
        designed to help people in Pakistan by reducing poverty and empowering
        individuals. If you want to{" "}
        <a
          href="#"
          className="text-green-500 font-semibold underline hover:text-green-600"
        >
          apply for a loan
        </a>{" "}
        to start a business, grow one, or meet personal financial needs, here is
        a simple guide to help you through the application process.
      </p>

      {steps.map((step, idx) => (
        <div
          key={idx}
          className="bg-white shadow-md rounded-lg p-6 mb-6 transition-transform hover:shadow-lg hover:-translate-y-1"
        >
          <h3 className="text-green-500 font-bold text-lg mb-2 flex items-center">
            {step.step}:{" "}
            <span className="ml-2 font-normal text-[#22C55E]">{step.title}</span>
          </h3>

          {step.content.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}

          {step.bullets && (
            <ul className="list-disc list-inside text-gray-600 mb-4">
              {step.bullets.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          )}

          {step.end && (
            <p className="text-gray-600 leading-relaxed">{step.end}</p>
          )}
        </div>
      ))}

      <p className="text-gray-600 text-center text-base md:text-lg mt-10 leading-relaxed">
        Applying for an Akhuwat loan is not just about money. It's a way to join
        a community that helps and supports each other. By following these steps
        and getting involved, applicants can get the help they need to create a
        better future.
      </p>
      </div>
    
    </section>
  );
};

export default ApplyLoanSteps;
