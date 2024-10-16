import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signupprof from "./pages/prof/Signupprof";
import Home from "./pages/Home";
import Empty from "./pages/Empty";
import Selectsub from "./pages/prof/Selectsub";
import Shortbio from "./pages/prof/Shortbio";
import Aboutclass from "./pages/prof/Aboutclass";
import Selectlang from "./pages/prof/selectlang";
import { TutorProvider } from "./Context/Context ";
import Profdash from "./pages/prof/Profdash";
import { AuthProvider } from "./components/AuthProvider";
import Schedclass from "./pages/prof/Schedclass";
import Schedqna from "./pages/prof/Schedqna";
import Selectloc from "./pages/prof/Selectloc";
import Signinprof from "./pages/prof/Signinprof";
import TestComp from "./pages/prof/TestComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <AuthProvider>
        <Empty />
        <TutorProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/testcomp" element={<TestComp />} />
            <Route exact path="/signup-prof" element={<Signupprof />} />
            <Route exact path="/signin-prof" element={<Signinprof />} />
            <Route exact path="/addsub" element={<Selectsub />} />
            <Route exact path="/shortbio" element={<Shortbio />} />
            <Route exact path="/aboutclass" element={<Aboutclass />} />
            <Route exact path="/addlang" element={<Selectlang />} />
            <Route exact path="/profdash" element={<Profdash />} />
            <Route exact path="/schedule-class" element={<Schedclass/>} />
            <Route exact path="/schedule-qna" element={<Schedqna/>} />
            <Route exact path="/addloc" element={<Selectloc/>} />
          </Routes>
        </TutorProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
