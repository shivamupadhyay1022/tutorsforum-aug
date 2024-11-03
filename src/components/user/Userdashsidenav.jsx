import React, { useState } from "react";
import { Link } from "react-router-dom";

function Userdashsidenav() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      {!showSidebar && (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="px-5 z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}

      <div
        className={`top-0 left-0 w-[80vw]  bg-slate-100  pt-5 px-10 fixed h-full z-40  ease-in-out duration-300 border-r-2 border-slate-400 md:w-[25vw] ${
          showSidebar ? " -translate-x-0 " : " -translate-x-full"
        }`}
      >
        <button
          className="z-50 w-full flex justify-end items-end"
          onClick={() => setShowSidebar(!showSidebar)}
        >
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Sidebar menu */}
        <div className="flex flex-col gap-8 mt-10" >
        <div className="collapse my-0 py-0 ">
          <div className=" text-xl font-medium">
            <Link to="/userdash">Profile</Link>
          </div>
        </div>

        <div className="collapse ">
          <div className=" text-xl font-medium">
          <Link to="/reqtutor">Request Tutor Session</Link>
          </div>
        </div>

        <div className="collapse ">
          <div className=" text-xl font-medium">
          <Link to="/usermsg">My Messages</Link>
          </div>
        </div>
        </div>
        


      </div>
    </div>
  );
}

export default Userdashsidenav;
