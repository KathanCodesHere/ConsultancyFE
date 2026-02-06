import React from "react";
import { Ambulance,Cpu,Landmark,ShoppingCart } from "lucide-react";

const industriesData = [
  {
    title: "Technology",
    description:
      "Driving innovation and digital transformation to help tech companies scale and thrive in a competitive landscape.",
    link: "Learn More About Technology Consulting",
    logo:<Cpu />,
    bs:"border-r-2",
  },
  {
    title: "Finance",
    description:
      "Enhancing profitability and managing financial risks with expert advisory tailored for the financial sector.",
    link: "Discover Our Finance Expertise",
    logo:<Landmark />,
     bs:"border-b-2",
  },
  {
    title: "Retail",
    description:
      "Empowering retail businesses to enhance customer experiences and streamline supply chain operations.",
    link: "See Our Retail Consulting Services",
    logo:<ShoppingCart />,
     bs:"border-t-2",
  },
  {
    title: "Healthcare",
    description:
      "Improving healthcare efficiency and patient outcomes through process optimization and regulatory expertise.",
    link: "Explore Healthcare Solutions",
    logo:<Ambulance />,
     bs:"border-l-2",
  },
];

const Industries = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-full mx-auto px-6">
        
        {/* Top Content */}
        <div className="text-center mb-14 flex flex-col items-center space-y-4">
          <span className="px-4 py-1 text-sm font-normal text-[#46b5b6] bg-[#46b5b6]/10 rounded-full">
            Services
          </span>

          <h2 className="text-3xl font-bold text-black">
            Industries We Serve
          </h2>

          <p className="text-gray-600 max-w-3xl">
            Explore how we help businesses across various industries achieve
            growth, optimize operations, and <br/> navigate challenges with our expert
            consulting services.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {industriesData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-8 ${item.bs}   border-gray-200`}
            >
              {/* Logo */}
              <div className="w-14 h-14 mb-4 flex items-center justify-center bg-[#46b5b6]/10 rounded-full">
                <span className="text-[#46b5b6] text-xl font-bold">
                  {item.logo}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {item.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="text-gray-500 font-medium hover:text-gray-700 transition underline"
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
