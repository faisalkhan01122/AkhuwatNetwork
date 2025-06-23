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
            href="tel:+923354571620"
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
            0335 4571620
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



// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// const images = [
//   "https://i.postimg.cc/zGZsSdqf/akhuwatfoundationbusinessloan3.jpg",
//   "https://i.postimg.cc/rmwXRKMC/akhuwatfoundationbusinessloan.jpg",
//   "https://akhuwat.network/images/akhuwatfundslogo.png",
// ]

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % images.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % images.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
//   }

//   return (
//     <section className="relative h-screen min-h-[100vh] w-full overflow-hidden">
//       {/* Background Carousel */}
//       <div className="absolute inset-0 z-0">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0"
//           >
//             <img
//               src={images[currentSlide]}
//               alt={`Slide ${currentSlide + 1}`}
//               className="w-full h-full object-cover object-center"
//             />
//           </motion.div>
//         </AnimatePresence>
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 z-10" />
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition hover:scale-110"
//         aria-label="Previous"
//       >
//         <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition hover:scale-110"
//         aria-label="Next"
//       >
//         <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentSlide(i)}
//             className={`w-2.5 h-2.5 rounded-full transition ${
//               currentSlide === i ? "bg-white scale-110" : "bg-white/40 hover:bg-white"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 md:px-6">
//         <motion.div
//           className="max-w-4xl mx-auto space-y-6"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.h1
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug sm:leading-tight"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Akhuwat Loan
//             <span className="block text-green-400">Service 2025</span>
//           </motion.h1>

//           <motion.p
//             className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed px-2 sm:px-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//           >
//             Interest-free loans up to{" "}
//             <span className="text-green-400 font-bold text-xl sm:text-2xl">50 Lacs PKR</span>
//             <br className="hidden sm:block" />
//             Connect with us for financial support and guidance.
//           </motion.p>

//           <motion.div
//             className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             <motion.button
//               className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Apply Now
//             </motion.button>

//             <motion.a
//               href="tel:+923354571620"
//               className="bg-white/10 text-white border border-white/30 hover:bg-white/20 rounded-full px-5 py-2.5 text-sm sm:text-base flex items-center gap-2 backdrop-blur"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               📞 Call
//             </motion.a>

//             <motion.a
//               href="https://wa.me/923354571620"
//               className="bg-white/10 text-white border border-white/30 hover:bg-white/20 rounded-full px-5 py-2.5 text-sm sm:text-base flex items-center gap-2 backdrop-blur"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               💬 WhatsApp
//             </motion.a>
//           </motion.div>

//           <motion.p
//             className="text-sm sm:text-base text-gray-300 pt-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             Helpline:{" "}
//             <a
//               href="tel:+923354571620"
//               className="text-green-400 font-bold hover:text-green-300 transition"
//             >
//               0335-4571620
//             </a>
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Bottom Wave */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30">
//         <motion.svg
//           className="relative block w-full h-[50px] md:h-[80px]"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//           initial={{ y: 50 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 1.2, delay: 0.4 }}
//         >
//           <motion.path
//             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28
//               c70.36-5.37,136.33-33.31,206.8-37.5
//               C438.64,32.43,512.34,53.67,583,72.05
//               c69.27,18,138.3,24.88,209.4,13.08
//               c36.15-6,69.85-17.84,104.45-29.34
//               C989.49,25,1113-14.29,1200,52.47V0Z"
//             fill="white"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2 }}
//           />
//         </motion.svg>
//       </div>
//     </section>
//   )
// }

// export default HeroSection
