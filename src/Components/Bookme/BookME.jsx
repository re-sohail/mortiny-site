import React from 'react'
import ArrowBtn from '../../assets/img/arrow.png'

function BookME() {
  return (
    <div>
        <div className="uper-part container bg-[#DEF028] py-36 rounded-[40px] mx-auto flex items-center justify-center flex-col gap-10">
            <h1 className='font-bold text-6xl uppercase xl:w-[70%] text-center lg:w-[90%] md:w-full md:text-6xl sm:text-4xl sm:w-[90%]'>Find out what Ternary can do for your GCP spend</h1>
            <div className="w-[330px] h-auto bg-[#DDEF27] flex items-center justify-around border-6 py-1 gap-4 rounded-full border-[#0D1218]">
                <img className='w-12 border-6 border-[#0D1218] rounded-full bg-white' src={ArrowBtn}/>
                <h1 className=' font-semibold text-3xl uppercase text-[#0D1218]'>Book A Demo</h1>
            </div>
        </div>
    </div>
  )
}

export default BookME