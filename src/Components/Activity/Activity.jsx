import React from 'react'
import activity from '../../assets/img/activity.png'

function Activity() {
    return (
        <div className='activity-container container py-14 mx-auto text-white'>
            <h1 className='font-bold text-5xl xl:w-[70%] text-center mx-auto mb-12 lg:w-[80%] md:text-4xl md:w-[80%] sm:w-[90%] sm:text-3xl'>See How Moriny Helps Engineering Teams, or Something like That</h1>
            <div className="activity-data flex items-center justify-between xl:flex-row lg:flex-row md:flex-col sm:flex-col">
                <img src={activity} className='xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[55%] sm:mb-6'/>
                <div className="left-side-data flex items-start justify-center flex-col w-[50%] gap-8 md:w-full sm:w-full">
                    <h1 className='font-bold text-4xl uppercase w-[90%] md:mx-auto md:text-center xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl sm:text-center'>creating financial Guardrails, not financial Gates</h1>
                    <p className='text-sm capitalize w-[90%] text-[#7C8083] md:mx-auto md:text-center sm:text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus porro fugiat, distinctio minus rem veritatis quo magnam officiis! Voluptate ullam eligendi aspernatur blanditiis cum sint atque qui voluptas illum natus dolore maxime, explicabo nesciunt voluptatem accusantium est, consectetur impedit rem nam fugit. Deleniti repellendus soluta, eum magni veritatis rem.</p>
                    <div className="activity-btn flex items-center justify-center gap-1 text-center relative md:mx-auto sm:mx-auto">
                        <h1 className='py-4 px-10 rounded-full bg-[#DDEF27] cursor-pointer font-medium text-[#0D1218] lg:py-3 lg:px-9 sm:px-9 sm:py-2'><span className='font-bold'>1M+</span><br />Members</h1>
                        <h1 className='border py-4 px-10 rounded-full bg-white text-[#0D1218] cursor-pointer lg:py-3 lg:px-9 sm:px-9 sm:py-2'><span className='font-bold'>160k+</span><br />Followers</h1>
                        <h1 className='font-bold border p-4 rounded-full bg-[#DDEF27] z-10 cursor-pointer  text-[#0D1218]'>Go</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity