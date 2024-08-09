import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Tutors from '../components/Tutors'
import Testsect from '../components/Testsect'

function Home() {
  return (
    <div className="overflow-x-hidden" >
      <Navbar/>
      <Hero />
      <Tutors />
      <Testsect/>
    </div>
  )
}

export default Home