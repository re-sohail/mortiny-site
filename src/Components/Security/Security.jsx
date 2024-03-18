import React from 'react'
import { BsBackpack } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";



function Security() {
    return (
        <div className='security-container container py-36 text-white mx-auto flex items-center justify-between relative h-auto xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse'>
            <div className="right-part xl:w-[50%] xl:text-start lg:w-[50%] lg:text-start md:w-full md:text-center sm:text-center">
                <h1 className='font-bold text-6xl uppercase '>we speak your Language</h1>
                <p className='font-medium text-sm text-[#8E8F95] w-[80%] my-8 xl:text-start xl:mx-0 lg:text-start lg:mx-0 md:text-center md:mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat corporis voluptatibus voluptas ea recusandae temporibus quod error quisquam magnam rerum? Praesentium molestiae consequuntur cumque, autem eaque cum voluptas officia veniam!</p>
                <div className="activity-btn flex items-center xl:justify-start lg:justify-start gap-1 text-center mt-8 md:justify-center sm:justify-center">
                    <h1 className='py-2 px-7 rounded-full bg-[#DDEF27] cursor-pointer font-medium text-[#0D1218]'><span className='font-bold'>Add</span><br />with us</h1>
                    <h1 className='border py-2 px-7 rounded-full bg-white text-[#0D1218] cursor-pointer'><span className='font-bold'>160k+</span><br />Followers</h1>
                    <h1 className='font-bold border p-4 rounded-full bg-[#DDEF27] z-10 cursor-pointer  text-[#0D1218]'>Go</h1>
                </div>
            </div>
            <div className="left-part w-[40%] h-[50vh]">
                <div className="card1 w-64 h-80 flex items-center justify-center flex-col bg-[#222222] rounded-xl absolute top-16 right-72 lg:right-56">
                    <BsBackpack className='text-9xl mb-4'/>
                    <h1 className='font-bold text-3xl uppercase'>Security</h1>
                </div>
                <div className="card2 w-64 h-80 flex items-center justify-center flex-col bg-[#DEF028] rounded-xl absolute top-52 right-36 text-[#222222] lg:right-24">
                    <GrShieldSecurity className='text-9xl mb-4'/>
                    <h1 className='font-bold text-3xl text-center uppercase'>Protection Safe gurade</h1>
                </div>
                <div className="card3 w-10 h-10 bg-white flex items-center justify-center rounded-md absolute top-12 right-[270px] lg:right-[210px]">😎</div>
            </div>
        </div>
    )
}

export default Security