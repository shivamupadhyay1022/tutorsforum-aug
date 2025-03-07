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
import Forgetpassword from "./pages/prof/Forgetpassword";
import Signupuser from "./pages/user/Signupuser";
import Userdash from "./pages/user/Userdash";
import Requesttutor from "./pages/user/Requesttutor";
import Usermsg from "./pages/user/Usermsg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tutor from "./pages/prof/Tutor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gradient-to-br from-white min-h-screen  to-[#ffded5]">
      <AuthProvider>
        <Empty />
        <TutorProvider>
        <ToastContainer/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/testcomp" element={<TestComp />} />
            <Route exact path="/signup-prof" element={<Signupprof />} />
            <Route exact path="/signin-prof" element={<Signinprof />} />
            <Route exact path="/forgot" element={<Forgetpassword/>} />
            <Route exact path="/addsub" element={<Selectsub />} />
            <Route exact path="/shortbio" element={<Shortbio />} />
            <Route exact path="/aboutclass" element={<Aboutclass />} />
            <Route exact path="/addlang" element={<Selectlang />} />
            <Route exact path="/profdash" element={<Profdash />} />
            <Route exact path="/tutor/:id" element={<Tutor />} />
            <Route exact path="/schedule-class" element={<Schedclass/>} />
            <Route exact path="/schedule-qna" element={<Schedqna/>} />
            <Route exact path="/addloc" element={<Selectloc/>} />
            {/* user side */}
            <Route exact path="/signup-user" element={<Signupuser/>} />
            <Route exact path="/userdash" element={<Userdash/>} />
            <Route exact path="/reqtutor" element={<Requesttutor/>} />
            <Route exact path="/usermsg" element={<Usermsg/>} />
          </Routes>
        </TutorProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
