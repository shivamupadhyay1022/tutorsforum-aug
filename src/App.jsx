import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { nitish } from "./assets";
import Autocarousel from "./components/Autocarousel";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hero/>
    </div>
  );
}

export default App;