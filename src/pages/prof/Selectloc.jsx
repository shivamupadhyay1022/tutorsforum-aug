import React, { useContext, useState, useEffect} from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
import { supabase } from "../../supabase";
let myloc = [];

function Selectloc() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState("...");
  const [statename, setstatename] = useState("...");
  const [cityname, setcityname] = useState("...");
  const [longitude, setLongitude] = useState("000");
  const [latitude, setLatitude] = useState("000");

  const [online, setonline] = useState(false);
  const [onloc, setonloc] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [email,SetEmail] = useState("_");
  const [name,SetName] = useState("_");


  const addloc = (language) => {
    myloc.push(language);
    console.log(myloc);
  };

  const removeloc = (language) => {
    myloc = myloc.filter((myloc) => myloc !== language);
    console.log(myloc);
  };

  const checkinput = () => {
    if (myloc.length == 0) {
      toast.error("Add atleast one location", {
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
    if(currentUser){
      console.log(currentUser.uid)
      console.log(email,name)
        const uid = currentUser.uid;
        const { data, error } = supabase
          .from("tutors")
          .insert({
            uid: uid,
            email: email,
            name: name,
            statename: statename,
            cityname: cityname,
            longitude: longitude,
            latitude: latitude,
            online: `${online ? "true" : "false"}`,
            onloc: `${onloc ? "true" : "false"}`,
          })
          .then(()=>{
            console.log("success");
            navigate("/profdash")
          }).catch((err)=>{
            console.log(err);
          });
        if (error) {
          console.log(error)
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
    }else{
      console.log("user not regitered on db")
    }
    // navigate("/profdash");
  };

  useEffect(() => {
    fetchdata();
  },[currentUser]);

  const fetchdata = async () => {
    const starCountRef = ref(db, "tutors/" + currentUser.uid);
    await onValue(starCountRef, (snapshot) => {
      if (snapshot.exists()) {
        var data = snapshot.val();
        // console.log(data)
        SetName(data.name);
        SetEmail(data.email);
      }else{
        console.log("db snapshot invalid")
      }
    }); 
};

  const handleSubmit = (e) => {
    e.preventDefault();
    checkinput();
    // console.log(currentUser.uid)
  };

  return (
    <div className="bg-gradient-to-br from-white  to-[#ffded5]">
      <ToastContainer />
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
              Ready to inspire and earn? Choose your favorite language from our
              extensive list and start making a difference today!
            </p>
            <p className="text-lg font-medium">
              Whether it’s English, Hindi or odia, there's a place for you. Pick
              your passion and join us in shaping futures—your teaching journey
              awaits!
            </p>
          </div>

          {/* right */}
          <div className="flex flex-col justify-center items-center my-8">
            <div>
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
                        myloc = myloc.filter((myloc) => myloc !== "OnLocation");
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

                  <button
                    className="btn my-2 w-full bg-[#db9887] shadow-lg text-white "
                    onClick={(e) => handleSubmit(e)}
                  >
                    Add Locations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selectloc;
