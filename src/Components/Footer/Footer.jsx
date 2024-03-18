import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';





function Footer() {
  return (
    <div className='container text-white mx-auto flex items-start justify-between gap-10 py-14 flex-wrap px-8'>
      <div className="logo-part w-[40%]">
        <h1 className='font-bold text-6xl mb-6'>Mortiny</h1>
        <p className='font-normal text-[#77797F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos recusandae a reprehenderit labore? Id omnis natus fugiat voluptas reprehenderit quam quidem provident laboriosam, fuga eaque excepturi libero atque! Necessitatibus, error?</p>
      </div>
      <div className="product">
        <h1 className='text-2xl uppercase font-bold mb-8'>product</h1>
        <div className="list text-[#77797F]">
          <ul>
            <li className='mb-2 cursor-pointer'>For Engineering</li>
            <li className='mb-2 cursor-pointer'>For Finance</li>
            <li className='mb-2 cursor-pointer'>For Partners</li>
          </ul>
        </div>
      </div>
      <div className="company">
        <h1 className='text-2xl uppercase font-bold mb-8'>Company</h1>
        <div className="list text-[#77797F]">
          <ul>
            <li className='mb-2 cursor-pointer'>About us</li>
            <li className='mb-2 cursor-pointer'>Blog</li>
            <li className='mb-2 cursor-pointer'>We're Hiring</li>
          </ul>
        </div>
      </div>
      <div className="contact">
        <h1 className='text-2xl uppercase font-bold mb-8'>Contact</h1>
        <div className="list text-[#77797F]">
          <ul>
            <li className='mb-2 cursor-pointer'>+923116379423</li>
            <li className='mb-2 cursor-pointer text-[#DEF028]'>workwithsohail@gmail.com</li>
          </ul>
        </div>
        <div className="social-media flex gap-4 text-2xl mt-3">
         <a href="https://www.instagram.com/re_sohail/" target='_blank'><RiInstagramFill /></a>
         <a href="https://twitter.com/re_sohail_" target='_blank'><FaSquareXTwitter /></a>
         <a href="https://www.linkedin.com/in/re-sohail/" target='_blank'><FaLinkedin /></a>
         <a href="https://github.com/re-sohail" target='_blank'><FaGithub /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer