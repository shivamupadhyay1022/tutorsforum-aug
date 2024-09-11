import React from 'react'
import {  useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='flex  flex-row justify-between px-6 py-4 border-b-2 border-white rounded-xl text-lg font-semibold' >
        < button>
        tutorsforum
        </button>
      <div className='flex flex-row space-x-6' >
        <button>
          ?
        </button>
        <button
        onClick={()=>{navigate("/signup-prof")}}>
          Register/Login
        </button>
      </div>
    </div>
  )
}

export default Navbar