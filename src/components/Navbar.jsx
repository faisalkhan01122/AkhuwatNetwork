import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="https://akhuwat.network" className="flex-shrink-0">
          <img
            src="https://akhuwat.network/images/akhuwatfundslogo.png"
            alt="Akhuwat Logo"
            className="h-12"
          />
        </a>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-black mb-1 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-black mb-1 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-black transition-all duration-300"></span>
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute md:static top-full left-0 w-full md:w-auto md:flex bg-white md:bg-transparent md:items-center md:space-x-8 px-4 md:px-0 py-3 md:py-0 shadow md:shadow-none z-40`}
        >
          {[
            { name: 'Home', link: '' },
            { name: 'Akhuwat Loan Services', link: 'loan-services' },
            { name: 'About Us', link: 'about-us' },
            { name: 'Privacy Policy', link: 'privacy-policy' },
            { name: 'Contact Us', link: 'contact-us' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block md:inline-block text-gray-800 font-medium text-lg py-2 md:py-0 hover:border-b-2 hover:border-gray-800 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
