import React, { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { TutorContext } from "../../Context/Context ";
import { useNavigate } from "react-router-dom";
let mylang = [];

function removeLanglang() {
    let [eng,setEng] = useState(true)
    let [hindi,setHindi] = useState(true)
    let [odia,setOdia] = useState(true)

    const navigate = useNavigate();
    const Tcontext = useContext(TutorContext);
    
  const addLang = (language) => {
    mylang.push(language);
    console.log(mylang);
  };

  const removeLang = (language) => {
    mylang = mylang.filter((mylang) => mylang !== language);
    console.log(mylang);
  };

  const checkinput = () => {
    if (
      mylang.length == 0 
    ) {
      toast.error("Add atleast one language", {
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
    Tcontext.SetLang(mylang);
    navigate("/profdash")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkinput();
  };

  return (
        <div className="bg-gradient-to-br from-white  to-[#ffded5]">
          <ToastContainer/>
      <div className="flex mx-4 mt-2">
        <p className="text-lg font-semibold text-indigo-950">tutorsforum</p>
      </div>
      <div className=" h-[95vh] flex flex-col justify-center items-center ">
        <div className="flex flex-col md:flex-row items-center justify-center mx-8 md:space-x-8 mt-8 md:mx-[18vw] xl:mx-[24vw]">
          {/* left  */}
          <div className="flex flex-col space-y-6 items-start justify-start bg-[#ffded5] px-4 py-6 rounded-xl">
            <p className="text-2xl font-serif text-indigo-900 font-semibold">
              Choose language you would like to teach in
            </p>
            <p className="text-lg font-medium">
            Ready to inspire and earn? Choose your favorite language from our extensive list and start making a difference today!  
              </p>
              <p className="text-lg font-medium">
              Whether it’s English, Hindi or odia, there's a place for you. Pick your passion and join us in shaping futures—your teaching journey awaits!
            </p>
          </div>

          {/* right */}
          <div className="flex flex-col justify-center items-center my-8">
            <div>
              {/* opted */}
              <div className="mb-2 mt-2">
                <label className="mb-2 block text-2xl font-medium text-[#07074D]">
                  You Teach in
                </label>
                {mylang.map((element, index) => {
                  return (
                    <div key={index}>
                      <ul className="flex w-max">
                        <li className="flex flex-row w-max">• {element}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* choose */}
              <div>
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Languages
                </label>
                <div className="flex-wrap md:flex-row gap-2">
                  <button
                    className="my-2 w-64 btn flex flex-row justify-between "
                    style={{
                      background: eng === false ? "#1565C0" : "#ffffff",
                      color: eng === false ? "#ffffff" : "#000000",
                    }}
                    onClick={() => {
                      setEng(!eng);
                      if (eng) {
                        addLang("English");
                      } else {
                        removeLang("English");
                        console.log(mylang);
                      }
                    }}
                  >
                    English{" "}
                    {eng === false ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                      </svg>
                    )}
                  </button>
                  <button
                    className="my-2 w-64 btn flex flex-row justify-between "
                    style={{
                      background: hindi === false ? "#1565C0" : "#ffffff",
                      color: hindi === false ? "#ffffff" : "#000000",
                    }}
                    onClick={() => {
                      setHindi(!hindi);
                      if (hindi) {
                        addLang("Hindi");
                      } else {
                        mylang = mylang.filter(
                          (mylang) => mylang !== "Hindi"
                        );
                        console.log(mylang);
                      }
                    }}
                  >
                    Hindi{" "}
                    {hindi === false ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                      </svg>
                    )}
                  </button>
                  <button
                    className="my-2 w-64 btn flex flex-row justify-between "
                    style={{
                      background:
                        odia === false ? "#1565C0" : "#ffffff",
                      color: odia === false ? "#ffffff" : "#000000",
                    }}
                    onClick={() => {
                      setOdia(!odia);
                      if (odia) {
                        addLang("Odia");
                      } else {
                        mylang = mylang.filter(
                          (mylang) => mylang !== "Odia"
                        );
                        console.log(mylang);
                      }
                    }}
                  >
                    Odia{" "}
                    {odia === false ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                      </svg>
                    )}
                  </button>
                  <button className="btn w-full bg-[#db9887] shadow-lg text-white "
            onClick={(e)=>handleSubmit(e)}>
              Add Languages
            </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default removeLanglang