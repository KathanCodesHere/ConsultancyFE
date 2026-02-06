import React from "react";

const ReadyToTransform = () => {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center mt-10">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        }}
      ></div>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#42aaacb7]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Ready to Transform Your Business?
        </h2>

        <p className="text-white font-normal mb-8">
          Partner with us for expert guidance and strategies that drive growth
          and success.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 border border-white text-white font-medium hover:bg-white hover:text-blue-900 transition">
            Contact Us
          </button>

          <button className="px-6 py-3 bg-white text-[#46b5b6] font-medium hover:bg-gray-100 transition">
            Get Your Free Consultation
          </button>
        </div>
      </div>

    </section>
  );
};

export default ReadyToTransform;
