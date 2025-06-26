import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/akhuwatfoundationbusinessloan3.jpg",
  "/akhuwatfoundationbusinessloan.jpg",
  // "https://akhuwat.network/images/akhuwatfundslogo.png",
  "/micr.jpg",
  '/loan.webp',
  "/businessloanbanner.jpg"
];

const HeroSection = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <section className="relative h-screen min-h-[500px] w-full overflow-hidden bg-black">
      {/* Slider Background */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-screen object-cover object-center"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-10">
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-snug max-w-2xl sm:max-w-3xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Akhuwat <span className="text-green-400">Loan Services 2025</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Interest-free loans up to{" "}
          <span className="text-green-400 font-semibold">50 Lacs PKR</span>. Reach out for support and apply now!
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.button>

          <motion.a
            href="tel:0328 1969250"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-full backdrop-blur-sm text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📞 Call Now
          </motion.a>
        </motion.div>

        <motion.div
          className="pt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs text-gray-400">24/7 Helpline</p>
          <a
            href="tel:+923354571620"
            className="text-green-400 font-bold text-lg sm:text-xl hover:text-green-300 transition"
          >
          0328 1969250
          </a>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30">
        <svg
          className="w-full h-[60px] md:h-[80px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,
             158,28c70.36-5.37,136.33-33.31,
             206.8-37.5c74.84-4.57,148.54,
             16.67,219.2,35.05c69.27,18,
             138.3,24.88,209.4,13.08c36.15-6,
             69.85-17.84,104.45-29.34C989.49,
             25,1113-14.29,1200,52.47V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

