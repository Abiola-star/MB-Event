import React from 'react'
import Error from  '../assets/error404.png'
import Header from  '../Components/Header'

export default function Error404() {
  return (
    <>
    <Header/>
    <div className='container mx-auto flex flex-col justify-center items-center'>
      <img src={Error} alt='404' className='w-100'/>
      <div className='text-center space-y-2'>
       <h1 className='font-bold text-lg '>Oh snap!, this is awkward.</h1>
      <p className='text-sm'>But not as awkward as shaking someone that is to giving you a fist bump</p>
      </div>

    </div>
    </>
  )
}