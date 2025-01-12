import React, { useState, useContext } from "react";
import Userdashnav from "../../components/user/Userdashnav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TutorContext } from "../../Context/Context ";
import { AuthContext } from "../../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import Tutorcard from "../../components/Tutorcard";

function Requesttutor() {
  const Tcontext = useContext(TutorContext);

  let [eng, setEng] = useState(true);
  let [hindi, setHindi] = useState(true);
  let [odia, setOdia] = useState(true);

  let [selectPhysics, setSelectPhysics] = useState(true);
  let [selectMaths, setSelectMaths] = useState(true);
  let [selectBio, setSelectBio] = useState(true);
  let [selectChem, setSelectChem] = useState(true);

  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const [bio, SetBio] = useState();
  const [sub, SetSub] = useState();
  const [aboutclass, SetAboutclasss] = useState();
  const [lang, SetLang] = useState();
  const [name, SetName] = useState();
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState("...");
  const [statename, setstatename] = useState();
  const [cityname, setcityname] = useState();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [online, setonline] = useState(false);
  const [onloc, setloc] = useState(false);
  const [showdelaytext, setShowDelayedText] = useState(true);
  const [file, setFile] = useState();
  const [dbfile, SetDbFile] = useState();

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      {" "}
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
      )}{" "}
      {!showdelaytext || (
        <div className="flex flex-col items-center">
          <Userdashnav />
  

          <div className="flex flex-row gap-4 px-16 my-4 w-full" >
            {/* subject */}
            <label className="input w-full input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow h-auto"
                placeholder="Subject"
                onChange={(e) => {
                  SetSearch(e.target.value);
                }}
              />
              <button
                className=" my-2"
                onClick={() => {
                  handleSearch();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </label>
            {/* location */}
            <label className="input w-full input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow h-auto"
                placeholder="Location"
                onChange={(e) => {
                  SetSearch(e.target.value);
                }}
              />
              <button
                className=" my-2"
                onClick={() => {
                  handleSearch();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </label>
          </div>
          <ToastContainer className="z-[500]" />
          <div className="grid grid-cols-3 items-center justify-center">
            <Tutorcard />
            <Tutorcard />
            <Tutorcard />
            <Tutorcard />
            <Tutorcard />
            <Tutorcard />
            <Tutorcard />
          </div>
        </div>
      )}
    </div>
  );
}

export default Requesttutor;
