import React from "react";

const DrivingSuccess = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className=" mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-60 items-start mb-14">
          
          {/* Left */}
          <h2 className="text-3xl font-semibold text-black px-10">
            Driving Business Success <br/> through <span className="text-[#46b5b6]">Expertise</span>  & <br/> <span className="text-[#46b5b6]">Innovation</span> 
          </h2>

          {/* Right */}
          <p className="text-gray-700 leading-relaxed border-l-2 border-[#46b5b6] pl-8 ml-8">
            With decades of expertise in business consulting, we specialize in
            helping companies navigate challenges, streamline operations, and
            unlock growth opportunities. Whether you're scaling up, optimizing
            efficiency, or reinventing your strategy, our tailored solutions
            ensure sustainable success. Let’s shape the future of your business
            together.
          </p>
        </div>

        {/* Bottom Section - Image with Blue Tint */}
        <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Business Success"
            className="w-full h-full object-cover"
          />

          {/* Blue Tint Overlay */}
          {/* <div className="absolute inset-0 bg-[#42aaacb7]"></div> */}
        </div>

      </div>
    </section>
  );
};

export default DrivingSuccess;
