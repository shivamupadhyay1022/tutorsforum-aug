import React, { useState,useContext } from "react";
import { TutorContext } from "../../Context/Context ";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Shortbio() {
  const [bio,SetBio] = useState("");
  const navigate = useNavigate();
  const Tcontext = useContext(TutorContext);

  const checkinput = () => {
    if (
      bio.trim().length == 0 
    ) {

      toast.error("Fill all the fields", {
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
      onRegister();
      
    }
  };

  const onRegister = () => {
    Tcontext.SetBio(bio);
    console.log(Tcontext.bio)
    navigate("/aboutclass")
  };

  const handleSubmit = () =>{
    checkinput();
  }

  return (
    <div className="">
      <ToastContainer/>
      <div className="flex mx-4 mt-2 mb-16">
        <p className="text-lg font-semibold text-indigo-950">tutorsforum</p>
      </div>
      <div className=" h-[95vh] flex flex-col justify-center items-center ">
        <div className="flex flex-col md:flex-row items-center justify-center mx-8 md:space-x-8 mt-8 md:mx-[18vw] xl:mx-[24vw]">
          {/* left  */}
          <div className="flex flex-col space-y-6 items-start justify-start bg-[#ffded5] px-4 py-6 rounded-xl">
            <p className="text-2xl font-serif text-indigo-900 font-semibold">
              Write a a short bio
            </p>
            <p className="text-lg font-medium">
              Your bio is key to making a strong impression! Make it unique,
              engaging, and include at least 12 words:
            </p>
            <p className="text-lg font-medium">
              <ul>
                <li>•The subjects you teach</li>
                <li>•Your qualifications, teaching style, etc.</li>
                <li>•What sets you apart</li>
              </ul>
            </p>
            <p className="text-lg font-medium">GOOD EXAMPLES</p>
            <p className="text-lg font-medium">
              <ul>
                <li>
                  •Engineering graduate specializing in chemistry and biology,
                  offering personalized tutoring for high school students in
                  Mumbai.
                </li>
                <li>
                  •Certified violinist with over 10 years of experience,
                  providing in-home violin and music theory lessons.
                </li>
              </ul>
            </p>
            <p className="text-lg font-medium">LESS EFFECTIVE EXAMPLES</p>
            <p className="text-lg font-medium">
              I offer painting and drawing classes for ₹700/hour.
            </p>
          </div>

          {/* right */}
          <div className="flex flex-col h-full justify-start items-start my-8">
            <div>
              <div className="mb-2 mt-2">
                <label className="mb-2 block text-2xl font-medium text-[#07074D]">
                  You Teach
                </label>
              </div>

              <div>
                <label className="mb-3 min-w-80 block text-base font-medium text-[#07074D]">
                  Short bio:
                </label>
                <div className="flex-wrap md:flex-row gap-2">
                  <textarea
                  onChange={(e)=>{SetBio(e.target.value)
                    console.log(bio)
                  }}
                    className="textarea textarea-bordered w-full min-h-32  "
                    placeholder="Bio"
                  ></textarea>
                </div>
                <button className="btn w-full bg-[#db9887] shadow-lg text-white "
            onClick={(e)=>handleSubmit(e)}>
              Add Bio
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shortbio;
