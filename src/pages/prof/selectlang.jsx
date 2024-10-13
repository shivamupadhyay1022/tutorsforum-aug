import React, { useContext, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { TutorContext } from "../../Context/Context ";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { supabase } from "../../supabase";
let mylang = [];

function removeLanglang() {
  let [eng, setEng] = useState(true);
  let [hindi, setHindi] = useState(true);
  let [odia, setOdia] = useState(true);
  const navigate = useNavigate();
  const [inputype, setinputype] = useState(true);
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
  const auth = getAuth();

  const Tcontext = useContext(TutorContext);

  const addLang = (language) => {
    mylang.push(language);
    console.log(mylang);
  };

  const removeLang = (language) => {
    mylang = mylang.filter((mylang) => mylang !== language);
    console.log(mylang);
  };

  useEffect(() => {
    SetEmail(Tcontext.email);
    SetPassword(Tcontext.password);
    SetBio(Tcontext.bio);
    SetSub(Tcontext.sub);
    SetAboutclasss(Tcontext.aboutclass);
    SetName(Tcontext.name);
  });

  const checkinput = () => {
    if (mylang.length == 0) {
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
      // onRegister();
      // checkconsole();
      onRegister();

    }
  };

  // function onSignin() {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //       toast.success(user.email + " signed in", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //         navigate("/addloc");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode);
  //       toast.error(errorCode, {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     });
  // }

  // const handleSubmit2 = (e) => {
  //   e.preventDefault();
  //   onSignin();
  // };

  // async function onUpload() {
  //   console.log("onupload");
  //   try {
  //     await onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         const uid = user.uid;
  //         const { data, error2 } = supabase
  //           .from("tutors")
  //           .insert({
  //             uid: uid,
  //             email: email,
  //             name: name,
  //             lang: mylang,
  //             statename: statename,
  //             cityname: cityname,
  //             longitude: longitude,
  //             latitude: latitude,
  //             online: `${online ? "true" : "false"}`,
  //             onloc: `${onloc ? "true" : "false"}`,
  //           });
  //         if (error2) {
  //           toast.error(error2, {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //           });
  //         }
  //       } else {
  //         toast.error("SQL Error", {
  //           position: "top-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //       }
  //     });
  //     navigate("/profdash");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function onRegister() {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //registered
        const user = userCredential.user;
        console.log("Onregister");
        set(ref(db, "tutors/" + userCredential.user.uid), {
          email: email,
          name: name,
          bio: bio,
          sub: sub,
          aboutclass: aboutclass,
          lang: mylang,
        }).then(()=>{
          toast.success(user.email + " Registered", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/addloc");
        }).catch((err)=>{
          console.log(err);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorCode,errorMessage, {
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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Tcontext.SetLang(mylang);
    checkinput();
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
                        mylang = mylang.filter((mylang) => mylang !== "Hindi");
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

                  {/* email */}
                  {/* <label className="input rounded input-bordered flex items-center gap-2">
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
                      onChange={(e) => {
                        SetEmail(e.target.value);
                        console.log(email);
                      }}
                    />
                  </label> */}
                  {/* password */}
                  {/* <label className="input input-bordered w-full flex items-center gap-2">
                    <input
                      type={inputype ? "password" : "text"}
                      className="grow"
                      placeholder="password"
                      onChange={(e) => SetPassword(e.target.value)}
                    />
                    {inputype ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        onClick={() => setinputype((inputype) => !inputype)}
                      >
                        <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        onClick={() => setinputype((inputype) => !inputype)}
                      >
                        <path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z"></path>
                      </svg>
                    )}
                  </label> */}
                  {/* <button
                    className="btn w-full bg-[#db9887] shadow-lg text-white "
                    onClick={(e) => handleSubmit2(e)}
                  >
                    SignIn with Email
                  </button> */}

                  <button
                    className="btn w-full bg-[#db9887] shadow-lg text-white "
                    onClick={(e) => handleSubmit(e)}
                  >
                    Add Languages
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

export default removeLanglang;
