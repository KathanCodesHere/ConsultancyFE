import React,{useState} from "react";
import axios from "axios";

const GetInTouch = () => {
  const [formData,setFormData]=useState({
      name:"",
      email:"",
      phone:"",
      gender:"",
      description:""
    });
    const resetForm = () => {
    setFormData({
      name:"",
      email:"",
      phone:"",
      gender:"",
      description:""
    });
  };
    const [error,setError]=useState("");
  const submitStudent = async(e) => {
    e.preventDefault();
    setError("");
    const url="http://localhost:5000/api/students/post";
    try{
      const res=await axios.post(url,formData);
      if(res.data.success){
        resetForm();
      }
      console.log(res);
    }
    catch(err){
      console.log(err);
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40">

          {/* Left Section - Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">
              Get in Touch with Us
            </h2>

            <form className="space-y-6" onSubmit={submitStudent}>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text" name="name"
                  placeholder="Your Name" onChange={handleChange} value={formData.name}
                  className="w-full border rounded-md border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email" name="email"
                  placeholder="example@gmail.com" onChange={handleChange} value={formData.email}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel" name="phone" value={formData.phone}
                  placeholder="+9100000 00000" onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender *
                </label>

                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender" 
                      value="male" onChange={handleChange}
                      className="accent-[#40a5a6]" checked={formData.gender === "male"}
                    />
                    <span className="text-sm">Male</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="female" onChange={handleChange} checked={formData.gender === "female"}
                      className="accent-[#40a5a6]"
                    />
                    <span className="text-sm">Female</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="others" onChange={handleChange} checked={formData.gender === "others"}
                      className="accent-[#40a5a6]"
                    />
                    <span className="text-sm">Others</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  rows="4" name="description"
                  placeholder="Leave us a Message" onChange={handleChange} value={formData.description}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-md px-6 py-3 bg-[#40a5a6] text-white font-medium hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-6">

            {/* Chat Support */}
            <div className="pb-6 border-b border-gray-200">
              <h4 className="text-gray-500 text-lg font-medium mb-1">
                Chat Support
              </h4>
              <p className="text-gray-700 mb-2">
                Chat to our staff 24/7 for instant access to support
              </p>
              <a
                href="#"
                className="text-sm font-normal underline text-black"
              >
                Start Live Chat
              </a>
            </div>

            {/* Call Us */}
            <div className="pb-6 border-b border-gray-200">
              <h4 className="text-gray-500 text-lg font-medium mb-1">
                Call Us
              </h4>
              <p className="text-gray-700 mb-2">
                Monday - Friday, 9:00 AM - 6:00 PM
              </p>
              <div className="flex flex-col space-y-1">
                <a
                  href="tel:+441619876543"
                  className="text-sm font-normal underline text-black"
                >
                  +44 161 987 6543
                </a>
                <a
                  href="tel:+441619876543"
                  className="text-sm font-normal underline text-black"
                >
                  +44 161 987 6543
                </a>
              </div>
            </div>

            {/* Email Support */}
            <div className="pb-6 border-b border-gray-200">
              <h4 className="text-gray-500 text-lg font-medium mb-1">
                Email Support
              </h4>
              <p className="text-gray-700 mb-2">
                Email us & we will get back to you within 24 hours
              </p>
              <a
                href="mailto:support@apexadvisory.com"
                className="text-sm font-normal underline text-black"
              >
                support@apexadvisory.com
              </a>
            </div>

            {/* Location */}
            <div className="pb-6 border-b border-gray-200">
              <h4 className="text-gray-500 text-lg font-medium mb-1">
                Manchester, UK
              </h4>
              <p className="text-gray-700 mb-2">
                Visit our office Monday - Friday, 9:00 AM - 5:00 PM
              </p>
              <a
                href="#"
                className="text-sm font-normal underline text-black whitespace-pre-line"
              >
                1234 Business Lane,
                {"\n"}Suite 100,
                {"\n"}London, UK
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
