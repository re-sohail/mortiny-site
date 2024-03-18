import React, { useState } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";


function Header() {
  return (
<div className='container h-20 mx-auto py-7 flex items-center justify-between bg-white px-9 rounded-full my-4'>
      <h1 className='text-3xl cursor-pointer font-bold uppercase'>Mortiny</h1>
      <div className='list xl:block lg:block md:hidden sm:hidden mo:hidden'>
        <ul className='flex items-center gap-7 font-medium'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer text-slate-800 hover:text-black'>For Finance</li>
          <li className='cursor-pointer text-slate-800 hover:text-black'>For Partners</li>
          <li className='cursor-pointer text-slate-800 hover:text-black'>About us</li>
          <li className='cursor-pointer text-slate-800 hover:text-black'>Blog</li>
        </ul>
      </div>
      <p className='cursor-pointer text-slate-800 hover:text-black xl:block lg:block md:hidden sm:hidden'>Book a Demo <hr /></p>
      <HiMenuAlt4 className='xl:hidden lg:hidden text-3xl md:block '/>
    </div>
  )
}

export default Header