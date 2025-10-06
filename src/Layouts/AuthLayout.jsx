import React from 'react'

export default function AuthLayout({children, image}) {
  return (

    <div className="mx-auto flex justify-center h-screen">
       <div className='hidden lg:flex lg:w-1/2 items-center h-full'>
         <img className='object-fit h-full' src={image} alt="" />
       </div>
        <div className='w-full lg:w-1/2 flex items-center'>{children}</div>
    </div>
  )
}
