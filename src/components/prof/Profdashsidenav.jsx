import React, { useState } from "react";
import { Link } from "react-router-dom";

function Profdashsidenav() {
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
        <div className="collapse  ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">Profile</div>
        </div>

        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Availability & Schedule
          </div>
          <div className="collapse-content justify-center flex">
            <ul className="list-disc" >
             <li><Link to="/schedule-class">Schedule Classes</Link></li>
            <li><Link to="/schedule-qna">Arrange Q&A Sessions</Link></li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Prcicing and Fees
          </div>
          <div className="collapse-content justify-center flex">
          <ul className="list-disc" >
            <li><Link to="/profdash">Hourly Rates</Link></li>
            <li><Link to="/profdash">Special offers/Discounts & Ads</Link></li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Student Management
          </div>
          <div className="collapse-content justify-center flex">
          <ul className="list-disc" >
          <li><Link to="/profdash">Enrollments</Link></li>
          <li><Link to="/profdash">Class Management</Link></li>
          <li><Link to="/profdash">Attendance</Link></li>
          </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Messages & Communication
          </div>
          <div className="collapse-content justify-center flex">
          <ul className="list-disc" >
          <li><Link to="/profdash">Chat with students</Link></li>
          <li><Link to="/profdash">Announcements</Link></li>
          </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Reviews & Feedback
          </div>
          <div className="collapse-content justify-center flex">
          <ul className="list-disc" >
          <li><Link to="/profdash">Student reviews</Link></li>
          <li><Link to="/profdash">Ratings Overview</Link></li>
          </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Payments</div>
          <div className="collapse-content justify-center flex">
          <ul className="list-disc" >
          <li><Link to="/profdash">Transaction History</Link></li>
          <li><Link to="/profdash">Payout Settings</Link></li>
          </ul>
          </div>
        </div>

        <div className="collapse ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Notifications, Alerts and system updates
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profdashsidenav;
