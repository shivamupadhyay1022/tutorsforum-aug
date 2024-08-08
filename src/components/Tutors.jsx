import React from 'react'
import Tutorcard from './Tutorcard'
function Tutors() {
  return (
    <div className=" flex justify-center items-center space-y-10 flex-col " >
        <div className="flex flex-col md:flex-row space-y-4 md:space-x-8 " >
        <Tutorcard/><Tutorcard/><Tutorcard/>
        </div>
        <div className="hidden md:flex flex-row space-x-8 " >
        <Tutorcard/><Tutorcard/><Tutorcard/>
        </div>
        <div className="hidden md:flex flex-row space-x-8 " >
        <Tutorcard/><Tutorcard/><Tutorcard/>
        </div>

      </div>
  )
}

export default Tutors