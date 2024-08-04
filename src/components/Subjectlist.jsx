import React from 'react'
import Swiper from "./Swiper"
function Subjectlist() {
  return (
    <div className=' mt-10   w-full flex  flex-col'>
    <div className=' flex text-center justify-around items-center w-full px-2 '>
     <img width="50" className=' inline max-[315px]:w-10' src="./images/Star 6.png" alt="" />
     <div className=' flex flex-col gap-5 px-2'>
      <h1 className=' max-[359px]:text-2xl text-3xl font-Koho font-bold'>Explore Top Categories </h1>
      <p>Click on the categories and explore all courses</p>
     </div>
     <img width="70" className=' inline max-[315px]:w-12' src="./images/Ellipse 40.png" alt="" />
    </div>
    <div className=' bg-texture p-10 pl-5 pr-5 mt-10'>
      <Swiper/>
    </div>
</div>
  )
}

export default Subjectlist