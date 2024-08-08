import React from 'react'
import Navbar from './Navbar'
import Autocarousel from './Autocarousel'
import Subjectlist from './Subjectlist'
import Swiper from "./Swipercomp"
import Testsect from "./Testsect"
import Swipercomp from './Swipercomp'
function Hero() {
  return (
    <div className=' flex flex-col mb-8 bg-gradient-to-b from-white via-white to-[#f7ede3] border-b-2 border-[#f7ede3] rounded-2xl' >

 
    <div className="flex justify-center items-center  flex-col ">
      
      <p className="text-center text-4xl font-serif my-4">Our Star Tutors</p>
      <Autocarousel />
      <p className="text-center text-4xl font-serif my-4">
        Find tutor that's perfect for you
      </p>
      <div className="flex flex-col items-center justify-center" >
      <div className=" w-full mx-2 third md:w-[41vw] p-1">
        <div className="bg-gradient-to-r from-[#ffe5d3] via-white to-[#ffe5d3] rounded-full p-2">
          <div className="  rounded-full flex bg-white w-full p-2 justify-between pl-5">
            <input
              className=" max-[343px]:text-xs outline-none bg-inherit w-[70%]"
              type="text"
              placeholder="What do you want to learn?"
            />
            <button className=" rounded-full p-2 bg-[#8d4b3b]  font-semibold w-[30%] text-white">
              Explore
            </button>
          </div>
        </div>
      </div>
      
      </div>
      {/* <Swiper/> */}
      <div className='hidden  md:flex md:max-w-[720px]' >
        <Swipercomp/>
      </div>
     
    </div>
    <div className=' flex md:hidden md:max-w-[720px]' >
        <Swipercomp/>
      </div>
    </div>
  )
}

export default Hero