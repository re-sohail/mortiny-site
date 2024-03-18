import React from 'react'
import img1 from '../../assets/img/img.jpeg'
import playBtn from '../../assets/img/play-btn.png'
import ArrowBtn from '../../assets/img/arrow.png'


function Hero() {
    return (
        <div className='container bg-white h-auto px-16 py-7 mx-auto rounded-[50px] flex items-center justify-between md:flex-col md:px-12 sm:flex-col'>
           <div className="uper-part flex items-center justify-between xl:flex-row lg:flex-row md:flex-col sm:flex-col">
                <div className='right-side w-[50%] text-[#0D1218] lg:w-[60%] md:w-full sm:w-full'>
                    <h1 className='xl:text-8xl font-bold lg:text-7xl md:text-9xl sm:text-8xl'>Mortiny For</h1>
                    <h1 className='xl:text-8xl font-bold lg:text-7xl md:text-9xl sm:text-8xl'>Engineering</h1>
                    <div className="imgs-collection flex items-center justify-start gap-4">
                        <h1 className='xl:text-8xl font-bold lg:text-7xl md:text-9xl sm:text-8xl'>Teams</h1>
                        <div className="imgs flex items-center justify-center bg-[#0D1218] px-1 py-1 rounded-full">
                            <img className='xl:w-16 xl:h-16 rounded-full object-cover border-3 lg:w-14 lg:h-14 md:w-14 md:h-14 sm:w-14 sm:h-14' src="https://static.wixstatic.com/media/96a180_5ce340ecf8c44d0fa59a49728da72e22~mv2.jpg/v1/fill/w_640,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/96a180_5ce340ecf8c44d0fa59a49728da72e22~mv2.jpg" alt="" />
                            <img className='xl:w-16 xl:h-16 rounded-full object-cover border-3 lg:w-14 lg:h-14 md:w-14 md:h-14 sm:w-14 sm:h-14' src="https://images.wondershare.com/filmora/article-images/11-satoru-gojo.jpg" alt="" />
                            <img className='xl:w-16 xl:h-16 rounded-full object-cover border-3 lg:w-14 lg:h-14 md:w-14 md:h-14 sm:w-14 sm:h-14' src="https://miro.medium.com/v2/resize:fit:532/0*hAJMUfBLijKY9IXS" alt="" />
                            <img className='xl:w-16 xl:h-16 rounded-full object-cover border-3 lg:w-14 lg:h-14 md:w-14 md:h-14 sm:w-14 sm:h-14' src="https://qph.cf2.quoracdn.net/main-qimg-e46fc21405eb4b0cda62d084b03f170d-lq" alt="" />
                        </div>
                    </div>
                </div>
                <div className='left-side w-[50%] lg:w-[40%] md:w-full sm:w-full'>
                    <div className="img-part relative">
                        <img src={img1} alt="img1" className='XL:h-40 w-full rounded-full bg-cover bg-top lg:h-[150px] md:h-48 md:w-full sm:w-full sm:h-[150px]' />
                        <img src={playBtn} className='xl:w-[100px] bg-[#0D1218] p-8 rounded-full absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 lg:w-[80px] md:w-[90px] sm:w-[90px]' />
                    </div>
                    <p className='xl:w-[80%] my-5 mx-auto text-center xl:font-medium text-[#0D1218] lg:w-[100%] lg:font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet obcaecati assumenda repellendus quia consequatur optio, laboriosam ex vero quisquam deleniti.</p>
                    <div className="other-data flex items-center justify-center mx-auto gap-1 text-center relative">
                        <h1 className='xl:py-4 xl:px-10 rounded-full bg-[#DDEF27] cursor-pointer font-medium text-[#0D1218] lg:py-3 lg:px-9 md:py-3 md:px-10 sm:px-9 sm:py-2'><span className='font-bold'>1M+</span><br />Members</h1>
                        <h1 className='border xl:py-4 xl:px-10 rounded-full bg-[#0D1218] text-white cursor-pointer lg:py-3 lg:px-9 md:py-3 md:px-10 sm:px-9 sm:py-2'><span className='font-bold'>160k+</span><br />Followers</h1>
                        <h1 className='font-bold border p-4 rounded-full bg-[#DDEF27] z-10 cursor-pointer  text-[#0D1218]'>Go</h1>
                    </div>
                </div>
            </div>
            <div className="lower-part w-[95%] h-auto bg-[#DDEF27] mt-10 flex items-center justify-evenly xl:border-12 py-3 rounded-full border-[#0D1218]">
                <img className='xl:w-36 border-12 border-[#0D1218] rounded-full bg-white lg:w-32 md:w-24 md:border-9 sm:w-24 sm:border-6' src={ArrowBtn}/>
                <h1 className='xl:text-9xl xl:font-semibold uppercase text-[#0D1218] lg:text-8xl md:text-7xl sm:text-5xl sm:font-bold'>Book A Demo</h1>
            </div>
        </div>
    )
}
export default Hero