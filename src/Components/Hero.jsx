import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className=" mx-auto px-6 py-20 grid grid-cols-1  gap-10 items-center">
        
        {/* Text Section */}
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-black leading-tight tracking-tight">
            Drive Your Business Forward <br/> with Expert Consulting
          </h1>

          <p className="text-md font-medium text-gray-700 max-w-2xl">
            Our expert-driven strategies empower businesses to accelerate growth,
            optimize operations, and overcome challenges, ensuring sustainable
            success in an ever-evolving market.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="px-6 py-3 border-2 text-black border-black font-medium rounded-md transition">
              Discover our services
            </button>

            <button className="px-6 py-3 border-2  text-white bg-[#40a5a6] font-medium rounded-md hover:bg-[#1e9799] hover:text-white transition">
              Book a free consultation
            </button>
          </div>
        </div>

        {/* Background Image Section */}
        <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
