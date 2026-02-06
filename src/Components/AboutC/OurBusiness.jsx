import React from "react";

const statsData = [
  { value: "20+", label: "Years of Experience" },
  { value: "100+", label: "Successful Projects" },
  { value: "80%", label: "Client Retention Rate" },
  { value: "50+", label: "Industries Served" },
];

const OurBusiness = () => {
  return (
    <section className="w-full bg-white py-5">
      <div className=" mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-black mb-4">
          Our Businesses Since 2005
        </h2>

        {/* Description */}
        <p className="text-gray-700 max-w-4xl mx-auto mb-14 leading-relaxed">
          Founded with a vision to transform the consulting landscape, we began
          our journey in 2005 with a commitment to providing innovative solutions
          that address the unique challenges faced by businesses. Over the
          years, we have partnered with diverse clients, fostering growth and
          driving success through our strategic consulting services. Our unique
          approach combines deep industry knowledge with a passion for client
          success, enabling us to craft tailored strategies that help
          organizations thrive in an ever-evolving marketplace.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-8 bg-[#46b5b6] ">
          {statsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl font-bold text-white mb-2">
                {item.value}
              </span>
              <span className="text-white font-normal">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurBusiness;
