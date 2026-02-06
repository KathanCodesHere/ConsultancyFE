import React from "react";

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      {/* Login Card */}
      <div className="w-full max-w-md bg-white p-8 shadow-md">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-black mb-8">
          Login Page for Admin
        </h1>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-900 text-white font-medium hover:bg-blue-800 transition"
          >
            Login
          </button>

        </form>
      </div>

    </div>
  );
};

export default AdminLogin;
