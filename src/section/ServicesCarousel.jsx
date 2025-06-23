import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    src: "https://i.postimg.cc/CLqy8yTt/akhuwatfoundationbusinessloan2.jpg",
    alt: "Business Loan",
  },
  {
    src: "https://i.postimg.cc/cCtzf3jY/akhuwatfoundationpersonalloans.jpg",
    alt: "Personal Loan",
  },
  {
    src: "https://i.postimg.cc/1RTh4mTw/akhuwatfoundationeasyloanapproval.jpg",
    alt: "Easy Loan Approval",
  },
  {
    src: "https://i.postimg.cc/1tjTgBWs/akhuwatfoundationhomeloan.jpg",
    alt: "Home Loan",
  },
  {
    src: "https://i.postimg.cc/YC6JX1Sz/akhuwatfoundationbusinessloan4.jpg",
    alt: "Small Business Loan",
  },
];

const ServicesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
    ),
    appendDots: (dots) => (
      <div className="flex justify-center mt-6">{dots}</div>
    ),
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Akhuwat Loan Services
        </motion.h2>

        <Slider {...settings}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="px-3"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition duration-300">
                <img
                  src={service.src}
                  alt={service.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServicesCarousel;
