import { useState } from "react";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Signupprof from "./pages/authentication/Signupprof";
import Home from "./pages/Home";
import Empty from "./pages/Empty";
import Selectsub from "./pages/prof/Selectsub";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="" >
      <Empty />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup-prof" element={<Signupprof />} />
              <Route exact path="/addsub" element={<Selectsub />} />
            </Routes>
    </div>
  );
}

export default App;
