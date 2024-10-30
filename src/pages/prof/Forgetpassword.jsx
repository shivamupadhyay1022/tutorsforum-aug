import React,{useState} from 'react'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import {Link, useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from 'firebase/auth';


function Forgetpassword() {
    const [inputype, setinputype] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const checkinput = () => {
        if (email.trim().length == 0 ) {
          toast.error("Fill All Fields", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          sendResetlink();
        }
      };

    async function sendResetlink() {
        sendPasswordResetEmail(auth, email).then(()=>{
            toast.success(email + "Password Reset Link Sent, Check mail!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        
        }).catch((error)=>{
            toast.error(error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkinput();
      };
  return (
    <div className="">
    <ToastContainer />
    <div className="flex mx-4 mt-2">
      <p className="text-lg font-semibold text-indigo-950">tutorsforum</p>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center mx-8 md:space-x-8 mt-16 md:mx-[18vw] xl:mx-[24vw]">
      {/* left  */}
      <div className="flex flex-col space-y-6 items-start justify-start">
        <p className="text-2xl font-serif text-indigo-900 font-semibold">
          Forgot Password ?
        </p>
        <p className="text-lg font-medium">
          Input email and click forgot password and password reset link will be sent on mail
        </p>
      </div>

      {/* right */}
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex px-12 py-16 flex-col justify-center items-center space-y-4 shadow-xl bg-[#ffded5] rounded-xl">
          <p className="text-2xl font-semibold">Sign In</p>

          {/* email  */}
          <label className="input rounded input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>


          <button
            className="btn w-full bg-[#db9887] shadow-lg text-white "
            onClick={(e) => handleSubmit(e)}
          >
            Send Link
          </button>
          <div>
            <span className="text-slate-800 text-sm md:text-lg">Don't Have an account ? </span>
            <Link to={"/signup-prof"}><span className="underline">SignUp</span></Link>
          </div>
          <div>
            <span className="text-slate-800 text-sm md:text-lg">Already Have an account ? </span>
            <Link to={"/signin-prof"}><span className="underline">SignIn</span></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Forgetpassword