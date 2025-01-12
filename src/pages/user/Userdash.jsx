import React, { useState, useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Userdashnav from "../../components/user/Userdashnav";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";
import { TutorContext } from "../../Context/Context ";
import { ref, onValue, set, update } from "firebase/database";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-toastify/dist/ReactToastify.css";

function Userdash() {
  const [showdelaytext, setShowDelayedText] = useState(false);

  const Tcontext = useContext(TutorContext);

  const [email, SetEmail] = useState("...");
  const [password, SetPassword] = useState();
  const [name, SetName] = useState("...");
  const [dbfile, SetDbFile] = useState();
  const [gender, SetGender] = useState("...");
  const [dob, SetDob] = useState("...");
  const [number, SetNumber] = useState("...");
  const [loc, SetLoc] = useState("...");
  const [countryid, SetCountryid] = useState(0);
  const [stateid, SetStateid] = useState("...");
  const [statename, SetStatename] = useState("...");
  const [cityname, SetCityname] = useState("...");
  const [longitude, SetLongitude] = useState("...");
  const [latitude, SetLatitude] = useState("...");
  const [file, SetFile] = useState();

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowDelayedText(true);
    }, 2000);
    fetchdata();
  }, [currentUser]);

  const fetchdata = async () => {
    const starCountRef = ref(db, "users/" + currentUser?.uid);
    await onValue(starCountRef, (snapshot) => {
      if (snapshot.exists()) {
        var data = snapshot.val();
        console.log(data);
        SetName(data.name);
        SetEmail(data.email);
        SetDob(data.dob);
        SetGender(data.gender);
        SetDbFile(data.profilepic);
        SetNumber(data.mob);
        SetStatename(data.statename);
        SetLatitude(data.latitude);
        SetLongitude(data.longitude);
        SetCityname(data.cityname);
      }
      else {
        navigate("/profdash");
      }
    });
    setShowDelayedText(false);
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    SetFile(base64);
  };

  async function uploadphoto() {
    if (currentUser) {
      await update(ref(db, "users/" + currentUser.uid), {
        profilepic: file,
      })
        .then(() => {
          toast.success(currentUser.email + "Profile Pic updated", {
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
        .catch((err) => {
          console.log(err);
          toast.error(err, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    } else {
      toast.error("Upload Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  async function updatefb(e) {
    e.preventDefault();
    const uid = currentUser?.uid;
    if (currentUser) {
      await update(ref(db, "users/" + uid), {
        gender: gender,
        dob: dob,
        mob: number,
        statename: statename,
        cityname: cityname,
        longitude: longitude,
        latitude: latitude,
      })
        .then(() => {
          toast.success(email + " Updated", {
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
        .catch((err) => {
          console.log(err);
          toast.error(err, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    } else {
      toast.error("Non-User Update Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

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
        <div>
          <Userdashnav />
          <ToastContainer className="z-[500]" />
          <div className="flex w-full h-auto justify-between p-5 items-center md:px-20 flex-col gap-4 md:flex-row ">
            {/* left  */}
            <div className="card bg-base-100 h-[480px] w-80 shadow-xl">
              <button
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className="absolute right-8 btn top-[270px]"
              >
                <svg
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
                  src={
                    dbfile ||
                    "https://freerangestock.com/sample/119157/business-man-profile-vector.jpg"
                  }
                  alt="Shoes"
                  className="  w-64 h-64 mt-10 bg-slate-600 rounded-xl object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-2xl">
                  <span className="font-semibold text-ellipsis">{"Name:"}</span>
                  {name || "Name"}
                </h2>
                <h2 className="text-xl w-64 overflow-hidden whitespace-nowrap text-ellipsis">
                  <span className="font-semibold ">{"Email:"}</span>
                  {email}
                </h2>
                <p>
                  <span className="font-semibold">{"Gender:"}</span>
                  {gender || "gender"}
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            {/* right */}
            <div className="flex w-[90%] space-y-2 md:space-y-4 md:space-x-0  md:w-[65%] flex-col">
              {/* row 1 */}
              <div className="card bg-base-100  md:h-full w-full shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Date of birth</h2>
                  <p>{dob || "D.O.B"}</p>
                  <h2 className="card-title">Email</h2>
                  <p>{email || "mail@example.com"}</p>
                  <h2 className="card-title">Contact Number</h2>
                  <p>{number || "+91 897645231"}</p>
                </div>
              </div>
              {/* row 2 */}
              <div className="card bg-base-100 md:h-full w-full shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Postal Address</h2>
                  <p>State: {statename}</p>
                  <p>City: {cityname}</p>
                  <p>Latitude: {latitude}</p>
                  <p>Longitude: {longitude}</p>
                </div>
              </div>
            </div>
          </div>

          <center>
            <button
              className="btn min-w-[230px] w-3/4 my-4 self-center"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Edit Profile
            </button>
          </center>
          {/* dialogs */}
          <dialog id="my_modal_4" className="modal">
            <div className="flex flex-col  items-center modal-box w-auto max-w-5xl">
              <h1 className=" block text-2xl font-medium text-[#07074D]">
                Update Profle
              </h1>
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
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                  />
                </label>

                {/* Gender */}
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Gender</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={(e) => {
                      SetGender(e.target.value);
                      console.log(gender);
                    }}
                  >
                    <option disabled selected>
                      Select gender?
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Rather Not Say</option>
                  </select>
                </label>

                {/* D.O.B */}
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Date of Birth</span>
                  </div>
                  <input
                    type="date"
                    aria-label="Date and time"
                    value={dob}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      SetDob(e.target.value);
                    }}
                  />
                </label>

                {/* Contact number */}
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Contact Number</span>
                  </div>
                  <label className="input input-bordered flex items-center gap-2">
                    <span>+91</span>
                    <input
                      type="number"
                      value={number}
                      className="grow"
                      placeholder="number"
                      onChange={(e) => SetNumber(e.target.value)}
                    />
                  </label>
                </label>

                {/* Contact number */}
                <label className="form-control w-full max-w-xs">
                  <div className="label"></div>
                  <div className="flex-col  mx-1 text-sm flex gap-y-2">
                    <h6>Country</h6>
                    <CountrySelect
                      onChange={(e) => {
                        SetCountryid(e.id);
                        console.log(e.name);
                      }}
                      placeHolder="Select Country"
                    />
                    <h6>State</h6>
                    <StateSelect
                      countryid={countryid}
                      onChange={(e) => {
                        SetStateid(e.id);
                        SetStatename(e.name);
                      }}
                      placeHolder="Select State"
                    />
                    <h6>City</h6>
                    <CitySelect
                      countryid={countryid}
                      stateid={stateid}
                      onChange={(e) => {
                        console.log(e);
                        SetCityname(e.name);
                        SetLatitude(e.latitude);
                        SetLongitude(e.longitude);
                      }}
                      placeHolder="Select City"
                    />
                  </div>
                </label>
                <button
                  className="btn my-2 w-full bg-[#db9887] shadow-lg text-white "
                  onClick={(e) => updatefb(e)}
                >
                  Update
                </button>
              </div>
              <div className="modal-action">
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
                      src={
                        file ||
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
                      onChange={onUpload}
                    />
                    <div className="label">
                      <span className="label-text-alt">
                        File Size less than 100 KB
                      </span>
                    </div>
                  </label>
                  <button
                    className="btn w-full mt-5 self-center"
                    onClick={uploadphoto}
                  >
                    Upload Photo
                  </button>
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

export default Userdash;
