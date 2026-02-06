import React from "react";

const ServicesCards = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        
        {/* Card 1 */}
        <div className="flex flex-col justify-between p-10 bg-[#46b5b6] min-h-[480px]">
          <h3 className="text-4xl font-semibold text-white leading-[1.3]" >
            Business Strategy Consulting
          </h3>

          <div className="mt-auto">
            <p className="text-white font-normal mb-4">
              We craft and implement customized strategic plans to help your
              business achieve its long-term goals, ensuring sustainable growth
              and competitive advantage.
            </p>

            <a
              href="#"
              className="text-white font-semibold underline underline-offset-4 hover:opacity-80 transition"
            >
              Discover Strategic Solutions
            </a>
          </div>
        </div>

        {/* Card 2 - Center Card */}
        <div className="flex flex-col justify-between p-10 bg-[#f4f8fb] min-h-[420px] ">
          <h3 className="text-4xl font-semibold text-black leading-[1.3]">
            Risk Management Consulting
          </h3>

          <div className="mt-auto">
            <p className="text-black font-normal mb-4">
              We craft and implement customized strategic plans to help your
              business achieve its long-term goals, ensuring sustainable growth
              and competitive advantage.
            </p>

            <a
              href="#"
              className="text-[#46b5b6] font-semibold underline underline-offset-4 hover:opacity-70 transition"
            >
              Discover Strategic Solutions
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between p-10 bg-[#46b5b6] min-h-[420px]">
          <h3 className="text-4xl font-semibold text-white leading-[1.3]">
            Operational <br />
Efficiency
          </h3>

          <div className="mt-auto">
            <p className="text-white font-normal mb-4">
              We craft and implement customized strategic plans to help your
              business achieve its long-term goals, ensuring sustainable growth
              and competitive advantage.
            </p>

            <a
              href="#"
              className="text-white font-semibold underline underline-offset-4 hover:opacity-80 transition"
            >
              Discover Strategic Solutions
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesCards;
