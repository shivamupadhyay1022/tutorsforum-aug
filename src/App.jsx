import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { nitish } from "./assets";
import Autocarousel from "./components/Autocarousel";
import Hero from "./components/Hero";
import Tutorcard from "./components/Tutorcard";
import Tutors from "./components/Tutors";
import Testimonial from "./components/Testimonial";
import Testsect from "./components/Testsect";
import Swipercomp from "./components/Swipercomp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-x-hidden" >
      <Navbar/>
      <Hero />
      <Tutors />
      <Testsect/>
    </div>
  );
}

export default App;
