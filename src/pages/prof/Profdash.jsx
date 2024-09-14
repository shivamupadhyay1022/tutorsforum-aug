import React from "react";
import Profdashnav from "../../components/prof/Profdashnav";

function Profdash() {
  return (
    <div>
      <Profdashnav />
      <div className="flex w-full justify-between p-5 items-center md:px-20 flex-col gap-4 md:flex-row ">
        {/* left  */}
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className=" w-64 h-64 bg-slate-600 rounded-xl object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name</h2>
            <p>Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Maths</div>
              <div className="badge badge-outline">Physics</div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex w-[90%] space-y-2 md:space-y-4 md:space-x-0  md:w-[65%] flex-col" >
          <div className="card bg-base-100  md:h-full w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title">About Class</h2>
              <p>
                About ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout
                ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout
                ClassAbout ClassAbout ClassAbout ClassAbout ClassAbout
                ClassAbout ClassAbout ClassAbout ClassAbout Class
              </p>
              <div className="card-actions justify-end">
                <div className="flex items-center space-x-2">
                  <p className="font-semibold">Languages:</p>
                  <div className="badge badge-outline">English</div>
                  <div className="badge badge-outline">Odia</div>
                </div>
              </div>
            </div>
          </div>
          {/* right2 */}
          <div className="card bg-base-100 md:h-full w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Qualifcations</h2>
              <p>
              Degrees, certifications, experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profdash;
