import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import StudentTable from './StudentTable';
const AdminDash = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('adminToken')){
      navigate('/admin/login');
    }
  },[])
  const logout=()=>{
    // console.log("This is logout function");
    localStorage.removeItem("adminToken");
    navigate('/admin/login');
  }
  return (
    <div>
      <h2 className='font-bold text-4xl underline text-center'>This is Admin Dashboard</h2>
      <StudentTable/>
      <button className='bg-red-500 text-white px-5 py-2 mt-5 ml-20 font-semibold texxt-xl' onClick={logout}>Log out</button>
    </div>
  )
}

export default AdminDash
