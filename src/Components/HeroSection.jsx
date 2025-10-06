import React from 'react'
import { motion } from "framer-motion"
import { Link } from "react-router";
import {AuthContext} from "../context/AuthContext"
import { useContext } from 'react'

export default function HeroSection() {
  const {user} = useContext(AuthContext)
  return (
    <main className="hero flex items-center px-5 lg:px-20">
        <motion.div  initial={{ scale: 0 }} animate={{ scale: 1 }} className="container mx-auto">
            <section className="flex-col lg:flex justify-start text-white lg:w-[400px]">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-10">Discover Unforgettable Experiences With Ease</h1>
            <p className="py-4 lg:w-[400px]">"Find, book, and manage tickets for concerts, workshops, and social gatherings with ease. Create events, connect with your audience, and start making lasting memories today!"</p>
            { user ? <Link to="/createEvent"><button className="w-[150px] h-[50px] rounded-md bg-purple-500 text-white hover:bg-purple-800 ">Create Event</button></Link> : <Link to="/auth/signUp"><button className="w-[150px] h-[50px] rounded-md bg-purple-500 text-white hover:bg-purple-800">Sign up</button></Link> }
        </section>
        </motion.div>
    </main>
  )
}