import React, { useState, useContext } from 'react';
import AuthLayout from "../Layouts/AuthLayout";
import image from "../assets/Frame-signup.png";
import Logo from "../assets/NB-Events-Logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from "react-toastify"

export default function Signuppage() {
  const Navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
  const newErrors = {};
  if (!emailPattern.test(formData.email)) {
    newErrors.email = 'Enter a valid email.';
  }
  if (!formData.fullName.trim()) {
    newErrors.fullName = 'Name is required.';
  }
  if (formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters.';
  }
  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = 'Passwords do not match.';
  }
  if (!formData.terms) {
    newErrors.terms = 'You must agree to the terms.';
  }

  setErrors(newErrors);
  return newErrors;
};

  const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) return;
  setErrors({});
  setIsLoading(true)

  try {
    await register(formData);
    toast.success("Account created successfully! please log in",{
      position: "top-center"
    })
    Navigate("/signin");
  } catch (error) {
    toast.error(error.message || "Registration failed. please try again ",{
      position: "top-center"
    })
    console.log(error);
    setErrors({ form: "Signup failed, try again!" });
  } finally {
    setIsLoading(false)
  }
};

  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen p-4 md:p-6">
      <AuthLayout image={image}>
        <div className="p-6 md:p-8 rounded-xl shadow-xl w-full max-w-md mx-auto">
          <Link to="/"><img src={Logo} alt="Logo" className="mb-4" /></Link>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Account</h2>
          <p className="text-lg text-gray-600 mb-6">
            Let's get you started so you can start joining and creating events
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                I agree to the terms & conditions
              </label>
            </div>
            {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            >
              {isLoading ? "signing up" : "sign up"}
            </button>

            <p className="text-sm text-center mt-4 text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="text-purple-600 font-medium hover:underline">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </AuthLayout>
    </div>
  );
}