import React,{useContext} from "react";
import Tutorcard from "./Tutorcard";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
function Tutors() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center items-center space-y-10 flex-col ">
      <div className="hidden md:flex flex-row space-x-8 ">
      {currentUser ? (
          <button className="btn bg-[#ffded5]"
            onClick={() => {
              navigate("/profdash");
            }}
          >
            Tutor Dashboard
          </button>
        ) : (
          <button className="btn bg-[#ffded5]"
            onClick={() => {
              navigate("/signup-prof");
            }}
          >
            Join As tutor
          </button>
        )}
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-x-8 ">
        <Tutorcard />
        <Tutorcard />
        <Tutorcard />
      </div>
    </div>
  );
}

export default Tutors;
