import React, { useState } from "react";
import Profdash from "./Profdash";
import Profdashnav from "../../components/prof/Profdashnav";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
let mylang = [];
let myArray = [];
let myloc = [];



function TestComp() {
  let [eng, setEng] = useState(true);
  let [hindi, setHindi] = useState(true);
  let [odia, setOdia] = useState(true);
  let base64str;

  let [selectPhysics, setSelectPhysics] = useState(true);
  let [selectMaths, setSelectMaths] = useState(true);
  let [selectBio, setSelectBio] = useState(true);
  let [selectChem, setSelectChem] = useState(true);

  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState("...");

  const [online, setonline] = useState(false);
  const [onloc, setonloc] = useState(false);
  const [showdelaytext, setShowDelayedText] = useState(true);
  const [file,setFile] = useState("");

  const addSubject = (subject) => {
    myArray.push(subject);
    console.log(myArray);
  };

  const removeSubject = (subject) => {
    myArray = myArray.filter((myArray) => myArray !== subject);
    console.log(myArray);
  };

  const addLang = (language) => {
    mylang.push(language);
    console.log(mylang);
  };

  const removeLang = (language) => {
    mylang = mylang.filter((mylang) => mylang !== language);
    console.log(mylang);
  };

  const addloc = (language) => {
    myloc.push(language);
    console.log(myloc);
  };

  const removeloc = (language) => {
    myloc = myloc.filter((myloc) => myloc !== language);
    console.log(myloc);
  };

  function convertToBase64(file){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        }

        fileReader.onerror = (error) => {
            reject(error);
        }
    })
}
const onUpload = async e => {
  const base64 = await convertToBase64(e.target.files[0]);
  setFile(base64);
}



  return (
    <div>
      {showdelaytext || (
        <div className="absolute top-[40%] right-[40%] transform -translate-x-1/2 -translate-y-1/2 spinner md:top-1/2 md:left-1/2">
          {" "}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {!showdelaytext || (
        <div>
          <Profdashnav />
          <div className="flex w-full justify-between p-5 items-center md:px-20 flex-col gap-4 md:flex-row ">
            {/* left  */}
            <div className="card bg-base-100 h-[550px] w-80 shadow-xl">
              <button
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className="absolute right-8 btn top-[270px]"
              ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
            </button>
                <figure>
                  <img
                    src={file || "https://freerangestock.com/sample/119157/business-man-profile-vector.jpg"}
                    alt="profile pic"
                    className=" w-64 h-64 mt-10 bg-slate-600 rounded-xl object-cover"
                  />
                  
                </figure>
              
              <div className="card-body">
                <h2 className="text-2xl">
                  <span className="font-semibold">{"Name:"}</span>
                  {"Name"}
                </h2>
                <h2 className="text-xl">
                  <span className="font-semibold">{"Email:"}</span>
                  {"Email"}
                </h2>
                <p>
                  <span className="font-semibold">{"About You:"}</span>
                  {"Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio"}
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{"Maths"}</div>

                  <div className="badge badge-outline">{"Physics"}</div>

                  <div className="badge badge-outline">{"Chemistry"}</div>

                  <div className="badge badge-outline">{"Bio"}</div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex w-[90%] space-y-2 md:space-y-4 md:space-x-0  md:w-[65%] flex-col">
              <div className="card bg-base-100  md:h-full w-full shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">About Class</h2>
                  <p>
                    {
                      "About ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout Class"
                    }
                  </p>
                  <div className="card-actions justify-end">
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold">Languages:</p>

                      <div className="badge badge-outline">{"English"}</div>

                      <div className="badge badge-outline">{"Hindi"}</div>

                      <div className="badge badge-outline">{"Odia"}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right2 */}
              <div className="card bg-base-100 md:h-full w-full shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Qualifcations</h2>
                  <p>Degrees, certifications, experience</p>
                </div>
              </div>
              {/* right3 */}
              <div className="card bg-base-100 md:h-full w-full shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    Location
                    {`(Online,OnLocation)`}
                  </h2>
                  {
                    <div>
                      <p>State: {"null"}</p>
                      <p>City: {"null"}</p>
                      <p>Latitude {"null"}</p>
                      <p>Longitude: {"null"}</p>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
          <center>
            <buttion
              className="btn min-w-[230px] my-4 self-center"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Edit Profile
            </buttion>
          </center>
          <dialog id="my_modal_4" className="modal">
            <div className="flex flex-col  items-center modal-box w-auto max-w-5xl">
              <h1 className=" block text-2xl font-medium text-[#07074D]">
                Update Profle
              </h1>
              <div className="modal-action flex-col items-center justify-center">
                {/* if there is a button, it will close the modal */}
                <div className="flex flex-col justify-center items-center">
                  {/* name */}
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  {/* About you */}
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">About You</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  {/* Subjects */}
                  {/* opted */}
                  <div className="mb-2 mt-2">
                    <label className="mb-2 block text-2xl font-medium text-[#07074D]">
                      You Teach
                    </label>
                    {myArray.map((element, index) => {
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
                      Subjects
                    </label>
                    <div className="flex-wrap md:flex-row gap-2">
                      <button
                        className="my-2 w-64 btn flex flex-row justify-between "
                        style={{
                          background:
                            selectMaths === false ? "#1565C0" : "#ffffff",
                          color: selectMaths === false ? "#ffffff" : "#000000",
                        }}
                        onClick={() => {
                          setSelectMaths(!selectMaths);
                          if (selectMaths) {
                            addSubject("Maths");
                          } else {
                            removeSubject("Maths");
                            console.log(myArray);
                          }
                        }}
                      >
                        Maths{" "}
                        {selectMaths === false ? (
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
                            selectChem === false ? "#1565C0" : "#ffffff",
                          color: selectChem === false ? "#ffffff" : "#000000",
                        }}
                        onClick={() => {
                          setSelectChem(!selectChem);
                          if (selectChem) {
                            addSubject("Chemistry");
                          } else {
                            myArray = myArray.filter(
                              (myArray) => myArray !== "Chemistry"
                            );
                            console.log(myArray);
                          }
                        }}
                      >
                        Chemistry{" "}
                        {selectChem === false ? (
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
                            selectPhysics === false ? "#1565C0" : "#ffffff",
                          color:
                            selectPhysics === false ? "#ffffff" : "#000000",
                        }}
                        onClick={() => {
                          setSelectPhysics(!selectPhysics);
                          if (selectPhysics) {
                            addSubject("Physics");
                          } else {
                            myArray = myArray.filter(
                              (myArray) => myArray !== "Physics"
                            );
                            console.log(myArray);
                          }
                        }}
                      >
                        Physics{" "}
                        {selectPhysics === false ? (
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
                            selectBio === false ? "#1565C0" : "#ffffff",
                          color: selectBio === false ? "#ffffff" : "#000000",
                        }}
                        onClick={() => {
                          setSelectBio(!selectBio);
                          if (selectBio) {
                            addSubject("Bio");
                          } else {
                            myArray = myArray.filter(
                              (myArray) => myArray !== "Bio"
                            );
                            console.log(myArray);
                          }
                        }}
                      >
                        Bio{" "}
                        {selectBio === false ? (
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
                    </div>
                  </div>
                  {/* About Class */}
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">About Class</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  {/* Language */}
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
                        background: odia === false ? "#1565C0" : "#ffffff",
                        color: odia === false ? "#ffffff" : "#000000",
                      }}
                      onClick={() => {
                        setOdia(!odia);
                        if (odia) {
                          addLang("Odia");
                        } else {
                          mylang = mylang.filter((mylang) => mylang !== "Odia");
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
                  </div>
                  {/* Location */}
                  {/* opted */}
                  <div className="mb-2 mt-2">
                    <label className="mb-2 block text-2xl font-medium text-[#07074D]">
                      You Teach at
                    </label>
                    {myloc.map((element, index) => {
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
                      Locations
                    </label>
                    <div className="flex-wrap md:flex-row gap-2">
                      <button
                        className="my-2 w-64 btn flex flex-row justify-between "
                        style={{
                          background: online === true ? "#1565C0" : "#ffffff",
                          color: online === true ? "#ffffff" : "#000000",
                        }}
                        onClick={() => {
                          setonline(!online);
                          if (!online) {
                            addloc("Online");
                          } else {
                            removeloc("Online");
                            console.log(myloc);
                          }
                        }}
                      >
                        Online{" "}
                        {online === true ? (
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
                          background: onloc === true ? "#1565C0" : "#ffffff",
                          color: onloc === true ? "#ffffff" : "#000000",
                        }}
                        onClick={() => {
                          setonloc(!onloc);
                          if (!onloc) {
                            addloc("OnLocation");
                          } else {
                            myloc = myloc.filter(
                              (myloc) => myloc !== "OnLocation"
                            );
                            console.log(myloc);
                          }
                        }}
                      >
                        OnLocation{" "}
                        {onloc === true ? (
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
                      {!onloc || (
                        <div className="flex-col flex gap-y-2">
                          <h6>Country</h6>
                          <CountrySelect
                            onChange={(e) => {
                              setCountryid(e.id);
                              console.log(e.name);
                            }}
                            placeHolder="Select Country"
                          />
                          <h6>State</h6>
                          <StateSelect
                            countryid={countryid}
                            onChange={(e) => {
                              setstateid(e.id);
                              setstatename(e.name);
                            }}
                            placeHolder="Select State"
                          />
                          <h6>City</h6>
                          <CitySelect
                            countryid={countryid}
                            stateid={stateid}
                            onChange={(e) => {
                              console.log(e);
                              setcityname(e.name);
                              setLatitude(e.latitude);
                              setLongitude(e.longitude);
                            }}
                            placeHolder="Select City"
                          />
                        </div>
                      )}
                    </div>
                    <button
                      className="btn my-2 w-full bg-[#db9887] shadow-lg text-white "
                      onClick={(e) => handleSubmit(e)}
                    >
                      Update
                    </button>
                  </div>
                </div>
                <form method="dialog">
                  <button className="btn absolute right-2 top-2">X</button>
                </form>
              </div>
            </div>
          </dialog>
          <dialog id="my_modal_2" className="modal">
            <div className="flex flex-col  items-center modal-box w-auto max-w-5xl">
              <h1 className=" block text-2xl font-medium text-[#07074D]">
                Update Profle
              </h1>
              <div className="modal-action flex-col items-center justify-center">
                {/* if there is a button, it will close the modal */}
                <div className="flex flex-col justify-center items-center">
                  <label className="form-control items-center w-full max-w-xs">
                    <img
                      src={file ||
                        "https://freerangestock.com/sample/119157/business-man-profile-vector.jpg"
                      }
                      className="w-64 h-64 object-cover rounded-lg"
                    />
                    <div className="label">
                      <span className="label-text">Pick an Image</span>
                    </div>
                    <input
                      type="file"
                      className="file-input file-input-bordered w-full max-w-xs"
                      onChange={
                        onUpload
                      }
                    />
                  </label>
                </div>
                <form method="dialog">
                  <button className="btn absolute right-2 top-2">X</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}

export default TestComp;
