import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TutorContext } from "../Context/Context ";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [inputype, setinputype] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [togglesignup, setToggleSignUp] = useState(false);
  const Tcontext = useContext(TutorContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (togglesignup) {
      console.log("Signup");
      checkinputregister();
    } else {
      console.log("Signin");
      checkinputsignin();
    }
    // checkinput();
  };

  const checkinputsignin = () => {
    if (email.trim().length == 0 || password.trim().length == 0) {
      console.log(email, password);
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
      onSignIn();
    }
  };
  const checkinputregister = () => {
    if (email.trim().length == 0 || password.trim().length == 0 || firstname.trim() == 0 || lastname.trim() == 0) {
      console.log(email, password);
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

  function onSignIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success(user.email + " signed in", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/userdash");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        toast.error(errorCode, {
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

  async function onRegister() {
    Tcontext.SetEmail(email);
    Tcontext.SetPassword(password);
    Tcontext.SetName(firstname + lastname);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        set(ref(db, "users/" + currentUser.uid), {
          email: email,
          name: firstname+lastname,
        }).then(()=>{
          toast.success(currentUser.email + " Registered", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/userdash");
        }).catch((err)=>{
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorCode, errorMessage, {
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

  async function signingoogle() {
    signInWithPopup(auth, googleprovider)
      .then((data) => {
        Tcontext.SetEmail(data.user.email);
        Tcontext.SetName(data.user.displayName);
        console.log(Tcontext.email, data.user.email);
        const starCountRef = ref(db, "users/" + data.user.uid);

        fetchforgoogle(starCountRef);
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
  }

  async function fetchforgoogle(uri) {
    console.log(Tcontext.email, "Inside");
    await onValue(uri, (snapshot) => {
      if (snapshot.exists()) {
        navigate("/userdash");
      } else {
        set(ref(db, "users/" + currentUser.uid), {
          email: email,
          name: firstname+lastname,
        }).then(()=>{
          toast.success(currentUser.email + " Registered", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/userdash");
        }).catch((err)=>{
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
      }
    });
  }



  return (
    <div className="flex  flex-row justify-between px-6 py-4 border-b-2 border-white rounded-xl text-lg">
      <button className="font-semibold">tutorsforum</button>
      <div className="flex flex-row space-x-6 font-semibold">
        <button>?</button>
        {currentUser ? (
          <button
            onClick={() => {
              navigate("/profdash");
            }}
          >
            Dashboard
          </button>
        ) : (
          <button
            onClick={() => {
              // navigate("/signup-prof");
              document.getElementById("my_modal_3").showModal();
            }}
          >
            Register/Login
          </button>
        )}
      </div>
      {togglesignup ? (
        // signup
        <dialog id="my_modal_3" className="modal">
          <div className="absolute">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle  absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="flex px-12 py-8 flex-col justify-center items-center space-y-4 shadow-xl bg-[#ffded5] rounded-xl">
              <p className="text-2xl font-semibold">Create Your Profile</p>
              {/* First Name  */}
              <label className="input w-full rounded input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <input
                  type="text"
                  className="grow"
                  placeholder="first name"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </label>
              {/* last name  */}
              <label className="input w-full rounded input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="last name"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </label>
              {/* email  */}
              <label className="input w-full rounded input-bordered flex items-center gap-2">
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
                  type="email"
                  className="grow"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              {/* password */}
              <label className="input input-bordered w-full flex items-center gap-2">
                <input
                  type={inputype ? "password" : "text"}
                  className="grow"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {inputype ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6"
                    onClick={() => setinputype((inputype) => !inputype)}
                  >
                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6"
                    fill="currentColor"
                    onClick={() => setinputype((inputype) => !inputype)}
                  >
                    <path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z"></path>
                  </svg>
                )}
              </label>

              <button
                className="btn w-full bg-[#db9887] shadow-lg text-white "
                onClick={(e) => handleSubmit(e)}
              >
                SignUp with Email
              </button>
              <p>or</p>
              <button className="btn w-full" onClick={signingoogle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
                </svg>
                Sign Up with Google
              </button>
              <div className="text-base text-center">
                <p>
                  <span className="text-slate-800">
                    Already Have an account ?{" "}
                  </span>
                  <button
                    onClick={() => {
                      setToggleSignUp(!togglesignup);
                    }}
                  >
                    <span className="underline">SignIn</span>
                  </button>
                </p>
                <p>
                  <span className="text-slate-800">
                    By Signing up you agree to{" "}
                  </span>
                  <span className="underline">terms</span>
                </p>
              </div>
              <button
                className="btn w-full bg-[#db9887] shadow-lg text-white "
                onClick={(e) => navigate("/signup-prof")}
              >
                Tutor SignUp
              </button>
            </div>
          </div>
        </dialog>
      ) : (
        // signin
        <dialog id="my_modal_3" className="modal">
          <div className="absolute">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle  absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="flex px-12 py-8 flex-col justify-center items-center space-y-4 shadow-xl bg-[#ffded5] rounded-xl">
              <p className="text-2xl font-semibold">Sign In</p>

              {/* email  */}
              <label className="input rounded input-bordered w-full flex items-center gap-2">
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
              {/* password */}
              <label className="input input-bordered w-full flex items-center gap-2">
                <input
                  type={inputype ? "password" : "text"}
                  className="grow"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {inputype ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4"
                    onClick={() => setinputype((inputype) => !inputype)}
                  >
                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4"
                    onClick={() => setinputype((inputype) => !inputype)}
                  >
                    <path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z"></path>
                  </svg>
                )}
              </label>

              <button
                className="btn w-full bg-[#db9887] shadow-lg text-white "
                onClick={(e) => handleSubmit(e)}
              >
                SignIn with Email
              </button>
              <p>or</p>
              <button className="btn w-full" onClick={signingoogle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
                </svg>
                Sign In with Google
              </button>
              <div className="w-full text-base flex flex-col text-center ">
                <p>
                  <span className="text-slate-800">
                    Don't Have an account ?{" "}
                  </span>
                  <button
                    onClick={() => {
                      setToggleSignUp(!togglesignup);
                    }}
                  >
                    <span className="underline">SignUp</span>
                  </button>
                </p>
                <p>
                  <span className="text-slate-800">Forgot Password ? </span>
                  <Link to={"/forgot"}>
                    <span className="underline"> Click here</span>
                  </Link>
                </p>
                <p>
                  <span className="text-slate-800">
                    By Signing up you agree to{" "}
                  </span>
                  <span className="underline">terms</span>
                </p>
              </div>
              <button
                className="btn w-full bg-[#db9887] shadow-lg text-white "
                onClick={(e) => navigate("/signin-prof")}
              >
                Tutor SignIn
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Navbar;
