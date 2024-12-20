import React,{useContext} from 'react'
import { AuthContext } from "../AuthProvider";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Userdashsidenav from './Userdashsidenav';

function Userdashnav() {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

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
  return (
      <div className="navbar bg-base-100 border-b-2 border-slate-300">
        <Userdashsidenav />
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">TutorsForum</Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
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
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>

                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-info">Vishesh Joined your Class !</span>
                <span className="text-info">Ritesh Joined your Class !</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View All Notifications
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://freerangestock.com/sample/119157/business-man-profile-vector.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handlelogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Userdashnav