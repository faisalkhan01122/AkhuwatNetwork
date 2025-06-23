// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
//       <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
//         {/* Logo */}
//         <a href="/" className="flex-shrink-0">
//           <img
//             src="https://akhuwat.network/images/akhuwatfundslogo.png"
//             alt="Akhuwat Logo"
//             className="h-12"
//           />
//         </a>

//         {/* Hamburger Menu */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           <span className="block w-6 h-0.5 bg-black mb-1 transition-all duration-300"></span>
//           <span className="block w-6 h-0.5 bg-black mb-1 transition-all duration-300"></span>
//           <span className="block w-6 h-0.5 bg-black transition-all duration-300"></span>
//         </button>

//         {/* Nav Links */}
//         <nav
//           className={`${
//             isOpen ? 'block' : 'hidden'
//           } absolute md:static top-full left-0 w-full md:w-auto md:flex bg-white md:bg-transparent md:items-center md:space-x-8 px-4 md:px-0 py-3 md:py-0 shadow md:shadow-none z-40`}
//         >
//           {[
//             { name: 'Home', link: '' },
//             { name: 'Akhuwat Loan Services', link: 'loan-services' },
//             { name: 'About Us', link: 'about-us' },
//             { name: 'Privacy Policy', link: 'privacy-policy' },
//             { name: 'Contact Us', link: 'contact-us' },
//           ].map((item) => (
//             <a
//               key={item.name}
//               href={item.link}
//               className="block md:inline-block text-gray-800 font-medium text-lg py-2 md:py-0 hover:border-b-2 hover:border-gray-800 transition-all duration-200"
//             >
//               {item.name}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", link: "" },
    { name: "Akhuwat Loan Services", link: "loan-services" },
    { name: "About Us", link: "about-us" },
    { name: "Privacy Policy", link: "privacy-policy" },
    { name: "Contact Us", link: "contact-us" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.a
          href="https://akhuwat.network"
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://akhuwat.network/images/akhuwatfundslogo.png"
            alt="Akhuwat Foundation Logo"
            className="h-12 w-auto hover-scale"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.link}
              className="text-gray-800 font-medium text-lg hover:text-green-600 transition-colors duration-200 relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Call Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <motion.a
            href="tel:+923354571620"
            className="hidden md:flex bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 items-center gap-2 hover-scale"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  className="block text-gray-800 font-medium text-lg py-2 hover:text-green-600 transition-colors duration-200 hover:bg-green-50 rounded-lg px-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4 border-t border-gray-200"
              >
                <a
                  href="tel:+923354571620"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover-scale"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now: 03354571620
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
