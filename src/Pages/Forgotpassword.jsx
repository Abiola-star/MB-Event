import {React, useState} from 'react'
import AuthLayout from '../Layouts/AuthLayout'
import image from "../assets/Frame-signup.png"
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/NB-Events-Logo.png"
import {toast} from "react-toastify"

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [isloading, setisloading]= useState()
    const [formData, setFormData] = useState({
      email: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });
    };
      const validateForm = () => {
    const newErrors ={};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

        setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    };
    
        const handleSubmit =async (e)=>{
      e.preventDefault();
      if (validateForm()) {
        console.log("Form submitted:", formData);
      }

       try {
      const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:5000/api/user";
      const response = await fetch(`${baseUrl}/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Base URL:", baseUrl);
      const data = await response.json();
      if (response.status !== 200) throw new Error(data.message ||
         "Failed to send reset password email");
         toast.success("Reset password sent", {
          position: "top-center"
         })
      return data;
    } catch (error) {
      console.log(error) 
    } finally {
      setisloading(false);
    }

  
    };
  
  return (
        <AuthLayout image={image}>
          <div className='flex flex-col justify-center items-center h-screen'>
          <div className='flex justify-center'>
          <img src={Logo} className='mb-3'/>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5 max-w-lg w-full">
          <h1 className='font-bold text-xl mb-6'>Forgot Password?</h1>
          <p>No worries, we’ll send you instruction to help</p>

          <input onChange={handleChange} value={formData.email} className="border border-gray-300 rounded-md my-2 w-full h-10 text-lg px-3 " id='email' type='email' placeholder='Email'/>
          {errors.email && (<p className='text-red-600 font-semibold mb-3'>{errors.email}</p>)}

         <div className='max-w-lg w-full'>
         <button className="border w-full my-2 py-2 px-3 rounded-md bg-purple-600" type="submit">Reset Password<Link to="/resetpassword"></Link></button>
          </div> 

          </form>
          </div>
        </AuthLayout>  
  )
}