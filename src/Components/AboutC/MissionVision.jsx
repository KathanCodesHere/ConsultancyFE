import React from "react";

const MissionVision = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className=" mx-auto px-6 space-y-16">
        
        {/* Card 1 - Our Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Text Section */}
          <div className="px-8">
            <h3 className="text-3xl font-bold text-black mb-14">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed border-l-2 pl-4 py-4 max-w-sm border-[#46b5b6]">
              To empower businesses with customized, innovative solutions that
              drive growth, efficiency, and long-term success, while fostering
              partnerships built on trust and excellence.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full h-[380px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card 2 - Our Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Image Section */}
          <div className="w-full h-[380px] overflow-hidden md:order-1 order-2">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Our Vision"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="md:order-2 order-1 px-8">
            <h3 className="text-3xl font-bold text-black mb-14">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed border-l-2 border-[#46b5b6] pl-4 max-w-sm">
              To be the global leader in business consulting, known for transforming organizations through forward-thinking strategies and a relentless focus on delivering exceptional client outcomes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;
