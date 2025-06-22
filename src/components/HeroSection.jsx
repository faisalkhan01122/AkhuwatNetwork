import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://i.postimg.cc/zGZsSdqf/akhuwatfoundationbusinessloan3.jpg",
  "https://i.postimg.cc/rmwXRKMC/akhuwatfoundationbusinessloan.jpg",
  "https://akhuwat.network/images/akhuwatfundslogo.png",
];

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-[85vh] object-cover"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Akhuwat Loan Service
        </motion.h1>
        <motion.p
          className="text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Get in Touch with us any time
        </motion.p>
        <motion.button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full"
          whileHover={{ scale: 1.05 }}
        >
          Apply Now
        </motion.button>
      </div>

      {/* Slanted Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30">
        <svg
          className="relative block w-full h-[80px]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,100 100,0 100,100" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
