import React from "react";
import { useNavigate } from "react-router-dom";

function Tutorcard({ name, profilepic, star, bio, aboutclass, sub, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="card relative h-[380px] p-4 bg-gradient-to-br from-white rounded-xl font-serif via-white to-[#db9887] w-64 overflow-hidden cursor-pointer"
      onClick={() => {
        navigate(`tutor/${id}`);
        console.log("clicked");
      }}
    >
      <figure className=" top-2 left-2 right-2 absolute" >
        <img
          src={
            profilepic ||
            "https://freerangestock.com/sample/119157/business-man-profile-vector.jpg"
          }
          alt="pic"
          className="  w-64 h-64 mt-2 bg-slate-600 rounded-xl object-cover"
        />
      </figure>
      <div className="mx-2 top-[270px] right-2 absolute left-2 w-5/6 ">
          <p className="text-lg font-semibold truncate">{name}</p>
          <p>{star}</p>
        <div className="flex flex-wrap justify-end px-2">
          {!sub?.includes("Maths") || (
            <div className="badge badge-outline">{"Maths"}</div>
          )}
          {!sub?.includes("Physics") || (
            <div className="badge badge-outline">{"Physics"}</div>
          )}
          {!sub?.includes("Chemistry") || (
            <div className="badge badge-outline">{"Chemistry"}</div>
          )}
          {!sub?.includes("Bio") || (
            <div className="badge badge-outline">{"Bio"}</div>
          )}
        </div>
        <p className="mx-4 truncate">{bio}</p>
        <div className="h-18 overflow-hidden">
          <p className="w-full h-full truncate mx-4">{aboutclass}</p>
        </div>
      </div>
    </div>
  );
}

export default Tutorcard;
