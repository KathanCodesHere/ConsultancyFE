import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className=" mx-auto  flex items-center justify-between">
        
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold cursor-pointer px-8">
            MyLogo
          </h1>
        </div>

        {/* Center Section - Navbar */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-[#40a5a6] transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-[#40a5a6] transition"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-[#40a5a6] transition"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-[#40a5a6] transition"
          >
            Contact Us
          </a>
        </nav>

        {/* Right Section - Free Consultation */}
        <div className="hidden md:block bg-[#40a5a6] px-7 py-5">
          <span className="text-white font-semibold cursor-pointer hover:underline">
            Free Consultation
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
