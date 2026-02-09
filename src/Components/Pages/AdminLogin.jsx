import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData,setFormData]=useState({
    email:"",
    password:""
  });
  const [error,setError]=useState("");
  const login=async(e)=>{
    e.preventDefault();
    setError("");
    const url="http://localhost:5000/api/auth/login";
    try{
      const res=await axios.post(url,formData);
      // console.log("data: ",res.data);
      const token  = res.data.data.token;
       localStorage.setItem('adminToken', token);
      navigate('/admin/dash');
    }
    catch(err){
      console.log(err);
      setError("Invalid credentials please re-enter");
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      {/* Login Card */}
      <div className="w-full max-w-md bg-white p-8 shadow-md">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-black mb-8">
          Login Page for Admin
        </h1>

        {/* Form */}
        <form className="space-y-6" onSubmit={login}>
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email" name="email"
              placeholder="Enter your email" onChange={handleChange} value={formData.email}
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password" name="password"
              placeholder="Enter your password" onChange={handleChange} value={formData.password}
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {error!=""?<p className="text-red-400">{error}</p>:""}
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
