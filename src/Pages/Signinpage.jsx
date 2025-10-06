import React from 'react'
import AuthLayout from "../Layouts/AuthLayout"
import image from "../assets/frame-signin.png"
import { useState, useContext } from 'react';
import Logo from "../assets/NB-Events-Logo.png"
import { Link } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { set } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"



 export default function SigninPage() {
  const {login} = useContext(AuthContext)
  const Navigate= useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword]=useState(false)
  const togglePasswordVisibility = ()=>{
    setShowPassword(!showPassword)
  }
  const [errors, setErrors] = useState({});
  const [formData, setFormData]= useState({email : "", password : ""})

 const handleChange=(e)=>{
  setFormData({...formData, [e.target.name] : e.target.value})
 }
  const validateForm=()=>{
    const {email, password} = formData
    const newErrors = {}
    if (!email) {
      newErrors.email = "email required"
    }
    if (!password) {
      newErrors.password = "password required"
    }
    if (password && password.length <6 )
      {newErrors.password = 'Password must be at least 6 characters'
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    if (!validateForm()) return;
    try {
      await login(formData)
      toast.success("Logged in successfully!", {
        position: "top-center"
      })
      Navigate("/")
    } catch (error) {
      toast.error(error.message || "Login failed. please try again", {
        position: "top-center",
      })
      console.log(error);
    }finally{
      setIsLoading(false)
    }
   }

  return (
    
    <AuthLayout image={image}> 
    

       <div className="flex flex-col items-center justify-center mx-auto">
       <Link to="/"><img src={Logo} alt="" /></Link> 
          <form className='flex flex-col mx-auto px-10 py-2' onSubmit={handleSubmit}>
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back</h2>
          <p className="text-gray-600 mb-6">Sign in to your account</p>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
              onChange={handleChange}
              name="email"
              value={formData.email}
                type="email"
                placeholder="Email"
                className="w-xs lg:w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

             <div>

             </div>
        
              <div className='relative'>
                <input className="w-full my-2 rounded-md border-1 py-2 px-3"
                
                onChange={handleChange}
                name="password"
                placeholder='password' type={showPassword ? "text" : "password"}/>
                <button onClick={togglePasswordVisibility} type='button' className='absolute top-5 right-3'>{showPassword ?  <FaRegEyeSlash /> :  <FaRegEye />}</button>
              </div>
            <Link to="/forgotpassword" className="mt-5 text-sm mb-6">Forgot password?</Link>

            <button type="submit" 
            className=" top-5 right-2 w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-600 transition duration-300"
            
             >
              {isLoading ? "signing in" : "sign in"}
            </button>
          <p className="mt-6 text-lg text-gray-500">
            Don't have an account? <Link to="/signup" className="text-purple-500 font-semibold">Sign up</Link>
          </p>
          </form>
      </div> 
       
    </AuthLayout>

    
 
  );
 }

