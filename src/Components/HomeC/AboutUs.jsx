import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section - Text */}
        <div className="flex flex-col items-start space-y-5">
          
          {/* Capsule */}
          <span className="px-10 py-1 text-sm font-semibold text-[#40a5a6] bg-[#edf8f8] rounded-full">
            About Us
          </span>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Trusted business consultants with<br/>  proven results
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-base font-normal max-w-xl leading-1.2">
            With 20 years of expertise, we empower businesses to achieve
            sustainable growth, optimize operations, and drive profitability
            through strategic consulting tailored to their unique needs. Our
            dedicated team ensures measurable success at every step of your
            journey.
          </p>

          {/* CTA Button */}
          <button className="mt-4 px-10 py-3 bg-[#40a5a6] text-white font-medium rounded-md hover:bg-green-800 transition">
            Learn more about us
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
