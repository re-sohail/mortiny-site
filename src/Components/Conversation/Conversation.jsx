import React from 'react'
import { AiOutlineAlignCenter } from "react-icons/ai";
import { AiOutlineControl } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import Demo from '../../assets/img/Demo.png'
import ArrowBtn from '../../assets/img/arrow.png'


function Conversation() {
  return (
    <div className='conversation-container container py-12 h-auto bg-white mx-auto rounded-[50px]'>
        <div className="upper-part w-[90%] h-auto py-10 px-12 bg-[#DEF028] mx-auto rounded-full border-12 border-[#0D1218] flex items-center justify-center gap-8">
            <div className="u-l-side w-[70%]">
                <h1 className='font-bold xl:text-5xl uppercase py-5 px-5 lg:text-4xl md:text-2xl sm:py-0 sm:px-0 sm:font-bold'>moriny supports cost management for google service out of the box</h1>
            </div>
            <div className="u-r-side flex items-center justify-between xl:w-[22%] lg:w-[22%] gap-6 flex-wrap md:w-[26%] sm:w-[37%]">
                <div className="first-bg relative">
                <div className="bg w-24 h-24 bg-[#0D1218] rounded-2xl lg:w-[72px] lg:h-16 md:w-[60px] md:h-14 sm:w-[60px] sm:h-14"></div>
                <div><AiOutlineAlignCenter className='text-8xl px-6 py-6 bg-[#DEF028] rounded-2xl shadow-lg absolute top-1 -left-1 lg:text-7xl md:text-6xl sm:text-6xl sm:py-3 sm:px-3 '/></div>
                </div>
                <div className="first-bg relative">
                <div className="bg w-24 h-24 bg-[#0D1218] rounded-2xl lg:w-[72px] lg:h-16 md:w-[60px] md:h-14 sm:w-[60px] sm:h-14"></div>
                <div><AiOutlineControl className='text-8xl px-6 py-6 bg-[#DEF028] rounded-2xl shadow-lg absolute top-1 -left-1 lg:text-7xl md:text-6xl sm:text-6xl sm:py-3 sm:px-3'/></div>
                </div>
                <div className="first-bg relative">
                <div className="bg w-24 h-24 bg-[#0D1218] rounded-2xl lg:w-[72px] lg:h-16 md:w-[60px] md:h-14 sm:w-[60px] sm:h-14"></div>
                <div><AiOutlineBarChart className='text-8xl px-6 py-6 bg-[#DEF028] rounded-2xl shadow-lg absolute top-1 -left-1 lg:text-7xl md:text-6xl sm:text-6xl sm:py-3 sm:px-3'/></div>
                </div>
                <div className="first-bg relative">
                <div className="bg w-24 h-24 bg-[#0D1218] rounded-2xl lg:w-[72px] lg:h-16 md:w-[60px] md:h-14 sm:w-[60px] sm:h-14"></div>
                <div><AiOutlineDeploymentUnit className='text-8xl px-6 py-6 bg-[#DEF028] rounded-2xl shadow-lg absolute top-1 -left-1 lg:text-7xl md:text-6xl sm:text-6xl sm:py-3 sm:px-3'/></div>
                </div>
            </div>
        </div>
        <div className="lower-part mt-16 px-10 flex items-center justify-between xl:flex-row lg:flex-row md:flex-col sm:flex-col">
            <div className="l-part xl:w-[50%] lg:w-[50%] md:w-[80%] sm:w-[70%]">
                <img src={Demo} className='md:mx-auto xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%]'/>
            </div>
            <div className="r-part xl:w-[50%] xl:text-start lg:w-[50%] lg:text-start md:w-full md:text-center sm:text-center">
                <h1 className='text-4xl font-bold uppercase'>Align Team with Open Conversation</h1>
                <p className='text-sm text-[#A3A3A3] my-6 xl:w-[90%] xl:text-start lg:w-[90%] lg:text-start md:w-[80%] md:mx-auto sm:text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam enim vel, ipsum laudantium sunt cum iusto ad inventore eligendi eius doloribus distinctio dignissimos iste.</p>
                <div className="w-[230px] h-auto bg-[#DDEF27] flex items-center justify-center border-6 py-1 gap-4 rounded-full border-[#0D1218] xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto">
                <img className='w-12 border-6 border-[#0D1218] rounded-full bg-white' src={ArrowBtn}/>
                <h1 className=' text-lg font-semibold uppercase text-[#0D1218]'>Book A Demo</h1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Conversation