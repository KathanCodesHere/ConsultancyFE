import React from "react";

const insightsData = [
  {
    title: "Navigating Financial Challenges in Uncertain Times",
    description:
      "Explore how to manage financial risks and optimize cash flow in a volatile economic climate.",
    image:
      "https://plus.unsplash.com/premium_photo-1661963571550-8a06ba7ded7d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Transforming Your Business with Data-Driven Decisions",
    description:
      "Unlock the potential of data-driven decision-making to enhance your business performance.",
    image:
      "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "How to Improve Client Retention and Build Lasting Relationships",
    description:
      "Learn the essential stratergies for retaining clients and growing your business through strong relationships.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

const ExpertInsights = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-full mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          
          {/* Left */}
          <div>
            <h2 className="text-3xl font-semibold text-black mb-2">
              Expert Insights
            </h2>
            <p className="text-gray-600 max-w-xl">
              Stay informed with the latest trends, strategies, and expert
              perspectives in consulting and business growth.
            </p>
          </div>

          {/* Right */}
          <button className="px-12 py-4 border rounded-md border-black text-black font-medium hover:bg-black hover:text-white transition">
            View All
          </button>
        </div>

        {/* Bottom Section - Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-200"
            >
              {/* Image (60%) */}
              <div className="h-[280px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content (40%) */}
              <div className="p-6 flex flex-col justify-between ">
                <h3 className="text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="text-black underline underline-offset-4 hover:text-gray-700 transition w-fit"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertInsights;
