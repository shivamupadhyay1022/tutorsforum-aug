import React from 'react'

function Navbar() {
  return (
    <div className='flex  flex-row justify-between px-6 py-4 border-b-2 border-white rounded-xl text-lg font-semibold' >
        < button>
        tutorsforum
        </button>
      <div className='flex flex-row space-x-6' >
        <button>
          ?
        </button>
        <button>
          Register/Login
        </button>
      </div>
    </div>
  )
}

export default Navbar