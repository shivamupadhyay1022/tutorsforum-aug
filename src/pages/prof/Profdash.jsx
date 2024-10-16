import React, { useContext, useEffect, useState } from "react";
import Profdashnav from "../../components/prof/Profdashnav";
import { AuthContext } from "../../components/AuthProvider";
import { signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { TutorContext } from "../../Context/Context ";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { supabase } from "../../supabase";
import { onValue } from "firebase/database";
import UpdateProfileProf from "../../components/prof/UpdateProfileProf";

function Profdash() {
  const Tcontext = useContext(TutorContext);
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const [bio, SetBio] = useState();
  const [sub, SetSub] = useState();
  const [aboutclass, SetAboutclasss] = useState();
  const [lang, SetLang] = useState();
  const [name, SetName] = useState();
  const [statename, setstatename] = useState();
  const [cityname, setcityname] = useState();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [online, setonline] = useState(false);
  const [onloc, setloc] = useState(false);
  const [showdelaytext, setShowDelayedText] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowDelayedText(true);
    }, 2000);
    fetchdata();
    setTimeout(() => {
      setShowDelayedText(true);
    }, 2000);
    fetchdatasup();
  }, [currentUser]);

  const handlelogout = () => {
    if (currentUser) {
      signOut(auth)
        .then(() => {
          console.log("logged out");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const fetchdata = async () => {
    const starCountRef = ref(db, "tutors/" + currentUser.uid);
    await onValue(starCountRef, (snapshot) => {
      if (snapshot.exists()) {
        var data = snapshot.val();
        // console.log(data)
        SetName(data.name);
        SetEmail(data.email);
        SetBio(data.bio);
        SetSub(data.sub);
        SetAboutclasss(data.aboutclass);
        SetLang(data.lang);
      } else {
        console.log("db snapshot invalid");
      }
    })
      .then(() => {
        setShowDelayedText(false);
      })
      .catch((error) => {
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
      });
  };
  const fetchdatasup = async () => {
    const uid = currentUser.uid;
    try {
      const { data, error } = await supabase
        .from("tutors")
        .select("*")
        .like("uid", "%" + uid + "%");
      if (error) throw error;
      if (data != null) {
        console.log(data);
        setstatename(data[0].statename);
        setcityname(data[0].cityname);
        setLatitude(data[0].latitude);
        setLongitude(data[0].longitude);
        setloc(data[0].onloc);
        setonline(data[0].online);
        setShowDelayedText(false);
      } else {
        console.log("data null");
      }
    } catch (error) {
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
    }
  };

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
            <div className="card bg-base-100 w-80 shadow-xl">
              <figure>
                <img
                  src="https://freerangestock.com/sample/119157/business-man-profile-vector.jpg"
                  alt="Shoes"
                  className=" w-64 h-64 bg-slate-600 rounded-xl object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-2xl">
                  <span className="font-semibold">{"Name:"}</span>
                  {name || "Name"}
                </h2>
                <h2 className="text-xl">
                  <span className="font-semibold">{"Email:"}</span>
                  {email || "Email"}
                </h2>
                <p>
                  <span className="font-semibold">{"About You:"}</span>
                  {bio || "Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio"}
                </p>
                <div className="card-actions justify-end">
                  {!sub.includes("Maths") || (
                    <div className="badge badge-outline">{"Maths"}</div>
                  )}
                  {!sub.includes("Physics") || (
                    <div className="badge badge-outline">{"Physics"}</div>
                  )}
                  {!sub.includes("Chemistry") || (
                    <div className="badge badge-outline">{"Chemistry"}</div>
                  )}
                  {!sub.includes("Bio") || (
                    <div className="badge badge-outline">{"Bio"}</div>
                  )}
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex w-[90%] space-y-2 md:space-y-4 md:space-x-0  md:w-[65%] flex-col">
              <div className="card bg-base-100  md:h-full w-full shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">About Class</h2>
                  <p>
                    {aboutclass ||
                      "About ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout Class"}
                  </p>
                  <div className="card-actions justify-end">
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold">Languages:</p>
                      {!lang.includes("English") || (
                        <div className="badge badge-outline">{"English"}</div>
                      )}
                      {!lang.includes("Hindi") || (
                        <div className="badge badge-outline">{"Hindi"}</div>
                      )}
                      {!lang.includes("Odia") || (
                        <div className="badge badge-outline">{"Odia"}</div>
                      )}
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
                    {` ( ${!online ? "" : "Online,"}${
                      !onloc ? "" : "OnLocation"
                    } )`}
                  </h2>
                  {!onloc || (
                    <div>
                      <p>State: {statename || "null"}</p>
                      <p>City: {cityname || "null"}</p>
                      <p>Latitude {latitude || "null"}</p>
                      <p>Longitude: {longitude || "null"}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <center>
            <buttion 
            className="btn min-w-[230px] my-4 self-center"
            onClick={()=>document.getElementById('my_modal_4').showModal()}>
              Edit Profile
            </buttion>
          </center>
          <dialog id="my_modal_4" className="modal">
          <div className="flex flex-col  items-center modal-box w-auto max-w-5xl">
                <h1 className=" block text-2xl font-medium text-[#07074D]" >
                    Update Profle
                </h1>
              <UpdateProfileProf/>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Update</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}

export default Profdash;
