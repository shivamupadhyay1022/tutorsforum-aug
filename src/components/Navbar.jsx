import React,{useContext} from "react";
import { AuthContext } from "./AuthProvider";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex  flex-row justify-between px-6 py-4 border-b-2 border-white rounded-xl text-lg font-semibold">
      <button>tutorsforum</button>
      <div className="flex flex-row space-x-6">
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
              navigate("/signup-prof");
            }}
          >
            Register/Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
