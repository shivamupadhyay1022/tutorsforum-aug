import React, { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { TutorContext } from "../../Context/Context ";
import { useNavigate } from "react-router-dom";

function Aboutclass() {
  const [aboutclass,SetAboutclasss] = useState("");
  const navigate = useNavigate();
  const Tcontext = useContext(TutorContext);

  const checkinput = () => {
    if (
      aboutclass.trim().length == 0 
    ) {
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
      onRegister();
      
    }
  };

  const onRegister = () => {
    Tcontext.SetAboutclasss(aboutclass);
    navigate("/addlang")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkinput();
  };

  return (
    <div className="bg-gradient-to-br from-white  to-[#ffded5]">
      <ToastContainer/>
      <div className="flex mx-4 mt-2 ">
        <p className="text-lg font-semibold text-indigo-950">tutorsforum</p>
      </div>
      <div className=" h-[95vh] flex flex-col justify-center items-center ">
        <div className="flex flex-col md:flex-row items-center justify-center mx-8 md:space-x-8 mt-8 md:mx-[18vw] xl:mx-[24vw]">
          {/* left  */}
          <div className="flex flex-col space-y-6 items-start justify-start bg-[#ffded5] px-4 py-6 rounded-xl">
            <p className="text-2xl font-serif text-indigo-900 font-semibold">
              How will your classes stand out and captivate students of all
              ages?
            </p>
            <p className="text-lg font-medium">
              Describe your teaching approach and how you share your knowledge:
            </p>
            <p className="text-lg font-medium">
              <ul>
                <li>•Your teaching methods and techniques</li>
                <li>•The typical structure of your classes.</li>
                <li>•What makes you unique as a teacher</li>
                <li>
                  •The target audience for your classes (school children,
                  college students, adults, etc.)
                </li>
              </ul>
            </p>
            <p className="text-lg font-medium">REMEMBER Tutor:</p>
            <p className="text-lg font-medium">
              Your contact details or URLs should not be included in your bi
            </p>
          </div>

          {/* right */}
          <div className="flex flex-col h-full justify-start items-start my-8">
            <div>
              <div className="mb-2 mt-2">
                <label className="mb-2 block text-2xl font-medium text-[#07074D]">
                  Your class
                </label>
              </div>

              <div>
                <div className="flex-wrap md:flex-row gap-2 min-w-80">
                  <textarea
                  onChange={(e) => SetAboutclasss(e.target.value)}
                    className="textarea textarea-bordered w-full min-h-32  "
                    placeholder="about class in less than 40 words"
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

export default Aboutclass;
