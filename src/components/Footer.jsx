import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#086b1b] text-white py-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-6">
        {/* Logo Section */}
        <div className="flex flex-col min-w-[180px]">
          <img
            src="/akhuwatfundslogo.png"
            alt="Akhuwat Logo"
            className="w-28 bg-white rounded-full p-2 mb-3 shadow-md"
          />
          <div className="mt-2">
            <span className="block text-xl font-urdu mb-1">اخوت</span>
            <span className="block text-xl font-bold">Akhuwat</span>
          </div>
        </div>

        {/* Menu Section */}
        <div className="min-w-[180px] mt-2">
          <ul className="space-y-3">
            {[
              { name: 'Home', href: '/' },
              { name: 'Akhuwat Loan Services', href: 'loan-services' },
              { name: 'About Us', href: 'about-us' },
              { name: 'Privacy Policy', href: 'privacy-policy' },
              { name: 'Terms & Conditions', href: 'terms-and-conditions' },
              { name: 'Disclaimer', href: 'disclaimer' },
              { name: 'Contact Us', href: 'contact-us' },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-white text-lg font-medium border-b-2 border-transparent hover:border-white transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="min-w-[250px] flex flex-col gap-5">
          <div>
            <label htmlFor="footer-email" className="block font-bold mb-1 text-base">
              Email
            </label>
            <input
              type="email"
              id="footer-email"
              placeholder="Email"
              className="w-full max-w-xs p-2 rounded text-black mb-2"
            />
            <button
              type="button"
              className="w-full max-w-xs p-2 bg-[#4ecd6e] rounded font-bold hover:bg-[#3eb95a] transition"
            >
              Send
            </button>
          </div>
          <div className="text-sm leading-6">
            <strong>Address</strong><br />
            Mobile: +92 335 4571620<br />
            Email:{' '}
            <a href="mailto:support@akhuwat.network" className="underline">
              support@akhuwat.network
            </a>
            <br />
            New Shahbaz Building Thandi Sadak, Hyderabad.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
