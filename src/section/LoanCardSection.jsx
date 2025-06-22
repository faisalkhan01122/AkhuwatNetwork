import React from "react";
import LoanCard from "../components/LoanCard";
const cards = [
  {
    img: "https://i.postimg.cc/CLqy8yTt/akhuwatfoundationbusinessloan2.jpg",
    title: "Akhuwat Loan",
    linkText: "Apply Online",
    linkUrl: "#",
    description:
      "Contact the Akhuwat Head Office Contact Number. When you make a call to Akhuwat Helpline, officials will guide you or contact via WhatsApp."
  },
  {
    img: "https://i.postimg.cc/cCtzf3jY/akhuwatfoundationpersonalloans.jpg",
    title: "Akhuwat",
    linkText: "Student Loan",
    linkUrl: "#",
    description:
      "The Akhuwat Foundation offers student loans to make education more affordable and accessible. Covers tuition fees, books, and materials."
  },
  {
    img: "https://i.postimg.cc/1RTh4mTw/akhuwatfoundationeasyloanapproval.jpg",
    title: "Adaptable and Convenient",
    linkText: "",
    linkUrl: "",
    description:
      "To develop and sustain a social system based on mutual support where each individual lives a life full of respect and dignity."
  }
];

const LoanCardSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {cards.map((card, idx) => (
          <LoanCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
};

export default LoanCardSection;
