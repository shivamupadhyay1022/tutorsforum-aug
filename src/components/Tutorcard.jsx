import React from 'react'
import { nitish } from '../assets'
function Tutorcard() {
  return (
    <div className=" flex flex-col justify-center items-center my-4 pb-2 bg-gradient-to-br from-white rounded-xl font-serif via-white to-[#db9887] w-64 md:ml-14">
    <div className="">
      <img
        className="w-64 h-64 bg-slate-600 rounded-xl object-cover"
        src={nitish}
      />
      <div className=" bottom-2 left-2">
        <div className="flex justify-between pr-2">
          <p className="text-lg font-semibold">Nitish Kumar</p>
          <p>Stars/Ratings</p>{" "}
        </div>

        <p className="text-sm">{"Bhubaneswar (Offline)"}</p>
        <p>Desc</p>
        <p>Subject Desc</p>
      </div>
    </div>
  </div>
  )
}

export default Tutorcard