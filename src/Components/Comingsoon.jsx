import React from 'react'
import Header from "../Components/Header"
import comingsoon from "../assets/comingsoon.png"
import {Link} from "react-router-dom"

export default function Comingsoon() {
  return (
    <>
    <Header />
       <div className=" container mx-auto flex items-center justify-center text-center">
        <div>
            <img className='mx-auto' src={comingsoon} alt="Coming soon" />
            <h2 className='my-3 text-lg font-semibold'>This page is still under construction</h2>
           <Link to="/"> <button className="mx-auto h-10 w-[150px] bg-purple-500 text-white font-semibold hover:bg-purple-950 rounded-md ">Go to Homepage</button></Link>
        </div>

       </div>
      
    </>
  )
}
