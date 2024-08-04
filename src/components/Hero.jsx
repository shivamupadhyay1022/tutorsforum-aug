import React from 'react'
import Navbar from './Navbar'
import Autocarousel from './Autocarousel'
import Subjectlist from './Subjectlist'
import Swiper from "./Swiper"
function Hero() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-white via-white to-[#f7ede3] border-b-2 border-[#f7ede3] rounded-2xl">
      <Navbar />
      <p className="text-center text-4xl font-serif my-4">Our Star Tutors</p>
      <Autocarousel />
      <p className="text-center text-4xl font-serif my-4">
        Find tutor that's perfect for you
      </p>
      <div className="flex items-center justify-center" >
      <div className=" w-full third md:w-[41vw] p-1">
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
          <Swiper/>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Hero